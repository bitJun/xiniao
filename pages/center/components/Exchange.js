import React, { Component } from 'react';
import {
    Input
} from 'antd';
import styles from '/static/styles/center/components/exchange.less';

export default class Exchange extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    onChange = e => {
        const { value } = e.target;
        this.setState({
            value
        })
    }
    render () {
        const {
            value
        } = this.state;
        return (
            <div className={styles['exchange_view']}>
                <div className={styles['exchange_view_input']}>
                    <Input placeholder="请输入您的课程兑换码" onChange={this.onChange}/>
                </div>
                <div className={styles['exchange_view_tip']}>
                    <img src="/static/images/liicon/yuantanhao.png" />帮助说明：使用正确的犀鸟官方发布的兑换码可兑换相应的犀鸟产品。
                </div>
                <div className={`${styles['exchange_view_duihuan']} ${value != '' ? `${styles['green']}` : ''}`}>兑换</div>
            </div>
        )
    }
}
