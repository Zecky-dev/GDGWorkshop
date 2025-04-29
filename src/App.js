import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Sayfalar
import Notes from './screens/Notes';
import CreateEditNote from './screens/CreateEditNote';

export default function App() {
  
  // Yığın oluşturmak için kullandığımız bileşen
  const Stack = createNativeStackNavigator();

  // Yönlendirmeler için kullandığımız navigasyon yığını
  // screenOptions prop'u ile navigator içerisinde yer alan her ekran için uygulanacak özellikleri belirleriz.
  const RootStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false  
        }}>
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="CreateEditNote" component={CreateEditNote}/>
      </Stack.Navigator>
    );
  };

  return (
    // Yönelndirme yapısının tümünü sargılayan kısım
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
