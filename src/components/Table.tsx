"use client";


import {Table, Button, Space} from "antd";
import { title } from "process";


const CrudTable=() => {
  const columns = [
  {
    title:"Name",
    dataIndex:"name",
    key:"name",
  },
  {
    title:'Email',
    dataIndex:"email",
    key:"email"
  },
  {
    title:"Actions",
    key:"actions",
    render:() => (
        <Space>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </Space>
    )
  }
  ]  
  return(
    <Table columns={columns}  rowKey='id'/>
  )
}

export default CrudTable;