// pages/releasedProduts/releasedProducts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var serverurl_api = wx.getStorageSync("serverurl-api");
    var serverurl = wx.getStorageSync("serverurl");
    var openId = wx.getStorageSync("openId");
    wx.request({
      url: serverurl_api + '/api/collect-lists/mine/' + wx.getStorageSync("wechatUser").id,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        var datas = res.data;
        console.log(JSON.stringify(datas));
        that.setData({
          products: datas.collectProducts,
          serverurl_api: serverurl_api
        })
      },
      fail: function (res) {
        console.log('error:' + res);
      }
    })
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