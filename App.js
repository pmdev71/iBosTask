import React from 'react';
import {ScrollView, View} from 'react-native';
import AppBar from './components/AppBar/AppBar';
import EmployeeApplication from './components/EmployeeApplication/EmployeeApplication';
import InputInformation from './components/InputInformation/InputInformation';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppBar />
      <ScrollView style={{flexGrow: 1}}>
        <PersonalInformation />
        <EmployeeApplication />
        <InputInformation />
      </ScrollView>
    </View>
  );
};

export default App;
