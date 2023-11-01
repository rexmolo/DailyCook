import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    ContainerOutlined,
    UnorderedListOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;

export default function Dashboard({ auth }) {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/*<div className="py-12">*/}
            {/*    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">*/}
            {/*        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">*/}
            {/*            <div className="p-6 text-gray-900">You're logged in!</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} className={`h-screen`}>
                    <div className="logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Ingredients',
                            },
                            {
                                key: '2',
                                icon: <ContainerOutlined />,
                                label: 'Recipes',
                            },
                            {
                                key: '3',
                                icon: <UnorderedListOutlined />,
                                label: 'Menu',
                            },
                            {
                                key: '4',
                                icon: <ShoppingCartOutlined />,
                                label: 'Purchasing',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className='text-base w-16 h-16 ml-3'
                            // style={{
                            //     fontSize: '16px',
                            //     width: 64,
                            //     height: 64,
                            // }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>

        </AuthenticatedLayout>
    );
}
