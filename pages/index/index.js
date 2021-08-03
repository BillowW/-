// pages/second/second.js
var authorInformation = {};
var cityName = [
  "阿坝",
  "阿拉善",
  "阿里",
  "安康",
  "安庆",
  "鞍山",
  "安顺",
  "安阳",
  "澳门",
  "北京",
  "白银",
  "保定",
  "宝鸡",
  "保山",
  "包头",
  "巴中",
  "北海",
  "蚌埠",
  "本溪",
  "毕节",
  "滨州",
  "百色",
  "亳州",
  "重庆",
  "成都",
  "长沙",
  "长春",
  "沧州",
  "常德",
  "昌都",
  "长治",
  "常州",
  "巢湖",
  "潮州",
  "承德",
  "郴州",
  "赤峰",
  "池州",
  "崇左",
  "楚雄",
  "滁州",
  "朝阳",
  "大连",
  "东莞",
  "大理",
  "丹东",
  "大庆",
  "大同",
  "大兴安岭",
  "德宏",
  "德阳",
  "德州",
  "定西",
  "迪庆",
  "东营",
  "鄂尔多斯",
  "恩施",
  "鄂州",
  "福州",
  "防城港",
  "佛山",
  "抚顺",
  "抚州",
  "阜新",
  "阜阳",
  "广州",
  "桂林",
  "贵阳",
  "甘南",
  "赣州",
  "甘孜",
  "广安",
  "广元",
  "贵港",
  "果洛",
  "杭州",
  "哈尔滨",
  "合肥",
  "海口",
  "呼和浩特",
  "海北",
  "海东",
  "海南",
  "海西",
  "邯郸",
  "汉中",
  "鹤壁",
  "河池",
  "鹤岗",
  "黑河",
  "衡水",
  "衡阳",
  "河源",
  "贺州",
  "红河",
  "淮安",
  "淮北",
  "怀化",
  "淮南",
  "黄冈",
  "黄南",
  "黄山",
  "黄石",
  "惠州",
  "葫芦岛",
  "呼伦贝尔",
  "湖州",
  "菏泽",
  "济南",
  "佳木斯",
  "吉安",
  "江门",
  "焦作",
  "嘉兴",
  "嘉峪关",
  "揭阳",
  "吉林",
  "金昌",
  "晋城",
  "景德镇",
  "荆门",
  "荆州",
  "金华",
  "济宁",
  "晋中",
  "锦州",
  "九江",
  "酒泉",
  "昆明",
  "开封",
  "兰州",
  "拉萨",
  "来宾",
  "莱芜",
  "廊坊",
  "乐山",
  "凉山",
  "连云港",
  "聊城",
  "辽阳",
  "辽源",
  "丽江",
  "临沧",
  "临汾",
  "临夏",
  "临沂",
  "林芝",
  "丽水",
  "六安",
  "六盘水",
  "柳州",
  "陇南",
  "龙岩",
  "娄底",
  "漯河",
  "洛阳",
  "泸州",
  "吕梁",
  "马鞍山",
  "茂名",
  "眉山",
  "梅州",
  "绵阳",
  "牡丹江",
  "南京",
  "南昌",
  "南宁",
  "宁波",
  "南充",
  "南平",
  "南通",
  "南阳",
  "那曲",
  "内江",
  "宁德",
  "怒江",
  "盘锦",
  "攀枝花",
  "平顶山",
  "平凉",
  "萍乡",
  "莆田",
  "濮阳",
  "青岛",
  "黔东南",
  "黔南",
  "黔西南",
  "庆阳",
  "清远",
  "秦皇岛",
  "钦州",
  "齐齐哈尔",
  "泉州",
  "曲靖",
  "衢州",
  "日喀则",
  "日照",
  "上海",
  "深圳",
  "苏州",
  "沈阳",
  "石家庄",
  "三门峡",
  "三明",
  "三亚",
  "商洛",
  "商丘",
  "上饶",
  "山南",
  "汕头",
  "汕尾",
  "韶关",
  "绍兴",
  "邵阳",
  "十堰",
  "朔州",
  "四平",
  "绥化",
  "遂宁",
  "随州",
  "宿迁",
  "宿州",
  "天津",
  "太原",
  "泰安",
  "泰州",
  "台州",
  "唐山",
  "天水",
  "铁岭",
  "铜川",
  "通化",
  "通辽",
  "铜陵",
  "铜仁",
  "台湾",
  "武汉",
  "乌鲁木齐",
  "无锡",
  "威海",
  "潍坊",
  "文山",
  "温州",
  "乌海",
  "芜湖",
  "乌兰察布",
  "武威",
  "梧州",
  "厦门",
  "西安",
  "西宁",
  "襄樊",
  "湘潭",
  "湘西",
  "咸宁",
  "咸阳",
  "孝感",
  "邢台",
  "新乡",
  "信阳",
  "新余",
  "忻州",
  "西双版纳",
  "宣城",
  "许昌",
  "徐州",
  "香港",
  "锡林郭勒",
  "兴安",
  "银川",
  "雅安",
  "延安",
  "延边",
  "盐城",
  "阳江",
  "阳泉",
  "扬州",
  "烟台",
  "宜宾",
  "宜昌",
  "宜春",
  "营口",
  "益阳",
  "永州",
  "岳阳",
  "榆林",
  "运城",
  "云浮",
  "玉树",
  "玉溪",
  "玉林",
  "鹰潭",
  "杂多县",
  "赞皇县",
  "枣强县",
  "枣阳市",
  "枣庄",
  "泽库县",
  "增城市",
  "曾都区",
  "泽普县",
  "泽州县",
  "札达县",
  "扎赉特旗",
  "扎兰屯市",
  "扎鲁特旗",
  "扎囊县",
  "张北县",
  "张店区",
  "章贡区",
  "张家港",
  "张家界",
  "张家口",
  "漳平市",
  "漳浦县",
  "章丘市",
  "樟树市",
  "张湾区",
  "彰武县",
  "漳县",
  "张掖",
  "漳州",
  "长子县",
  "湛河区",
  "湛江",
  "站前区",
  "沾益县",
  "诏安县",
  "召陵区",
  "昭平县",
  "肇庆",
  "昭通",
  "赵县",
  "昭阳区",
  "招远市",
  "肇源县",
  "肇州县",
  "柞水县",
  "柘城县",
  "浙江",
  "镇安县",
  "振安区",
  "镇巴县",
  "正安县",
  "正定县",
  "正定新区",
  "正蓝旗",
  "正宁县",
  "蒸湘区",
  "正镶白旗",
  "正阳县",
  "郑州",
  "镇海区",
  "镇江",
  "浈江区",
  "镇康县",
  "镇赉县",
  "镇平县",
  "振兴区",
  "镇雄县",
  "镇原县",
  "志丹县",
  "治多县",
  "芝罘区",
  "枝江市",
  "芷江侗族自治县",
  "织金县",
  "中方县",
  "中江县",
  "钟楼区",
  "中牟县",
  "中宁县",
  "中山",
  "中山区",
  "钟山区",
  "钟山县",
  "中卫",
  "钟祥市",
  "中阳县",
  "中原区",
  "周村区",
  "周口",
  "周宁县",
  "舟曲县",
  "舟山",
  "周至县",
  "庄河市",
  "诸城市",
  "珠海",
  "珠晖区",
  "诸暨市",
  "驻马店",
  "准格尔旗",
  "涿鹿县",
  "卓尼",
  "涿州市",
  "卓资县",
  "珠山区",
  "竹山县",
  "竹溪县",
  "株洲",
  "株洲县",
  "淄博",
  "子长县",
  "淄川区",
  "自贡",
  "秭归县",
  "紫金县",
  "自流井区",
  "资溪县",
  "资兴市",
  "资阳"
];

