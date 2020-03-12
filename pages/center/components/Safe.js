import React, { Component } from 'react';
import styles from '/static/styles/center/components/safe.less';

export default class Safe extends Component {
    render () {
        return (
            <div className={styles['safe_view']}>
                <img src='/static/images/gif/zhanghuyuanquan.gif' />
                <div className={styles['safe_view_tip']}>功能开发中，敬请期待！</div>
            </div>
        )
    }
}
