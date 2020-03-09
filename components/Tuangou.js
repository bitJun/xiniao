import React, { Component } from 'react'
import Router from 'next/router';
import {
    TranslateFullTime
} from '../utils/util';
import styles from '/static/styles/components/Tuangou.less';

export default class Tuangou extends Component {
    constructor(props) {
        super(props);
    }
    timefilter (start_time, end_time) {
        TranslateFullTime(start_time);
        let start = TranslateFullTime(start_time);
        let end = TranslateFullTime(end_time);
        return `${start} - ${end}`;
    }
    render () {
        const { data } = this.props;
        return (
            <div className={styles.Tuangou}>
                <div className={styles['Tuangou_label']}>{data.label_str}</div>
                <h2 className={styles['Tuangou_title']}>{data.title}</h2>
                {
                    (data.start_time&&data.start_time!==''&&data.end_time&&data.end_time!== '') &&
                    <p className={styles['Tuangou_time']}>{this.timefilter(data.start_time, data.end_time)}</p>
                }
                <div className={styles['Tuangou_main']}>
                    {
                        data.teacher && data.teacher.map(item=>
                            <div className={styles['Tuangou_main_item']} key={item.photo_url}>
                                <div className={styles['Tuangou_main_item_content']}>
                                    <img className={styles['Tuangou_main_item_content_img']} src={item.photo_url} />
                                    <div className={styles['Tuangou_main_item_content_nickname']}>{item.teacher_nickname}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles['Tuangou_saleInfo']}>
                    <div className={styles['Tuangou_saleInfo_sales']}>
                        限售{data.xnumber}人 | 已报
                        <span>{data.buys}</span> 人
                    </div>
                    {
                        data.assemble_price !=0 ? (
                            <div className={styles['Tuangou_saleInfo_price']}>
                                <img src="/static/images/icon/tuan.png" alt="" />
                                RMB
                                <span>{data.assemble_price}</span>
                            </div>
                        ) : (
                            <div className={styles['Tuangou_saleInfo_free']}>
                                <span>免费</span>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
