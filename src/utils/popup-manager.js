const popupManager = {
  zIndex: 1060,
  getNextIndex() {
    popupManager.zIndex += 1;

    return popupManager.zIndex;
  }
};
