import React from 'react';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const AuthPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return (
        <div className='auth-style'>
        <Row className='container forcss' style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"40px", marginBottom:"250px"}}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
            <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                {
                    type: "email",
                    message: "Is not a valid email"
                }
                ]}
                >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
            </Form.Item>
            <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
            </a>
            </Form.Item>

            <Form.Item>
                <Button style={{marginRight:"10px", marginLeft:"30px"}} type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="/register">register now!</a>
            </Form.Item>
            </Form>
        </Row>
        </div>
    );
};

export default AuthPage;