import React, { Component } from 'react';
import { Layout , Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './main.less'
import RouterD from "../../../routerFactory/routerD"

const { Header,  Sider, Content } = Layout;
const { SubMenu } = Menu;

class main extends Component {
    render() {
        console.log(this)
        return (
            <div className="main">
                <Layout>
                    <Header>
                        <div className="logo"></div>
                        <div className="search"></div>
                        <div className="user"></div>
                    </Header>
                    <Layout>
                        <Sider>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item key="1" >
                                <div className="navBox">
                                Navigation One
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <div className="navBox">
                                Baslc UI Elements
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                            <Menu.Item key="3" >
                                <div className="navBox">
                                Icons
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                            <Menu.Item key="4" onClick={()=>{this.props.history.push('/purple/formPage')}} >
                                <div className="navBox">
                                Form Elements
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                            <Menu.Item key="5" onClick={()=>{this.props.history.push('/purple/chart')}}>
                                <div className="navBox">
                                Chart
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                            <Menu.Item key="6" onClick={()=>{this.props.history.push('/purple/table')}}>
                                <div className="navBox">
                                Table
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                            <Menu.Item key="7" onClick={()=>{this.props.history.push('/purple/samplePages')}}>
                                <div className="navBox">
                                Sample Oages
                                <MailOutlined />
                                </div>
                            </Menu.Item>
                        </Menu>
                        </Sider>
                        <Content>
                            <RouterD routerList={this.props.routerList} key={this.props.location.pathname}/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default main;