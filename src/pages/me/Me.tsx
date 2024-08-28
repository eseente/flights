import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './me.styles';

const Me = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Me Screen</Text>
    </SafeAreaView>
  );
};

export default Me;
