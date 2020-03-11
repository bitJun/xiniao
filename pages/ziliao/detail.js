import React, { Component } from 'react';
import {
    Head
}  from '../../components';
import {
    Input
} from 'antd';
import {
    referInfov2,
    referCommentv2,
    commentv2,
    commentPraisev2,
    addPraise,
    referBannerv2,
    collectv2,
    freshenToken,
    phoneLogin,
    loginphone
} from '../../http/getRes';
import {
    TranslateTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/ziliao/detail.less';
const { Search } = Input;

export default class ZiliaoDetail extends Component{
    constructor (props) {
        super(props);
        this.state = {
            newprojectsId: 0,
            platesId: 0,
        }
    }
    static async getInitialProps(context) {
        const { id } = context.query;
        const querys = id.split('.')[0].split('-');
        const article_id = querys[0];
        let campus_id = 0;
        if (querys.length > 1) {
            campus_id = querys[1];
        }
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            campus_id: campus_id,
            article_id: article_id,
            timestamp: timestamp
        }
        const options = {
            campus_id: campus_id,
            timestamp: timestamp
        }
        const { data } = await referInfov2(params);
        console.log('datadatadata', data);
        const json = await referCommentv2(params);
        const jsondata = await referBannerv2(options);
        return {
            menulist: data,
            acaa: data.annex,
            abc: 0,
            takeset: json.data,
            banners: jsondata.data,
            shoucang: null
        }
    }
    setdetails = (item, e) => {
        if (item.type === 2 || item.type === '2' && item.redirect_url && item.redirect_url !== '') {
            window.open(item.redirect_url, '_blank')
        }
    }
    shareqq () {
        var p = {
            url: 'https://www.xiniaogongkao.com', // /*获取URL，可加上来自分享到QQ标识，方便统计*/
            desc: '来自犀鸟铲屎官的分享', // /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
            title: '犀鸟公考', // /*分享标题(可选)*/
            summary: '犀鸟公考犀鸟公考', // /*分享描述(可选)*/
            pics: pic, // /*分享图片(可选)*/
            flash: '', // /*视频地址(可选)*/
            // commonClient : true, /*客户端嵌入标志*/
            site: 'QQ分享' // /*分享来源 (可选) ，如：QQ分享*/
        }
        let s = []
        for (var i in p) {
            s.push(i + '=' + encodeURIComponent(p[i] || ''))
        }
        let target_url = 'http://connect.qq.com/widget/shareqq/index.html?' + s.join('&');
        if (typeof window == 'object') {
            window.open(target_url, 'qq', 'height=1080, width=1920')
        }
    }
    setInmg = (item, e) => {
        window.location.href = item.url
    }
    render () {
        const {
            menulist,
            acaa,
            takeset,
            banners,
            abc,
            shoucang
        } = this.props;
        return (
            <div className={styles['zldetail_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                {
                    (abc == 0 && menulist.exam_number != 0) &&
                    <div className={`${styles['zldetail_view_numbers']} ${styles.clearfix}`}>
                        <div className={styles['zldetail_view_numbers_left']}>
                            <img
                                className={styles['zldetail_view_numbers_left_img']}
                                src="/static/images/yaodian.png"
                            />
                            <ul className={styles['zldetail_view_numbers_left_ul']}>
                                {
                                    menulist.exam_area != ''&&
                                    <li>
                                        招考地区：<span classNmae={styles['zldetail_view_numbers_left_ul_span']}>{menulist.exam_area}</span>
                                    </li>
                                }
                                {
                                    menulist.exam_department != ''&&
                                    <li>
                                        招考部门：<span>{menulist.exam_department}</span>
                                    </li>
                                }
                                {
                                    menulist.exam_number != ''&&
                                    <li>
                                        招考人数：<span>{menulist.exam_number}</span>
                                    </li>
                                }
                                {
                                    menulist.exam_subject != ''&&
                                    <li>
                                        考试科目：<span>{menulist.exam_subject}</span>
                                    </li>
                                }
                                {
                                    menulist.sign_time != ''&&
                                    <li>
                                        报名时间：<span>{menulist.sign_time}</span>
                                    </li>
                                }
                                {
                                    menulist.mark_time != ''&&
                                    <li>
                                        准考证打印时间：<span>{menulist.mark_time}</span>
                                    </li>
                                }
                                {
                                    menulist.exam_time != ''&&
                                    <li>
                                        考试时间：<span>{menulist.exam_time}</span>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className={styles['zldetail_view_numbers_right']}>
                            {
                                banners.length && banners.map(item=>
                                    <div className={styles['zldetail_view_numbers_right_item']} key={item.img_url}>
                                        <img
                                            className={styles['zldetail_view_numbers_right_item_img']}
                                            src={item.img_url}
                                            onClick={this.setdetails.bind(this, item)}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
                <div className={`${styles['zldetail_view_main']} ${styles.between}`}>
                    <div className={styles['zldetail_view_main_content']}>
                        <div className={styles['zldetail_view_main_content_title']}>
                            {menulist.title}
                        </div>
                        <div className={styles['zldetail_view_main_content_subtitle']}>
                            {
                                menulist.regdate &&
                                <div>
                                    <img
                                        className={styles['zldetail_view_main_content_subtitle_img']}
                                        src="/static/images/icon/riqi.png" alt="" />
                                    {(menulist.regdate).replace(/\-/g,".")}
                                    <span>
                                        来源：{menulist.author}
                                    </span>
                                </div>
                            }
                            <div className={styles['zldetail_view_main_content_subtitle_share']}>
                                <span>分享到：</span>
                                <img src="/static/images/icon/wechatshare.png" title="分享到微信" />
                                <img src="/static/images/icon/qqshare.png" title="分享到QQ" onClick={this.shareqq} />
                                <img src="/static/images/icon/weiboshare.png" title="分享到微博" onClick={this.shareToSinaWB} />
                            </div>
                        </div>
                        <div className={styles['zldetail_view_main_content_info']} dangerouslySetInnerHTML={{ __html: menulist.content }}></div>
                        {
                            acaa.length &&
                            <div className={styles['zldetail_view_main_content_others']}>
                                <div className={styles['zldetail_view_main_content_others_title']}>
                                    附件
                                </div>
                                {
                                    menulist.annex.map((item, index)=>
                                        <div className={styles['zldetail_view_main_content_others_list']} key={item.id} onClick={this.setInmg.bind(this, item)}>
                                            附件{index + 1}： {item.name}
                                        </div>
                                    )
                                }
                            </div>
                        }
                    </div>
                    <div className={styles['zldetail_view_main_banners']}>
                        {
                            banners.length && banners.map(item=>
                                <div className={styles['zldetail_view_main_banners_item']} key={item.img_url}>
                                    <img className={styles['zldetail_view_main_banners_item_img']} src={item.img_url} />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={styles['zldetail_view_bottomsss']}>
                    <div className={styles['zldetail_view_bottomsss_main']}>
                        <div className={styles['zldetail_view_bottomsss_main_left']}>
                            <div className={styles['zldetail_view_bottomsss_main_left_section']}>
                                <img
                                    className={styles['zldetail_view_bottomsss_main_left_section_img']}
                                    src="/static/images/icon/pinglun.png" alt="" />
                                {menulist.comment_num}
                            </div>
                            <div className={styles['zldetail_view_bottomsss_main_left_section1']}>
                                {
                                    (menulist.is_collect === 0 && shoucang === null) ? (
                                        <img src="/static/images/icon/shoucang.png" alt="" />
                                    ):(
                                        <img src="/static/images/icon/shoucang1.png" alt="" />
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles['zldetail_view_bottomsss_main_content']}>
                            <input
                                type="text"
                                placeholder="为了轻松上岸，我准备发个言"
                            />
                            <div>评论</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
