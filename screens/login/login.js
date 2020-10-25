import React from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles from './styles';

const login = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Password" autoCompleteType="password" />
      </View>

      <TouchableHighlight
        onPress={() => {}}
        style={[styles.button, styles.buttonPrimary]}>
        <Text styles={styles.textButton}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {}} style={styles.button}>
        <Text styles={styles.textButton}>Create New User</Text>
      </TouchableHighlight>
    </View>
  );
};

export default login;
