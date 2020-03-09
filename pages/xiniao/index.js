import React, { Component } from 'react';
import Router from 'next/router';
import {
    Head
}  from '../../components';
import {
    Tabs
} from 'antd';
import {
    bkv2,
    referBannerv2,
} from '../../http/getRes';
import {
    TranslateTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/xiniao/index.less';
const { TabPane } = Tabs;

export default class Xiniao extends Component {
    static async getInitialProps({ req }) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            campus_id: 0,
            type: 2,
            get_label: 1,
            pagesize: 9,
            timestamp: timestamp
        }
        const { data } = await bkv2(params);
        const json = await referBannerv2(params);
        return {
            columns: data.labels,
            menulist: data.news.data,
            totalorder: data.news.total,
            banners: json.data
        }
    }
    showdetail = (id, e) => {
        Router.push(
            {
                pathname: '/xiniao/detail',
                query: { id: id }
            },
            `/xiniao/${id}.html`
        )
    }
    changeTabs (key) {

    }
    render () {
        const {
            columns,
            menulist,
            totalorder,
            banners
        } = this.props;
        console.log('menulist', menulist);
        return (
            <div className={styles['xiniao_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <Tabs defaultActiveKey="0" onChange={this.changeTabs}>
                    {
                        columns.length && columns.map(item=>
                            <TabPane tab={item.name} key={item.id}></TabPane>
                        )
                    }
                </Tabs>
                <div className={`${styles['xiniao_view_main']} ${styles.between}`}>
                    <div className={styles['xiniao_view_main_list']}>
                        {
                            menulist.length && menulist.map(item=>
                                <div
                                    className={styles['xiniao_view_main_list_item']}
                                    key={item.id}
                                    onClick={this.showdetail.bind(this, item.id)}>
                                    <img src={item.cover} className={styles['xiniao_view_main_list_item_img']} />
                                    <div className={styles['xiniao_view_main_list_item_content']}>
                                        <div className={styles['xiniao_view_main_list_item_content_title']}>
                                            {item.title}
                                        </div>
                                        <div className={`${styles['xiniao_view_main_list_item_content_desc']} ${styles.clamp}`}>
                                            {item.content}
                                        </div>
                                        <div className={styles['xiniao_view_main_list_item_content_time']}>
                                            <img src="/static/images/icon/riqi.png" />
                                            {getDateDiff(item.create_time)}
                                            {
                                                Number(item.sign_code) == 1 &&
                                                <span className={`${styles[`status1`]}`}>{item.sign_status}</span>
                                            }
                                            {
                                                Number(item.sign_code) == 2 &&
                                                <span className={`${styles[`status2`]}`}>{item.sign_status}</span>
                                            }
                                            {
                                                Number(item.sign_code) == 3 &&
                                                <span className={`${styles[`status3`]}`}>{item.sign_status}</span>
                                            }
                                            {
                                                Number(item.sign_code) == 4 &&
                                                <span className={`${styles[`status4`]}`}>{item.sign_status}</span>
                                            }
                                            {
                                                Number(item.sign_code) == 5 &&
                                                <span className={`${styles[`status5`]}`}>{item.sign_status}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles['xiniao_view_main_banners']}>
                        {
                            banners.length && banners.map(item=>
                                <img className={styles['xiniao_view_main_banners_img']} src={item.img_url} key={item.img_url} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
