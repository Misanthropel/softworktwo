Page({
  data: {
      index1: 0,
<<<<<<< HEAD
      player1: []
  },

=======
      rank: [],
      index2: [],
      price1: []
  },
  gameOver:function() {
    wx.navigateTo({
      url: '/pages/gameOver/gameOver',
    })
  },
>>>>>>> ec84c01 (最终版本)
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var index = getApp().globalData.index;
    console.log(index);
    var player = getApp().globalData.player;
<<<<<<< HEAD
    var that = this;
    this.setData({index1: index});
    this.setData({player1: player});

    var flg = [index];
      var max = 0;
      var k=0, f1, f;
      for (var i=0; i<player.length; i++) {
        f1 = 0;
        f = 0;
        max = 0;
        for (var j=1; j < player.length; j++) {
          if (max <= player[j]) {
            max = player[j];
            f = j;
            f1 = 1;
          }
        }
        if (f1==1) {
          flg[k] = f;
          k++;
          player[f] = 0;
        }
      }
    // }
    k-=1;
    console.log(flg);
  },
=======
    var price = getApp().globalData.price;

    var that = this;
    this.setData({index1: index});
    var flg = [index];
    var flg2 = [];
    var max = 0;
    var k=0, f1, f;
    for (var i=0; i<player.length; i++) {
      f1 = 0, f = 0;
      max = player[i];
      for (var j=1; j<player.length; j++) {
        if (max <= player[j]) {
          max = player[j];
          f = j;
          f1 = 1;
        }
      }
      if (f1==1) {
        flg[k] = f;
        flg2[k] = price[f];
        k++;
        player[f] = 0;
      }
    }
      var num = [];
      for (var i=0; i<index; i++)
      {
        num[i] = i+1; 
      } 
    console.log(flg);
    console.log(flg2);
    var that = this;
    that.setData({
      rank: flg,
      index2: num,
      price1: flg2
  })
  }, 
>>>>>>> ec84c01 (最终版本)

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
<<<<<<< HEAD

  /**
=======
 
  /** 
>>>>>>> ec84c01 (最终版本)
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