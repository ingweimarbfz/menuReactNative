import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen( props ) {
  const { navigation } = props;

  const goToPage= (pageName) => {
    navigation.navigate(pageName);
  }
  return (
    <SafeAreaView>
      <Text>We are in HomeScreen</Text>
      <Button onPress={() => goToPage("Settings")} title="Go to Settings"/>
      <Button onPress={() => goToPage("Products")} title="Go to Products"/>
      <Button onPress={() => goToPage("Details")} title="Go to Details"/>
    </SafeAreaView>
  )
}