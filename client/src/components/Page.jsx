import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  SearchOutlined,
  PictureOutlined,
  SmileOutlined,
} from '@ant-design/icons/lib/icons';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Daily from './Daily';

const { Header, Sider, Content } = Layout;

const Page = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [curCrum, setCurCrum] = useState('search');

  const handleCollapse = (col) => setCollapsed(col);

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<SearchOutlined />}>
            <Link to="/" onClick={() => setCurCrum('search')}>
              search
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PictureOutlined />}>
            <Link to="/gallery" onClick={() => setCurCrum('gallery')}>
              gallery
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SmileOutlined />}>
            <Link to="/daily" onClick={() => setCurCrum('pokemon of the day')}>
              pokemon of the day
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ backgroundColor: '#efefef', padding: 0 }}
        >
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>home</Breadcrumb.Item>
              <Breadcrumb.Item>{curCrum}</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="/" element={children} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/daily" element={<Daily />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Page;
