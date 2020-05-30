import React from 'react';
import { Card, Row, Col } from 'antd';
import './style.scss'
import { Link } from 'react-router-dom';

function Dashboard() {
    const { Meta } = Card;
    return (
        <div className="page-container">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Link className='header-link' to='/internal-documents'>
                        <Card
                            hoverable
                        >
                            <div className="documents-count">5</div>

                            <Meta title="Internal Documents" description="View All" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Link className='header-link' to='/external-documents'>
                        <Card
                            hoverable
                        >
                            <div className="documents-count">18</div>
                            <Meta title="External Documents" description="View All" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Link className='header-link' to='/total-documents'>
                        <Card
                            hoverable
                        >
                            <div className="documents-count">35</div>
                            <Meta title="Total Documents" description="View All" />
                        </Card>
                    </Link>
                </Col>

            </Row>
        </div>
    );
}

export default Dashboard;
