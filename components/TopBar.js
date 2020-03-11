import React, { Component } from 'react'
import Router from 'next/router';
import Link from 'next/link';
import {
    Menu,
    Dropdown,
    Modal,
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import {
    phoneLogin,
    loginphone
} from '../http/getRes';
import styles from '../static/styles/components/TopBar.less';

function loginOut () {
    if (typeof window == 'object') {
        localStorage.clear();
        Router.push({
            pathname: '/'
        })
    }
}
class MobileLogin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            btnText: '获取验证码',
            timer: 60,
            flag: true,
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            }
        });
    };
    getCode = (e) => {
        const timestamp = Math.floor(new Date().getTime()/1000);
        const { form } = this.props;
        let phone = form.getFieldValue('phone');
        let siv = setInterval(() => {
            let timer = this.state.timer - 1
            this.setState({
                timer: timer,
                btnText: `(${this.state.timer}s)`,
                disabled: true
            }, () => {
                if (this.state.timer == 0) {
                    this.setState({
                        timer: 60,
                        btnText: '获取验证码',
                        flag: true,
                        disabled: false
                    })
                    clearInterval(siv);
                }
            });
        }, 1000)
        // const params = {
        //     phone: this.ruleForm.phone,
        //     timestamp: timestamp
        // }
    }
    render() {
        const formItemLayout = {
            labelCol: {
                sm: { span: 6 },
            },
            wrapperCol: {
                sm: { span: 16 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        const style={
            position: 'relative',
            left: '50%',
            top: '150px',
            height: '120px',
            transform: 'translateX(-50%)',
        };
        const IconStyle = {
            height: '40px',
            padding: '8px',
            verticalAlign: 'middle',
            marginLeft: '2px'
        }
        const {
            btnText
        } = this.state;
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={style}>
                <Form.Item label={<img style={IconStyle} src="/static/images/icon_input_phone.png"></img>}>
                    {
                        getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入正确的手机号' }],
                        })
                        (
                            <Input style={{ width: '100%' }} />
                        )
                    }
                </Form.Item>
                <Form.Item label={<img style={IconStyle} src="/static/images/icon_input_code.png"></img>}>
                    <Row gutter={9}>
                        <Col span={16}>
                            {
                                getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                })
                                (
                                    <Input />
                                )
                            }
                        </Col>
                        <Col span={6}>
                            <Button onClick={this.getCode.bind(this)}>{btnText}</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        );
    }
}
const PhoneLogin = Form.create({ name: 'normal_login' })(MobileLogin);
export default class Tuangou extends Component {
    constructor (props) {
        super(props);
        let token = null;
        let avatar_url = null;
        if (typeof window == 'object') {
            token = localStorage.getItem('token');
            avatar_url = localStorage.getItem('avatar_url');
        }
        this.state = {
            token,
            avatar_url,
            visable: false,
            isPhoneLogin: false,
            src: `https://open.weixin.qq.com/connect/qrconnect?appid=wxd4cd10786301628d&redirect_uri=https%3a%2f%2fwww.xiniaogongkao.com/&response_type=code&scope=snsapi_login#wechat_redirect`
        }
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
        this.setState({
            visable: false,
        });
    };
    goLogin = (e) => {
        this.setState({
            visable: true,
        });
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
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
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
                                    <div className={styles['xiniao_login_xieyi']}>
                                        <Checkbox className={styles['xiniao_login_xieyi_checkbox']} onChange={this.onChange.bind(this)}>登录即代表同意</Checkbox>
                                        <span>《犀鸟公考用户协议》</span>
                                        <div className={styles['xiniao_login_xieyi_submit']}>登录</div>
                                    </div>
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
