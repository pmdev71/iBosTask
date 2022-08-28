import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarcontent}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/Vector.png')}
        />

        <Text style={styles.text}>Employee Profile</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#299647',
    height: 56,
  },
  appBarcontent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 12,
    width: 18,
    marginHorizontal: 22,
    marginVertical: 19,
  },
  text: {
    lineHeight: 24.2,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
