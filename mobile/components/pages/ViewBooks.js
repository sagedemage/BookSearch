import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text, TextInput, Button, ActivityIndicator} from 'react-native';

// Android Emulator localhost: 10.0.2.2:3000

export default function ViewBooks() {
    const [books, setBooks] = useState([]);
    const [text, setText] = useState('');
    const [isLoading, setLoading] = useState(false);

    const ViewBooks = () => {
        setLoading(true)
        axios.get('http://10.0.2.2:5000/search?q=' + text)
            .then(function(response) {
                setBooks(response.data.books)
            })
            .catch(function(error) {
                console.error(error);
            })
            .finally(function() {
                setLoading(false)
            })
    }

    const _renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2}}>
            {/* Only 3 or 4 items a time */}
            <View style={{width: 100, borderRightWidth: 2}}>
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </View>
            <View style={{width: 100, borderRightWidth: 2}}>
                <Text style={{textAlign: 'center'}}>{item.author_name}</Text>
            </View>
            <View style={{width: 100, borderRightWidth: 2}}>
                <Text style={{textAlign: 'center'}}>{item.first_publish_year}</Text>
            </View>
            <View style={{width: 100}}>
                <Text style={{textAlign: 'center'}}>{item.number_of_pages_median}</Text>
            </View>
        </View>
    );

    return (
        <View style={{marginTop: '10%'}}>
            <Button
                title='Search'
                onPress={() => ViewBooks()}
                ></Button>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            ></TextInput>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2}}>
                    <View style={{width: 100, backgroundColor: 'black'}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Title</Text>
                    </View>
                    <View style={{width: 100, backgroundColor: 'black'}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Author Name</Text>
                    </View>
                    <View style={{width: 100, backgroundColor: 'black'}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>First Publish Year</Text>
                    </View>
                    <View style={{width: 100, backgroundColor: 'black'}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Number of Pages Median</Text>
                    </View>
                </View>
                    {isLoading ? (
                        <ActivityIndicator />
                        ) : (
                            <FlatList
                                data={books}
                                renderItem={_renderItem}
                            />
                    )}
            </View>
        </View>
    );
}