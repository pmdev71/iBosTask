import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PersonalInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTop}>
        <View style={styles.profileHeaderLeft}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/Rectangle356.png')}
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
      {/* 1 */}
      <View style={{borderTopColor: '#F2F2F7', borderTopWidth: 1}}></View>
      {/* 2nd part */}
      <View style={{paddingHorizontal: 16}}>
        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 8}}>
          <Image
            style={styles.smallIcons}
            source={require('../../assets/icons/Vector1.png')}
          />
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#344054'}}>
              Darlene Robertson
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#667085'}}>
              Senior UX Designer
            </Text>
          </View>
        </View>
      </View>
      {/* 2 */}
      <View style={{borderTopColor: '#F2F2F7', borderTopWidth: 1}}></View>
      <View style={{paddingHorizontal: 16}}>
        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 8}}>
          <Image
            style={styles.smallIcons}
            source={require('../../assets/icons/Vector2.png')}
          />
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#344054'}}>
              28 September, 1990
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#667085'}}>
              Date of Birth
            </Text>
          </View>
        </View>
      </View>
      {/* 3 */}
      <View style={{borderTopColor: '#F2F2F7', borderTopWidth: 1}}></View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={{paddingHorizontal: 16}}>
          <View
            style={{display: 'flex', flexDirection: 'row', marginVertical: 8}}>
            <Image
              style={styles.smallIcons}
              source={require('../../assets/icons/Vector3.png')}
            />
            <View>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#344054'}}>
                Female
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#667085'}}>
                Gender
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderLeftColor: '#F2F2F7',
            borderLeftWidth: 1,
            marginTop: 8,
          }}></View>
        <View style={{paddingHorizontal: 16}}>
          <View
            style={{display: 'flex', flexDirection: 'row', marginVertical: 8}}>
            <View>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#344054'}}>
                Islam
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#667085'}}>
                Religion
              </Text>
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
    backgroundColor: 'red',
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
  smallIcons: {
    height: 20,
    width: 20,
    marginTop: 6,
    marginRight: 19,
  },
});
