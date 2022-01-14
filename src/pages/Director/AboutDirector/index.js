import React from 'react'
import {Row, Col, Image} from 'antd';
import style from './AboutDirector.module.less'
import Cros from '../../ExistBusinessInfo/Images/Cros.png'
import Right from '../../ExistBusinessInfo/Images/Right.png'

const AboutDirector = () => {
    return (
        <>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row><div className={style.first_heading}>Every business in Singapore needs to appoint a resident director.</div></Row>
                        <Row ><div className={style.font}>Are you a foreigner or Singaporean/Singaporean Permanent Resident?</div></Row>
                        <Row>
                            <Col xl={12} md={12} sm={24} >
                                <Row className={style.containBox}>
                                    <Col span={18}>
                                        <div>
                                            <div><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={18} >
                                        <h1 className={style.font} >I am a Singaporean/PR</h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12} md={12} sm={24} >
                                <Row className={style.containBox}>
                                    <Col span={18} >  
                                    
                                        <div>
                                            <div><Image src={Cros} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={18}>
                                        <h1 className={style.font} >I am a foreigner</h1>
                                    </Col >
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
             
        </>
    )
}

export default AboutDirector;
