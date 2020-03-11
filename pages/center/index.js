import React, { Component } from 'react';
import {
    Tabs
} from 'antd';
import {
    Head
} from '../../components';
import {
    SelfCenter,
    Cechen,
    Order,
    Collect,
    Address,
    Coupons,
    Exchange,
    Safe,
    Msg
} from './components';
import styles from '/static/styles/center/index.less';
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
export default class Center extends Component {
    constructor(props){
        super(props);
        this.state = {
            tablist: [
                {
                    name: '个人资料',
                    id: '0'
                },
                {
                    name: '我的课程',
                    id: '1'
                },
                {
                    name: '我的订单',
                    id: '2'
                },
                {
                    name: '我的收藏',
                    id: '3'
                },
                {
                    name: '我的地址',
                    id: '4'
                },
                {
                    name: '我的优惠券',
                    id: '5'
                },
                {
                    name: '账户与安全',
                    id: '6'
                },
                {
                    name: '我的兑换',
                    id: '7'
                },
                {
                    name: '消息中心',
                    id: '8'
                }
            ],
            key: null
        }
    }
    componentDidMount() {
        const {
            tablist
        } = this.state;
        let key = window.location.href.split('#')[1];
        if (key) {
            this.setState({
                key: tablist[key].id
            })
        } else {
            this.setState({
                key: '1'
            })
        }
    }
    render () {
        const {
            tablist,
            key
        } = this.state;
        console.log('key', key)
        return (
            <div className={styles['center_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <Tabs defaultActiveKey={key} onChange={callback}>
                    {
                        tablist.map(item=>
                            <TabPane tab={item.name} key={item.id}>

                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        )
    }
}
