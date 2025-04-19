import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler";

import Home from './pages/Home';
import Tables from './pages/Tables';
import Table from './pages/Table';
import Quiz from './pages/Quiz';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "#cdde3a" },
          headerStyle: { backgroundColor: '#3a9cde' },
          headerTintColor: '#de3a81'
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Kids Maths" }}
        />

       <Stack.Screen
          name="Tables"
          component={Tables}
          options={{ title: "Select Table" }}
        />

<Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ title: "Quiz" }}
        />

<Stack.Screen
          name="Table"
          component={Table}
          options={{ title: "Table" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
