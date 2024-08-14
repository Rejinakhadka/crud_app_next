"use client";

import React from 'react'
import { Button, Form, Input } from 'antd'

const CrudForm = () => {
    const[form] = Form.useForm();



    const onFinish = () => {
        console.log("submitted")
    }
  return (
    <div>
<Form layout='inline' onFinish={onFinish}>
    <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]} >
        <Input placeholder='name'></Input>
    </Form.Item>
    <Form.Item name='email' rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input placeholder='email' ></Input>
    </Form.Item>
    <Form.Item>
        <Button type='primary' htmlType='submit'>
            Add
        </Button>
    </Form.Item>
</Form>
    </div>
  )
}

export default CrudForm;