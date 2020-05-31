import React from 'react';
import { Card } from 'antd';
import LoginForm from './components/login';
import LangSwitcher from './components/lang-switcher'

function LoginLayout() {
    const { Meta } = Card;

    return (
        <div className="login-layout">
            <div className="background-color-container"></div>
            <div className="card-container">
                <Card
                    hoverable
                    style={{ width: 500 }}
                >
                    <LoginForm />
                    
                    <LangSwitcher />

                </Card>
            </div>

        </div>
    );
}

export default LoginLayout;
