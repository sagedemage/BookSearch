import ViewBooks from './components/pages/ViewBooks';
import ViewBooksBySubject from './components/pages/ViewBooksBySubject';
import ViewBooksByAuthor from './components/pages/ViewBooksByAuthor';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                            iconName = focused
                                ? 'ios-book'
                                : 'ios-book-outline';
                        }
                        else if (route.name === "Subject") {
                            iconName = focused ? 'ios-albums' : 'ios-albums-outline';
                        }
                        else if (route.name === "Author") {
                            // user
                            iconName = focused ? 'ios-person' : 'ios-person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'dodgerblue',
                    tabBarInactiveTintColor: 'lightgray',
                    tabBarActiveBackgroundColor: '#455C7C',
                    tabBarInactiveBackgroundColor: '#455C7C'
                })}
            >
                <Tab.Screen name="Books" component={ViewBooks} />
                <Tab.Screen name="Subject" component={ViewBooksBySubject} />
                <Tab.Screen name="Author" component={ViewBooksByAuthor} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}


