import React, { useState } from "react";
import { Table } from "antd";
import "./style/Table.css";
import Icon, {
  EyeOutlined 
} from "@ant-design/icons";

// تعریف نوع داده برای هر ردیف
interface InvoiceDetail {
  item: string;
  quantity: number;
  price: number;
}

interface DataType {
  key: string;
  name: string;
  date: string;
  sided: string;
  number: number;
  invoiceDetails: InvoiceDetail[];
}

// داده‌های جدول (4 ردیف و 5 ستون)
const data: DataType[] = [
  {
    key: "1",
    name: "علی احمدی",
    date: "1403/12/8",
    sided: "شخص حقیقی",
    number: 1,
    invoiceDetails: [
      { item: "کابین", quantity: 2, price: 20000 },
      { item: "موتور", quantity: 7, price: 50000 },
    ],
  },
  {
    key: "2",
    name: "رضا رضایی",
    date: "1403/10/8",
    sided: "شخص حقوقی",
    number: 2,
    invoiceDetails: [
      { item: "موتور", quantity: 3, price: 50000 },
      { item: "تابلوفرمان", quantity: 8, price: 40000 },
    ],
  },
  {
    key: "3",
    name: "اکبر اکبری",
    date: "1403/2/8",
    sided: "شخص حقیقی",
    number: 3,
    invoiceDetails: [
      { item: "موتور", quantity: 5, price: 50000 },
      { item: "کابین", quantity: 1, price: 20000 },
    ],
  },
];

// تعاریف ستون‌ها برای جدول اصلی
const columns = [
  {
    title: "نام",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "تاریخ قرار داد",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "طرف قرارداد",
    dataIndex: "sided",
    key: "sided",
  },
  {
    title: "شماره سفارش",
    dataIndex: "number",
    key: "number",
  },
];

// وضعیت نمایش جدول جزئیات
const Home: React.FC = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  // تابع برای مدیریت باز و بسته شدن جدول جزئیات
  const handleExpand = (key: React.Key) => {
    setExpandedRowKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  // تعریف جدول جزئیات برای هر ردیف
  const expandedRowRender = (record: DataType) => {
    const columns = [
      { title: "لیست سفارش", dataIndex: "item", key: "item",  },
      { title: "تعداد", dataIndex: "quantity", key: "quantity" },
      { title: "قیمت واحد", dataIndex: "price", key: "price" },
    ];

    return (
      <Table
        columns={columns}
        dataSource={record.invoiceDetails}
        pagination={false}
        
      />
    );
  };

  return (
    <div className="home-container">
      <Table
        dataSource={data}
        columns={columns}
        expandedRowKeys={expandedRowKeys}
        expandedRowRender={expandedRowRender}
        onExpand={(expanded: boolean, record: DataType) =>
          handleExpand(record.key)
        }
        rowClassName="expanded-row"
        // عنوان جدول
        title={() => <h3 style={{ margin: 0 }}>لیست سفارشات</h3>}
      />
    </div>
  );
};

export default Home;
