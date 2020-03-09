import React, { Component } from 'react';
import Router from 'next/router';
import {
    homev2,
    homeCoursev2,
    homeXbqv2
} from '../http/getRes';
import {
    Head,
    GkbkItem,
    GkkItem,
    KcOnline,
    Tuangou,
    Kcbao,
    Ad,
    Daka
}  from '../components';
import {
    TranslateTime,
    getDateDiff
} from '../utils/util';
import {
    Carousel,
    Tabs
} from 'antd';
import styles from '/static/styles/index.less';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function onChange(a, b, c) {
    console.log(a, b, c);
}
export default class Index extends Component {
	constructor(props) {
        super(props);
    }
    static async getInitialProps({ req }) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            timestamp1: timestamp
        }
        const optionsa = {
            campus_id: 0,
            project_id: 0,
            timestamp: timestamp
        }
        const json = await homev2(params);
        const data = await homeCoursev2(optionsa);
        const jsondata = await homeXbqv2(params);
        return {
            articles: json.data.articles,
            banners: json.data.banners,
            bkArticles: json.data.bkArticles,
            bkBanners: json.data.bkBanners,
            columns: json.data.columns,
            labels: json.data.labels,
            news: json.data.news,
            free: data.data.free,
            courselist: data.data.recommend,
            callx: jsondata.data.call,
            cartoon: jsondata.data.cartoon,
            columnsx: jsondata.data.columns,
            len: jsondata.data.notes.length,
            makeit: jsondata.data.columns[0].id,
            notesx: jsondata.data.notes,
        }
    }
    componentDidMount () {
    }
    newsdetail = (obj, e) => {
        Router.push(
            {
                pathname: '/ziliao/detail',
                query: { id: obj.id }
            },
            `/ziliao/${obj.id}-0.html`
        )
    }
    goMore = (url, e) => {
        Router.push(
            {
                pathname: url
            }
        )
    }
	render () {
        const {
            articles,
            banners,
            bkArticles,
            bkBanners,
            columns,
            labels,
            news,
            free,
            courselist,
            callx,
            cartoon,
            columnsx,
            len,
            makeit,
            notesx
        } = this.props;
		return (
			<div>
				<Head
                    title=""
                    keywords=""
                    description=""
				/>
				<div className={styles['index_view']}>
                    <div className={`${styles['index_view_section']} ${styles.between}`}>
                        <div className={styles['index_view_section_banners']}>
                            {
                                banners &&
                                <Carousel autoplay>
                                    {
                                        banners.map(item =>
                                            <div className={styles['index_view_section_banners_item']} key={item.img_url}>
                                                <img className={styles['index_view_section_banners_item_img']} src={item.img_url} />
                                            </div>
                                        )
                                    }
                                </Carousel>
                            }
                        </div>
                        <div className={styles['index_view_section_toutiao']}>
                            <div className={`${styles.between} ${styles['index_view_section_toutiao_title']}`}>
                                犀头条
                                <div className={styles['more']} onClick={this.goMore.bind(this, '/xiniao')}>
                                    更多
                                    <img className={styles['mustright']} src="/static/images/gengduo.png" alt=""></img>
                                </div>
                            </div>
                            <div className={styles['index_view_section_toutiao_list']}>
                                {
                                    news.length && news.map(item=>
                                        <div className={`${styles['index_view_section_toutiao_list_item']} ${styles.between}`} key={item.id}>
                                            <img src={item.cover} className={styles['index_view_section_toutiao_list_item_img']} />
                                            <div className={styles['index_view_section_toutiao_list_item_content']}>
                                                <div className={`${styles['index_view_section_toutiao_list_item_content_title']} ${styles['clamp2']}`}>
                                                    {item.title}
                                                </div>
                                                <div className={`${styles.between} ${styles['index_view_section_toutiao_list_item_content_info']}`}>
                                                    <span>{item.source}</span>
                                                    <span>{TranslateTime(item.create_time)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['index_view_section']} ${styles.between}`}>
                        <div className={styles['index_view_section_kaoshi']}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                {
                                    columns.length && columns.map(item =>
                                        <TabPane tab={item.title} key={item.id}>
                                            {
                                                articles.length && articles.map((item, index) =>{
                                                    return (
                                                        <div key={item.id} onClick={this.newsdetail.bind(this, item)}>
                                                            {
                                                                index == 0 ? (
                                                                    <div className={`${styles.between} ${styles['first']}`}>
                                                                        <img src={item.img_url} />
                                                                        <div className={styles['first_main']}>
                                                                            <div className={styles['first_main_title']}>
                                                                                <span>{item.plate}</span>&nbsp;|&nbsp;{item.title}
                                                                            </div>
                                                                            <div className={`${styles.between} ${styles['first_main_content']}`}>
                                                                                <div className={`${styles['first_main_content_desc']} ${styles.clamp2}`}>
                                                                                    {item.abstract}
                                                                                </div>
                                                                                <div className={styles['first_main_content_time']}>
                                                                                    {getDateDiff(item.regdate)}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <div className={`${styles['index_view_section_kaoshi_item']} ${styles.between}`}>
                                                                        <div className={styles['index_view_section_kaoshi_item_content']}>
                                                                            <span>{item.plate}</span>&nbsp;|&nbsp;{item.title}
                                                                        </div>
                                                                        <div className={styles['index_view_section_kaoshi_item_time']}>
                                                                            {TranslateTime(item.regdate)}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </TabPane>
                                    )
                                }
                            </Tabs>
                        </div>
                        <div className={styles['index_view_section_ksxiangguan']}>
                            <div className={styles['index_view_section_ksxiangguan_title']}>
                                考试相关
                            </div>
                            <div className={styles['index_view_section_ksxiangguan_list']}>
                                {
                                    bkBanners.length && bkBanners.map(item =>
                                        <img className={styles['index_view_section_ksxiangguan_list_item']} src={item.img_url} key={item.img_url} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles['index_view_gkbaike']}>
                        <div className={styles['index_view_gkbaike_tabs']}>
                            <div className={styles['index_view_gkbaike_tabs_title']}>公考百科</div>
                            <ul className={`${styles.clearfix} ${styles['index_view_gkbaike_tabs_list']}`}>
                                {
                                    labels.length && labels.map(item=>
                                        <li className={styles['index_view_gkbaike_tabs_list_item']} key={item.id}>
                                            {item.name}
                                        </li>
                                    )
                                }
                            </ul>
                            <div className={styles['more']} onClick={this.goMore.bind(this, '/gkbaike')}>
                                更多
                                <img className={styles['mustright']} src="/static/images/gengduo.png" alt=""></img>
                            </div>
                        </div>
                        <div className={styles['index_view_gkbaike_list']}>
                            {
                                bkArticles.length && bkArticles.map(item =>
                                    <GkbkItem key={item.id} data={item} />
                                )
                            }
                        </div>
                    </div>
                    <div className={styles['index_view_gongkaike']}>
                        <div className={`${styles['index_view_gongkaike_header']} ${styles.between}`}>
                            <div className={styles['index_view_gongkaike_header_title']}>
                                公开课
                            </div>
                            <div className={styles['more']} onClick={this.goMore.bind(this, '/gkc')}>
                                更多
                                <img className={styles['mustright']} src="/static/images/gengduo.png" alt=""></img>
                            </div>
                        </div>
                        <div className={styles['index_view_gongkaike_list']}>
                            {
                                free.length && free.map(item=>
                                    <GkkItem key={item.id} data={item} />
                                )
                            }
                        </div>
                    </div>
                    <div className={styles['index_view_remen']}>
                        <div className={`${styles['index_view_remen_header']} ${styles.between}`}>
                            <div className={styles['index_view_remen_header_title']}>
                                热门课程
                            </div>
                            <div className={styles['more']} onClick={this.goMore.bind(this, '/gkbaike')}>
                                更多
                                <img className={styles['mustright']} src="/static/images/gengduo.png" alt=""></img>
                            </div>
                        </div>
                        <div className={styles['index_view_remen_list']}>
                            {
                                courselist.length && courselist.map(item=>{
                                    return (
                                        <div className={styles['index_view_remen_list_item']} key={item.id}>
                                            {
                                                (item.type == 1&&item.relate_type == 3) &&
                                                <KcOnline data={item}/>
                                            }
                                            {
                                                (item.type == 1&&item.relate_type == 8) &&
                                                <Tuangou data={item}/>
                                            }
                                            {
                                                (item.type == 1&&item.relate_type == 2) &&
                                                <Kcbao data={item}/>
                                            }
                                            {
                                                (item.type == 1&&item.relate_type == 7) &&
                                                <Ad data={item}/>
                                            }
                                            {
                                                (item.type == 2) &&
                                                <Daka data={item}/>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles['index_view_xibanqiu']}>
                        <div className={styles['index_view_xibanqiu_title']}>
                            <img src="/static/images/icon/xi.png" />
                            犀半球
                        </div>
                        <div className={`${styles['index_view_xibanqiu_main']} ${styles.between}`}>
                            <div className={styles['index_view_xibanqiu_main_vedios']}>
                                <div className={styles['index_view_xibanqiu_main_vedios_title']}>
                                    明星打CALL
                                </div>
                                <div className={styles['more']} onClick={this.goMore.bind(this, '/xibanqiu')}>
                                    更多
                                    <img className={styles['mustright']} src="/static/images/gengduo.png" alt=""></img>
                                </div>
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    {
                                        callx.length && callx.map(item =>
                                            <TabPane tab={item.title} key={item.id}>
                                                <div className={styles['index_view_xibanqiu_main_vedios_content']}>
                                                    <video
                                                        controls="controls"
                                                        className={styles['index_view_xibanqiu_main_vedios_content_src']}
                                                        width="100%"
                                                        height="auto"
                                                        src={callx[0].video}>
                                                    </video>
                                                </div>
                                            </TabPane>
                                        )
                                    }
                                </Tabs>
                            </div>
                            <div className={styles['index_view_xibanqiu_main_jianghu']}>
                                <div className={`${styles['index_view_xibanqiu_main_jianghu_header']} ${styles.between}`}>
                                    <div className={styles['index_view_xibanqiu_main_jianghu_header_title']}>
                                        公考浆糊
                                    </div>
                                    <div className={styles['more']} onClick={this.goMore.bind(this, '/xibanqiu')}>
                                        更多
                                        <img className={styles['mustright']} src="/static/images/gengduo.png" alt="" />
                                    </div>
                                </div>
                                <div className={styles['index_view_xibanqiu_main_jianghu_list']}>
                                    {
                                        cartoon.length && cartoon.map(item=>
                                            <div className={styles['index_view_xibanqiu_main_jianghu_list_item']} key={item.id}>
                                                <img src={item.cover_img}/>
                                                <div className={`${styles['index_view_xibanqiu_main_jianghu_list_item_title']} ${styles.clamp2}`}>{item.title}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles['index_view_xibanqiu_vediomain']}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                {
                                    columnsx.length && columnsx.map(item =>
                                        <TabPane tab={item.name} key={item.id}>
                                            <div className={styles['index_view_xibanqiu_vediomain_list']}>
                                                {
                                                    notesx.length && notesx.map(item=>
                                                        <div className={styles['index_view_xibanqiu_vediomain_list_item']} key={item.id}>
                                                            <img className={styles['index_view_xibanqiu_vediomain_list_item_cover']} src={item.cover_img} />
                                                            <img className={styles['index_view_xibanqiu_vediomain_list_item_player']} src="/static/images/icon/bofang.png" />
                                                        </div>
                                                    )
                                                }
                                                {/* <div v-for="item in (row-len%row)" v-if="len%row > 0" v-bind:key="item.url" class="list"></div> */}
                                            </div>
                                        </TabPane>
                                    )
                                }
                            </Tabs>
                        </div>
                    </div>
                    <div className={styles['index_view_about']}>
                        <div className={styles['index_view_about_title']}>
                        关于犀鸟
                        </div>
                        <div className={`${styles['index_view_about_main']} ${styles.between}`}>
                            <img src="/static/images/guanyuxiniao1.png" />
                            <div className={styles['index_view_about_main_content']}>
                                <div className={styles['index_view_about_main_content_desc']}>
                                    犀鸟教育由一帮对教育始终“ 念念不忘 ”的80后联合创立，创始团队每一个人都有10年以上的行业经验，犀鸟以大学生考试为核心业务，坚持做一家不一样的教育公司。<br/>
                                    第一：以“<span> 线下授课+线上做课后辅导督学</span> ”的产品方式来最大限度的提升通过率；
                                    第二：超强督学的模式，逼每一个学生都能坚持下去；
                                    第三：老师全程跟踪，随时答疑，一直服务到考前；
                                    第四：游戏化产品设计，让学习不枯燥。<br/>
                                    犀鸟旗下品牌包括：
                                    <span>犀鸟公考、 跳兔考研、花象教师、肥狐金融、学长请回答、犀半球。</span>
                                </div>
                                <div className={styles['index_view_about_main_content_link']}>
                                    <a href="https://mp.weixin.qq.com/s/tIcnLUm-_frz-1ro-Qr2zA" target="_blank">
                                        【群星祝福】这些明星送来了2020上岸祝福，点进来看有没有你的pick？
                                    </a>
                                </div>
                                <div className={styles['index_view_about_main_content_link1']}>
                                    <a href="http://guoqing.china.com.cn/2019-10/11/content_75291900.htm" target="_blank">
                                        【品牌新闻】犀鸟公考独创个性化培训 助力大学生一次上岸
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}
