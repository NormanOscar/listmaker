import {
  Text,
  View,
  Pressable,
  ScrollView 
} from 'react-native';
import { useEffect, useState } from "react";
import { styles } from "../style/styles";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text>Add list</Text>
    </View>
  );
}