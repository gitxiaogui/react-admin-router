import React, {Component} from 'react';
import { Table, Tag, Space,Form,DatePicker,Select,Button,Pagination } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
class Home1 extends Component{
  constructor(props){
    super(props)
    this.state={
      dateTime: [moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)],
    }
  }
  onChange = (checkedValues)=> {
    console.log(`checked = ${checkedValues}`);
  }
  deleteBtn = (text,record)=>{
    console.log(text,record)
  }
  render(){
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <a onClick={()=>{this.deleteBtn(text, record)}}>Delete</a>
        ),
      },
    ];
    let data = []
    for(let i = 0;i<100;i++){
      let obj = {}
      obj.key = i;
      obj.name = '好好'+i
      obj.age = 33+i
      obj.address = '地址'+i
      obj.tags = 'nice'+i
      data.push(obj)
    }

    let {dateTime} = this.state;
    return (
        <div>
          <div>
            home1首页12354678912324
          </div>
          <Form className="searchForm" name="horizontal_login" layout="inline" >
            <Form.Item label="时间">
              <RangePicker
                defaultValue={dateTime}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="时间">
              <RangePicker
                defaultValue={dateTime}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="时间">
              <RangePicker
                defaultValue={dateTime}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="时间">
              <RangePicker
                defaultValue={dateTime}
                format={dateFormat}
              />
            </Form.Item>
          </Form>
          <Table columns={columns} dataSource={data} pagination={{total: data.length,showSizeChanger: true}} />
          {/*<Pagination
            total={data.length}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            defaultPageSize={20}
            defaultCurrent={1}
          />*/}


        </div>
    )
  }
}
export default Home1