// import React from 'react';
// import './App.css';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';

// const { Header, Content, Sider } = Layout;

// // تنظیم آیتم‌های منو
// const items2: MenuProps['items'] = [
//   {
//     key: '1',
//     icon: React.createElement(UserOutlined),
//     label: 'داشبورد', // تغییر به فارسی
//   },
//   {
//     key: '2',
//     icon: React.createElement(LaptopOutlined),
//     label: 'پروژه‌ها', // تغییر به فارسی
//   },
//   {
//     key: '3',
//     icon: React.createElement(NotificationOutlined),
//     label: 'بازاریابی', // تغییر به فارسی
//   },
// ];

// const App: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout direction="rtl"> {/* فعال کردن حالت RTL */}
//       <Header style={{ display: 'flex', alignItems: 'center' }}>
//         <div className="demo-logo" />
//       </Header>
//       <Layout>
//         {/* تغییر Sider به سمت راست */}
//         <Sider width={200} style={{ background: colorBgContainer }}>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             style={{ height: '100%', borderRight: 0 }}
//             items={items2}
//           />
//         </Sider>
//         {/* محتوای اصلی به سمت چپ منتقل می‌شود */}
//         <Layout style={{ padding: '0 24px 24px' }}>
//           <Breadcrumb
//             items={[{ title: 'خانه' }, { title: 'لیست' }, { title: 'برنامه' }]} // عناوین فارسی
//             style={{ margin: '16px 0' }}
//           />
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             محتوا
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;
