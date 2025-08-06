import React from 'react';
import { Button, Result, Typography, Image, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FrownOutlined, RocketOutlined } from '@ant-design/icons';
import "./index.css"

const { Title, Paragraph } = Typography;

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const funnyMessages = [
        "Galiba kayboldunuz! 🧭",
        "Bu sayfa uzaylılar tarafından kaçırıldı! 👽",
        "404 - Pizza bulunamadı 🍕",
        "Aradığınız sayfa kedi tarafından gizlendi 🐱",
        "Burada hiçbir şey yok... Sürpriz! 🎁"
    ];

    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    return (
        <div className='notFound-container'>
            <Image
                src="../images/astronaut.svg"
                preview={false}
                width={400}
                className='notFound-img'
                alt="Kaybolan astronot"
            />

            <Result
                icon={<FrownOutlined style={{ fontSize: 72, color: '#ff4d4f' }} />}
                title={<Title level={2} style={{ color: '#1890ff' }}>{randomMessage}</Title>}
                subTitle={
                    <Paragraph type="secondary" style={{ fontSize: 18 }}>
                        Ama merak etmeyin, sizi güvenli bir yere götürebiliriz!
                    </Paragraph>
                }
                extra={
                    <Button
                        type="primary"
                        size="large"
                        icon={<RocketOutlined />}
                        onClick={() => navigate('/')}
                    >
                        Ana Sayfaya Fırlat
                    </Button>
                }
            />
        </div>
    );
};

export default NotFoundPage;