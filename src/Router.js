import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

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
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
