import React, { Component } from 'react';
import {
    Head
}  from '../../components';
import {
    Input
} from 'antd';
import {
    bkInfov2,
    referBannerv2
} from '../../http/getRes';
import {
		TranslateFullTimes,
    TranslateTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/xiniao/detail.less';
const { Search } = Input;

export default class ZiliaoDetail extends Component{
    constructor (props) {
        super(props);
    }
    static async getInitialProps(context) {
        const { id } = context.query;
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            campus_id: 0,
            id: id,
            timestamp: timestamp
        }
        const { data } = await bkInfov2(params);
        const json = await referBannerv2(params);
        return {
            MXcalllist: data,
            bannsers: json.data
        }
    }
    render () {
        const {
            MXcalllist,
            bannsers
        } = this.props;
        return (
            <div className={styles['xiniao_detail']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div className={`${styles['xiniao_detail_main']} ${styles.between}`}>
                    <div className={styles['xiniao_detail_main_content']}>
                        <div className={styles['xiniao_detail_main_content_title']}>
                            {MXcalllist.title}
                        </div>
                        {
                            MXcalllist.create_time &&
                            <div className={styles['xiniao_detail_main_content_time']}>
                                <img src="/static/images/icon/riqi.png" alt="" />
                                {TranslateFullTimes(MXcalllist.create_time)}
                            </div>
                        }
                        <div className={styles['xiniao_detail_main_content_info']} dangerouslySetInnerHTML={{ __html: MXcalllist.content }}></div>
                    </div>
                    <div className={styles['xiniao_detail_main_banners']}>
                        {
                            bannsers.length && bannsers.map(item=>
                                <img className={styles['xiniao_detail_main_banners_img']} src={item.img_url} key={item.img_url} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
