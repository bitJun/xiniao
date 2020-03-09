import React, { Component } from 'react';
import Router from 'next/router';
import {
    Head
}  from '../../components';
import {
    Tabs,
    Pagination,
    Input
} from 'antd';
import {
    article,
    referBannerv2,
    referencev2
} from '../../http/getRes';
import {
    TranslateTime,
    getDateDiff
} from '../../utils/util';
import styles from '/static/styles/ziliao/index.less';
const { TabPane } = Tabs;
const { Search } = Input;
const params = {
    campus_id: '',
    get_column: 1,
    timestamp: ''
}

export default class Ziliao extends Component{
    constructor (props) {
        super(props);
        this.state = {
            newprojectsId: 0,
            platesId: 0,
        }
    }
    static async getInitialProps({ req }) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        const { data } = await referencev2(params);
        const json = await referBannerv2(params);
        return {
            columns: data.columns,
            plates: data.plates,
            newplates: data.plates,
            newprojects: data.projects,
            newslist: data.articles.data,
            totalorder: data.articles.total,
            bannerimg: json.data
        }
    }
    newsdetail = (obj, e) => {
        Router.push(
            {
                pathname: '/ziliao/detail',
                query: { id: obj.id }
            },
            `/ziliao/${obj.id}-0.html`
        )
    }
    chooseNewprojects = (id, e) => {
        this.setState({
            newprojectsId: id
        })
    }
    choosePlates = (id, e) => {
        this.setState({
            platesId: id
        })
    }
    changeTabs (key) {

    }
    render () {
        const {
            columns,
            plates,
            newplates,
            newprojects,
            newslist,
            totalorder,
            bannerimg
        } = this.props;
        const {
            newprojectsId,
            platesId
        } = this.state;
        console.log('bannerimg', bannerimg)
        return (
            <div className={styles['ziliao_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div>
                    <div className={styles['ziliao_view_search']}>
                        <Search
                            placeholder="请输入关键字"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                    <Tabs defaultActiveKey="1" onChange={this.changeTabs}>
                        {
                            columns.length && columns.map(item=>
                                <TabPane tab={item.title} key={item.id}>
                                    <ul className={styles['ziliao_view_newprojectslist']}>
                                        {
                                            newprojects.length && newprojects.map(item=>
                                                <li onClick={this.chooseNewprojects.bind(this, item.id)} className={`${styles['ziliao_view_newprojectslist_item']} ${newprojectsId == item.id ? `${styles.active}` : ''}`} key={item.id}>
                                                    {item.name}
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <ul className={styles['ziliao_view_plateslist']}>
                                        {
                                            plates.length && plates.map(item=>
                                                <li onClick={this.choosePlates.bind(this, item.id)} className={`${styles['ziliao_view_plateslist_item']} ${platesId == item.id ? `${styles.active}` : ''}`} key={item.id}>
                                                    {item.title}
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <div className={`${styles['ziliao_view_main']} ${styles.between}`}>
                                        <div className={styles['ziliao_view_main_list']}>
                                            {
                                                newslist.length && newslist.map(item=>
                                                    <div
                                                        className={`${styles['ziliao_view_main_list_item']} ${item.img_url!='' ? `${styles['showimg']}` : ''}`}
                                                        onClick={this.newsdetail.bind(this, item)}
                                                        key={item.id}>
                                                        {
                                                            item.img_url!='' &&
                                                            <img className={styles['ziliao_view_main_list_item_img']} src={item.img_url} />
                                                        }
                                                        <div className={styles['ziliao_view_main_list_item_content']}>
                                                            <div className={`${styles['ziliao_view_main_list_item_content_title']} ${styles['clamp']}`}>
                                                                {item.title}
                                                            </div>
                                                            <div className={`${styles['ziliao_view_main_list_item_content_desc']} ${styles['clamp']}`}>
                                                                {item.abstract}
                                                            </div>
                                                            <div className={styles['ziliao_view_main_list_item_content_time']}>
                                                                <img src='/static/images/icon/riqi.png' />
                                                                {getDateDiff(item.regdate)}
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
                                            <Pagination
                                                total={totalorder}
                                                showTotal={total => `Total ${total} items`}
                                                pageSize={15}
                                                defaultCurrent={1}
                                            />
                                        </div>
                                        <div className={styles['ziliao_view_main_banners']}>
                                            {
                                                bannerimg.length && bannerimg.map(item=>
                                                    <div className={styles['ziliao_view_main_banners_item']} key={item.img_url}>
                                                        <img src={item.img_url} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </TabPane>
                            )
                        }
                    </Tabs>
                </div>
            </div>
        )
    }
}
