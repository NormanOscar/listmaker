import {
  Text,
  View,
  Pressable,
  ScrollView 
} from 'react-native';
import { useEffect, useState } from "react";
import { styles } from "../style/styles";

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text>Lists</Text>
    </View>
  );
}