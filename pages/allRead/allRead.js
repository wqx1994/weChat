// pages/allRead/allRead.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      activeName: "第17期",
      activeTheme: "钢铁是怎样练成的【正在报名中...】",
      activeBanner: '/../img/b1.png',
      activeTime: '2019.01.05-2019.01.06',
      activeId: '1',
      activeClass: "一年级、二年级  "
    }, {
      activeName: "第17期",
      activeTheme: "钢铁是怎样练成的【正在报名中...】",
      activeBanner: '/../img/b1.png',
      activeTime: '2019.01.05-2019.01.06',
      activeId: '2',
      activeClass: "一年级、二年级"
    }, {
      activeName: "第17期",
      activeTheme: "钢铁是怎样练成的【正在报名中...】",
      activeBanner: '/../img/b1.png',
      activeTime: '2019.01.05-2019.01.06',
      activeId: '3',
      activeClass: "一年级、二年级"
    }]
    // }, {
    //   activeName: "第17期",
    //   activeTheme: "钢铁是怎样练成的【正在报名中...】",
    //   activeBanner: '/../img/b1.png',
    //   activeTime: '2019.01.05-2019.01.06',
    //   activeId: '4',
    //   activeClass: "一年级、二年级"
    // }, {
    //   activeName: "第17期",
    //   activeTheme: "钢铁是怎样练成的【正在报名中...】",
    //   activeBanner: '/../img/b1.png',
    //   activeTime: '2019.01.05-2019.01.06',
    //   activeId: '5',
    //   activeClass: "一年级、二年级"
    // }], //所有数据
  },


  detailClick(event) {
    console.log(event.currentTarget.dataset.id);
    //查看详情
    wx.navigateTo({
      url: '../../pages/activeDetail/activeDetail?id=' + event.currentTarget.dataset.id
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})