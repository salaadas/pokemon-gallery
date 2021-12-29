import React, { useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Togglable from './Togglable';

const SearchBar = ({ loading, setState }) => {
  const [query] = useState('');
  const [form] = Form.useForm();
  const searchRef = useRef();

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

    form.resetFields();
    searchRef.current.toggleVisibility();
  };

  return (
    <Togglable ref={searchRef}>
      <Form
        name="basic"
        labelCol={{ span: 7 }}
        defaultValue={{ query }}
        wrapperCol={{ span: 10 }}
        onFinish={search}
        onFinishFailed={(err) => console.error(err.message)}
        autoCapitalize="off"
        autoCorrect="off"
        autoSave="off"
        form={form}
      >
        <Form.Item
          label="query"
          name="query"
          rules={[{ required: true, message: "please enter a pokemon's name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 11, span: 6 }}
          style={{ margin: 'auto' }}
        >
          <Button disabled={loading} type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </Togglable>
  );
};

export default SearchBar;
