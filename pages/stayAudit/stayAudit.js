// 默认声明一个函数记录list显示的数据---删除状态
var initdata = function(that, type) {
  var list;
  if (type == "1") {
    list = that.data.list;
  } else {
    list = that.data.uNAduitlist;
  }

  for (var i = 0; i < list.length; i++) {
    list[i].shows = ""
  }
  //学生列表
  if (type == "1") {
    that.setData({
      list: list
    })
  } else { //待审核成员
    that.setData({
      uNAduitlist: list
    })
  }

}
var app = getApp()
Page({
  data: {
    delBtnWidth: 185,
    currentTab: 0,
    // 学生列表数据
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
      }
    ],
    //待审核成员
    uNAduitlist: [{
        // 删除状态
        shows: "",
        // 列表中图片
        image: "../../img/t0.jpg",
        // 昵称
        name: "张三",
        // 标签
        tag: "学生，热爱篮球"
      },
      {
        shows: "",
        // 列表中图片
        image: "../../img/t0.jpg",
        // 昵称
        name: "李四",
        // 标签
        tag: "学生，热爱篮球"
      }, {
        shows: "",
        // 列表中图片
        image: "../../img/t0.jpg",
        // 昵称
        name: "王五",
        // 标签
        tag: "学生"
      }
    ]
  },
  onLoad: function(options) {
    this.initEleWidth();
    // 页面初始化 options为页面跳转所带来的参数

  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },



  /**
   * 点击学生删除按钮事件
   */
  delItem: function(e) {
    var that = this;
    // 打印出当前选中的index
    console.log(e.currentTarget.dataset.index);
    // 获取到列表数据
    var list = that.data.list;
    // 删除
    list.splice(e.currentTarget.dataset.index, 1);
    // 重新渲染
    that.setData({
      list: list
    })
    initdata(that, '1')
  },


  /*************待审核成员******************* */

  /**
   * 审核用户
   */
  auditItem: function(e) {
    var that = this;
    // 打印出当前选中的index
    console.log(e.currentTarget.dataset.index);
    var item = that.data.uNAduitlist[e.currentTarget.dataset.index];
    // 获取待审核成员列表数据
    var uNAduitlist = that.data.uNAduitlist;

    if (item != null) {
      var list = that.data.list;
      item.shows="";
      list.push(item);
      that.setData({
        list: list

      })
    }


    // 删除
    uNAduitlist.splice(e.currentTarget.dataset.index, 1);
    // 重新渲染
    that.setData({
      uNAduitlist: uNAduitlist

    })
    initdata(that, '2')
  },




  /********滑动事件************ */

  // 开始滑动事件
  touchS: function(e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置 
        startX: e.touches[0].clientX
      });
    }
  },

  touchM: function(e) {
    var that = this;
    initdata(that, e.target.dataset.type);
    if (e.touches.length == 1) {
      //手指移动时水平方向位置 
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值 
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      // var txtStyle = "";
      if (disX == 0 || disX < 0) { //如果移动距离小于等于0，文本层位置不变 
        // txtStyle = "left:0px";
      } else if (disX > 0) { //移动距离大于0，文本层left值等于手指移动距离 
        // txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度 
          // txtStyle = "left:-" + delBtnWidth + "px";
        }
      }

    }
  },
  // 滑动中事件
  touchE: function(e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置 
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离 
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮 
      var txtStyle = "";
      txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";

      //获取手指触摸的是哪一项 
      var index = e.target.dataset.index;
      if (index == null) {
        return;
      }
      //学生列表
      var list;
      if (e.target.dataset.type == '1') {
        list = this.data.list;
      } else {
        list = this.data.uNAduitlist;
      }
      list[index].shows = txtStyle;
      console.log("1", list[index].shows);
      //更新列表的状态 
      if (e.target.dataset.type == '1') {
        this.setData({
          list: list
        });
      } else {
        this.setData({
          uNAduitlist: list
        });
      }
    } else {
      console.log("2");
    }
  },

  //获取元素自适应后的实际宽度 
  getEleWidth: function(w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2); //以宽度750px设计稿做宽度的自适应 
      // console.log(scale); 
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error 
    }
  },
  initEleWidth: function() {
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  }

})