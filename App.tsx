import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { FactorySelectScreen } from './src/screens/FactorySelectScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { CreateIssueScreen } from './src/screens/CreateIssueScreen';

type RootStackParamList = {
  Login: undefined;
  FactorySelect: undefined;
  Dashboard: { factory: { id: string; name: string; location: string; } };
  CreateIssue: { factoryId: string };  // 추가
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FactorySelect" component={FactorySelectScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="CreateIssue" component={CreateIssueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}