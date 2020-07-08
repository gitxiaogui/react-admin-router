import React, { Component } from 'react'
import { Table } from 'antd';
import axios from 'axios';

class Home3 extends Component{
  onChange = (pagination, filters, sorter, extra)=>{
    console.log('params', sorter);
  }
  render(){
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: (a, b) => a.chinese - b.chinese,

      },
      {
        title: 'Math Score',
        dataIndex: 'math',
        sorter:(a, b) => a.math - b.math,

      },
      {
        title: 'English Score',
        dataIndex: 'english',
        sorter:(a, b) => a.english - b.english,

      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
      },
      {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
      },
      {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
      },
      {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
      },
    ];

    return (
        <div>
          home3首页3333333333333333333
          <Table columns={columns} dataSource={data} onChange={this.onChange} />
        </div>
    )
  }
}
export default Home3
