// pages/activeDetail/activeDetail.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    activeDetail: {
      enrollTime: "2019.01.02 - 2019.02.09",
      className: "一年级、二年级",
      introduce: "开奖号水电费看见爱上奋达科技暗红色的发生的金凤凰和红烧豆腐就按客户说的减肥啊积分换卡惊世毒妃阿奥斯卡就发货撒地方阿基双方都发可接受...."
    },

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
    }], //所有数据
  },
  /**
   * 我要参加
   */
  myJoin(event) {
    //查看详情
    wx.navigateTo({
      url: '../../pages/activeDetail/activeDetail?id=' + event.currentTarget.dataset.id
    })
  },

  /**
   * 我要分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {}
    return {
      title: '测试小程序',//分享内容
      path: '/pages/index/index',//分享地址
      imageUrl: '/images/img_share.png',//分享图片
    }
  },

/**
 * 列表点击详情页
 */
  detailClick(event){ 
    //查看详情
    wx.navigateTo({
      url: '../../pages/allReadDetail/allReadDetail?id=' + event.currentTarget.dataset.id
    })
  },

  // btnShowShare(){
  //   console.log("123123");
  //   withShareTicket: true

  // },

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