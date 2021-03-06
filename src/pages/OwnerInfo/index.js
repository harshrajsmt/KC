import React from 'react'
import {Row, Col, Image} from 'antd';
import style from './OwnerInfo.module.less'
import Cros from '../ExistBusinessInfo/Images/Cros.png'
import Right from '../ExistBusinessInfo/Images/Right.png'

const OwnerInfo = () => {
    return (
        <>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row><div className={style.first_heading}>Are you the ultimate beneficial owner of this business?</div></Row>
                        <Row ><div className={style.font}>Ultimate beneficial owner is a person who owns more than 25% of the business</div></Row>
                        <Row>
                            <Col xl={12} md={12} sm={24} >
                                <Row className={style.containBox}>
                                    <Col span={18}>
                                        <div>
                                            <div><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={18} >
                                        <h1 className={style.font} >Yes, I am the ultimate beneficial owner of this business</h1>
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
                                        <h1 className={style.font} >No, I am not the ultimate beneficial owner of this business</h1>
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

export default OwnerInfo;
