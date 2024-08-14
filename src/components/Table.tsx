"use client";

import React from 'react';
import { Table, Button, Space } from 'antd';
import { useCrudContext } from '../context/CrudContext';

const CrudTable: React.FC = () => {
  const { items, deleteItem } = useCrudContext(); 

  const columns = [
    {
      title: "Name",
      dataIndex: "title", 
      key: "title",
    },
    {
      title: "Email",
      dataIndex: "description", 
      key: "description"
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      )
    }
  ];

  const handleEdit = (record: Item) => {

    console.log("Edit item:", record);
  };

  const handleDelete = (id: number) => {
    deleteItem(id);
  };

  return (
    <Table 
      columns={columns} 
      dataSource={items} 
      rowKey="id" 
    />
  );
};

export default CrudTable;
