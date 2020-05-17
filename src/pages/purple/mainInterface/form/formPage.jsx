import React, { Component } from 'react';
import { add } from '../../../../api/api'

class formPage extends Component {
    addBtn = () =>{
        const { 
            name="",
            age="",
            msg="",
            hospital="",
            gender=""
        } = this.state
        
        add({
            name,age,msg,hospital,gender
        }).then( () =>{
            this.props.history.push('/purple/table')
        })
    }
    render() {
        return (
            <div className="formPage">
                <p><span>name</span><input type="text" onChange={(e)=>{this.setState({name:e.target.value})}}/></p>
                <p><span>age</span><input type="text" onChange={(e)=>{this.setState({age:e.target.value})}}/></p>
                <p><span>msg</span><input type="text" onChange={(e)=>{this.setState({msg:e.target.value})}}/></p>
                <p><span>hospital</span><input type="text" onChange={(e)=>{this.setState({hospital:e.target.value})}}/></p>
                <p><span>gender</span><input type="text" onChange={(e)=>{this.setState({gender:e.target.value})}}/></p>
                <button onClick={this.addBtn}>添加</button>
            </div>
        );
    }
}

export default formPage;