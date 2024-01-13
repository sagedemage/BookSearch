import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_input: {
        height: 35,
        width: 200,
        borderWidth: 2,
        paddingHorizontal: 10
    },
    search_box: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 10
    },
    table: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    book_cover: {
        width: 72,
        height: 116,
        backgroundColor: 'gray',
    },
});

export const table_cell = function(width, background_color) {
    return {
        width: width,
        padding: 5,
        backgroundColor: background_color
    }
}
