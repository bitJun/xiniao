import React, { Component } from 'react'
import Router from 'next/router';
import {
    TranslateFullTime
} from '../utils/util';
import styles from '/static/styles/components/Ad.less';

export default class Ad extends Component {
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
            <div className={styles.Ad}>
                <img className={styles['Ad_cover']} src={data.cover}/>
                <div className={styles['Ad_main']}>
                    <h2 className={styles['Ad_main_title']}>{data.title}</h2>
                    {
                        (data.start_time&&data.start_time!==''&&data.end_time&&data.end_time!== '') &&
                        <div className={styles['Ad_main_time']}>
                            {this.timefilter(data.start_time, data.end_time)}
                        </div>
                    }
                </div>
            </div>
        )
    }
}
