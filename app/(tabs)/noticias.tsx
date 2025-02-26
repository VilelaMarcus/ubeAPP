import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoticiasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Notícias Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18
  }
});
