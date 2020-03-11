import React, { Component } from 'react';
import Router from 'next/router';
import {
    Head
}  from '../../components';
import {
    courseInfo,
    courseRecommendv2
} from '../../http/getRes';
import {
    Carousel,
    Tabs
} from 'antd';
import {
    TranslateFullTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/class/detail.less';
const { TabPane } = Tabs;

export default class Online extends Component {
    constructor (props) {
        super(props);
        this.state = {
            timestamp: props.timestamp || null,
            detail: props.detail || null
        }
    }
    static async getInitialProps(context) {
        const { id } = context.query;
        let course_id = id.split('.')[0];
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            course_id: course_id,
            timestamp: timestamp
        }
        const { data } = await courseInfo(params);
        return {
            timestamp: timestamp,
            detail: data
        }
    }
    render () {
        const {
            detail,
            timestamp
        } = this.state;
        console.log('detail', detail);
        return (
            <div className={styles['class_detail']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div className={styles['class_detail_banner']}>
                    <img src="/static/images/guajian.png" />
                </div>
                <div className={`${styles['class_detail_section']}`}>
                    <div className={styles['class_detail_section_classImg']}>
                        {
                            detail.course_video !== '' ? (
                                <vedio controls="controls" id="video" width="100%" height="100%" src={detail.course_video} />
                            ) : (
                                <img src={detail.course_image} />
                            )
                        }
                    </div>
                    <div className={styles['class_detail_section_classBaseInfo']}>
                        {
                            detail.coursename != '' &&
                            <div className={styles['class_detail_section_classBaseInfo_coursename']}>
                                {detail.coursename}
                            </div>
                        }
                        <div className={styles['class_detail_section_classBaseInfo_label']}>
                            <span>{detail.label_str}</span>
                            {
                                (detail.start_time && detail.start_time !='') &&
                                <span>
                                    开课时间：{TranslateFullTime(detail.start_time)} - {TranslateFullTime(detail.end_time)}
                                </span>
                            }
                            <span>{detail.period}课时</span>
                        </div>
                        <div className={styles['class_detail_section_classBaseInfo_remain']}>
                            距离结束：
                        </div>
                        <div className={styles['class_detail_section_classBaseInfo_price']}>
                            <div className={`${styles['class_detail_section_classBaseInfo_price_main']}`}>
                                {
                                    detail.is_assemble == 1 &&
                                    <img src="/static/images/icon/tuan.png" />
                                }
                                RMB
                                {
                                    detail.type !== 8 ? (
                                        <span>{detail.price}</span>
                                    ) : (
                                        <span>{detail.assemble_price}</span>
                                    )
                                }
                                <div className={styles['class_detail_section_classBaseInfo_price_main_saleInfo']}>
                                    <span>限售{detail.xnumber}人</span>|
                                    <span>已报{detail.order_number}人</span>
                                </div>
                            </div>
                            <div className={styles['class_detail_section_classBaseInfo_price_btn']}>
                                {
                                    detail.is_pay == 1 ? (
                                        <div className={`${styles['class_detail_section_classBaseInfo_price_btn_in']} ${styles['class_detail_section_classBaseInfo_price_btn_btns']}`}>
                                            <span>进入课堂</span>
                                        </div>
                                    ) :
                                    (
                                        <div className={`${styles['class_detail_section_classBaseInfo_price_btn_in']} ${styles['class_detail_section_classBaseInfo_price_btn_btns']}`}>
                                            {
                                                (detail.close_time && detail.close_time < timestamp) &&
                                                <span className={styles['red']}>已停售</span>
                                            }
                                            {
                                                (detail.xnumber + detail.init_order_number <= detail.order_number) &&
                                                <span className={styles['red']}>已售罄</span>
                                            }
                                            {
                                                Number(detail.price) == 0 &&
                                                <span className={styles['red']}>免费领取</span>
                                            }
                                            {
                                                ((!detail.close_time || detail.close_time > timestamp) && (detail.xnumber + detail.init_order_number >= detail.order_number) && (Number(detail.price) != 0) ) &&
                                                <div>
                                                    {
                                                        detail.type == 8 ? (
                                                            <div>
                                                                {/* <div class="button_list" @click="buyMycurriculum" style="cursor:pointer">
                                                                    <span>RMB<span style="font-size: 24px">{{ courselist.price }}</span></span>
                                                                    <span style="font-size: 14px">直接购买</span>
                                                                </div>
                                                                <div  class="button_lists" @click="buyMycurriculums" style="cursor:pointer">
                                                                    <span style="font-size: 12px">RMB<span style="font-size: 20px">{{ courselist.assemble_price }}</span></span>
                                                                    <span style="font-size: 14px">{{ courselist.assemble_num }}人拼团</span>
                                                                </div> */}
                                                            </div>
                                                        ) : (
                                                            <span>立即购买</span>
                                                        )
                                                    }
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['class_detail_section']}`}>

                </div>
            </div>
        )
    }
}
