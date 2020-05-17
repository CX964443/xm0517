import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getName, getList } from '@/actions/form'
import './styles.less'

export default @connect(state => ({}), {
  getName,
  getList,
})
class Forms extends React.Component {
  onClick = () => {
    this.props.getName({ 
      userName: 'wwwwwwww', 
      passWord: 'wwwwwwww', 
    })
  }

  onClick2 = () => {
    this.props.getList({
      page: 1,
    })
  }

  render () {
    return (
      <div>
        <Button onClick={this.onClick}>登录</Button>
        <Button onClick={this.onClick2}>获取数据</Button>
      </div>
    )
  }
}







