import React, { Component } from 'react';
import {Col,Row,Button,Tabs,Avatar, Card} from 'antd';
import {FaHorseHead,FaPaw,FaDog,FaThLarge} from '../../icons';
import profile from "../images/profile.jpg";
import h1 from "../images/h1-01.jpg";
import h2 from "../images/h1-02.jpg";
import h3 from "../images/h1-03.jpg";
import h4 from "../images/h1-02.jpg";
import h5 from "../images/h1-01.jpg";
import h6 from "../images/h1-03.jpg";
import c1 from "../images/c1-01.jpg";
import c2 from "../images/c1-02.jpg";
import c3 from "../images/c1-03.jpg";
import c4 from "../images/c1-02.jpg";
import c5 from "../images/c1-01.jpg";
import c6 from "../images/c1-03.jpg";
import d1 from "../images/d1-01.jpg";
import d2 from "../images/d1-02.jpg";
import d3 from "../images/d1-03.jpg";
import o1 from "../images/o1-01.jpg";
import o2 from "../images/o1-02.jpg";
import o3 from "../images/o1-03.jpg";





import './leftPannel.scss';






const {TabPane}=Tabs;
function callback(key) {
	console.log(key);
}

const Demo = () => (
    <Tabs defaultActiveKey="1" onChange={callback} centered style={{marginTop:'2rem'}}>
      <TabPane tab={<span><FaHorseHead/>  HORESE</span>} key="1">
        
      <Row gutter={{xs:8,sm:16, md:24, lg:32}}>
          <Col className='gutter-row' span={8}>
            <Card hoverable cover={<img src={h1}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={h2}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={h3}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={h4}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={h5}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={h6}/>}></Card>
          </Col>
          
        </Row>
      </TabPane>
      <TabPane tab={<span><FaPaw/>  CATS</span>} key="2">
      <Row gutter={{xs:8,sm:16, md:24, lg:32}}>
          <Col className='gutter-row' span={8}>
            <Card hoverable cover={<img src={c1}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={c2}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={c3}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={c4}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={c5}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={c6}/>}></Card>
          </Col>
          
        </Row>
      </TabPane>
      <TabPane tab={<span><FaDog/> DOGS</span>} key="3">
      <Row gutter={{xs:8,sm:16, md:24, lg:32}}>
          <Col className='gutter-row' span={8}>
            <Card hoverable cover={<img src={d1}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={d2}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={d3}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={d2}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={d1}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={d3}/>}></Card>
          </Col>
          
        </Row>
      </TabPane>
      <TabPane tab={<span><FaThLarge/> OTHERS</span>} key="4">
      <Row gutter={{xs:8,sm:16, md:24, lg:32}}>
          <Col className='gutter-row' span={8}>
            <Card hoverable cover={<img src={o1}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={o2}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={o3}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={o2}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={o1}/>}></Card>
          </Col>
          <Col className='gutter-row' span={8}>
          <Card hoverable cover={<img src={o3}/>}></Card>
          </Col>
          
        </Row>
      </TabPane>
    </Tabs>
  );


class LeftPannel extends Component {
    state = {  }
    render() { 
        return ( <div id='leftPannel'>
            <Row>
                <Col span={2}/>
                <Col span={6} className='outerDiv'>
                <div className='outer-circle-div'>
                    <Avatar size={80} icon={<img src={profile} />} className="circle"/>
                </div>
               
               <h4> Azeem Aleem</h4>
               <h5> BREEDER</h5>
                <div className='outer-button-div'>
                <Button type="primary" style={{width:'80%'}}>Contact us</Button>
                </div>
                <div className='outer-p-div'>
                <p style={{paddingLeft:'2rem',paddingTop:'1.5rem'}} >From </p>
                </div>
                <div className='outer-p-div'>
                <p style={{paddingLeft:'2rem',paddingTop:'1rem'}}>Member Since </p>
                </div>
                
                
                
                </Col>
                <Col span={1}/>
                <Col span={13}>
                <Demo />{' '}
                </Col>
                <Col span={2}/>
                

            </Row>
        </div> );
    }
}
 
export default LeftPannel;