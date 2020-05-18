import React, { Component } from 'react';
import { Pagination } from 'antd';
import './samplePages.less'
import { connect } from 'react-redux'
import { listWithPage } from '@/actions/purple'

export default @connect(state => ({}), {
    listWithPage
})

class samplePages extends Component {
    state = {
        current: 1,
    };
    changePage = page=>{
        this.setState({
            current: page
        });
        this.props.listWithPage({
            page:page,
            limit:6
        }).then(res=>{
            this.setState({
                data: res.payload.result.list
            });
        })
    }
    componentDidMount(){
        this.props.listWithPage({
            page:1,
            limit:6
        }).then(res=>{
            this.setState({
                data: res.data.result.list,
                total:res.data.result.count
            });
        })
    }
    render() {
        const { total , data=[] } = this.state
        return (
            <div className="samplePages">
                <div className="showBox">
                    {
                        data?
                        data.map(v => {
                            return (
                                <div className="card" key={v.id}>
                                    <h4>{v.tags}</h4>
                                    <p>{v.title}</p>
                                </div>
                            )
                        })
                        :""
                    }
                </div>
                <Pagination 
                  defaultCurrent={1} 
                  total={total}
                  pageSize={6}
                  onChange={this.changePage}
                />
            </div>
        );
    }
}
