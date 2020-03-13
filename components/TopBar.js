import React, { Component } from 'react'
import Router from 'next/router';
import Link from 'next/link';
import {
    Menu,
    Dropdown,
    Modal,
    Form,
} from 'antd';
import MobileLogin from './MobileLogin';
import { connect } from 'react-redux';
import { setUserInfo, showlogin } from '../redux/actions';
import store from '../redux/store';
import styles from '../static/styles/components/TopBar.less';
const PhoneLogin = Form.create({ name: 'normal_login' })(MobileLogin);
@connect(state =>
    ({
        visibilityFilter: state.visibilityFilter,
        todos: state.todos,
        userinfo: state.userinfo,
        loginModal: state.loginModal
    }),
    (dispatch) => ({
        setUserInfo (user) {
          dispatch(setUserInfo(user))
        },
        showlogin (bollean) {
            dispatch(showlogin(bollean))
        }
    })
)

export default class TopBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            token: null,
            avatar_url:  null,
            visable: props.loginModal,
            isPhoneLogin: false,
            src: `https://open.weixin.qq.com/connect/qrconnect?appid=wxd4cd10786301628d&redirect_uri=https%3a%2f%2fwww.xiniaogongkao.com/&response_type=code&scope=snsapi_login#wechat_redirect`,
        }
        store.subscribe(() => {
            const state = store.getState();
            const { loginModal, userinfo } = state;
            this.setState({
                token: userinfo.token || null,
                avatar_url:  userinfo.avatar_url || null,
                visable: loginModal
            })
        })
    }
    componentDidMount () {
        const { userinfo } = this.props;
        const { loginModal } = this.props;
        console.log(store.getState())
        const { avatar_url, token } = userinfo;
        this.setState({
            avatar_url: avatar_url || null,
            token: token || null,
            visable: loginModal
        })
    }
    menu () {
        return (
            <Menu>
                <Menu.Item >
                    <Link href="/center#8">
                        <a>消息中心</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/center#2">
                        <a>我的订单</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/center#4">
                        <a>我的地址</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        退出登录
                    </div>
                </Menu.Item>
            </Menu>
        )
    }
    handleOk = (e) => {
        this.props.showlogin(false);
    };
    goLogin = (e) => {
        this.props.showlogin(true);
    }
    phoneLogin = (e) => {
        this.setState({
            isPhoneLogin: true
        })
    }
    weLogin = (e) => {
        this.setState({
            isPhoneLogin: false
        })
    }
    render () {
        const {
            token,
            avatar_url,
            visable,
            isPhoneLogin,
            src
        } = this.state;
        return (
            <div className={`${styles['TopBar_view']} ${styles.clearfix}`}>
                {
                    token ? (
                        <div className={styles['TopBar_view_center']}>
                            <div className={styles['TopBar_view_center_class']}>
                                <img src="/static/images/lan.png" className={styles['TopBar_view_center_class_icon']} />
                                我的课程
                            </div>
                            <Dropdown overlay={this.menu} placement="bottomRight">
                                <img className={styles['TopBar_view_center_logo']} src={avatar_url} />
                            </Dropdown>
                        </div>
                    ) : (
                        <img
                            className={styles['TopBar_view_loginicon']}
                            src="/static/images/ewm.png"
                            onClick={this.goLogin.bind(this)}
                        />
                    )
                }
                <Modal
                    width="540px"
                    centered
                    visible={visable}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleOk.bind(this)}>
                    <div className={styles['xiniao_login']}>
                        {
                            !isPhoneLogin ? (
                                <div>
                                    <img className={styles['xiniao_login_logo']} src="/static/images/icon_login.png" alt="" />
                                    <iframe className={styles['xiniao_login_iframe']} src={src}></iframe>
                                    <div className={styles['xiniao_login_phoneLogin']} onClick={this.phoneLogin.bind(this)}>手机号登录</div>
                                </div>
                            ) : (
                                <div>
                                    <img className={styles['xiniao_login_logo']} src="/static/images/icon_login.png" alt="" />
                                    <PhoneLogin />
                                    <div className={styles['xiniao_login_weixinLogin']} onClick={this.weLogin.bind(this)}>微信登录</div>
                                </div>
                            )
                        }
                    </div>
                </Modal>
            </div>
        )
    }
}
