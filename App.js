import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AppBar from './components/AppBar/AppBar';
import EmployeeApplication from './components/EmployeeApplication/EmployeeApplication';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';

const App = () => {
  return (
    <SafeAreaView>
      <AppBar />
      <PersonalInformation />
      <EmployeeApplication />
    </SafeAreaView>
  );
};

export default App;
