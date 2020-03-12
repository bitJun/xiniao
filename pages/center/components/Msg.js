import React, { Component } from 'react';
import styles from '/static/styles/center/components/msg.less';

export default class Msg extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            tablist: [
                {
                    id: 0,
                    name: '系统',
                    emptyImg: 'wodexiaoxi',
                    emptyMsg: '主人，您现在没有系统消息哦！'
                },
                {
                    id: 1,
                    name: '课程',
                    emptyImg: 'wodexiaoxi',
                    emptyMsg: '主人，您现在没有购买的课程哦！'
                },
                {
                    id: 2,
                    name: '订单',
                    emptyImg: 'wodexiaoxi',
                    emptyMsg: '主人，您现在没有订单哦！'
                }
            ],
            key: 0
        }
    }
    onchange = (key, e) => {
        this.setState({
            key
        })
    }
    render () {
        const {
            list,
            tablist,
            key
        } = this.state;
        return (
            <div className={styles['msg_view']}>
                <ul className={styles['msg_view_tabs']}>
                    {
                        tablist.map(item =>
                            <li
                                key={item.id}
                                onClick={this.onchange.bind(this, item.id)}
                                className={`${styles['msg_view_tabs_item']} ${item.id == key ? `${styles.active}` : ''}`}>
                                {item.name}
                            </li>
                        )
                    }
                </ul>
                {
                    list.length > 0 ? (
                        <div></div>
                    ) : (
                        <div className={styles['msg_view_empty']}>
                            <img src={`/static/images/gif/${tablist[key].emptyImg}.gif`} />
                            <div className={styles['msg_view_empty_tip']}>{tablist[key].emptyMsg}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
