import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Welcome from './screens/Welcome';
import AddMenuItem from './screens/AddMenuItem';
import ViewMenuItem from './screens/ViewMenuItem';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();


interface MenuItem {
  description: string;
  dishName: string;
  course: string;
  price: string;
}

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem">
          {(props) => <AddMenuItem {...props} addItem={addItem} />}
        </Stack.Screen>
        <Stack.Screen name="ViewMenuItem">
          {(props) => <ViewMenuItem {...props} items={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
