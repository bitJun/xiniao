import React, { Component } from 'react'
import Router from 'next/router';
import {
    TranslateFullTime
} from '../utils/util';
import styles from '/static/styles/components/KcOnline.less';

export default class KcOnline extends Component {
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
            <div className={styles.KcOnline}>
                <div className={styles['KcOnline_label']}>{data.label_str}</div>
                <h2 className={styles['KcOnline_title']}>{data.title}</h2>
                {
                    (data.start_time&&data.start_time!==''&&data.end_time&&data.end_time!== '')&&
                    <p className={styles['KcOnline_time']}>
                        {this.timefilter(data.start_time, data.end_time)}
                    </p>
                }
                <div className={styles['KcOnline_list']}>
                    {
                        data.teacher.length && data.teacher.map(item=>
                            <div className={styles['KcOnline_list_item']} key={item.teacher_name}>
                                <div className={styles['KcOnline_list_item_main']} >
                                    <img className={styles['KcOnline_list_item_main_img']} src={item.photo_url} />
                                    <div className={styles['KcOnline_list_item_main_nickname']}>
                                        {item.teacher_nickname}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles['KcOnline_saleInfo']}>
                    <div className={styles['KcOnline_saleInfo_main']}>
                        限售{data.xnumber}人 | 已报 <span>{data.buys}</span> 人
                    </div>
                    {
                        data.price != 0?(
                            <div className={styles['KcOnline_saleInfo_price']}>
                                RMB<span>{data.price}</span>
                            </div>
                        ):(
                            <div className={styles['KcOnline_saleInfo_free']}>
                                <span>免费</span>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
