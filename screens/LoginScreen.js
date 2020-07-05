import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios').default;
const LoginScreen = ({ navigation }) => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const URL = 'https://dev.addictivelearning.io/api/v1/current';
  // const [current, setcurrent] = useState();
  const submitHandler = () => {
    // console.log({ login, password });

    const logindata = JSON.stringify({
      name,
      email,
      password,
    });
    axios({
      method: 'post',
      url: 'https://dev.addictivelearning.io/api/v1/login',
      data: logindata,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // handle success
        // console.log(response.data);
        console.log(response.status);
        if (response.status === 200) navigation.navigate('Welcome');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <ScrollView style={styles.backgroundMain}>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <FontAwesomeIcon icon={faArrowLeft} size={32} style={styles.arrow} />
      </TouchableOpacity>
      <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <View>
          <Text>Name</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={(text) => setname(text)}
            value={name}
          />
          <Text>Email</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.passwordInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.button} onPress={submitHandler}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: '5%' }}>
          Or Register
        </Text>
        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#4A586E',
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate('Register')}
        >
          <Text
            style={{ color: '#64C7FF', fontSize: 30, textAlign: 'center' }}
            // onPress={submitHandler}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{current}</Text> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  backgroundMain: {
    backgroundColor: '#64C7FF',
  },
  viewButton: {
    marginTop: '10%',
    backgroundColor: '#17F1D7',
    borderRadius: 50,
  },
  button: {
    color: '#4A586E',
    fontSize: 30,
    textAlign: 'center',
  },
  arrow: {
    color: 'white',
    marginTop: '10%',
    marginLeft: '2%',
  },
  loginInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
  passwordInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
});
export default LoginScreen;
