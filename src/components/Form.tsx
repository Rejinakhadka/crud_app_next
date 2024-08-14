"use client";

import React from 'react';
import { Button, Form, Input } from 'antd';
import { useCrudContext } from '../context/CrudContext';
import { Item } from '../types';

const CrudForm: React.FC = () => {
  const [form] = Form.useForm();
  const { addItem } = useCrudContext();

  const onFinish = async (values: { name: string; email: string }) => {

    try {
        console.log('Form Submitted with values:', values);
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
     
      const newItem: Item = {
        id: data.id, 
        title: data.name,
        description: data.email,
      };

      addItem(newItem);
      form.resetFields();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <Form layout="inline" form={form} onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CrudForm;
