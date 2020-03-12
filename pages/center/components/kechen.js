import React, { Component } from 'react';
import {
    mycourse
} from '../../../http/getRes';
import styles from '/static/styles/center/components/kechen.less';

export default class Kechen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {

    }
    getList () {
        const timestamp = Math.floor(new Date().getTime()/1000);
        const parmas = {
            page: 1,
            pagesize: 10,
            timestamp: timestamp
        }
        mycourse(parmas)
            .then(res=>{
                console.log('res', res);
            })
    }
    render () {
        const {
            list
        } = this.state;
        return (
            <div className={styles['kechen_view']}>
                {
                    list.length > 0 ? (
                        <div></div>
                    ) : (
                        <div className={styles['kechen_view_empty']}>
                            <img src="/static/images/gif/wodekecheng.gif" />
                        </div>
                    )
                }
            </div>
        )
    }
}
