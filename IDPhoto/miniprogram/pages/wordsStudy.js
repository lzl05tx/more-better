// pages/wordsStudy.js
Page({
  data: {
    fileContent: ''
  },

  chooseFile: function() {
    let that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        const tempFilePaths = res.tempFiles[0].path;
        wx.getFileSystemManager().readFile({
          filePath: tempFilePaths,
          encoding: 'utf-8',
          success(res) {
            that.setData({
              fileContent: res.data
            });
          },
          fail(err) {
            console.log(err);
            wx.showToast({
              title: '读取文件失败',
              icon: 'none'
            });
          }
        });
      },
      fail(err) {
        console.log(err);
        wx.showToast({
          title: '选择文件失败',
          icon: 'none'
        });
      }
    });
  }
});