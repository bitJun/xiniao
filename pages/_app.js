import React, { Component } from 'react';
import App, {Container} from 'next/app';
import Link from 'next/link';
import { Provider } from 'react-redux';
import Router from 'next/router';
import TopBar from '../components/TopBar';

import store from '../redux/store';
import {
    Layout,
    Menu,
    BackTop
} from 'antd';
import 'antd/dist/antd.less'
import styles from '../static/styles/app.less';
const {
    Header,
    Content,
    Footer,
    Sider
} = Layout;
const { SubMenu } = Menu;

export default class MyApp extends App {
    constructor (props) {
        super(props);
        this.state = store.getState();
    }
    handleRoute = (url) => {

        const ua = navigator.userAgent;
        if (ua.match(/iphone|ipod/ig) && ua.match(/MicroMessenger/ig)) {
          // window.location.reload();
        }
    }
    componentDidMount() {
        Router.events.on('routeChangeComplete', this.handleRoute);
        let _hmt = _hmt || [];
        (function(w, d, n, a, j) {
            let hm = document.createElement('script');
            hm.src = 'https://cdn.jsdelivr.net/npm/eruda';
            w[n] = w[n] || function () {
                return (w[n].a = w[n].a || []).push(arguments)
            };
            j = d.createElement('script');
            j.async = true;
            j.src = 'https://qiyukf.com/script/8dcfd5a9f9ae2d6448afedac9090773b.js?hiddden=1';
            d.body.appendChild(j);
        })(window, document, 'ysf');
    }
    componentWillUnmount() {
        Router.events.off('routeChangeComplete', this.handleRoute);
    }
    setsource() {
        Router.push({
            pathname: '/external-link/source'
        })
    }
    setstatement() {
        Router.push({
            pathname: '/external-link/statement'
        })
    }
    sethtml() {
        if (typeof window == 'object') {
            window.location.href = 'http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action'
        }
    }
    setInmg() {
        if (typeof window == 'object') {
            window.location.href = 'https://gk-pc.oss-cn-beijing.aliyuncs.com/handout/cf4bb40e9e7b0368d1df38fff3cb346d111.zip'
        }
    }
    settudou() {
        if (typeof window == 'object') {
            window.location.href = 'https://www.imtudo.com/'
        }
    }
    kefu() {
        ysf('open', {
            templateId: '6167009'
        })
    }
    goLink = (url, e) => {
        Router.push({
            pathname: url
        })
    }
    goToTop = (e) => {

    }
    render () {
        const {Component, pageProps} = this.props;
        return (
            <Provider store={store}>
                <div className={styles.app}>
                    <Layout>
                        <Sider
                            breakpoint="lg"
                            collapsedWidth="0"
                            onBreakpoint={broken => {
                                // console.log(broken);
                            }}
                            onCollapse={(collapsed, type) => {
                                // console.log(collapsed, type);
                            }}
                        >
                            <div className={styles['app_logo']}>
                                <img className={styles['app_logo_img']} src='/static/images/icon_login.png'/>
                            </div>
                            <Menu theme="light" mode="inline">
                                <Menu.Item key="1" onClick={this.goLink.bind(this, '/')}>
                                    <a>首页</a>
                                </Menu.Item>
                                <SubMenu
                                    key="2"
                                    title={
                                        <span>
                                            {/* <Icon type="mail" /> */}
                                            <span>分校</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="3">
                                        <Link href="/hunan">
                                            <a>湖南</a>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link href="/shandong">
                                            <a>山东</a>
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5">
                                    <Link href="/class">
                                        <a>课程</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link href="/ziliao">
                                        <a>资料</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link href="/gkbaike">
                                        <a>公考百科</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link href="/teachers">
                                        <a>师资</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link href="/xibanqiu">
                                        <a>犀半球</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="10">
                                    <Link href="/online">
                                        <a>移动学习</a>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header className={styles['app_header']}>
                                <TopBar />
                            </Header>
                            <div className={styles['app_container']}>
                                <Content className={styles['app_container_main']}>
                                    <Component {...pageProps} />
                                </Content>
                            </div>
                            <Footer className={styles['app_footer']}>
                                <ul className={styles['app_footer_main']}>
                                    <li className={styles['app_footer_main_item']}>
                                        <span onClick={this.setsource}>关于犀鸟</span>|
                                        <span onClick={this.setstatement}>法律声明</span>|
                                        <span onClick={this.sethtml}>沪ICP备14001217号-4</span>
                                    </li>
                                    <li className={styles['app_footer_main_item']}>
                                        <span>犀鸟客服：400-0559-789</span>
                                    </li>
                                    <li className={styles['app_footer_main_item']}>
                                        <span onClick={this.setInmg}>犀鸟表情包下载</span>|
                                        <span className={styles['app_footer_main_item_weiboEwmhover']}>
                                            犀鸟微博
                                            <div className={styles['app_footer_main_item_weiboEwm']}>
                                                <img src="/static/images/pic_code_weibo.png"/>
                                            </div>
                                        </span>|
                                        <span className={styles['app_footer_main_item_weixinEwmhover']}>
                                            犀鸟公众号
                                            <div className={styles['app_footer_main_item_weixinEwm']}>
                                                <img src="/static/images/pic_code_weixin.png"/>
                                            </div>
                                        </span>|
                                        <span onClick={this.settudou}>图豆教育-幼小衔接</span>
                                    </li>
                                </ul>
                            </Footer>
                        </Layout>
                        <BackTop />
                        <img src="/static/images/shang.png" className={styles['app_top']} onClick={this.goToTop.bind(this)}/>
                        <div className={styles['app_kehu']} onClick={this.kefu}>
                            <img src="/static/images/kefu1.png" className={styles['app_kehu_img1']} />
                            <img src="/static/images/kefu0.png" className={styles['app_kehu_img2']} />
                        </div>
                    </Layout>
                </div>
            </Provider>
        )
    }
}
