import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  SearchOutlined,
  PictureOutlined,
  SmileOutlined,
} from '@ant-design/icons/lib/icons';

const { Header, Sider, Content } = Layout;

const Page = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState('search');

  const handleCollapse = (col) => setCollapsed(col);
  const handleRoute = () => console.log('switching route...');

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<SearchOutlined />} onClick={handleRoute}>
            search
          </Menu.Item>
          <Menu.Item key="2" icon={<PictureOutlined />} onClick={handleRoute}>
            gallery
          </Menu.Item>
          <Menu.Item key="3" icon={<SmileOutlined />} onClick={handleRoute}>
            pokemon of the day
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
              <Breadcrumb.Item>{page}</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Page;
