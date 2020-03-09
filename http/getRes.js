import axios from './axios';

// v1版本
// 0 微信登录注册接口
export const login = (params) => axios.post(`/v1/login`, params)
// 1手机验证码拉取
export const loginphone = (params) => axios.post(`/v1/sendSms`, params)
// 2服务器时间戳拉取
export const getTimestampInfo = () => axios.get('/v1/info')
// 3手机号登录
export const phoneLogin = (params) => axios.post(`/v1/phoneLogin`, params)
// 4课程-课程列表
export const course = (params) => axios.post(`/v1/course`, params)
// 5犀半球视频
export const recommend = (params) => axios.post(`/v1/recommend`, params)
// 6banner+咨询
export const home = (params) => axios.post(`/v1/home`, params)
// 7课程-咨讯
export const courseArticle = (params) => axios.post(`/v1/courseArticle`, params)
// 8备考-帖子列表
export const article = (params) => axios.post(`/v1/article`, params)
// 9备考-帖子详情
export const articleInfo = (params) => axios.post(`/v1/articleInfo`, params)
// 10备考-帖子评论列表
export const comment = (params) => axios.post(`/v1/comment`, params)
// 11备考-发布评论
export const addComment = (params) => axios.post(`/v1/addComment`, params)
// 12备考-评论点赞
export const addPraise = (params) => axios.post(`/v1/addPraise`, params)
// 13个人中心-我的课程
export const mycourse = (params) => axios.post(`/v1/mycourse`, params)
// 14个人中心-我的课程-详情
export const mycourseInfo = (params) => axios.post(`/v2/mycourseInfo`, params)
// 15个人中心-我的订单
export const myorder = (params) => axios.post(`/v1/myorder`, params)
// 16个人中心-我的订单-删除
export const delMyorder = (params) => axios.post(`/v1/delMyorder`, params)
// 17个人中心-我的收藏
export const mycollect = (params) => axios.post(`/v1/mycollect`, params)
// 18个人中心-我的地址
export const myaddress = (params) => axios.post(`/v1/myaddress`, params)
// 19个人中心-编辑地址
export const editAddress = (params) => axios.post(`/v1/editAddress`, params)
// 20个人中心-删除地址
export const delAddress = (params) => axios.post(`/v1/delAddress`, params)
// 21个人中心-我的优惠券
export const mycoupon = (params) => axios.post(`/v1/mycoupon`, params)
// 22个人中心-我的兑换
export const myexchange = (params) => axios.post(`/v1/myexchange`, params)
// 23个人中心-我的兑换-兑换课程
export const exchange = (params) => axios.post(`/v1/exchange`, params)
// 24个人中心-我的消息
export const mymessage = (params) => axios.post(`/v1/mymessage`, params)
// 25个人中心-我的消息-删除
export const delMessage = (params) => axios.post(`/v1/delMessage`, params)
// 26个人中心-我的消息-已读
export const readMessage = (params) => axios.post(`/v1/readMessage`, params)
// 27个人中心-编辑资料
export const editPersonal = (params) => axios.post(`/v1/editPersonal`, params)
// 28个人中心-个人资料
export const personal = (params) => axios.post(`/v1/personal`, params)
// 29备考-帖子取消||收藏
export const addCollect = (params) => axios.post(`/v1/addCollect`, params)
// 30犀半球视频流
export const notes = (params) => axios.post(`/v1/notes`, params)
// 31首页课程-详情
export const courseInfo = (params) => axios.post(`/v2/courseInfo`, params)
// 32备考banner
export const banner = (params) => axios.post(`/v1/banner`, params)
// 33订单-下单详情
export const orderInfo = (params) => axios.post(`/v1/orderInfo`, params)
// 34订单-下单详情-优惠券列表
export const orderCoupon = (params) => axios.post(`/v1/orderCoupon`, params)
// 35订单-创建订单
export const createOrder = (params) => axios.post(`/v1/createOrder`, params)
// 36视频中心直播录播回看
export const videoDetail = (params) => axios.post(`/v2/videoDetail`, params)
// 37课程-课程包
export const coursePackage = (params) => axios.post(`/v2/coursePackage`, params)
// 37token过期输出
export const freshenToken = (params) => axios.post(`/v1/freshenToken`, params)
// 38我的订单绑定地址
export const bindAddress = (params) => axios.post(`/v1/bindAddress`, params)
// 39我的订单绑定地址
export const wxPay = (params) => axios.post(`/v1/wxPay`, params)
// 40微信支付状态拿取
export const getOrderStatus = (params) => axios.post(`/v1/getOrderStatus`, params)
// 41支付宝支付
export const aliPay = (params) => axios.post(`/v1/aliPay`, params)
// 42直播模块 获取频道签名和时间戳
export const liveSign = (params) => axios.post(`/v1/liveSign`, params)
// 43直播模块 获取聊天室token
export const getChatToken = (params) => axios.post(`/v1/getChatToken`, params)
// v2版本
// 44 首页-banner|品牌咨询|备考|公考
export const homev2 = (params) => axios.post(`/v2/home`, params)
// 45 首页-犀半球
export const homeXbqv2 = (params) => axios.post(`/v2/homeXbq`, params)
// 46 首页-备考—文章列表
export const referencev2 = (params) => axios.post(`/v2/reference`, params)

