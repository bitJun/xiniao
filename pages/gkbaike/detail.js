import React, { Component } from 'react';
import Router from 'next/router';
import {
    Head
}  from '../../components';
import {
    coursewareDetailsv2
} from '../../http/getRes';
import {
    Carousel,
    Tabs
} from 'antd';
import {
    TranslateTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/gkbaike/detail.less';
const { TabPane } = Tabs;

export default class Online extends Component {
    constructor (props) {
        super(props);
        this.state = {
            courseware: props.courseware || null,
            course: props.course || null
        }
        console.log('props', props);
    }
    static async getInitialProps(context) {
        const { id } = context.query;
        const querys = id.split('.')[0].split('-');
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            campus_id: querys[1],
            id: querys[0],
            timestamp: timestamp
        }
        const { data } = await coursewareDetailsv2(params);
        return {
            id: 1,
            courseware: data.courseware,
            course: data.course
        }
    }
    render () {
        const {
            courseware,
            course
        } = this.state;
        return (
            <div className={styles['gkbk_detail']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
            </div>
        )
    }
}
