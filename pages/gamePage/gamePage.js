Page({
  data: {
    list1: 0,
    list2: 0,
    list3: 0,
    list4: 0,
    list5: 0,
    list6: 0,
    index: 0,
    player: []
  },

  // 跳转游戏规则页面函数
  jumpRulesPage: function() {
    wx.navigateTo({
      url: '/pages/gameRules/gameRules',
    })
  },
  
  zhitouzi: function() {
      var that = this;
      // wx.request({
      //   url: 'http://192.168.31.10:8088/touzi', 
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }, 
      //   success: function (res) {
      //     let values = Object.values(res.data);
      //     // console.log(Object.values(res.data));
      var values = [0,0,0,0,0,0];
      var random = [];
      for (var i=0; i<=5; i++) {
        random[i] = Math.floor(Math.random()*6)+1;
      }
      for (var i=0; i<=5; i++){
        if (random[i]==1) values[0]+=1;
        else if (random[i]==2) values[1]+=1;
        else if (random[i]==3) values[2]+=1;
        else if (random[i]==4) values[3]+=1;
        else if (random[i]==5) values[4]+=1;
        else values[5]++;
      }
      console.log(random);
      var flag = 0, flag1=0;
      var j, t, k, cnt=0; 
      var str=""; 
      for(j=0; j<6; j++)
      {
        if(values[j]==6) {
          if(j==0) {
            str = "遍地锦";
            flag=1;
            cnt=2.1;
          }
          else if(j==3) {
            str = "六勃红";
            flag = 1;
            cnt=2.2;
          }
          else {
            str = "六勃黑";
            k=j/100;
            flag = 1;
            cnt=2.0+k;
          }
          break;
        }
        else if (values[j]==5) {
          if(j==3) {
            str="五红";
            flag = 1;
            cnt=1.9;
            for(t=0; t<6; t++) {
              if(values[t]==1) {
                cnt=cnt+(t+1)/100;
                break;
              }
            }
          }
          else {
            str="五子登科";
            flag = 1;
            cnt=1.8;
            for(t=0;t<6;t++){
              if(values[t]==1) {
                cnt=cnt+(t+1)/100;
                break;
              }
            }
          }
          break;
        }
        else if (values[j]==4) {
          if (j==3) {
            if(values[0]==2) {
              str="状元插金花";
              flag = 1;
              cnt=2.3;
            }
            else {
              str="状元";
              flag = 1;
              cnt=1.6;
              k=0;
              for (var t=0;t<6;t++) {
                if(values[t]>=1&&values[t]<=2)
                  k=k+t+1	
              }
              cnt+=(k/100)
            }
          }
        }
      }
      if(flag==0)//不是状元 
      {
        flag1=0;
        var jishu=0; 
        for (var j=0;j<6;j++) {
          if(values[j]==1)
            jishu+=1;
        }
        if(jishu==6) {
          str="对堂";
          flag1=1;
          cnt=1.4;
        }
        if(values[3]==3){
            str="三红";
            flag1=1;
            cnt=1.5;
        }
        else {
          for(j=0;j<6;j++) {
            if(values[j]==4) {
              str="四进";
              flag1=1;
              cnt=1.3;
              break;
            }
          }
            if (values[3]==2&&cnt==0) {
              str="二举";
              flag1 = 1;
              cnt=1.2;
            }
            else if(values[3]==1&&cnt==0) {
              str="一秀";
              flag1 = 1;
              cnt=1.1;
            }
          if(flag1==0)
          {
            str="无用";
            cnt=1.0;
          }
        }
      }
      console.log(str);
      // str = str;
      msg:"";
      console.log(cnt);
      that.setData({
        list1: random[0],
        list2: random[1],
        list3: random[2],
        list4: random[3],
        list5: random[4],
        list6: random[5],
        msg:   str,
      }) 
      var f = getApp().globalData.index++;
      // //掷骰子次数
      // this.setData({
      //   index: that.data.index + 1
      // })
      console.log(getApp().globalData.index);
      if (f>=0) {
        getApp().globalData.player[f+1] = cnt;
<<<<<<< HEAD
=======
        getApp().globalData.price[f+1] = str;
        
>>>>>>> ec84c01 (最终版本)
      }

      // 弹窗显示点数成绩
      if (str == "无用") {
      wx.showToast({
        title: "很遗憾，您的点数为 无用",
        icon: 'none',
        duration: 2000
        })
      }
      if (str == "一秀") {
        wx.showToast({
          title: "恭喜您，您的点数为  秀才（一秀）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "三红") {
        wx.showToast({
          title: "恭喜您，您的点数为 探花（三红)！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "二举") {
        wx.showToast({
          title: "恭喜您，您的点数为 举人（二举）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "四进") {
        wx.showToast({
          title: "恭喜您，您的点数为 进士（四进）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "对堂") {
        wx.showToast({
          title: "恭喜您，您的点数为 榜眼(对堂)！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "四点红") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（四点红）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "五子登科") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（五子登科）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "五红") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（五红）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "六杯黑") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（六杯黑）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "遍地锦") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（遍地锦）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "六杯红") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（六杯红）！",
          icon: 'none',
          duration: 2000
        })
      }
      if (str == "金花") {
        wx.showToast({
          title: "恭喜您，您的点数为 状元（金花）！",
          icon: 'none',
          duration: 2000
        })
      }
  },


  endGame: function() {
    wx.navigateTo({
      url: '/pages/rankingList/rankingList',
    }) 
    // wx.request({
    //   url: 'http://192.168.31.10:8088/valueszi/paihang', 
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }, 
    //   success: function (e) { 
    //     console.log(e.data); 
    //   }
    // })

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