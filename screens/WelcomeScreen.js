import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios').default;
const WelcomeScreen = ({ navigation }) => {
  const [name, setname] = useState('');
  const handleClick = () => {
    axios({
      method: 'post',
      url: 'https://dev.addictivelearning.io/api/v1/logout',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response.data.message);
        console.log(response.status);
        setname(response.data.name);
        if (response.status === 200) navigation.navigate('Main');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://dev.addictivelearning.io/api/v1/current',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response.data.name);
        setname(response.data.name);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <ScrollView style={styles.backgroundMain}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <FontAwesomeIcon icon={faArrowLeft} size={32} style={styles.arrow} />
      </TouchableOpacity>
      <Text>Welcome to application {name}</Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Main')}
        style={styles.alignCenterHomeIcon}
        onPress={handleClick}
      >
        <FontAwesomeIcon icon={faHome} size={60} style={styles.home} />
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
    backgroundColor: 'black',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 50,
  },
  button: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
  },
  arrow: {
    color: 'white',
    marginTop: '10%',
    marginLeft: '2%',
  },
  home: { color: 'white', textAlign: 'center' },
  alignCenterHomeIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default WelcomeScreen;
