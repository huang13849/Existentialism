// pages/BookList/Booklist.js
const request = require("../../utils/requests");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leads: [],
    booklist: [],
    book_categories: ['文学', '历史', '心理', '传记', '经管'],
    book_category_index: 0
  },
  toRefresh() {
    this.data.book_category_index++,
      this.getBookCategory()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getBookCategory()
  },
  getBookCategory: function() {
    if (this.data.book_categories.length - this.data.book_category_index == 0) {
      this.data.book_category_index = 0;
    }
    console.log(this.data.book_category_index + '@@@' + this.data.book_categories[this.data.book_category_index] + '###' + this.data.book_categories.length)
    wx.cloud.init({
      env: 'exist-0nmi1'
    });
    const db = wx.cloud.database();
    db.collection('articles').where({
      article_category: this.data.book_categories[this.data.book_category_index]
    }).get({
      success: res => {
        const data = res.data
        this.setData({
          booklist: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log('onShareAppMessage')
  }
})