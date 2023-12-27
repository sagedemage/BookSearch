import ViewBooks from './components/pages/ViewBooks';
import ViewBooksBySubject from './components/pages/ViewBooksBySubject';
import ViewBooksByAuthor from './components/pages/ViewBooksByAuthor';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Books">
                <Stack.Screen name="Books" component={ViewBooks} />
                <Stack.Screen name="Subjects" component={ViewBooksBySubject} />
                <Stack.Screen name="Author" component={ViewBooksByAuthor} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}


