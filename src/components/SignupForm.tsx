import React from 'react';
import { Form, Input, Button } from 'antd';
import type { ISignup } from '../interfaces/user';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignupForm: React.FC = () => {
    const [form] = Form.useForm<ISignup>();
    const navigate = useNavigate();
    const { signup } = useAuth();

    const initialValues: ISignup = { name: '', surname: '', email: '', password: '' }

    const handleSignup = async () => {
        const values = await form.validateFields();
        await signup(values);
        navigate('/login');
    };

    return (
        <Form form={form} layout="vertical" initialValues={initialValues}>

            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true }, { type: 'string' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Surname"
                name="surname"
                rules={[{ required: true }, { type: 'string' }]}
            >
                <Input />
            </Form.Item>

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
                <Button type="primary" htmlType='submit' block onClick={handleSignup}>
                    Kayit Ol
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignupForm;
