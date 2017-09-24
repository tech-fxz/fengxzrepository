Page({
  onLoad:function(option){
    wx.setNavigationBarTitle({
      title: '订单',
    })
    var app=getApp();
    console.log(app);
  },
  data:{
    staffA: { firstName: 'J', lastName:'C'},
    staffB: { firstName: 'D', lastName: 'B' },
    staffC: { firstName: 'E', lastName: 'F' },
    count: 0,
    msg:'click',
    array:[
      {message:'foo'},
      {message:'bar'}
    ],
    objectArray:[
      { id: '1', name: "li" },
      { id: '2', name: "lis" },
      { id: '3', name: "liss" },
    ]
  },
  add: function (event) {
    console.log(event);
    var count=this.data.count+1;
    this.setData({
      msg: 'clicked:'+count
    });
  },
  handleTap1:function(event){
    console.log('outer');
  },
  handleTap2:function(event){
    console.log('middle');
  },
  handleTap3:function(event){
    console.log('inner');
  },
  handleTap4: function (event) {
    console.log('outer1');
  },
  handleTap5: function (event) {
    console.log('middle1');
  },
  handleTap6: function (event) {
    console.log('inner1');
  }
})