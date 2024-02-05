import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  return (
    
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.content}></View>
        {/* TO FORM */}
        <View style={styles.list}></View>
        <FlatList

        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  }
});
