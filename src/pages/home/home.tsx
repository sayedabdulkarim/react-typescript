import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal, Input, Row, Col, Form } from 'antd';
import ExpenseForm from './expense-form';

const dataSource = [
  {
    key: '1',
    itemName: 'Mike',
    amount: 32,
    category: 'abc',
    expenseDate: '10 Downing Street',
  },
  {
    key: '2',
    itemName: 'Mike',
    amount: 32,
    category: 'abc',
    expenseDate: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Item name',
    dataIndex: 'itemName',
    key: 'itemName',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Expense date',
    dataIndex: 'expenseDate',
    key: 'expenseDate',
  },
];

class HomePage extends React.PureComponent {

  state = {
    visibleAddExpense: false,
  }

  showAddExpense = () => {
    this.setState({visibleAddExpense: true});
  };

  closeAddExpense = () => {
    this.setState({visibleAddExpense: false});
  };

  handleAddExpenseSubmit = () => {
    this.setState({visibleAddExpense: false});
  };

  render() {

    return (
      <div>
        <Button type='primary' onClick={this.showAddExpense}>Add Expense</Button>
        <br />
        <br />
        <Table dataSource={dataSource} columns={columns} />;
        <Modal
          title='Add Expense'
          visible={this.state.visibleAddExpense}
          onOk={this.handleAddExpenseSubmit}
          onCancel={this.closeAddExpense}
        >
          {/* <Input.Group>
            <Row gutter={8}>
              <Col span={24}>
                <Input placeholder='Item name' />
              </Col>
            </Row><br />
            <Row gutter={8}>
              <Col span={8}>
                <Input type='number' placeholder='Amount' />
              </Col>
              <Col span={16}>
                <Input placeholder='date' />
              </Col>
            </Row>
          </Input.Group> */}
          <ExpenseForm />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({Setting, Expense}: any) => ({Setting, Expense});
export default connect(mapStateToProps)(HomePage);
