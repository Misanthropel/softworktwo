// pages/chooseOnlinePattern/chooseOnlinePattern.js
Page({
  data: {

  },
  jumpCreatePage:function() {
<<<<<<< HEAD
    wx.navigateTo({
      url: '/pages/createRoom/createRoom',
    })
  },
  jumpJoinPage:function() {
    wx.navigateTo({
      url: '/pages/joinRoom/joinRoom',
    })
=======
    wx.showToast({
      title: '抱歉，该功能正在测试中，请转到单机模式',
      icon: 'none',
    })
    // wx.navigateTo({
    //   url: '/pages/createRoom/createRoom',
    // })
  },
  jumpJoinPage:function() {
    wx.showToast({
      title: '抱歉，该功能正在测试中。请转到单机模式',
      icon: 'none',
    })
    // wx.navigateTo({
    //   url: '/pages/joinRoom/joinRoom',
    // })
>>>>>>> ec84c01 (最终版本)
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