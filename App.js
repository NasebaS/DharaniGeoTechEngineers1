import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import DrawerNavigator from './Navigation/DrawerNavigator'
import EditExpenseEntry from './Screens/EditExpenseEntry';
import EditMaterialInward from './Screens/EditMaterialInward.';
import EditMaterialRequest from './Screens/EditMaterialRequest';

const Stack = createStackNavigator();

function App() {
   
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false } } initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} /> 
         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}  /> 
         <Stack.Screen name="Edit Expense Entry" component={EditExpenseEntry} /> 
         <Stack.Screen name="Edit Material Inward" component={EditMaterialInward} /> 
         <Stack.Screen name="Edit Material Request" component={EditMaterialRequest} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
