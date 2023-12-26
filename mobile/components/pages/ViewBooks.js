import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text } from 'react-native';

// 10.0.2.2:3000

export default function ViewBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:5000/search?q=c+programming+language')
            .then(function(response) {
                console.log("Response books data -->")
                console.log(response.data.books)
                setBooks(response.data.books)
            })
            .catch(function(error) {
                console.error(error);
            })
        
        console.log("Books Object -->");
        console.log(books);
    }, []);

    const _renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.publish_date}</Text>
            <Text>{item.publish_year}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={books}
                renderItem={_renderItem} 
                />               
        </View>
    );
}