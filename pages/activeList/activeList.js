// pages/activeList/activeList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0
  },

  /**
   * 切换tab
   */
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tabRead') {
      this.setData({
        currentTab: 0
      })
    } else if (tab === 'tabClass') {
      this.setData({
        currentTab: 1
      })
    } else if (tab === 'tabTeacher') {
      this.setData({
        currentTab: 2
      })
    }
  }
})