// 47 首页-备考—详情页-发表评论
export const commentv2 = (params) => axios.post(`/v2/comment`, params)
//  首页-备考—详情页-评论列表
export const referCommentv2 = (params) => axios.post(`/v2/referComment`, params)
// 48 首页-备考—详情页-点赞
export const commentPraisev2 = (params) => axios.post(`/v2/commentPraise`, params)
// 49 首页-备考—详情页-点赞
export const collectv2 = (params) => axios.post(`/v2/collect`, params)
// 50 首页-订单页面-v2
export const orderInfov2 = (params) => axios.post(`/v2/orderInfo`, params)
// 47 分校地区
export const branchDetailsv2 = (params) => axios.post(`/v2/branchDetails`, params)
// 48 分校首页
export const branchIndexv2 = (params) => axios.post(`/v2/branchIndex`, params)
// 49 分校公开课更多
export const branchFreev2 = (params) => axios.post(`/v2/branchFree`, params)
// 50 打卡营详情
export const campInfov2 = (params) => axios.post(`/v2/campInfo`, params)

// // 61 分校公开课
// export const branchRecommendv2 = (params) => {
//   return axios.post(`/v2/branchRecommend`, params)
// }
// 62 备考-搜索
export const referSearchv2 = (params) => axios.post(`/v2/referSearch`, params)
// 63 备考-搜索
export const orderCouponv2 = (params) => axios.post(`/v2/orderCoupon`, params)

// 51 公开课详情
export const coursewareDetailsv2 = (params) => axios.post(`/v2/coursewareDetails`, params)
// 64 公开课详情 createOrder
export const createOrderv2 = (params) => axios.post(`/v2/createOrder`, params)

// 52 课程详情-课程推荐
export const courseRecommendv2 = (params) => axios.post(`/v2/courseRecommend`, params)
// 70 百科-资讯
export const bkv2 = (params) => axios.post(`/v2/bk`, params)
// 71 备考—banner
export const referBannerv2 = (params) => axios.post(`/v2/referBanner`, params)
// 72 备考—帖子详情
export const referInfov2 = (params) => axios.post(`/v2/referInfo`, params)
// 73 分校推荐课
export const branchRecommendv2 = (params) => axios.post(`/v2/branchRecommend`, params)
// 74 首页-公开课|热门课程
export const homeCoursev2 = (params) => axios.post(`/v2/homeCourse`, params)
// 75 犀半球-帖子列表
export const xbqv2 = (params) => axios.post(`/v2/xbq`, params)
// 76 犀半球-帖子详情
export const xbqInfov2 = (params) => axios.post(`/v2/xbqInfo`, params)
// 77 个人中心-我的订单-绑定地址
export const bindAddressv2 = (params) => axios.post(`/v2/bindAddress`, params)
// 78 公考百科|品牌资讯—帖子详情
export const bkInfov2 = (params) => axios.post(`/v2/bkInfo`, params)

// 101  分校公开课标签
export const lablev2 = (params) => axios.post(`/v2/lable`, params)

//102微信绑定手机号功能
export const bindPhone = (params) => axios.post(`/v1/bindPhone`, params)
// //推荐课程
// export const courseRecommendv2 = (params) => {
//   return axios.post(`/v2/courseRecommend`, params)
// }

export const seov2 = (params) => axios.post(`/v2/seo`, params)
