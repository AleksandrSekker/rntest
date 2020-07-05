import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.backgroundMain}>
      <Text style={styles.text}>Main Screen</Text>
      <Text style={styles.textTwo}>Go to authorization</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.button}>Authorization</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundMain: {
    backgroundColor: '#64C7FF',
  },
  viewButton: {
    marginTop: '15%',
    backgroundColor: '#4A586E',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 50,
  },
  button: {
    color: '#64C7FF',
    fontSize: 30,
    textAlign: 'center',
  },
  text: { fontSize: 20, textAlign: 'center', marginTop: '10%', color: 'blue' },
  textTwo: { fontSize: 15, textAlign: 'center', marginTop: '5%' },
});

export default HomeScreen;
