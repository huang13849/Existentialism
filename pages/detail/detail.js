// pages/detail/detail.js
const request = require("../../utils/common");

Page({
  data: {
    bookItem:[]
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    that.setData({
      bookItem: options
    });
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  },
  onReady: function() {
    // 页面渲染完成
    wx.hideToast();
  },
  onShow: function() {
    // 页面显示
    console.log("显示");
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})