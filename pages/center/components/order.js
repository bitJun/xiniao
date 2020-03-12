import React, { Component } from 'react';
import styles from '/static/styles/center/components/order.less';

export default class Order extends Component {
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
            <div className={styles['order_view']}>
                {
                    list.length > 0 ? (
                        <div></div>
                    ) : (
                        <div className={styles['order_view_empty']}>
                            <img src="/static/images/gif/wodekecheng.gif" />
                        </div>
                    )
                }
            </div>
        )
    }
}
