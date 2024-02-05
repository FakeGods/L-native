import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name:'shaun', key: '1'},
    { name:'yoshi', key: '2'},
    { name:'mario', key: '3'},
    { name:'luigi', key: '4'},
    { name:'bowser', key: '5'},
    
  ]);

const pressHandler = (id) => {
  console.log(id);
  setPeople((prevPeople) => {
    return prevPeople.filter(person => person.id != id);
  })
}



  return (
    
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
    }
  });
