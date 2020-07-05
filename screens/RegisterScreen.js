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
const RegisterScreen = ({ navigation }) => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setpassword_confirmation] = useState('');

  const submitHandler = () => {
    const registerdata = JSON.stringify({
      name,
      email,
      password,
      password_confirmation,
    });
    console.log(registerdata);
    axios({
      method: 'post',
      url: 'https://dev.addictivelearning.io/api/v1/register',
      data: registerdata,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // handle success
        console.log(response.status);
        if (response.status === 200) navigation.navigate('Login');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.backgroundMain}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
          <Text>Confirm Password</Text>
          <TextInput
            style={styles.passwordInput}
            onChangeText={(text) => setpassword_confirmation(text)}
            value={password_confirmation}
          />
        </View>
        <TouchableOpacity style={styles.viewButton} onPress={submitHandler}>
          <Text style={styles.button} onPress={submitHandler}>
            Register
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: '5%' }}>Or Login</Text>
        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#17F1D7',
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: '#4A586E', fontSize: 30, textAlign: 'center' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  backgroundMain: {
    backgroundColor: '#64C7FF',
  },
  viewButton: {
    marginTop: '5%',
    backgroundColor: '#4A586E',
    borderRadius: 50,
  },
  button: {
    color: '#64C7FF',
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
export default RegisterScreen;
