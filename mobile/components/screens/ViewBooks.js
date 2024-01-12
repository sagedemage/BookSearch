import { useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text, TextInput, Button, ActivityIndicator, Image } from 'react-native';
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
            {/* source={default_image_url} */}
            <View style={table_cell(100, 2)}>
                <Image style={styles.book_cover} source={{uri: item.image_url}} alt='book cover image'/>
            </View>
            <View style={table_cell(300, 2)}>
                <Text>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Title:</Text> {item.title}
                </Text>
                <Text>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Author:</Text> {item.author_name}
                </Text>
                <Text>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Publish Year:</Text> {item.first_publish_year}
                </Text>
                <Text>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}># of Pages:</Text> {item.number_of_pages_median}
                </Text>
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
                    <View style={table_header(100)}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Books</Text>
                    </View>
                    <View style={table_header(300)}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Description</Text>
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

