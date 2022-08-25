import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Details( props ) {

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.push(pageName);
    }

    const goToBack = () => {
        navigation.goBack();
    }

  return (
    <SafeAreaView>
      <Text>Details</Text>
      <Button onPress={() => goToPage("Home")} title="Go to Home" />
      <Button onPress={() => goToBack()} title="Go to Back"/>
    </SafeAreaView>
  )
}