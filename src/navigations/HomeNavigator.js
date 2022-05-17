import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    
    Text,
    View,
  } from 'react-native';
const Contacts =()=>{
    return(
        <View>
            <Text>Name</Text>
        </View>
    )
}
const CreateContact =()=>{
    return(
        <View>
            <Text>NameCreateContact</Text>
        </View>
    )
}
const DetailContact =()=>{
    return(
        <View>
            <Text>NameDetailContact</Text>
        </View>
    )
}
const HomeNavigator = () => {
    const HomeStack=createNativeStackNavigator();
  return (
    <>
      <HomeStack.Navigator>
          <Stack.Screen name="Home" component={Contacts} />
          <Stack.Screen name="create" component={CreateContact} />

          <Stack.Screen name="detail" component={DetailContact} />

      </HomeStack.Navigator>
    </>
  );
};
export default HomeNavigator;
