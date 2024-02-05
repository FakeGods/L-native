import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem({ item }) {
    return (
        <TouchableOpacity>
            <Text sty>{item.text}</Text>
        </TouchableOpacity>
    )};

    const styles = StyleSheet.create({
        
    })