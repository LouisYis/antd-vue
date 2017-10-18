export default {
  data() {
    return {
      selectedKeys: [],
      // timer
      menuInstance: null,
      subMenuTitleLeaveTimer: null,
      subMenuTitleLeaveFn: null,
      subMenuLeaveTimer: null,
      subMenuLeaveFn: null,
      menuItemMouseLeaveTimer: null,
      menuItemMouseLeaveFn: null
    }
  },
  computed: {
    isSelected() {
      const selectedKeys = this.selectedKeys
      const isSelected = this.$children.find(item => {
        return selectedKeys.indexOf(item.keyVal) !== -1 || item.isSelected
      })
      return isSelected
    }
  },
  methods: {
    clearSubMenuTimers() {
      this.clearSubMenuLeaveTimer()
      this.clearSubMenuTitleLeaveTimer()
    },
    clearSubMenuTitleLeaveTimer() {
      const parentMenu = this.$parent
      if (parentMenu.subMenuTitleLeaveTimer) {
        clearTimeout(parentMenu.subMenuTitleLeaveTimer)
        parentMenu.subMenuTitleLeaveTimer = null
        parentMenu.subMenuTitleLeaveFn = null
      }
    },
    clearSubMenuLeaveTimer() {
      const parentMenu = this.$parent
      if (parentMenu.subMenuLeaveTimer) {
        clearTimeout(parentMenu.subMenuLeaveTimer)
        parentMenu.subMenuLeaveTimer = null
        parentMenu.subMenuLeaveFn = null
      }
    }
  }
}
