import React from 'react';
import { Card } from 'antd';
import LoginForm from '../containers/login';
import LangSwitcher from './components/lang-switcher'
import Header from './components/header';

function LoginLayout() {
    return (
        <div className="login-layout">
            <header className="header-container">
                <div className="right-side">
                    <div className="logo-container">
                        <img src="/public/assets/images/logo.png" alt="" className="logo" />
                    </div>

                </div>
                <div className="controls-container">

                    {/* <div className="lang-switcher-container">
                        <LangSwitcher />
                    </div> */}
                </div>
            </header>
            <div className="card-container">
                <div style={{ width: 400, marginTop: 100 }}>
                    <div className="login-title-container">
                        <div className="login-title">
                            Login
                        </div>
                        <div className="login-line">
                            
                        </div>
                    </div>
                    <LoginForm />
                </div>

                {/* <Card
                    hoverable
                    style={{ width: 500 }}
                >

                    <LangSwitcher />

                </Card> */}
            </div>

        </div>
    );
}

export default LoginLayout;
