import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderRow = employee => {
    return <ListItem employee={employee.item} />;
  };

  render() {
    console.log(this.props);
    return (
      <FlatList
        enableEmptySections
        data={this.props.sortedEmployees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  const sortedEmployees = _.orderBy(employees, ['name'], ['asc']);
  return { sortedEmployees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
