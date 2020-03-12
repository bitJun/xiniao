import React, { Component } from 'react';
import styles from '/static/styles/center/components/collect.less';

export default class Collect extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render () {
        const {
            list
        } = this.state;
        return (
            <div className={styles['collect_view']}>
                {
                    list.length > 0 ? (
                        <div></div>
                    ) : (
                        <div className={styles['collect_view_empty']}>
                            <img src="/static/images/gif/404.gif" />
                            <div className={styles['collect_view_empty_tip']}>主人没有收到您的收藏哦！</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
