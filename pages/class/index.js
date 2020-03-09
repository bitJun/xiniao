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
    lable_id: '',
    get_lable: 1,
    pagesize: 18,
    timestamp: ''
}
export default class Class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            taglists: null,
            menulist: null,
            plates: null,
            len: null,
            activeName2: null
        }
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
            optionss.lable_id = lable_id;
            optionss.timestamp = timestamp;
            json = await branchRecommendv2(optionss);
            taglists = json.data.lables
            menulist = json.data.data.data
            plates = json.data.project
            len = json.data.data.data.length
        } else {
            const optionss = {
                campus_id: this.campus_id,
                project_id: this.tab1,
                lable_id: this.lable_id,
                get_lable: 1,
                timestamp: timestamp
            }
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
    async changePlates (key) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        params.project_id = key;
        let { data } = await branchRecommendv2(params);
        let taglist = data.lables;
        optionss.timestamp = timestamp;
        optionss.project_id = key;
        optionss.lable_id = taglist[0].cl_id;
        let json = await branchRecommendv2(optionss);
        console.log('json', json);
    }
    changeTaglists (key) {
        console.log('key1', key);
    }
    componentDidMount() {
        const {
            taglists,
            menulist,
            plates,
            len,
            activeName2
        } = this.props;
        this.setState({
            taglists,
            menulist,
            plates,
            len,
        })
    }
    render () {
        const {
            taglists,
            menulist,
            plates,
            len
        } = this.state;
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
