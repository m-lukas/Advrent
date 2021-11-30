import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Wall from './screens/Wall';
import Content from './screens/Content';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Wall" component={Wall} />
        <Stack.Screen name="Content" component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
