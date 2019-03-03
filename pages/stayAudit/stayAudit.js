var app = getApp()
Page({
  data: {
    currentTab: 0,
    // 列表数据
    list: [{
      // 删除状态
      shows: "",
      // 列表中图片
      image: "../../img/t0.jpg",
      // 昵称
      name: "王二麻子[老师]",
      // 标签
      tag: "王五 18岁 女 15011386659"
    },
    {
      shows: "",
      // 列表中图片
      image: "../../img/t0.jpg",
      // 昵称
      name: "王二麻子[老师]",
      // 标签
      tag: "王五 18岁 女 15011386659"
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
