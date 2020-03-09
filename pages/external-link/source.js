import React, { Component } from 'react';
import {
    Head
}  from '../../components';
import styles from '/static/styles/external-link/source.less';

export default class Statement extends Component {
    render () {
        return (
            <div>
                <Head
                    title=""
                    keywords=""
                    description=""
				/>
                <div className={styles['source_view']} class="main">
                    <img src="/static/images/guanyuxiniao.png" className={styles['source_view_img']} />
                    <div className={styles['source_view_about']}>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我总有一个梦想，有一天学习会变成像孩子们的玩耍和娱乐一样。
                        </div>
                        <div className={styles['source_view_about_year']}>
                            ——约翰.洛克 1692年
                        </div>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我总有一个梦想，有一天学习就像玩耍。英语单词不再枯燥，考研就像王者荣耀，马哲不会让我傻冒，公考的独木桥上一起蹦跳。四六级老铁六六六，雅思托福GRE，考试别再信上帝。</p>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我知道很多人都有这个梦想，因为我们纯真的像个海绵宝宝，教室冷的是座孤岛，每到考试心里总是长草，为什么玩王者的宝宝越来越少；是不是他们怕被00后说自己很老；还是他们都迁居到了教室那座孤岛去和他的派大星一起变老；其实我也想离开上路越塔到岛，加入考研雅思托福和公考，打开抽屉发现我的运气全花在了高考，老师跟我说我们一直在和时间赛跑，妈妈每天叮嘱我要记得吃饱；吃饱了奔跑着就到了大四大四的节奏是动次打次，上铺兄弟告诉我这次记得要考好，我说我的运气都花在了高考。</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            说你不如找找犀鸟，我说你不是逼着我在做广告，他说
                            <span className={styles['source_view_about_span']}>
                                犀鸟公考分岗位有效备考。
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


