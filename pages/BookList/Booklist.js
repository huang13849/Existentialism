// pages/BookList/Booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Coderwhy',
    students:[
      { id:100,name:'asad',age:'30'},
      { id: 101, name: 'ssda', age: '21' },
      { id: 102, name: 'vvv', age: '28' },
      { id: 103, name: 'ddd', age: '18' }
    ],
    counter:0
  },
  handleButtonClick(){
    console.log('按钮发生'),
    console.log(this.data.counter)
    this.setData({
      counter:this.data.counter +=1
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