// pages/allRead/allRead.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      activeName: "第17期",
      activeTheme: "钢铁是怎样练成的【正在报名中...】",
      activeBanner: '../../img/b1.png',
      activeTime: '2019.01.05-2019.01.06',
      activeId: '1',
      activeClass: "一年级、二年级  "
    }, {
      activeName: "第17期",
      activeTheme: "钢铁是怎样练成的【正在报名中...】",
      activeBanner: '../../img/b1.png',
      activeTime: '2019.01.05-2019.01.06',
      activeId: '2',
      activeClass: "一年级、二年级"
    }, {
      activeName: "第17期",
      activeTheme: "钢铁是怎样练成的【正在报名中...】",
      activeBanner: '../../img/b1.png',
      activeTime: '2019.01.05-2019.01.06',
      activeId: '3',
      activeClass: "一年级、二年级"
      }, {
        activeName: "第17期",
        activeTheme: "钢铁是怎样练成的【正在报名中...】",
        activeBanner: '../../img/b1.png',
        activeTime: '2019.01.05-2019.01.06',
        activeId: '4',
        activeClass: "一年级、二年级"
      }, {
        activeName: "第17期",
        activeTheme: "钢铁是怎样练成的【正在报名中...】",
        activeBanner: '../../img/b1.png',
        activeTime: '2019.01.05-2019.01.06',
        activeId: '5',
        activeClass: "一年级、二年级"
      }, {
        activeName: "第17期",
        activeTheme: "钢铁是怎样练成的【正在报名中...】",
        activeBanner: '../../img/b1.png',
        activeTime: '2019.01.05-2019.01.06',
        activeId: '6',
        activeClass: "一年级、二年级"
      }, {
        activeName: "第17期",
        activeTheme: "钢铁是怎样练成的【正在报名中...】",
        activeBanner: '../../img/b1.png',
        activeTime: '2019.01.05-2019.01.06',
        activeId: '7',
        activeClass: "一年级、二年级"
      }]
    
  },

  /**
   * 列表点击详情页
   */
  detailClick(event) {    
    //查看详情
    wx.navigateTo({
      url: '../../pages/allReadDetail/allReadDetail?id=' + event.currentTarget.dataset.id
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("2")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("1")
    wx.showLoading({
      title: '玩命加载中',
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})