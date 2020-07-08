import React, {Component} from 'react';
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
class Home2 extends Component{
  data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  deleteIndex=(text)=>{
    console.log(text)
  }
  render(){
    return (
        <div>
          首页2首页2
          <Table dataSource={this.data}>
            <ColumnGroup title="Name">
              <Column title="First Name" dataIndex="firstName" key="firstName" />
              <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
                </>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                  <a onClick={()=>this.deleteIndex(text)}>Delete</a>
              )}
            />
          </Table>



        </div>
    )
  }
}
export default Home2