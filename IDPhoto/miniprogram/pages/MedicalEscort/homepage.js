// pages/MedicalEscort/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topADList: [],
    announcements: [{ content: "这里是公告1，当你看到这条公告的时候" }, { content: "这里是公告1，当你看到这条公告的时候这里是公告1，当你看到这条公告的时候" }], // 假设已经填充了公告数据
    movingElementAnimationData:"",
    currentAnnouncement:"",
    AnnouncementIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ topADList: [{ ADImage: "https://p0.itc.cn/q_70/images01/20230422/f1090c73b8a647fcbd870009544bd337.jpeg" }, { ADImage: "https://img.zcool.cn/community/010a67570618266ac7257948c2a99a.png@2o.png" }, { ADImage: "https://img0.baidu.com/it/u=3786458406,334266238&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=184" }] });
    // 启动自动滚动
    this.getCurrentAnacement();
  },

  getCurrentAnacement(){
    setInterval(() => {
      if(this.data.AnnouncementIndex==this.data.announcements.length) this.data.AnnouncementIndex = 0;
      this.setData({currentAnnouncement:this.data.announcements[this.data.AnnouncementIndex]});
      this.data.AnnouncementIndex++;
    }, 5000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})