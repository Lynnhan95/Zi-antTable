import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Table } from 'antd';
const { Header, Content, Footer } = Layout;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


class App extends Component {
  render() {
    return (
      <Table dataSource={dataSource} columns={columns} />
    );
  }
}

export default App;