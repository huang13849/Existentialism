// pages/BookList/Booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist:[]
  },
  handleButtonClick(){
    console.log('按钮发生'),
    console.log(this.data.counter)
    this.setData({
      counter:this.data.counter +=1
    })
  },
  handleBtnClick(){
    this.setData({message:'aasda'})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    wx.request({
      url: 'https://hfnmyrxsof57oiu-atbhuangfra.adb.us-ashburn-1.oraclecloudapps.com/ords/huangfra/book1/',
      success:(res)=>{
          console.log(res);
          const data =res.data.items;
          this.data.booklist=data;
          this.setData({
            booklist:data
          })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  }
})