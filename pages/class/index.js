import React, { Component } from 'react';
import {
    Head,
    GkbkItem,
    GkkItem,
    KcOnline,
    Tuangou,
    Kcbao,
    Ad,
    Daka
}  from '../../components';
import {
    Tabs
} from 'antd';
import {
    article,
    branchFreev2,
    lablev2,
    branchRecommendv2,
    seov2
} from '../../http/getRes';
import styles from '/static/styles/class/index.less';
const { TabPane } = Tabs;
const params = {
    campus_id: 0,
    project_id: 0,
    lable_id: 0,
    get_lable: 1,
    timestamp: ''
}
const optionss = {
    campus_id: 0,
    project_id: 0,
    lable_id: 0,
    get_lable: 1,
    pagesize: 18,
    timestamp: ''
}
export default class Class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            taglists: props.taglists || null,
            menulist: props.menulist || null,
            plates: props.plates || null,
            len: props.len || null,
            activeName2: props.activeName2 || null
        }
        this.changePlates = this.changePlates.bind(this);
        this.changeTaglists = this.changeTaglists.bind(this);
    }
    static async getInitialProps({ req }) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        const { data } = await branchRecommendv2(params);
        let taglist = data.lables;
        let json;
        let taglists = null;
        let menulist = null;
        let plates = null;
        let len = null;
        let lable_id = null;
        let activeName2 = null;
        if (taglist.length > 1) {
            if (taglist[0].cl_id === 0) {
                lable_id = taglist[1].cl_id
                activeName2 = '1';
            } else {
                lable_id = taglist[0].cl_id
                activeName2 = '0';
            }
            optionss.lable_id = Number(lable_id);
            optionss.timestamp = timestamp;
            json = await branchRecommendv2(optionss);
            taglists = json.data.lables
            menulist = json.data.data.data
            plates = json.data.project
            len = json.data.data.data.length
        } else {
            json = await branchRecommendv2(optionss);
            taglists = json.data.lables
            menulist = json.data.data.data
            plates = json.data.project
            len = json.data.data.data.length
        }
        return {
            taglists,
            menulist,
            plates,
            len,
            activeName2
        }
    }
    changePlates (key) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        params.project_id = key;
        optionss.project_id = key;
        branchRecommendv2(params)
            .then(res=>{
                let { data } = res;
                let json;
                let taglists = null;
                let menulist = null;
                let plates = null;
                let len = null;
                let activeName2 = null;
                optionss.lable_id = data.lables[0].cl_id;
                branchRecommendv2(optionss)
                    .then(json =>{
                        taglists = json.data.lables;
                        menulist = json.data.data.data;
                        plates = json.data.project;
                        len = json.data.data.data.length;
                        this.setState({
                            taglists,
                            menulist,
                            plates,
                            len,
                            activeName2
                        });
                    })
            })
    }
    changeTaglists (key) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        params.lable_id = key;
        branchRecommendv2(params)
            .then(res=>{
                const { data } = res;
                this.setState({
                    menulist: data.data.data,
                    len: data.data.data.length
                })
            })
    }
    componentDidMount() {
    }
    render () {
        const {
            taglists,
            menulist,
            plates,
            len
        } = this.state;
        console.log('params', params);
        console.log('optionss', optionss);
        console.log('menulist', menulist);
        return (
            <div className={styles['class_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <div>
                    <Tabs className={styles['class_view_plateslist']} defaultActiveKey="1" onChange={this.changePlates}>
                        {
                            plates!=null && plates.map(item=>
                                <TabPane tab={item.name} key={item.id}>
                                    <Tabs className={styles['class_view_taglists']} defaultActiveKey="1" onChange={this.changeTaglists}>
                                        {
                                            taglists!=null && taglists.map(json=>
                                                <TabPane tab={json.cl_name} key={json.cl_id}>
                                                    <div className={styles['class_view_list']}>
                                                        {
                                                            menulist.length && menulist.map(item=>{
                                                                return (
                                                                    <div className={styles['class_view_list_item']} key={item.id}>
                                                                        {
                                                                            (item.recommend_type == 1&&item.type == 3) &&
                                                                            <KcOnline data={item}/>
                                                                        }
                                                                        {
                                                                            (item.recommend_type == 1&&item.type == 8) &&
                                                                            <Tuangou data={item}/>
                                                                        }
                                                                        {
                                                                            (item.recommend_type == 1&&item.type == 2) &&
                                                                            <Kcbao data={item}/>
                                                                        }
                                                                        {
                                                                            (item.recommend_type == 1&&item.type == 7) &&
                                                                            <Ad data={item}/>
                                                                        }
                                                                        {
                                                                            (item.recommend_type == 2) &&
                                                                            <Daka data={item}/>
                                                                        }
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </TabPane>
                                            )
                                        }
                                    </Tabs>
                                </TabPane>
                            )
                        }
                    </Tabs>
                </div>
            </div>
        )
    }
}
