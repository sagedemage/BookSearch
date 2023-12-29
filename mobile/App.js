import ViewBooks from './components/pages/ViewBooks';
import ViewBooksBySubject from './components/pages/ViewBooksBySubject';
import ViewBooksByAuthor from './components/pages/ViewBooksByAuthor';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Books">
                <Tab.Screen name="Books" component={ViewBooks} />
                <Tab.Screen name="Subjects" component={ViewBooksBySubject} />
                <Tab.Screen name="Author" component={ViewBooksByAuthor} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}


