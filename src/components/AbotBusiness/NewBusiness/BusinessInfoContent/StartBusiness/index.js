import React from 'react'
import {Row, Col, Button, Form, Input, Select } from 'antd';
import style from './StartBusiness.module.less'
import FrontHeader from '../../../../FrontHeader';
import { CaretDownOutlined, InfoCircleFilled } from '@ant-design/icons';

const { Option } = Select;
const message = <span style={{fontSize:'23px'}}>It seems like it is available in Singapore, or Please enter another name, it seems like it is not available in Singapore</span>
const StartBusiness = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row className={style.first_heading}>About your new business</Row>
                            <Form>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col lg={20} xl={20} md={24} sm={24}>
                                        <Form.Item
                                                name="CompanyName"
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: {message},
                                                },
                                                ]}> 
                                                <Input bordered={false} className={style.input} placeholder="Company name - first choice"/>

                                                <Button className={style.btn} style={{marginLeft:'20px'}}>
                                                Check
                                                </Button>
                                         </Form.Item>
                                    </Col>
                                    {/* <Col span={8}>
                                            <Form.Item style={{paddingLeft:'25px'}}>
                                                <Button className={style.btn} htmlType="submit">
                                                    Check
                                                </Button>
                                            </Form.Item>
                                    </Col> */}
                                </Row>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col lg={17} xl={17} md={24} sm={24}>
                                        <Form.Item>
                                            <Select bordered={false} className={style.option} 
                                                style={{paddingBottom:'10px'}}
                                                defaultValue="SSIC - Company activity" 
                                                suffixIcon= {<CaretDownOutlined className={style.icon}/>}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                            </Select>
                                            <InfoCircleFilled style={{fontSize:'24px', marginLeft:'10px', paddingBottom:'10px'}}/>
                                        </Form.Item> 
                                    </Col>
                                    <Col>
                                       
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} xl={12} md={12} sm={24}>
                                            <Button className={style.btn}>
                                                Back
                                            </Button>
                                    </Col>
                                    <Col lg={12} xl={12} md={12} sm={24}>
                                            <Button className={style.btn} style={{float:'right'}} htmlType="submit">
                                                Save & Next
                                            </Button>
                                    </Col>
                                </Row>
                            </Form>
                    </Col>
                </Row>
            </div>
             
        </>
    )
}

export default StartBusiness;
