import React, { Component } from 'react';
import {
    Form,
    DatePicker,
    Input,
    TimePicker,
    Button,
    Radio
} from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import styles from '/static/styles/center/components/center.less';

class SelfForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
            return;
            }

            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'range-time-picker': [
                rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            ],
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            console.log('Received values of form: ', values);
        });
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                sm: { span: 4 },
            },
            wrapperCol: {
                sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="我的昵称">
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="我的性别">
                    {getFieldDecorator('sex')(
                        <Radio.Group>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>
                <Form.Item label="出生日期">
                    {getFieldDecorator('birthday', config)(<DatePicker />)}
                </Form.Item>
                <Form.Item label="我的大学">
                    {getFieldDecorator('school', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        确认修改
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default class SelfCenter extends Component {
    constructor (props) {
        super(props);
        let token = null
        let avatar_url = null;
        if (typeof window == 'object') {
            token = localStorage.getItem('token');
            avatar_url = localStorage.getItem('avatar_url');
        }
        this.state = {
            token: token,
            avatar_url: avatar_url
        }
    }
    render () {
        const CenterForm = Form.create({ name: 'SelfForm' })(SelfForm);
        const {
            avatar_url
        } = this.state;
        return (
            <div className={styles['SelfCenter']}>
                <h2>修改资料</h2>
                <div className={`${styles.between} ${styles['SelfCenter_info']}`}>
                    <div className={styles['SelfCenter_info_base']}>
                        <CenterForm />
                    </div>
                    <div className={styles['SelfCenter_info_logo']}>
                        <div className={styles['SelfCenter_info_logo_show']}>
                            <img src={avatar_url} />
                        </div>
                        <div className={styles['SelfCenter_info_logo_change']}></div>
                    </div>
                </div>
            </div>
        )
    }
}
