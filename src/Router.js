import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

// Right button for NavBar
const createRightButton = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => Actions.employeeCreate()}>
        <Icon
          name="md-add-circle"
          size={25}
          style={styles.buttonStyle}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ backgroundColor: '#fff' }}
      navigationBarStyle={{ backgroundColor: '#ffc266' }}
      titleStyle={{ color: 'white' }}>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            renderRightButton={createRightButton}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            navBarButtonColor="white"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            navBarButtonColor="white"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

const styles = {
  buttonStyle: {
    marginRight: 15,
  },
};

export default RouterComponent;
