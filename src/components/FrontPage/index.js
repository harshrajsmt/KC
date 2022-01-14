import React from 'react'
import style from '../FrontPage/FrontPage.module.less'
import { Layout,  Row, Col, Button } from 'antd';
import FrontHeader from '../FrontHeader';

const { Content } = Layout;

const FrontPage = () => {
    return (
        <>
            <Layout>
                <FrontHeader/>
                <Content style={{ padding: '0 50px' }}>
                  <div style={{minHeight:window.innerHeight-65}}>
                    <Row>
                        <Col span={10} offset={7}>
                            <div><h1 className={style.head}>We found something</h1></div>
                            <div>
                                <p className={style.peragraph}>You're already a member of:</p>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col span={8}>
                                        <div className={style.name}><p>Pony</p></div>
                                        <div><small>kimbocorp.com/pony</small></div>
                                    </Col>
                                    <Col span={8}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col span={8} >
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col span={8}>
                                        <div className={style.name}><p>indigo</p></div>
                                        <div><small>kimbocorp.com/indigo</small></div>
                                    </Col>
                                    <Col span={8}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col span={8} >
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col span={8}>
                                        <div className={style.name}><p>hooligan</p></div>
                                        <div><small>kimbocorp.com/hooligan</small></div>
                                    </Col>
                                    <Col span={8}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col span={8} >
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col span={8}>
                                        <div className={style.name}><p>InProved</p></div>
                                        <div><small>kimbocorp.com/inproved</small></div>
                                    </Col>
                                    <Col span={8}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col span={8} >
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{textAlign:'center', marginTop:'45px'}}>
                                <Row>
                                    <Col span={24}>
                                        <p>Want to create a new company account? 
                                            <a style={{color: '#4ba1de', marginLeft: '5px'}} href='#'>Start here</a></p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                  </div>
                </Content>
                
            </Layout>
        </>
    )
}

export default FrontPage;
