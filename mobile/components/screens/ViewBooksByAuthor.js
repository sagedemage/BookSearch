import { React, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text, TextInput, Button, ActivityIndicator, Image } from 'react-native';
import { styles, tableCell } from '../../styles';
import { SERVER_URL } from '../../config';

/**
 * View Books by Author Screen Component
 * @returns {React.ReactHTMLElement} Returns the HTML element
 */
export default function ViewBooksByAuthor() {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const viewBooksByAuthor = () => {
    setLoading(true);
    axios.get(SERVER_URL + '/api/search_by_author?q=' + text,
    ).then((response) => {
      setBooks(response.data.books);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  const _renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={tableCell(85, 'lightgray')}>
        <Image
          style={styles.book_cover}
          source={{ uri: item.image_url }}
          alt='book cover image' />
      </View>
      <View style={tableCell(300)}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
        <Text style={{ fontSize: 12 }}>
          Publish Year: {item.first_publish_year}
        </Text>
        <Text style={{ fontSize: 12 }}>
          Number of Pages: {item.number_of_pages_median}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.search_box}>
        <Button title='Search' onPress={() => viewBooksByAuthor()}></Button>
        <TextInput
          style={styles.text_input}
          placeholder="Search Books by Author"
          onChangeText={(newText) => setText(newText)}
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