var wholePlaceInformation = [];
var wholeLifePoint;
var locPoints = [];
var indexOfCenterPoint = 0;
var isClickShowWholeLife = false;
var curPoint_wholeLife = 0;
var firstClick = true;

Page({
  
  data: {
      disablePlaceInput:false,
      disablePlaceButton:false,
      disableAuthorInput:false,
      disableAuthorButton:false,
      showButton:true,
      havePlace:false,
      haveAuthor:false,
      authorName:"N/A",
      workName:"N/A",
      workTime:"N/A",
      workPlace:"N/A",
      centerLongitude:116.405285,
      centerLatitude:39.904989,
      locationPoint:[],
      pathArr:[],
      SCALE:16
  },

  test:function(){
   var parten = '香港';
   for(let i = 0; i<authorInformation.works.length;i++){
     var tempArr = authorInformation.works[i].workPlace.split(parten);
     for( let j in tempArr){
       if(tempArr[j] == ''){
         console.log(authorInformation.works[i]);
         break;
       }
     }
   }
  },

  // 展示上一个作品点 
  showBeforePoint:function(){
    var that = this;
    if(indexOfCenterPoint == 0){
      wx.showModal({
        cancelColor: 'cancelColor',
        showCancel:true,
        title:'作家没有上一个作品了喔'
      });
    }else{
      indexOfCenterPoint--;
       // 设置中心点,更新作品信息
       var myMap = wx.createMapContext('myMap');
       myMap.includePoints({
         longitude:locPoints[indexOfCenterPoint].longitude,
         latitude:locPoints[indexOfCenterPoint].latitude
       });
       that.setData({
        SCALE:14,
        centerLatitude:locPoints[indexOfCenterPoint].latitude,
        centerLongitude:locPoints[indexOfCenterPoint].longitude,
        workName:authorInformation.works[indexOfCenterPoint].workName,
        workTime:authorInformation.works[indexOfCenterPoint].workTime,
        workPlace:authorInformation.works[indexOfCenterPoint].workPlace
      })
    }
  },

  // 展示下一个作品点
  showNextPoint:function(){
    var that = this;
    if(indexOfCenterPoint+1 == authorInformation.works.length){
      wx.showModal({
        cancelColor: 'cancelColor',
        title:'已经到了最后一个作品',
        showCancel:true
      })
    }else{
      indexOfCenterPoint++;
      // 设置中心点,更新作品信息
      var myMap = wx.createMapContext('myMap');
       myMap.includePoints({
         longitude:locPoints[indexOfCenterPoint].longitude,
         latitude:locPoints[indexOfCenterPoint].latitude
       });
      that.setData({
        SCALE:14,
        centerLatitude:locPoints[indexOfCenterPoint].latitude,
        centerLongitude:locPoints[indexOfCenterPoint].longitude,
        workName:authorInformation.works[indexOfCenterPoint].workName,
        workTime:authorInformation.works[indexOfCenterPoint].workTime,
        workPlace:authorInformation.works[indexOfCenterPoint].workPlace
      })
    }
  },

  // 展示一生轨迹
  showWholePoint:function(){
    // 隐藏上下选择按钮
    
    // 是否为第一次调用
    if(firstClick){
      firstClick = false;
      indexOfCenterPoint = 0;
      this.setData({
        showButton:false,
        disableAuthorButton:true,
        disablePlaceButton:true,
        disablePlaceInput:true,
        disableAuthorInput:true
      });
    }
    // 
    if(isClickShowWholeLife){
      var myMap = wx.createMapContext('myMap');
    
      if(indexOfCenterPoint + 1 == authorInformation.works.length){
        // 重置数据
        isClickShowWholeLife = false;
        firstClick = true;    
        this.setData({
          showButton:true,
          disableAuthorButton:false,
          disablePlaceButton:false,
          disablePlaceInput:false,
          disableAuthorInput:false
        })
        return;
      }else{
        var pathArr = [];
        pathArr.push(locPoints[indexOfCenterPoint++]);
        pathArr.push(locPoints[indexOfCenterPoint]);
       

        // 调整画面只包含展示点
        myMap.includePoints({
          points:pathArr,
          padding:[20,40,30,20]
        });
      }


      myMap.moveAlong({
        markerId:0,
        duration:1200,
        path:pathArr,
        autoRotate:true,
        success:()=>{
          // 更新展示信息
          this.setData({
            workName:authorInformation.works[indexOfCenterPoint].workName,
            workPlace:authorInformation.works[indexOfCenterPoint].workPlace,
            workTime:authorInformation.works[indexOfCenterPoint].workTime
          });
          setTimeout(() => {
            this.showWholePoint();      //延时两秒进行下一个轨迹展示
          }, 2000);
        }
      })
    }else{
      isClickShowWholeLife = true;
      var myMap =wx.createMapContext('myMap');
      var inPoints = locPoints; 
      for(let i = 0 ;i < inPoints.length; i++){
        for(let item in inPoints[i]){
          if(item == 'id'){
            delete inPoints[i][item]; //去除id属性 
          }
        }
      }
      myMap.includePoints({
        points:inPoints,
        padding:[30,50,50,30]
      });
      // 缩放end
      this.showWholePoint();
    }
  },

  // 作家查询 
  _checkAuthor:function(e){

    // 清空地点信息
    wholePlaceInformation = [];
    this.setData({
      havePlace:false
    })

    // 获取查询关键字
    var keyWorld = e.detail.value.keyWorld;

    const db = wx.cloud.database(); //连接数据库
    var that = this;

     //查询函数
     db.collection('author').doc(keyWorld).get({
      success:(res) =>{
        // 有此作家
        that.setData({
          haveAuthor:true
        })
        // 将作家信息缓存本地
        authorInformation = res.data;
        // 设置标记点
        var locationPoint = [];
        for(let i = 0 ; i < authorInformation.works.length; i++){
          locationPoint.push(authorInformation.works[i].location[0]);
        }
        that.setData({
          locationPoint:locationPoint
        });
        // 设置标记点end

        // 将中心点定位到第一个作品处 
        var myMap = wx.createMapContext('myMap');
        that.setData({
          centerLatitude:locationPoint[0].latitude,
          centerLongitude:locationPoint[0].longitude
        })

        // 连线 渲染第一个点的信息
        var inPoints = locationPoint;   
        for(let i = 0 ;i < inPoints.length; i++){
          for(let item in inPoints[i]){
            if(item == 'id'){
              delete inPoints[i][item]; //去除id属性 
            }
          }
        }

        // 保存轨迹点
        locPoints = inPoints;  

        var pathArr = [{
          points:inPoints,
          width:5,
          arrowLine:true
        }];

        that.setData({
          pathArr:pathArr,
          authorName:authorInformation._id,
          workName:authorInformation.works[0].workName,
          workTime:authorInformation.works[0].workTime,
          workPlace:authorInformation.works[0].workPlace
        })
        // 连线end

      },

      fail:()=>{
        var that = this;
        that.setData({
          haveAuthor:false
        });
        wx.showModal({
          cancelColor: 'cancelColor',
          title:'此作者暂未收录',
          showCancel:true
        })
      }
    });

  },

  // 地点查询
  _checkPlace:function(e){
    // 初始化信息
    wholePlaceInformation = []
    authorInformation = [];

    this.setData({
      haveAuthor:false,
      pathArr:[],
      locationPoint:[],
      centerLatitude:'',
      centerLongitude:''
    })
      // 获取查询关键字
    var keyWorld = e.detail.value.keyWorld;
    var isPlace = false;

    const db = wx.cloud.database(); //连接数据库
    var that = this;

   for(let i in cityName){
     if(cityName[i] == keyWorld){
       isPlace = true;
       break;
     }
   }

   if(!isPlace){
    // 没有这个地方
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'这不是一个地名',
      showCancel:true
    });
    return;
   }

     //查询函数
     db.collection('author').where({}).get({
      success:(res) =>{
        // 此地有创作作品
        var cnt = 0;
        var pArr = [];

        for(let i in res.data){
          for(let j in res.data[i].works){
            var tArr = res.data[i].works[j].workPlace.split(keyWorld);
            for(let k in tArr){
              if(tArr[k] == ''){
                var temp = res.data[i].works[j];
                temp.authorName = res.data[i]._id;
                temp.location[0].id = cnt++;
                wholePlaceInformation.push(temp);
                break;
              }
            }
          }
        }

        // 检测是否存在作品
        if(wholePlaceInformation.length == 0){
          wx.showModal({
            cancelColor: 'cancelColor',
            title:'此处暂无收录作家创作作品',
            showCancel:true
          });
          return;
        }

        // 设置标记点
        var locationPoint = [];
        for(let i = 0 ; i < wholePlaceInformation.length; i++){
          locationPoint.push(wholePlaceInformation[i].location[0]);
        }
       
        that.setData({
          locationPoint:locationPoint
        });
        // 设置标记点end   

        // 视野调整
        var myMap = wx.createMapContext('myMap');
        // 点坐标
        for(let i in locationPoint){
          var temp = new Object();
          temp.latitude = locationPoint[i].latitude;
          temp.longitude = locationPoint[i].longitude;
          pArr.push(temp);
        }
        
        myMap.includePoints({
          points:pArr,
          padding:[30,50,50,30]
        })
      },

    });
  },

  // 点击显示marked点信息
  _showPlaceMsg:function(e){
    if(wholePlaceInformation.length == 0){
      return;
    }
    var index = e.detail.markerId;
    // 更新作品信息
    this.setData({
      havePlace:true,
      authorName:wholePlaceInformation[index].authorName,
      workName:wholePlaceInformation[index].workName,
      workPlace:wholePlaceInformation[index].workPlace,
      workTime:wholePlaceInformation[index].workTime
    })
  }
})