import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Products( props ) {

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

  return (
    <SafeAreaView>
      <Text>Products</Text>
      <Button onPress={ () => goToPage("Home") } title="Go to Home"/>
    </SafeAreaView>
  )
}