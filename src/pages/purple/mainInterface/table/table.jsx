import React, { Component } from 'react';
import { Table , Progress } from 'antd'
import { connect } from 'react-redux'
import { findUser } from '@/actions/purple'

export default @connect(state => ({}), {
  findUser
})

class table extends Component {
    state = {
        columns : [
            {
              title: 'name',
              dataIndex: 'name',
              key: 'name',
            },{
                title: 'gender',
                dataIndex: 'gender',
                key: 'gender',
            },
            {
              title: 'age',
              dataIndex: 'age',
              key: 'age',
              render: text => (
                  <div>
                      <Progress percent={Number(text)?text:0} showInfo={false} />
                  </div>
              ),
            },
            {
              title: 'hospital',
              dataIndex: 'hospital',
              key: 'hospital',
            },
            {
              title: 'address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: '',
              render: () => (
                <div size="middle">
                  <a>Edit </a>
                  <a>Delete</a>
                </div>
              ),
            },
        ],
        dataSource : []
    }
    componentDidMount(){
        this.props.findUser().then(res=>{
            this.setState({
                dataSource:res.payload.users
            })
        })
    }
    render() {
        const { dataSource , columns } = this.state
        return (
            <div className="tablePage">
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        );
    }
}
