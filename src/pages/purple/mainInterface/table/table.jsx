import React, { Component } from 'react';
import { Table , Progress } from 'antd'
import { findUser } from '../../../../api/api'

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
        findUser().then(res=>{
            console.log(res)
            this.setState({
                dataSource:res.data.users
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

export default table;