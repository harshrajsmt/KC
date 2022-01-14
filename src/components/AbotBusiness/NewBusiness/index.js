import React from 'react'
import { Steps, Button, message } from 'antd';
import './NewBusiness.modul.less'
import FirstContent from './BusinessInfoContent/FirstContent'
import StartBusiness from './BusinessInfoContent/StartBusiness';

import { Row, Col } from 'antd';
import FrontHeader from '../../FrontHeader';

const { Step } = Steps;

const steps = [
  {
    title: 'Business_information',
    content: <FirstContent/>,
  },
  {
    title: 'Directors',
    content:'' ,
  },
  {
    title: 'Shareholders',
    content: '',
  },
  {
    title: 'Address',
    content: 'fourth-content',
  },
];
const NewBusiness = () => {
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
    return (
        <>
        <FrontHeader/>
        <Row>
            <Col span={20} offset={2}>
            <div className='steps-box'>
                <Steps labelPlacement='vertical' current={current}>
                    {steps.map(item => (
                    <Step key={item.title} title={<small>{item.title}</small>}/>
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                    )}
                    {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                    )}
                </div>
            </div>
            </Col>
        </Row>
        </>
    )
}

export default NewBusiness;
