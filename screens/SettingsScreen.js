import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const SettingsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#64C7FF' }}>
      <Text
        style={{
          marginTop: '40%',
          textAlign: 'center',
          fontSize: 50,
          color: '#fff',
        }}
      >
        Settings Screen
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default SettingsScreen;
