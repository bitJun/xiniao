import React, { Component } from 'react';
import {
    Head
}  from '../../components';
import styles from '/static/styles/teachers/index.less';

export default class Teachers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            all_teachers: [
                {
                    id: 1,
                    name: '章坤',
                    nickname: 'Zhangkun',
                    title: '教学总监',
                    desc: '犀鸟教育研究中心负责人，山东大学管理学硕士，教师风采大赛跨科目总决赛冠军，全面科学的把握判断推理的出题特点，教学教研体系清晰完整。',
                    type: [1],
                    img_url: '/static/images/tec/zhangkun.png',
                },
                {
                    id: 2,
                    name: '张艳',
                    nickname: 'Zhangyan',
                    title: '行测文',
                    desc: '犀鸟公考资深讲师，9年一线授课经验；授课逻辑清晰简明，直达命题趋势；多维选项分析直击学员困惑；待人耐心细致，是公考旅途的贴心姐姐。',
                    type: [1],
                    img_url: '/static/images/tec/zhangyan.png',
                },
                {
                    id: 3,
                    name: '蔡文吉',
                    nickname: 'Caiwenji',
                    title: '行测数资、面试',
                    desc: '犀鸟公考资深讲师，长期一线教学，授课时长累计4000+，授课风格幽默风趣，简单易懂，深入剖析学生学习的痛点、难点，授课内容易于接受、掌握。',
                    type: [1,3],
                    img_url: '/static/images/tec/caiwenji.png',
                },
                {
                    id: 4,
                    name: '罗涛',
                    nickname: 'Luotao',
                    title: '申论、面试',
                    desc: '双一流大学教育硕士，参与申论核心课程研发预测，具有丰富的教学实战经验，授课时长6000+，独创申论材料快速阅读，要点精准提取法，带领众多学员突破75+。',
                    type: [2,3],
                    img_url: '/static/images/tec/luotao.png',
                },
                {
                    id: 5,
                    name: '陈永仁',
                    nickname: 'Chenyongren',
                    title: '面试',
                    desc: '犀鸟公考面试资深讲师“ 深度思维法 ”创立者，在多年的面试教学生涯中，因材施教，循循善诱，帮助考生深刻理解面试的内在逻辑，培养考生的政府思维，曾辅导多名考生斩获全场第一。',
                    type: [3],
                    img_url: '/static/images/tec/chenyongren.png',
                },
                {
                    id: 6,
                    name: '任晓庆',
                    nickname: 'Renxiaoqing',
                    title: '行测文、面试',
                    desc: '犀鸟公考资深讲师，8年一线授课经验，独创“ 判断推理吸分大法 ”，授课思路清晰，直击要点，学员心中的“ 干货王 ”，找准切入点，逻辑任我行。',
                    type: [1,3],
                    img_url: '/static/images/tec/renxiaoxiao.png',
                },
                {
                    id: 7,
                    name: '扶文达',
                    nickname: 'Fuwenda',
                    title: '申论',
                    desc: '犀鸟公考资深讲师，不同申论体系创立者，累计授课时长5000+，擅长申论培优，结构化面试，申论80分金牌老师，考场实战教研，以命题人角度教学。',
                    type: [2],
                    img_url: '/static/images/tec/fuwenda.png',
                }
            ],
            teachers: [],
            tabs: [
                {
                    name: '全部',
                    id: 0
                },
                {
                    name: '行测',
                    id: 1
                },
                {
                    name: '申论',
                    id: 2
                },
                {
                    name: '面试',
                    id: 3
                }
            ],
            activeTab: 0
        }
    }
    componentDidMount() {
        const { all_teachers } = this.state;
        this.setState({
            teachers: all_teachers
        })
    }
    changeTab = (id, e) => {
        const { all_teachers } = this.state;
        const teachers = [];
        if (id === 0) {
            all_teachers.forEach(item=>{
                teachers.push(item);
            });
        } else {
            all_teachers.forEach(item=>{
                if (item.type.indexOf(id) != -1) {
                    teachers.push(item);
                }
            });
        }
        this.setState({
            activeTab: id,
            teachers: teachers
        })
    }
    render () {
        const {
            teachers,
            tabs,
            activeTab
        } = this.state;
        return (
            <div className={styles['teachers_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div className={`${styles['teachers_view_tabs']} ${styles.clearfix}`}>
                    {
                        tabs.map(item=>
                            <div
                                onClick={this.changeTab.bind(this, item.id)}
                                className={`${styles['teachers_view_tabs_item']} ${activeTab==item.id ? `${styles['active']}` : ''}`}
                                key={item.id}>
                                {item.name}
                            </div>
                        )
                    }
                </div>
                <div className={styles['teachers_view_list']}>
                    {
                        teachers.map((item, index)=>
                            <div className={`${styles['teachers_view_list_item']} ${index % 2 == 0 ? `${styles['oldItem']}` : `${styles['thirdItem']}`}`} key={item.id}>
                                <img src={item.img_url} className={styles['teachers_view_list_item_img']} />
                                <div className={styles['teachers_view_list_item_content']}>
                                    <div className={styles['teachers_view_list_item_content_intro']}>
                                        <span className={styles['teachers_view_list_item_content_intro_name']}><b>{item.name}&nbsp;&nbsp;</b></span>
                                        <b className={styles['teachers_view_list_item_content_intro_nickname']}>{item.nickname}</b> /
                                        {item.title}
                                    </div>
                                    <div className={styles['teachers_view_list_item_content_desc']}>{item.desc}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
