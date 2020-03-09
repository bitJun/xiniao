import React, { Component } from 'react'
import Router from 'next/router';
import styles from '/static/styles/components/Daka.less';

export default class Daka extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { data } = this.props;
        return (
            <div className={styles.Daka}>
                <img className={styles['Daka_cover']} src={data.cover} />
                <div className={styles['Daka_main']}>
                    <h2 className={`${styles['Daka_main_title']} ${styles.clamp}`}>{data.title}</h2>
                    <div className={`${styles.between} ${styles['Daka_main_info']}`}>
                        <div className={styles['Daka_main_info_sales']}>
                            已报
                            <span>
                                {data.buys}
                            </span>
                            人 主讲：{data.lecturer}
                        </div>
                        <div className={styles['Daka_main_info_price']}>
                            RMB
                            <span>{data.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
