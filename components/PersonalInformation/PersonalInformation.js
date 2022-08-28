import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PersonalInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTop}>
        <View style={styles.profileHeaderLeft}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/Avatar.png')}
          />
          <View>
            <Text style={styles.nameText}>Darlene Robertson</Text>
            <Text style={styles.normalText}>Senior UX Designer</Text>
            <Text style={styles.normalText}>ID43178</Text>
          </View>
        </View>

        <View style={styles.activityContainer}>
          <Text style={styles.activityText}>Active</Text>
        </View>
      </View>

      <View style={styles.horizontalDivider}></View>

      {/* Bottom start */}
      <View style={styles.itemContainer}>
        <Image
          style={styles.smallIcon}
          source={require('../../assets/icons/Department.png')}
        />
        <View>
          <Text style={styles.titleText}>Human Resource</Text>
          <Text style={styles.smallText}>Department</Text>
        </View>
      </View>

      <View style={styles.horizontalDivider}></View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.smallIcon}
          source={require('../../assets/icons/Dob.png')}
        />
        <View>
          <Text style={styles.titleText}>28 September, 1990</Text>
          <Text style={styles.smallText}>Date of Birth</Text>
        </View>
      </View>

      <View style={styles.horizontalDivider}></View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/icons/Gender.png')}
          />
          <View>
            <Text style={styles.titleText}>Female</Text>
            <Text style={styles.smallText}>Gender</Text>
          </View>
        </View>

        <View
          style={{
            borderLeftColor: '#F2F2F7',
            borderLeftWidth: 1,
            marginTop: 8,
          }}></View>
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.varticalDivider}>
            <View>
              <Text style={styles.titleText}>Islam</Text>
              <Text style={styles.smallText}>Religion</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 16,
  },
  profileTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  profileHeaderLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  profileImage: {
    height: 72,
    width: 72,
    marginRight: 19,
    borderRadius: 99,
  },
  nameText: {
    color: '#344054',
    fontSize: 20,
    fontWeight: '600',
  },
  normalText: {
    color: '#344054',
    fontSize: 16,
    fontWeight: '400',
  },
  activityContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  activityText: {
    color: '#299647',
    paddingHorizontal: 8,
    paddingVertical: 1,
    backgroundColor: '#E6F9E9',
    borderRadius: 99,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  smallIcon: {
    height: 20,
    width: 20,
    marginTop: 6,
    marginRight: 19,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#344054',
  },
  smallText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#667085',
  },
  horizontalDivider: {
    borderTopColor: '#F2F2F7',
    borderTopWidth: 1,
  },
  varticalDivider: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
  },
});
