import React from 'react';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const RegisterPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return (
        <Row className='container' style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"40px", marginBottom:"250px"}}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
                >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            <br/>
            <br/>
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
            />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            
            </Form.Item>
            <Form.Item>
                <Button style={{marginRight:"10px"}} type="primary" htmlType="submit" className="login-form-button">
                Register
                </Button>
                Already have an account?  <a href="/auth">Sign In</a>
            </Form.Item>
            </Form>
        </Row>
    );
};

export default RegisterPage;