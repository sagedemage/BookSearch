import { View, Text, Button} from 'react-native';

export default function ViewBooksBySubject({navigation}) {
    return (
        <View>
            <Button
                title="View Books"
                onPress={() =>
                    navigation.navigate('ViewBooks')
                }
            />
            <Text>View Books By Subject</Text>
        </View>
  );
}

