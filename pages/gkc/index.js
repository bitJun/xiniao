import React, { Component } from 'react';
import {
    Head,
    GkbkItem
}  from '../../components';
import {
    bkv2
} from '../../http/getRes';
import {
    Tabs,
    Input
} from 'antd';
import styles from '/static/styles/gkbaike/index.less';
const { TabPane } = Tabs;
const { Search } = Input;

export default class Gkbaike extends Component{
    static async getInitialProps({ req }) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            type: 1,
            source: 0,
            get_label: 1,
            timestamp: timestamp
        }
        const { data } = await bkv2(params);
        let label_id = null;
        if (data.labels.length) {
            label_id = data.labels[0].id
        }
        return {
            plates: data.labels,
            menulist: data.news.data,
            len: data.news.data.length,
            label_id: label_id
        }
    }
    callback(key) {
        console.log(key);
    }
    render () {
        const {
            plates,
            menulist,
            len,
            label_id
        } = this.props;
        return (
            <div className={styles['gkbaike_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div className={styles['gkbaike_view_main']}>
                    <div className={styles['gkbaike_view_main_search']}>
                        <Search
                            placeholder="请输入关键字"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        {
                            plates.length && plates.map(item =>
                                <TabPane tab={item.name} key={item.id}>
                                    <div className={styles['gkbaike_view_main_list']}>
                                        {
                                            menulist.length && menulist.map(item =>
                                                <GkbkItem key={item.id} data={item} />
                                            )
                                        }
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
