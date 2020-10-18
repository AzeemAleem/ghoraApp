import React, {Component} from 'react';
import {Row,Col,Tabs} from 'antd';

const {TabPane}=Tabs;
function callback(key) {
	console.log(key);
}
const Demo = () => (
    <Tabs defaultActiveKey="1" onChange={callback} centered>
      <TabPane tab="HORSES" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="CATS" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="DOGS" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="OTHERS" key="4">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );

class RightPannel extends Component {
    state = {  }
    render() { 
        return ( <div>
<Row>
    <Col span={2}></Col>
    <Col span={6}></Col>
    <Col span={2}></Col>
    <Col span={12}>
    </Col>
    <Col span={2}></Col>

</Row>
        </div> );
    }
}
 
export default RightPannel;