
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app' , key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}></View>
        {/* TO FORM */}
        <View style={styles.list}></View>
        <FlatList
          data={todos}
           renderItem={({ item }) => (
            <TodoItem item={item} />
         )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },

});
