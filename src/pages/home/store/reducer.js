import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultStare = fromJS({
  topicList: [
    {
      "id": 1,
      "title": "社会热点",
      "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      "id": 2,
      "title": "手手绘",
      "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
    ],
  articleList: [
    {
      "id": 1,
      "title": "为何二战的航母感觉很多，到了现代有一艘航母就用举国之力去养？",
      "desc": "运动的阵地： 一、体量上说，二战的时候航母有个3、4W吨就已经是舰队航母了，而现在的航母6、7W吨都算小的（看绝对数量10W吨才是主流，当然自然是美帝的那些）。 著名的企业号也就…",
      "imgUrl": "/static/1.jpg"
    },
    {
      "id": 2,
      "title": "怎么回答面试官：你对Spring的理解？",
      "desc": "拉勾·开悟训练营： Spring 全家桶，它包括SpringMVC、SpringBoot、Spring Cloud、Spring Cloud Dataflow等解决方案。 Spring框架相关知识 spri…",
      "imgUrl": "/static/2.jpg"
    },
    {
      "id": 3,
      "title": "什么是你去了香港才知道的？",
      "desc": "军师祭乐： 1.在艳照门的时候第一次去了香港，那时候还在上学，啥也不懂。只记得早餐在路边店吃碗面（方便面做的）要四十多，很贵。 2.中间去过两三次，一次比一次印象差。不知为何，感觉环境越来越挤，人们越来越…",
      "imgUrl": "/static/3.jpg"
    },
    {
      "id": 4,
      "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
      "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
      "imgUrl": "/static/4.png"
    }
    ],
});

export default (state = defaultStare, action) => {
  switch (action.type) {
    default:
      return state;
  }
}