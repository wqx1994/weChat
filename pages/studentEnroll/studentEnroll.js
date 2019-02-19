
//获取应用实例
var app = getApp()
Page({
  data: {   
    errorMessage: '',    
  },  


  formSubmit: function (e) { 

    //报名成功
    wx.navigateTo({
      url: '../../pages/joinSuccess/joinSuccess'
    })
   // var _this = this
   
    // if (e.detail.value.input_name == "" || e.detail.value.input_phone == "") {
    //   this.showErrorMessage("请填写姓名和电话！");
    //   return;
    // }

    // wx.showToast({
    //   title: '正在提交...',
    //   icon: 'loading',
    //   duration: 10000
    // })
    // wx.request({
    //   url: 'https://partytogetherbackend.azurewebsites.net/api/party',
    //   data:
    //   {
    //     Name: e.detail.value.input_name,
    //     Phone: e.detail.value.input_phone,
    //     Date: e.detail.value.input_date,
    //     Will_Attend: e.detail.value.input_attend,
    //   },
    //   method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   header: {
    //     'content-type': 'application/json; charset=UTF-8'
    //   },
    //   success: function (res) {
    //     var statusCode = res.statusCode
    //     var resMsg = res.data
    //     if (statusCode == 200 && resMsg == "created") {
    //       wx.redirectTo({
    //         url: '../created/created?name=' + e.detail.value.input_name,
    //       })
    //     }
    //     else if (resMsg == "failed") {
    //       _this.showErrorMessage("保存失败，请重试！");
    //     }
    //     else {
    //       // undefined error happened!
    //       _this.showErrorMessage("未知错误，请重试！");
    //     }
    //   },
    //   fail: function () {
    //     _this.showErrorMessage("保存失败，请重试！");
    //   },
    //   complete: function () {
    //     // complete
    //     wx.hideToast();
    //   }
    // })
  },

  formReset: function (e) {
    // console.log('form发生了reset事件')
    // console.log('form发生了submit事件，携带数据为：Name: ', e.detail.value.input_name)
    this.setData({
      date_checked: true,
      will_attend: true,
    })
    /*
        wx.redirectTo({
          url: '../failed/failed',
        })
        */
  },

  // 添加CSS 特效
  showErrorMessage: function (message) {
    this.setData({
      errorMessage: message
    });
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.height(30).opacity(1).step()
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.height(0).opacity(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 3000)
  }
})