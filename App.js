import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AppBar from './components/AppBar/AppBar';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';

const App = () => {
  return (
    <SafeAreaView>
      <AppBar />
      <PersonalInformation />
    </SafeAreaView>
  );
};

export default App;
