import React from 'react'
import { Row, Col, Image } from 'antd';
import style from '../FirstContent/FirstContent.module.less'
import Book from '../../../../images/Book.png'
import Bulb from '../../../../images/Bulb.png'

const FirstContent = () => {
    return (
        <>
        <div>
            <Row>
                <Col span={24} >
                    <h1 className={style.bold}>Let us help you put the business together.</h1> 
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <h1 style={{fontWeight: '400'}}>Firstly is this an existing business?</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={24}> 
                   <Row>
                       <Col span={14} offset={5}>
                        <div>
                            <div><Image src={Book} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                            <div>
                                <h1 className={style.font} >This is an existing business already incorporated elsewhere</h1>
                            </div>
                        </div>
                       </Col>
                   </Row>
                    
                </Col>
                <Col  lg={12} sm={24}>
                    <Row>
                       <Col span={14} offset={5}>
                        <div>
                            {/* <div><BulbOutlined  style={{ fontSize: '150px', margin: '20px 0px'}}/></div> */}
                            <div><Image src={Bulb} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                            <div>
                                <h1 className={style.font} >This is a new business that is not yet incorporated anywhere</h1>
                            </div>
                        </div>
                       </Col>
                   </Row>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default FirstContent;
