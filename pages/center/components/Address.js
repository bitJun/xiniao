import React, { Component } from 'react';
import styles from '/static/styles/center/components/address.less';

export default class Address extends Component {
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
            <div className={styles['address_view']}>
                {
                    list.length > 0 ? (
                        <div></div>
                    ) : (
                        <div className={styles['address_view_empty']}>
                            <img src="/static/images/gif/wodedizhi.gif" />
                            <div className={styles['address_view_empty_tip']}>还没有地址哦！</div>
                            <div className={styles['address_view_empty_add']}>+ 新建收货地址</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
