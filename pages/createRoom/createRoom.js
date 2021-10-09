// pages/createRoom/createRoom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomNumber: 0,
    playerNumber: 0
  },

  //input the room number
  inputRoomNumber(r) {
    this.setData({
      roomNumber: r.detail.value
  })
  },
    //input the player number
    inputPlayerNumber(p) {
      this.setData({
        playerNumber: p.detail.value
    })
    },

  // 跳转页面函数
  jumpPage:function() {
    wx.navigateTo({
      url: '/pages/gamePage/gamePage',
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