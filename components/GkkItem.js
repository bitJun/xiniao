import React, { Component } from 'react'
import Router from 'next/router';
import styles from '/static/styles/components/gkkItem.less';

export default class GkkItem extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { data } = this.props;
        return (
            <div className={styles['GkkItem']}>
                <img className={styles['GkkItem_cover']} src={data.cover} />
                <div className={styles['GkkItem_title']}>{data.name}</div>
                <div className={styles['GkkItem_time']}>
                    <img src="/static/images/icon/laoshi.png" />
                    {data.teacher_nickname}
                </div>
            </div>
        )
    }
}
