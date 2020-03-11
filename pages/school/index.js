import React, { Component } from 'react';
import Router from 'next/router';
import {
    Head,
    GkbkItem,
    GkkItem,
    KcOnline,
    Tuangou,
    Kcbao,
    Ad,
    Daka
}  from '../../components';
import {
    branchDetailsv2,
    branchIndexv2
} from '../../http/getRes';
import {
    Carousel,
    Tabs
} from 'antd';
import {
    TranslateTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/school/index.less';
const { TabPane } = Tabs;

const options = {
    timestamp: null,
    campus_id: null,
    project_id: 0
}
export default class Online extends Component{
    constructor (props) {
        super(props);
        this.state = {
            asPath: props.asPath || null,
            banners: props.banners || null,
            campus_data: props.campus_data || null,
            project_data: props.project_data || null,
            courselist: props.courselist || null,
            free: props.free || null,
            ifarticle: props.ifarticle || null,
            article0: props.article0 || null,
            article1: props.article1 || null,
            num: 0,
            schoolcenter: props.campus_data[0].learn_center_data
        }
    }
    static async getInitialProps(context) {
        const { asPath } = context;
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            timestamp: timestamp,
            campus_id: null
        }
        options.timestamp = timestamp;
        switch (asPath) {
            case '/wuhan':
                params.campus_id = 1;
                options.campus_id = 1;
                break;
            case 'shandong':
                params.campus_id = 2;
                options.campus_id = 2;
                break;
            default:
                params.campus_id = 1;
                options.campus_id = 1;
                break;
        }
        const { data } = await branchDetailsv2(params);
        const json = await branchIndexv2(options);
        return {
            asPath: context.asPath,
            banners: data.banners,
            campus_data: data.campus_data,
            project_data: data.project_data,
            courselist: json.data.recommend_course,
            free: json.data.free,
            ifarticle: json.data.article,
            article0: json.data.article[0],
            article1: json.data.article[1],
        }
    }
    changeTabs (key) {}
    goMore = (url, e) => {
        Router.push(
            {
                pathname: url
            }
        )
    }
    godetail = (id, e) => {
        Router.push(
            {
                pathname: '/ziliao/detail',
                query: { id: id }
            },
            `/ziliao/${id}-0.html`
        )
    }
    render () {
        const {
            banners,
            campus_data,
            project_data,
            courselist,
            free,
            ifarticle,
            article0,
            article1,
            num,
            schoolcenter
        } = this.state;
        return (
            <div className={styles['school_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div className={styles['school_view_banners']}>
                    <Carousel autoplay>
                        {
                            banners.length && banners.map(item=>
                                <img src={item.img_url} key={item.img_url} className={styles['school_view_banners_item']} />
                            )
                        }
                    </Carousel>
                </div>
                <div className={styles['school_view_info']}>
                    <div className={styles['school_view_info_schoolname']}>
                        {
                            campus_data.length && campus_data.map((item, index)=>
                                <div className={`${styles['school_view_info_schoolname_item']} ${index == num ? `${styles.active}` : ''}`} key={item.id}>{item.name}</div>
                            )
                        }
                    </div>
                    <div className={styles['school_view_info_schoolInfo']}>
                        {
                            schoolcenter.length && schoolcenter.map(item=>
                                <div className={styles['school_view_info_schoolInfo_item']} key={item.id}>
                                    <div className={styles['school_view_info_schoolInfo_item_name']}>
                                        {item.name}
                                    </div>
                                    <div className={`${styles['school_view_info_schoolInfo_item_address']} ${styles.clamp2}`}>
                                        {item.address}
                                    </div>
                                    <div className={styles['school_view_info_schoolInfo_item_phone']}>
                                        {item.phone}
                                    </div>
                                </div>
                            )
                        }
                        <div className={styles['school_view_info_schoolInfo_masImg']}>
                            <img src="/static/images/icon/fenxiao-erweima.png" className={styles['school_view_info_schoolInfo_masImg_icon']} />
                            <div className={styles['school_view_info_schoolInfo_masImg_code']}>
                                <img src={campus_data[num].code_path} />
                            </div>
                            <div className={styles['school_view_info_schoolInfo_masImg_tip']}>领取备考资料</div>
                        </div>
                    </div>
                </div>
                <div className={styles['school_view_main']}>
                    <Tabs defaultActiveKey="0" onChange={this.changeTabs}>
                        {
                            project_data.length && project_data.map(item=>
                                <TabPane tab={item.name} key={item.id}>
                                    {
                                        <div className={`${styles['school_view_main_section']} ${styles.between}`}>
                                            {
                                                ifarticle.length && ifarticle.map((json, index)=>
                                                    <div className={styles['school_view_main_section_content']} key={json.id}>
                                                        <div className={styles['school_view_main_section_content_name']}>
                                                            {
                                                                index == 0 &&
                                                                <img
                                                                    src="/static/images/icon/fenxiao-zuo.png"
                                                                    className={styles['school_view_main_section_content_name_icon']}
                                                                />
                                                            }
                                                            {
                                                                index == 1 &&
                                                                <img
                                                                    src="/static/images/icon/fenxiao-zuo.png"
                                                                    className={styles['school_view_main_section_content_name_icon']}
                                                                />
                                                            }
                                                            <span>{json.name}</span>
                                                            <div className={styles['more']} onClick={this.goMore.bind(this, '/xibanqiu')}>
                                                                更多
                                                                <img className={styles['mustright']} src="/static/images/gengduo.png" alt="" />
                                                            </div>
                                                        </div>
                                                        {
                                                            json.data.map((val, key)=>
                                                                <div
                                                                    className={`${styles['school_view_main_section_content_container']} ${key == 0 ? `${styles['first']}` : ''}`}
                                                                    key={val.ra_id}
                                                                    onClick={this.godetail.bind(this, val.ra_id)}>
                                                                    {
                                                                        (key == 0  && val.ra_img_url && val.ra_img_url!='') &&
                                                                        <img src={val.ra_img_url} className={styles['first_img']}/>
                                                                    }
                                                                    {
                                                                        (key == 0  && (!val.ra_img_url || val.ra_img_url=='')) &&
                                                                        <img src='/static/images/zhanwei-1.png' className={styles['first_img']}/>
                                                                    }
                                                                    {
                                                                        key == 0 ? (
                                                                            <div className={styles['school_view_main_section_content_container_detail']}>
                                                                                <div className={`${styles['school_view_main_section_content_container_detail_title']} ${styles.clamp2}`}>
                                                                                    {val.rp_title} | {val.ra_title}
                                                                                </div>
                                                                                <div className={`${styles['school_view_main_section_content_container_detail_desc']} ${styles.between}`}>
                                                                                    <div className={`${styles['school_view_main_section_content_container_detail_desc_abstract']} ${styles.clamp}`}>{val.ra_abstract}</div>
                                                                                    <div className={styles['school_view_main_section_content_container_detail_desc_time']}>{TranslateTime(val.ra_release_date)}</div>
                                                                                </div>
                                                                            </div>
                                                                        ) : (
                                                                            <div className={`${styles['school_view_main_section_content_container_details']} ${styles.between}`}>
                                                                                <div className={`${styles['school_view_main_section_content_container_details_left']} ${styles.clamp}`}>
                                                                                    {
                                                                                        val.ra_sign_status !='' &&
                                                                                            <span>.{val.ra_sign_status}.</span>
                                                                                    }
                                                                                    <span>{val.rp_title}&nbsp;</span>
                                                                                    {val.ra_title}
                                                                                </div>
                                                                                <div>{TranslateTime(val.ra_release_date)}</div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    }
                                </TabPane>
                            )
                        }
                    </Tabs>
                </div>
                <div className={styles['school_view_gkk']}>
                    <div className={styles['school_view_gkk_title']}>
                        <span>公开课</span>
                        <div className={styles['more']} onClick={this.goMore.bind(this, '/gkc')}>
                            更多
                            <img className={styles['mustright']} src="/static/images/gengduo.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['school_view_gkk_list']}>
                        {
                            free.length && free.map(item=>
                                <GkkItem key={item.id} data={item} />
                            )
                        }
                    </div>
                </div>
                <div className={styles['school_view_tuijian']}>
                    <div className={styles['school_view_tuijian_title']}>
                        <span>推荐课程</span>
                        <div className={styles['more']} onClick={this.goMore.bind(this, '/gkc')}>
                            更多
                            <img className={styles['mustright']} src="/static/images/gengduo.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['school_view_tuijian_list']}>
                        {
                            courselist.length && courselist.map(item=>
                                <div className={styles['school_view_tuijian_list_item']} key={item.id}>
                                    {
                                        (item.recommend_type == 1&&item.type == 3) &&
                                        <KcOnline data={item}/>
                                    }
                                    {
                                        (item.recommend_type == 1&&item.type == 8) &&
                                        <Tuangou data={item}/>
                                    }
                                    {
                                        (item.recommend_type == 1&&item.type == 2) &&
                                        <Kcbao data={item}/>
                                    }
                                    {
                                        (item.recommend_type == 1&&item.type == 7) &&
                                        <Ad data={item}/>
                                    }
                                    {
                                        (item.recommend_type == 2) &&
                                        <Daka data={item}/>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
