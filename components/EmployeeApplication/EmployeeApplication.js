import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const applications = [
  {
    id: 1,
    title: 'Leave',
    icon: require('./../../assets/icons/Vector4.png'),
    color: '#D444F1',
  },
  {
    id: 2,
    title: 'Movements',
    icon: require('./../../assets/icons/Vector5.png'),
    color: '#2E90FA',
  },
  {
    id: 3,
    title: 'Remote Attendance',
    icon: require('./../../assets/icons/Vector6.png'),
    color: '#F63D68',
  },
  {
    id: 4,
    title: 'IOU',
    icon: require('./../../assets/icons/Vector7.png'),
    color: '#F79009',
  },
  {
    id: 5,
    title: 'Loan',
    icon: require('./../../assets/icons/Vector8.png'),
    color: '#669F2A',
  },
  {
    id: 6,
    title: 'Overtime',
    icon: require('./../../assets/icons/Vector9.png'),
    color: '#875BF7',
  },
];

const EmployeeApplication = () => {
  const renderApplications = item => {
    return (
      <View style={[styles.itemContainer]}>
        <View
          style={[styles.imageContainer, {backgroundColor: item.item.color}]}>
          <Image source={item.item.icon} />
        </View>
        <Text style={styles.itemName}>{item.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Employee Application</Text>
      <View style={styles.itemsContainer}>
        <FlatList
          data={applications}
          renderItem={renderApplications}
          keyExtractor={item => item.id}
          numColumns={4}
        />
      </View>
    </View>
  );
};

export default EmployeeApplication;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#344054',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    marginTop: 16,
  },
  imageContainer: {
    height: 48,
    width: 48,
    marginHorizontal: 16,
    marginTop: 6,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1D2939',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
