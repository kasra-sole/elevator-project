// TaskTable.tsx
import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: 'نام تسک',
    dataIndex: 'taskName',
    key: 'taskName',
    render: (text: string) => <strong>{text}</strong>,
  },
  {
    title: 'دسته‌بندی',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'وضعیت',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span style={{ color: status === 'اتمام یافته' ? 'green' : 'orange' }}>
        {status}
      </span>
    ),
  },
  {
    title: 'تاریخ سررسید',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
  {
    title: 'واگذار شده به',
    dataIndex: 'assignedTo',
    key: 'assignedTo',
  },
];

const data = [
  {
    key: '1',
    taskName: 'تسک اول',
    category: 'کتاب‌ها',
    status: 'در حال انجام',
    dueDate: '1403/03/15',
    assignedTo: 'فلورینا کيرتلان',
  },
  {
    key: '2',
    taskName: 'تسک دوم',
    category: 'ورزش‌ها',
    status: 'در حال انجام',
    dueDate: '1403/06/28',
    assignedTo: 'چونس کرکوران',
  },
  {
    key: '3',
    taskName: 'تسک سوم',
    category: 'حیوانات خانگی',
    status: 'اتمام یافته',
    dueDate: '1403/09/12',
    assignedTo: 'کان داکرینگ',
  },
];

const TaskTable: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      bordered
      scroll={{ x: 1100 }}
    />
  );
};

export default TaskTable;
