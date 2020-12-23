const order = ['demo1', 'demo2', 'demo3']
const app = getApp();
wx.cloud.init();
const db = wx.cloud.database();
const listInfo = db.collection('listInfo')
console.log(db)
Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  onLoad(){
    console.log(app.globalData)
   
  },
  onShow(){
    listInfo.get().then(res=>{
      // console.log(res.data)
      this.setData({
        listContent:res.data
      })
    })
  },
  data: {
    toView: 'green',
    listContent:[],
    imageData:[
      {src:'../../image/1.jpg',index:1},
      {src:'../../image/2.jpg',index:2},
      {src:'../../image/3.jpg',index:3},
      {src:'../../image/4.jpg',index:4},
    ]
  },
  //图片预览
  preViewImg(e){
    console.log(e)
    let src= e.currentTarget.dataset.src[0];
    let urls = e.currentTarget.dataset.src;

    console.log(urls)
    wx.previewImage({
      // current: src, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})