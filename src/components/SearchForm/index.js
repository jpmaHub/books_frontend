import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

export default function SearchForm() {
  return <Form>
    <FormItem>
      <Input style={{ width:"250px"}}/>
    </FormItem> 
    <FormItem>
      <Button htmlType="submit">Search</Button>
    </FormItem>
  </Form>
}


