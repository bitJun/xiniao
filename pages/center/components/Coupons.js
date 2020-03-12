import React, { Component } from 'react';
import styles from '/static/styles/center/components/coupons.less';

export default class Coupons extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            tablist: [
                {
                    id: 0,
                    name: '未使用',
                    emptyImg: 'wodeyouhuiquan',
                    emptyMsg: '主人，您现在没有可用的优惠券哦！'
                },
                {
                    id: 1,
                    name: '使用记录',
                    emptyImg: 'wodeyouhuiquan',
                    emptyMsg: '主人，您现在没有使用过优惠券的记录哦！'
                },
                {
                    id: 2,
                    name: '已过期',
                    emptyImg: 'wodeyouhuiquan',
                    emptyMsg: '主人，您现在没有已经过期的优惠券哦！'
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
            <div className={styles['coupons_view']}>
                <ul className={styles['coupons_view_tabs']}>
                    {
                        tablist.map(item =>
                            <li
                                key={item.id}
                                onClick={this.onchange.bind(this, item.id)}
                                className={`${styles['coupons_view_tabs_item']} ${item.id == key ? `${styles.active}` : ''}`}>
                                {item.name}
                            </li>
                        )
                    }
                </ul>
                {
                    list.length > 0 ? (
                        <div></div>
                    ) : (
                        <div className={styles['coupons_view_empty']}>
                            <img src={`/static/images/gif/${tablist[key].emptyImg}.gif`} />
                            <div className={styles['coupons_view_empty_tip']}>{tablist[key].emptyMsg}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
