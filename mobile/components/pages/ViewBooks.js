import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Text } from 'react-native';

// 10.0.2.2:3000

export default function ViewBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:5000/search?q=c+programming+language')
            .then(function(response) {
                setBooks(response.data.books)
            })
            .catch(function(error) {
                console.error(error);
            })
    }, []);

    const _renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row'}}>
            {/* Only 3 or 4 items a time */}
            <View style={{width: 100}}>
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </View>
            <View style={{width: 100}}>
                <Text style={{textAlign: 'center'}}>{item.author_name}</Text>
            </View>
            <View style={{width: 100}}>
                <Text style={{textAlign: 'center'}}>{item.first_publish_year}</Text>
            </View>
            <View style={{width: 100}}>
                <Text style={{textAlign: 'center'}}>{item.number_of_pages_median}</Text>
            </View>
        </View>
    );

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
            <View style={{ flexDirection: 'row'}}>
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
            <FlatList
                data={books}
                renderItem={_renderItem} 
                />               
        </View>
    );
}