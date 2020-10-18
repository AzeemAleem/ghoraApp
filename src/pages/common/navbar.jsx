import React, { Component } from 'react';
import { Row, Col, Input,Avatar } from 'antd';
import { HomeFilled, CommentOutlined, NotificationFilled } from '@ant-design/icons';
import logo from "../images/login/logo.png";
import profile from '../images/profile.jpg';
import {Link} from "react-router-dom";
import './navbar.scss';

const { Search } = Input;

class Navbar extends Component {
	state = {
		profile: false
	};

	handleProfile = () => {
		this.setState({
			profile: !this.state.profile
		});
	};
	render() {
		return (
			<div id='nav'>
				<Row className='container-row'>
					<Col span={6}>
						<Link to='/profilepage'>
						<img
							src={logo}
							style={{ width: '20%', marginLeft: '3rem', alignItems: 'center' }}
						/>
						</Link>
					</Col>
					<Col span={6} />
					<Col span={6} className='search-column'>
						<Search
							placeholder='input search text'
							onSearch={(value) => console.log(value)}
							style={{ width: 200 }}
						/>
					</Col>
					<Col span={3} className='icons-div'>
						<HomeFilled />
						<CommentOutlined />
						<NotificationFilled />
					</Col>
					<Col span={3} onClick={this.handleProfile} className='profile-outer-div'>
						<Avatar size='large' icon={<img src={profile}/>}/>
					</Col>
					{this.state.profile ? (
						<div className='profile' style={{zIndex:'100'}}>
							<Link to="/usrProfile"><a>Profile</a></Link>
							<hr />
							<Link to="/usrProfile">Log out</Link>

							
						</div>
					) : (
						''
					)}
				</Row>
			</div>
		);
	}
}

export default Navbar;
