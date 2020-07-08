import React, { Component } from 'react';
import { Row, Col, DatePicker,Select,Button,Table,Pagination,Form } from 'antd';
import moment from 'moment';
import '../../styles/allData.scss'
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;
class AllData extends Component{
  constructor(props){
    super(props)
    this.state = {
      dateTime: [moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)],
      dataValue: [],
      channelValue: [],
      channelTypeValue: [],
      selectList:[
        {name:'全部',value:0},
        {name:'0001',value:1},
        {name:'0002',value:2},
        {name:'0003',value:3},
        {name:'0004',value:4},
      ],
      data: [
        {
          createTime:'2019-12-12',
          name: '小红',
          chinese: 9,
          math: 60,
          english: 70,
        },
        {
          createTime:'2019-11-11',
          name: '小明',
          chinese: 8,
          math: 60,
          english: 70,
        },
        {
          createTime:'2019-10-10',
          name: '小黑',
          chinese: 7,
          math: 60,
          english: 70,
        }
      ]
    }
  }
  // 数据可见筛选
  dataChange=(value)=>{
    console.log(value)
    this.setState({
      dataValue: value
    })
  }
  channelChange=(value)=>{
    this.setState({
      channelValue: value
    })
  }
  channelTypeValue=(value)=>{
    this.setState({
      channelTypeValue: value
    })
  }
  //查询按钮
  queryData=()=>{
    let {dataValue,channelValue,channelTypeValue} = this.state
    console.log(dataValue,channelValue,channelTypeValue)
  }


  onChange=(page, pageSize)=> {
    console.log(page, pageSize);
  }
  onShowSizeChange = (current, size)=>{
    console.log(current, size)
  }
  render(){
    let {dateTime,dataValue,selectList,channelValue,channelTypeValue,data} = this.state;
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        width:'200px'
      },
      {
        title: '日期',
        dataIndex: 'createTime',
        width:'200px'
      },
      {
        title: '数量',
        dataIndex: 'math',
        sorter: (a, b) => a.math - b.math,
        width:'200px'
      },
      {
        title: '国家',
        dataIndex: 'chinese',
        sorter: (a, b) => a.chinese - b.chinese,
        width:'200px'
      },
      {
        title: '激活数',
        dataIndex: 'english',
        sorter: (a, b) => a.english - b.english,
        width:'200px'

      },
    ];
    return(
      <div className="allData">
        <Row gutter={10}>
          <Col span={6}>
            <span>日期</span>
            <RangePicker
              defaultValue={dateTime}
              format={dateFormat}
            />
          </Col>
          <Col span={5}>
            <span>数据可见</span>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="请选择"
              defaultValue={dataValue}
              onChange={this.dataChange}
              optionLabelProp="label"
            >
              {
                selectList.map((item,index)=>
                  <Option value={item.value} label={item.name} key={index}>
                    <div className="demo-option-label-item">
                      {item.name}
                    </div>
                  </Option>
                )
              }

            </Select>
          </Col>
          <Col span={5}>
            <span>渠道ID</span>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="请选择"
              defaultValue={channelValue}
              onChange={this.channelChange}
              optionLabelProp="label"
            >
              {
                selectList.map((item,index)=>
                  <Option value={item.value} label={item.name} key={index}>
                    <div className="demo-option-label-item">
                      {item.name}
                    </div>
                  </Option>
                )
              }

            </Select>
          </Col>
          <Col span={5}>
            <span>渠道分组</span>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="请选择"
              defaultValue={channelTypeValue}
              onChange={this.channelTypeValue}
              optionLabelProp="label"
            >
              {
                selectList.map((item,index)=>
                  <Option value={item.value} label={item.name} key={index}>
                    <div className="demo-option-label-item">
                      {item.name}
                    </div>
                  </Option>
                )
              }

            </Select>
          </Col>
          <Col span={2}>
            <Button onClick={this.queryData} type="primary">查询</Button>
          </Col>
        </Row>
        <Table
          rowKey={record=>record.chinese}
          style={{marginTop:'10px'}}
          pagination={false}
          scroll={{ x: 1500}}
          bordered columns={columns}
          dataSource={data}
          />
        <Pagination
          style={{marginTop:'10px'}}
          total={data.length}
          showTotal={(total, range) => `共${total}条`}
          defaultPageSize={10}
          defaultCurrent={1}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
      </div>
    )
  }
}

export default AllData;




