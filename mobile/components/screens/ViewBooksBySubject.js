import { useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text, TextInput, Button, ActivityIndicator, Image } from 'react-native';
import { styles, table_cell } from '../../styles';
import { SERVER_URL } from '../../config';

export default function ViewBooksBySubject() {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const viewBooksBySubject = () => {
    setLoading(true)
    axios.get(SERVER_URL + '/api/search_by_subject?q=' + text,
    ).then(function (response) {
      setBooks(response.data.books)
    }).catch(function (error) {
      console.error(error);
    }).finally(function () {
      setLoading(false)
    })
  }

  const _renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={table_cell(85, 'lightgray')}>
        <Image style={styles.book_cover} source={{ uri: item.image_url }} alt='book cover image' />
      </View>
      <View style={table_cell(300, 2)}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
        <Text style={{ color: 'gray', fontSize: 12 }}>by {item.author_name}</Text>
        <Text style={{ fontSize: 12 }}>Publish Year: {item.first_publish_year}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.search_box}>
        <Button title='Search' onPress={() => viewBooksBySubject()}></Button>
        <TextInput
          style={styles.text_input}
          placeholder="Search Books by Subject"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        ></TextInput>
      </View>
      <View style={styles.table}>
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
