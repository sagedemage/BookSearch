import { View, Text, Button} from 'react-native';

export default function ViewBooksBySubject({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="View Books"
                onPress={() =>
                    navigation.navigate('Books')
                }
            />
            <Text>{"\n"}</Text>
            <Text>View Books By Subject</Text>
        </View>
  );
}

