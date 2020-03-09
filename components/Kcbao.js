import React, { Component } from 'react'
import Router from 'next/router';
import styles from '/static/styles/components/Kcbao.less';

export default class Kcbao extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { data } = this.props;
        return (
            <div className={styles.Kcbao}>
                <div className={styles['Kcbao_label']}>{data.label_str}</div>
                <div className={styles['Kcbao_title']}>{data.title}</div>
                <img className={styles['Kcbao_cover']} src={data.cover || data.course_image} />
            </div>
        )
    }
}
