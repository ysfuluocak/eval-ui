import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { ILogin } from '../interfaces/user';
import { useAuth } from '../context/AuthContext';

const LoginForm: React.FC = () => {
    const [form] = Form.useForm<ILogin>();
    const navigate = useNavigate();
    const { login } = useAuth();

    const initialValues: ILogin = { email: '', password: '' };

    const handleLogin = async () => {
        const values: ILogin = await form.validateFields();
        await login(values);
    };

    return (
        <Form form={form} layout="vertical" initialValues={initialValues}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true }, { type: 'email' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Şifre"
                name="password"
                rules={[{ required: true }, { min: 6 }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Button type="primary" htmlType='submit' block onClick={handleLogin}>
                        Giriş Yap
                    </Button>
                    <Button block htmlType='button' onClick={() => navigate('/signup')}>
                        Kayıt Ol
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
