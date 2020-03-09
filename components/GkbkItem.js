import React, { Component } from 'react'
import Router from 'next/router';
import styles from '/static/styles/components/GkbkItem.less';

export default class GkbkItem extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { data } = this.props;
        return (
            <div className={styles['GkkItem']}>
                <img className={styles['GkkItem_cover']} src={data.cover} />
                <div className={styles['GkkItem_title']}>{data.title}</div>
                <div className={styles['GkkItem_time']}>
                    <img src="/static/images/icon/riqi.png" />
                    {data.create_time.split(' ')[0]}
                </div>
            </div>
        )
    }
}
