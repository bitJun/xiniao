import React, { Component } from 'react';
import {
    Head
}  from '../../components';
import {
    Carousel
} from 'antd';
import styles from '/static/styles/online/index.less';

export default class Online extends Component{
    constructor (props) {
        super(props);
        this.state = {
            imgsb: [
                {
                    url: '/static/images/move/xibanqiu1.png',
                    link: '/content1'
                },
                {
                    url: '/static/images/move/xibanqiu2.png',
                    link: '/content2'
                }
            ],
            imgsa: [
                {
                    url: '/static/images/move/gongkao1.png',
                    link: '/content1'
                },
                {
                    url: '/static/images/move/gongkao2.png',
                    link: '/content2'
                }
            ],
            imgsc: [
                {
                    url: '/static/images/move/Shenlunjiafen1.png',
                    link: '/content1'
                },
                {
                    url: '/static/images/move/Shenlunjiafen2.png',
                    link: '/content2'
                }
            ],
            imgsd: [
                {
                    url: '/static/images/move/guokaoshenlun1.png',
                    link: '/content1'
                },
                {
                    url: '/static/images/move/guokaoshenlun2.png',
                    link: '/content2'
                },
                {
                    url: '/static/images/move/guokaoshenlun3.png',
                    link: '/content2'
                }
            ],
            imgsf: [
                {
                    url: '/static/images/move/ketang1.png',
                    link: '/content1'
                },
                {
                    url: '/static/images/move/ketang2.png',
                    link: '/content2'
                }
            ]
        }
    }
    handleSwipe = (e) => {
        console.log('e', e);
    }
    render () {
        const {
            imgsb,
            imgsa,
            imgsc,
            imgsd,
            imgsf
        } = this.state;
        return (
            <div className={styles['online_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div className={`${styles['online_view_platelist']} ${styles.between}`}>
                    <div className={`${styles['online_view_platelist_app']}`}>
                        <div className={styles['online_view_platelist_app_title']}>APP</div>
                        <div className={`${styles['online_view_platelist_app_list']} ${styles.between}`}>
                            <div className={styles['online_view_platelist_app_list_item']}>
                                <img className={styles['online_view_platelist_app_list_item_img']} src="/static/images/share_icon/xngkicon.png" alt=""/>
                                <div className={styles['online_view_platelist_app_list_item_name']}>犀鸟公考</div>
                            </div>
                            <div className={styles['online_view_platelist_app_list_item']}>
                                <img className={styles['online_view_platelist_app_list_item_img']} src="/static/images/share_icon/xibanqiu.png" alt=""/>
                                <div className={styles['online_view_platelist_app_list_item_name']}>犀半球</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['online_view_platelist_wechat']}`}>
                        <div className={styles['online_view_platelist_wechat_title']}>小程序</div>
                        <div className={`${styles['online_view_platelist_wechat_list']} ${styles.between}`}>
                            <div className={styles['online_view_platelist_wechat_list_item']}>
                                <img className={styles['online_view_platelist_wechat_list_item_img']} src="/static/images/share_icon/shenlun.png" alt=""/>
                                <div className={styles['online_view_platelist_wechat_list_item_name']}>申论加分项</div>
                            </div>
                            <div className={styles['online_view_platelist_wechat_list_item']}>
                                <img className={styles['online_view_platelist_wechat_list_item_img']} src="/static/images/share_icon/guokao.png" alt=""/>
                                <div className={styles['online_view_platelist_wechat_list_item_name']}>国考历年分数线</div>
                            </div>
                            <div className={styles['online_view_platelist_wechat_list_item']}>
                                <img className={styles['online_view_platelist_wechat_list_item_img']} src="/static/images/share_icon/xntticon.png" alt=""/>
                                <div className={styles['online_view_platelist_wechat_list_item_name']}>犀听听</div>
                            </div>
                            <div className={styles['online_view_platelist_wechat_list_item']}>
                                <img className={styles['online_view_platelist_wechat_list_item_img']} src="/static/images/share_icon/xnzbicon.png" alt=""/>
                                <div className={styles['online_view_platelist_wechat_list_item_name']}>犀鸟课堂</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['online_view_main']}>
                    <div className={styles['online_view_main_section']}>
                        <div className={styles['online_view_main_section_header']}>
                            犀鸟公考
                            <div className={styles['online_view_main_section_header_version']}>
                                <span>版本：3.0.0</span>|<span>更新日期：2019.12.10</span>
                            </div>
                        </div>
                        <div className={`${styles['online_view_main_section_container']}`}>
                            <div className={styles['online_view_main_section_container_desc']}>
                                <div className={styles['online_view_main_section_container_desc_livemain']}>
                                    <div className={styles['online_view_main_section_container_desc_livemain_img']}>
                                        <img src="/static/images/move/gongkao.png" />
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc_livemain_title']}>
                                        &nbsp;&nbsp;扫码下载犀鸟公考APP
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc_livemain_content']}>
                                        犀鸟公考——公考上岸必备神器，公考名师实力推荐！ 公务员省考国考上岸必备神器！ 犀鸟公考app正式上线啦！ 名师免费给你直播教课，省考国考真题一网打尽 ；上万习题任你刷， 随时随地想学就学；闯关刷题玩游戏，轻松上岸很容易。一样的公考，不一样的上岸体验！
                                    </div>
                                </div>
                            </div>
                            <Carousel autoplay>
                                {
                                    imgsa.map(item=>
                                        <div key={item.url} className={styles['online_view_main_section_container_swipers']}>
                                            <img src={item.url} className={styles['online_view_main_section_container_swipers_img']} />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles['online_view_main_section']}>
                        <div className={styles['online_view_main_section_header']}>
                            犀半球
                            <div className={styles['online_view_main_section_header_version']}>
                                <span>版本：1.0.0</span>|<span>更新日期：2019.11.07</span>
                            </div>
                        </div>
                        <div className={`${styles['online_view_main_section_container']}`}>
                            <div className={styles['online_view_main_section_container_desc1']}>
                                <div className={styles['online_view_main_section_container_desc1_livemain']}>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_img']}>
                                        <img src="/static/images/move/gongkao.png" />
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_title']}>
                                        犀半球
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_content']}>
                                        现场探班、独家爆料、明星周边、限量亲签！！！帅、酷、萌学长在线回答，等你来问；名师科普学习、考试、求职一次都能上岸；犀半球APP 我的大学生活就要这么酷。
                                    </div>
                                </div>
                            </div>
                            <Carousel autoplay>
                                {
                                    imgsb.map(item=>
                                        <div key={item.url} className={styles['online_view_main_section_container_swipers']}>
                                            <img src={item.url} className={styles['online_view_main_section_container_swipers_img']} />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles['online_view_main_section']}>
                        <div className={styles['online_view_main_section_header']}>
                            申论加分项
                            <div className={styles['online_view_main_section_header_version']}>
                                <span>版本：1.0.3</span>|<span>更新日期：2019.08.20</span>
                            </div>
                        </div>
                        <div className={`${styles['online_view_main_section_container']}`}>
                            <div className={styles['online_view_main_section_container_desc']}>
                                <div className={styles['online_view_main_section_container_desc_livemain']}>
                                    <div className={styles['online_view_main_section_container_desc_livemain_img']}>
                                        <img src="/static/images/move/shenlunweixin.png" />
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc_livemain_title']}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;扫码关注申论加分项
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc_livemain_content']}>
                                    由犀鸟公考打造，创新申论闯关模式，高效训练答题模式，名师1对1精批，申论热点分享，名师点评范文。
                                    </div>
                                </div>
                            </div>
                            <Carousel autoplay>
                                {
                                    imgsc.map(item=>
                                        <div key={item.url} className={styles['online_view_main_section_container_swipers']}>
                                            <img src={item.url} className={styles['online_view_main_section_container_swipers_img']} />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles['online_view_main_section']}>
                        <div className={styles['online_view_main_section_header']}>
                            国考历年分数线
                            <div className={styles['online_view_main_section_header_version']}>
                                <span>版本：1.4.1</span>|<span>更新日期：2019.11.01</span>
                            </div>
                        </div>
                        <div className={`${styles['online_view_main_section_container']}`}>
                            <div className={styles['online_view_main_section_container_desc1']}>
                                <div className={styles['online_view_main_section_container_desc1_livemain']}>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_img']}>
                                        <img src="/static/images/move/guokaoweix.png" />
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_title']}>
                                        扫码关注国考历年分数线
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_content']}>
                                        由犀鸟公考打造，公务员招录，报名，考试指导，国考职位岗位查询。
                                    </div>
                                </div>
                            </div>
                            <Carousel autoplay>
                                {
                                    imgsd.map(item=>
                                        <div key={item.url} className={styles['online_view_main_section_container_swipers']}>
                                            <img src={item.url} className={styles['online_view_main_section_container_swipers_img']} />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles['online_view_main_section']}>
                        <div className={styles['online_view_main_section_header']}>
                            犀鸟听听
                            <div className={styles['online_view_main_section_header_version']}>
                                <span>版本：1.0.4</span>|<span>更新日期：2019.05.21</span>
                            </div>
                        </div>
                        <div className={`${styles['online_view_main_section_container']}`}>
                            <div className={styles['online_view_main_section_container_desc']}>
                                <div className={styles['online_view_main_section_container_desc_livemain']}>
                                    <div className={styles['online_view_main_section_container_desc_livemain_img']}>
                                        <img src="/static/images/move/xntingting.png" />
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc_livemain_title']}>
                                        &nbsp;扫码关注犀鸟听听小程序
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc_livemain_content']}>
                                        犀鸟听听是犀鸟公考的同类型辅助产品，犀鸟听听提供给考生热点的音频，方便考生利用碎片时间轻松的吸收关于公考的最新资讯。
                                    </div>
                                </div>
                            </div>
                            <img className={styles['online_view_main_section_container_bannerImg']} src="/images/move/pic_tingting.png" alt=""/>
                        </div>
                    </div>
                    <div className={styles['online_view_main_section']}>
                        <div className={styles['online_view_main_section_header']}>
                            犀鸟课堂
                            <div className={styles['online_view_main_section_header_version']}>
                                <span>版本：1.6.0</span>|<span>更新日期：2019.11.01</span>
                            </div>
                        </div>
                        <div className={`${styles['online_view_main_section_container']}`}>
                            <div className={styles['online_view_main_section_container_desc1']}>
                                <div className={styles['online_view_main_section_container_desc1_livemain']}>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_img']}>
                                        <img src="/static/images/move/xnewm.png" />
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_title']}>
                                        扫码关注犀鸟课堂小程序
                                    </div>
                                    <div className={styles['online_view_main_section_container_desc1_livemain_content']}>
                                        犀鸟课堂是犀鸟公考的高级课程看课平台。 犀鸟课堂通过比较科学的方式将众多公考名师课程设计成 易看、易懂、易测、易于学员学习的优质直播课程。内容 随时更新，考前预测，范文宝典，课后与老师互动交流巩固课堂知识要点。
                                    </div>
                                </div>
                            </div>
                            <Carousel autoplay>
                                {
                                    imgsf.map(item=>
                                        <div key={item.url} className={styles['online_view_main_section_container_swipers']}>
                                            <img src={item.url} className={styles['online_view_main_section_container_swipers_img']} />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
