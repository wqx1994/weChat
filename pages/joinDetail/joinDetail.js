// pages/joinDetail/joinDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', value: '北京市 海淀区 第四小学 一年级' },
      { name: '2', value: '北京市 海淀区 第四小学 二年级' },
      { name: '3', value: '北京市 海淀区 第四小学 三年级' }

    ]
  },
  btnJoin(event){
    console.log(event.currentTarget.dataset.id);
    //报名成功
    wx.navigateTo({
      url: '../../pages/studentEnroll/studentEnroll'
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})