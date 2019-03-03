// pages/allTeacher/allTeacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      id: "1",
      calssName: "北京市 海淀区 第四小学 一年级",
      classCount: "20人"

    }, {
      id: "2",
      calssName: "北京市 海淀区 第四小学 一年级",
      classCount: "20人"
    }, {
      id: "3",
      calssName: "北京市 海淀区 第四小学 一年级",
      classCount: "20人"
    }]    
  },

/**
 * 班级详情
 */
  detailClick(event){
    //查看详情
    wx.navigateTo({
      url: '../../pages/classDetail/classDetail?id=' + event.currentTarget.dataset.id
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