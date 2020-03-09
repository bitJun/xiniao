import React, { Component } from 'react';
import {
    Head
}  from '../../components';
import {
    xbqv2
} from '../../http/getRes';
import {
    Tabs,
    Pagination,
    Modal
} from 'antd';
const { TabPane } = Tabs;
import styles from '/static/styles/xibanqiu/index.less';

function showTotal(total) {
    return `共 ${total} 条`;
}
const params = {
    column_id: 0,
    source: 0,
    get_column: 3,
    timestamp: '',
    page: 1
}
let columns = [];
export default class Xibanqiu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visable: false,
                MXcallzz: {},
                columns: props.columns || null,
                lmid: props.lmid || null,
                tabinfo: props.tabinfo || null,
                menulist: props.menulist || null,
                len: props.len || null,
                totalorder: props.totalorder || null,
                per_page: props.per_page || null
        }
        this.changeTabs = this.changeTabs.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    static async getInitialProps({ req }) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        const { data } = await xbqv2(params);
        columns = data.columns;
        return {
            columns: data.columns,
            lmid: data.columns[0].id,
            tabinfo: data.columnInfo,
            menulist: data.notes.data,
            len: data.notes.data,
            totalorder: data.notes.total,
            per_page: data.notes.per_page,
        }
    }
    getXbqv2 () {
        xbqv2(params)
            .then(res=>{
                const { data } = res;
                console.log('data', data);
                this.setState({
                    columns: data.columns,
                    lmid: data.columns[0].id,
                    tabinfo: data.columnInfo,
                    menulist: data.notes.data,
                    len: data.notes.data,
                    totalorder: data.notes.total,
                    per_page: data.notes.per_page
                })
            });
    }
    changeTabs (key) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        params.column_id = key;
        this.getXbqv2();
    }
    onChange (page) {
        const timestamp = Math.floor(new Date().getTime()/1000);
        params.timestamp = timestamp;
        params.page = page;
        this.getXbqv2();
    }
    showModal = (obj, e) => {
        if (obj.note_type == 1) {
            this.setState({
                MXcallzz: obj,
                visable: true
            });
        } else {
            window.location.href = obj.detail_url;
        }
    }
    handleOk = (e) => {
        this.setState({
            visable: false
        });
    }
    render () {
        const {
            columns,
            tabinfo,
            menulist,
            totalorder,
            visable,
            MXcallzz,
            per_page
        } = this.state;
        return (
            <div className={styles['xibanqiu_view']}>
                <Head
                    title=""
                    keywords=""
                    description=""
                />
                <Tabs defaultActiveKey="0" onChange={this.changeTabs}>
                    {
                        columns.length && columns.map(item=>
                            <TabPane tab={item.name} key={item.id}>
                                <div className={styles['xibanqiu_view_sectionInfo']}>
                                    <div className={styles['xibanqiu_view_sectionInfo_img']}>
                                        <img src={tabinfo.img} />
                                        <p>{tabinfo.name}</p>
                                    </div>
                                    <div className={styles['xibanqiu_view_sectionInfo_content']}>
                                        <div className={styles['xibanqiu_view_sectionInfo_content_title']}>
                                            {tabinfo.subtitle}
                                        </div>
                                        <div className={styles['xibanqiu_view_sectionInfo_content_line']}></div>
                                        <div className={styles['xibanqiu_view_sectionInfo_content_introduce']}>
                                            {tabinfo.introduce}
                                        </div>
                                    </div>
                                    <div className={styles['xibanqiu_view_sectionInfo_code']}>
                                        <img src={tabinfo.code} />
                                    </div>
                                </div>
                                <div className={`${styles['xibanqiu_view_sectionList']} ${item.plate == 1 ? `${styles['whiteBg']}` : ''}`}>
                                    {
                                        menulist.length && menulist.map(item =>
                                            <div
                                                className={styles['xibanqiu_view_sectionList_item']}
                                                key={item.id}
                                                onClick={this.showModal.bind(this, item)}>
                                                <img className={styles['xibanqiu_view_sectionList_item_img']} src={item.cover_img} />
                                                <p className={styles['xibanqiu_view_sectionList_item_title']}>{item.title}</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    totalorder > per_page &&
                                        <div className={styles['xibanqiu_view_pagination']}>
                                            <Pagination
                                                size="small"
                                                total={totalorder}
                                                defaultPageSize={per_page}
                                                onChange={this.onChange}
                                                showTotal={showTotal} />
                                        </div>
                                }
                            </TabPane>
                        )
                    }
                </Tabs>
                <Modal
                    title=""
                    visible={visable}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleOk.bind(this)}>
                    <video
                        className={styles['xibanqiu_view_vedioModal']}
                        controls="controls"
                        width="100%"
                        height="auto"
                        src={MXcallzz.video} />
                </Modal>
            </div>
        )
    }
}
