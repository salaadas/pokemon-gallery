import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const SearchBar = ({ loading, setState }) => {
  const [query] = useState('');

  const search = ({ query }) => {
    setState((d) => ({ ...d, loading: true }));

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((res) => {
        setState({ loading: false, error: '', data: res.data });
      })
      .catch((err) => {
        setState({ loading: false, error: err, data: null });
      });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ query }}
      wrapperCol={{ span: 9 }}
      onFinish={search}
      onFinishFailed={(err) => console.error(err.message)}
      autoCapitalize="off"
      autoCorrect="off"
      autoSave="off"
    >
      <Form.Item
        label="Query"
        name="query"
        rules={[{ required: true, message: "Please enter a pokemon's name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11, span: 6 }}>
        <Button disabled={loading} type="dashed" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchBar;
