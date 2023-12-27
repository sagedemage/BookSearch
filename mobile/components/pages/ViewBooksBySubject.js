import { View, Text, Button } from 'react-native';
import { styles } from '../../styles';

export default function ViewBooksBySubject({navigation}) {
    return (
        <View style={styles.container}>
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
