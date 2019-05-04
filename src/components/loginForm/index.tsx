import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import './style.scss';

interface LoginFormProps {
    form: WrappedFormUtils;
}

const LoginForm = React.memo(({ form }: LoginFormProps) => {
    const { getFieldDecorator, validateFields } = form;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        window.location.href = 'http://localhost:3000/';
    };

    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>记住密码</Checkbox>)}
                <a className="login-form-forgot" href="">
                    忘记密码
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登入
                </Button>
            </Form.Item>
        </Form>
    );
});

export const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
