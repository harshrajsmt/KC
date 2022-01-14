import React from 'react'
import {Row, Col, Image} from 'antd';
import style from './ShareHolders.module.less'
import Cros from '../ExistBusinessInfo/Images/Cros.png'
import Right from '../ExistBusinessInfo/Images/Right.png'
import FrontHeader from '../../components/FrontHeader'

const ShareHolders = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row className={style.first_heading}>Do you have other shareholders in this business?</Row>
                        <Row>
                            <Col xl={12} md={12} sm={24}>
                                <Row className={style.containBox}>
                                    <Col span={18}>
                                        <div>
                                            <div><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={16}>
                                        <h1 className={style.font} >Yes, there are other shareholders in this business.</h1>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col xl={12} md={12} sm={24}>
                                <Row className={style.containBox}>
                                    <Col span={18} >  
                                    
                                        <div>
                                            <div><Image src={Cros} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={16}>
                                        <h1 className={style.font} >No, I am the only shareholder in this business.</h1>
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

export default ShareHolders;
