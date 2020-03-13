import React, { Component } from 'react';
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
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';
import styles from '../static/styles/components/TopBar.less';

@connect(state =>
    ({
        visibilityFilter: state.visibilityFilter,
        todos: state.todos,
        userinfo: state.userinfo
    }),
    (dispatch) => ({
        setUserInfo (user) {
          dispatch(setUserInfo(user))
        },
    })
)
export default class MobileLogin extends Component {
    constructor(props) {
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
    }
    loginByPhone = (e) => {
        const timestamp = Math.floor(new Date().getTime()/1000);
        const params = {
            phone: 15901609221,
            code: 2317,
            timestamp: timestamp
        }
        phoneLogin(params)
            .then(res=>{
                localStorage.setItem('userinfo', JSON.stringify(res.data));
                localStorage.setItem('token', res.data.token);
                this.props.setUserInfo(res.data);
            })
    }
    onChange = (e) => {
        // console.log(`checked = ${e.target.checked}`);
    }
    render () {
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
            <div>
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
                <div className={styles['xiniao_login_xieyi']}>
                    <Checkbox className={styles['xiniao_login_xieyi_checkbox']} onChange={this.onChange}>登录即代表同意</Checkbox>
                    <span>《犀鸟公考用户协议》</span>
                    <div className={styles['xiniao_login_xieyi_submit']} onClick={this.loginByPhone}>登录</div>
                </div>
            </div>
        );
    }
}
