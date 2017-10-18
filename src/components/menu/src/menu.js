import menuMixin from './menu-mixin'

export default {
  name: 'antv-menu',
  mixins: [ menuMixin ],
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    className: String,
    defaultSelectKeys: Array,
    defaultOpenKeys: Array,
    onSelect: Function,
    // onDeselect: Function,
    onClick: Function,
    onOpenChange: Function,
    rootStyle: [ String, Array ],
    inlineIndent: {
      type: Number,
      default: 16
    },
    multiple: {
      type: Boolean,
      default: false
    },
    inlineCollapsed: Boolean,
    selectable: {
      type: Boolean,
      default: true
    },
    openTransitionName: String,
    closeSubMenuOnMouseLeave: null,
    openSubMenuOnMouseEnter: null
  },
  data() {
    return {
      init: false,
      menuItem: [],
      subMenu: [],
      prefixCls: 'antv-menu',
      flatItemArr: [],
      openKeys: []
    }
  },
  computed: {
    classes() {
      return [{
        [this.getModeCls]: this.mode,
        [this.getThemeCls]: this.theme,
        [this.className]: this.className
      }, this.getRootCls]
    },
    getModeCls() {
      return `${this.prefixCls}-${this.mode}`
    },
    getThemeCls() {
      return `${this.prefixCls}-${this.theme}`
    },
    getRootCls() {
      return `${this.prefixCls}-root`
    },
    getTransitionName() {
      if (!this.openTransitionName) {
        switch (this.mode) {
          case 'inline':
            return 'collapse'
          case 'horizontal':
            return 'slide-up'
          case 'vertical':
            return 'zoom-big'
        }
      } else {
        return this.openTransitionName
      }
    }
  },
  watch: {
    // loop children & set child data
    // when selected or open sub menu
    selectedKeys(val) {
      this.loopChildProps()
    },
    openKeys(val) {
      this.loopChildProps()
      this.onOpenChange && this.onOpenChange(val)
    },
    inlineIndent(val) {
      this.setChildIndent(val)
    }
  },
  mounted() {
    this.flatItemArr = this.getFlatItemArray(this.$children)
    this.setDefaultData()
    this.loopChildProps()
  },
  methods: {
    setDefaultData() {
      this.setDefaultOpenKey()
      this.setDefaultSelectKey()
      this.setChildIndent(this.inlineIndent)
    },
    setDefaultOpenKey() {
      this.openKeys = this.defaultOpenKeys || []
    },
    setDefaultSelectKey() {
      if (this.defaultSelectKeys) {
        this.selectedKeys = this.multiple ? this.defaultSelectKeys : [this.defaultSelectKeys[0]]
      }
    },
    // select item methods
    handleSelect(selectedInfo) {
      if (this.selectable) {
        const selectedKey = selectedInfo.key

        if (this.multiple) {
          this.selectedKeys.push(selectedKey)
        } else {
          this.selectedKeys = [ selectedKey ]
        }
      }

      this.onSelect && this.onSelect({
        ...selectedInfo,
        selectedKeys: this.selectedKeys
      })
    },
    // deselect methods
    handleDeselect(selectedInfo) {
      if (this.selectable) {
        const selectedKey = selectedInfo.key
        const index = this.selectedKeys.indexOf(selectedKey)

        if (index !== -1) {
          this.selectedKeys.splice(index, 1)
        }

        this.onDeselect && this.onDeselect(selectedInfo)
      }
    },
    // open change handler
    // all submenu open will call this methods
    handleOpenChange(item) {
      const handleSingle = (e) => {
        let opened = false
        if (e.open) {
          opened = this.openKeys.indexOf(e.key) === -1
          if (opened) {
            this.openKeys.push(e.key)
          }
        } else {
          const index = this.openKeys.indexOf(e.key)
          opened = index !== -1
          if (opened) {
            this.openKeys.splice(index, 1)
          }
        }
      }

      if (Array.isArray(item)) {
        item.forEach(handleSingle)
      } else {
        handleSingle(item)
      }
    },
    // open change handler
    // all menu item hover will call this methods
    handleItemHover(e) {
      const { item } = e
      const { mode, closeSubMenuOnMouseLeave } = this
      let { openChanges = [] } = e

      if (mode !== 'inline' && !closeSubMenuOnMouseLeave && item.isSubmenu) {
        openChanges = openChanges.concat({
          key: item.keyVal,
          item,
          originalEvent: e,
          open: e.hover
        })
      }
      if (openChanges.length) {
        this.handleOpenChange(openChanges)
      }
    },
    getFlatItemArray(children) {
      const childArr = []
      function loopChildren(elm, pos) {
        elm && elm.forEach((e, i) => {
          childArr.push(e)
          if (e.$children.length) loopChildren(e.$children, e.key)
        })
      }

      loopChildren(children)
      return childArr
    },
    setChildrenProps(child) {
      const childPorps = {
        theme: this.theme,
        mode: this.getChildMode(child.key),
        multiple: this.multiple,
        selectedKeys: this.selectedKeys,
        openKeys: this.openKeys,
        itemSelect: this.handleSelect,
        itemDeselect: this.handleDeselect,
        onItemHover: this.handleItemHover,
        menuOpenChange: this.handleOpenChange,
        prefixCls: this.prefixCls,
        // indent: this.inlineIndent,
        openTransitionName: this.getTransitionName,
        openSubMenuOnMouseEnter: this.checkSubMenuDefaultMouseEvent(this.openSubMenuOnMouseEnter),
        closeSubMenuOnMouseLeave: this.checkSubMenuDefaultMouseEvent(this.closeSubMenuOnMouseLeave)
      }
      Object.assign(child, childPorps)
    },
    checkSubMenuDefaultMouseEvent(defaultVal) {
      if (typeof defaultVal === 'undefined') {
        return this.mode !== 'inline'
      } else {
        return false
      }
    },
    getChildMode(key) {
      if (this.mode === 'horizontal') {
        const isRootChild = key.split('.').length === 1
        return isRootChild ? this.mode : 'vertical'
      } else {
        return this.mode
      }
    },
    loopChildProps() {
      this.flatItemArr.map(item => {
        this.setChildrenProps(item)
      })
    },
    setChildIndent(indent) {
      this.$children.map(item => {
        item.indent = indent
      })
    }
  },
  render(h) {
    const data = {
      class: [
        `${this.prefixCls}`,
        `${this.prefixCls}-root`,
        this.classes
      ]
    }

    return h('div', data, this.$slots.default)
  }
}
