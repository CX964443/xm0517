import React, { Component } from 'react'
import echarts from 'echarts'
import './chart.less'

export default class Chart extends Component {
  state = {
    option1: {
        title:{
            show:true,
            text:"Line Chart"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            symbol: 'none',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            lineStyle:{
                color: "#F590A2"
            },
            areaStyle: {
                color: 'rgba(255, 0, 0, 0.2)'
            },
            smooth: true
        }]
        },
        option2 : {
            title:{
                show:true,
                text:"Bar Chart"
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
            },
        option3 : {
            title:{
                show:true,
                text:"Area Chart"
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        },
        option4 : {
            title:{
                show:true,
                text:"Doughnut Chart"
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
    }
  }

  componentDidMount () {
    const { option1, option2, option3, option4 } = this.state
    this.echartFn('echarts_wrap1', option1)
    this.echartFn('echarts_wrap2', option2)
    this.echartFn('echarts_wrap3', option3)
    this.echartFn('echarts_wrap4', option4)
  }

  echartFn ( name, option) {
    var myChart = echarts.init(document.getElementsByClassName(name)[0]);
    var option = option
    window.addEventListener('resize', () => {
      myChart.resize()
    })
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  render() {
    return (
      <div className='main_chart'>
        <div className='echarts_wrap1'></div>
        <div className='echarts_wrap2'></div>
        <div className='echarts_wrap3'></div>
        <div className='echarts_wrap4'></div>
      </div>
    )
  }
}