import ViewBooks from './components/screens/ViewBooks';
import ViewBooksBySubject from './components/screens/ViewBooksBySubject';
import ViewBooksByAuthor from './components/screens/ViewBooksByAuthor';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Books"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Books") {
                            iconName = focused ? 'book' : 'book';
                        }
                        else if (route.name === "Subject") {
                            iconName = focused ? 'bookmark' : 'bookmark';
                        }
                        else if (route.name === "Author") {
                            // user
                            iconName = focused ? 'account' : 'account';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'dodgerblue',
                    tabBarInactiveTintColor: 'lightgray',
                    tabBarActiveBackgroundColor: '#34455D',
                    tabBarInactiveBackgroundColor: '#34455D',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#34455D'},
                })}
            >
                <Tab.Screen name="Books" component={ViewBooks} />
                <Tab.Screen name="Subject" component={ViewBooksBySubject} />
                <Tab.Screen name="Author" component={ViewBooksByAuthor} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}


