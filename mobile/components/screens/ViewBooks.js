import { useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text, TextInput, Button, ActivityIndicator} from 'react-native';
import { styles, table_header, table_cell } from '../../styles';
import { SERVER_URL } from '../../config';

export default function ViewBooks() {
    const [books, setBooks] = useState([]);
    const [text, setText] = useState('');
    const [isLoading, setLoading] = useState(false);

    const viewBooks = () => {
        setLoading(true)
        axios.get(SERVER_URL + '/api/search?q=' + text)
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
        <View style={styles.row}>
            {/* Only 3 or 4 items a time */}
            <View style={table_cell(95, 2)}>
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </View>
            <View style={table_cell(95, 2)}>
                <Text style={{textAlign: 'center'}}>{item.author_name}</Text>
            </View>
            <View style={table_cell(95, 2)}>
                <Text style={{textAlign: 'center'}}>{item.first_publish_year}</Text>
            </View>
            <View style={table_cell(95, 0)}>
                <Text style={{textAlign: 'center'}}>{item.number_of_pages_median}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.search_box}>
                <Button title='Search' onPress={() => viewBooks()}></Button>
                <TextInput
                    style={styles.text_input}
                    placeholder="Search Books"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                ></TextInput>
            </View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <View style={table_header(95)}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Title</Text>
                    </View>
                    <View style={table_header(95)}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Author Name</Text>
                    </View>
                    <View style={table_header(95)}>
                        <Text style={{textAlign: 'center', color: 'white'}}>First Publish Year</Text>
                    </View>
                    <View style={table_header(95)}>
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

