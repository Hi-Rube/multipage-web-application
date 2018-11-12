import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { GButton } from 'com-58-pc';
import './Example.scss';

let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export class Example extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('componentDidMount');
    }, 0);
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: ''
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  render() {
    return (
      <div className="Example">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="main" style={{ width: 300, height: 300 }}></div>
          <GButton>GButton</GButton>
          <p>
            <Link to="/Example2" className="pure-menu-link">this is Example, click to Example2</Link>
          </p>
        </header>
      </div>
    );
  }
}

