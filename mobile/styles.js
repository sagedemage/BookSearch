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
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2
    }
});

export const table_header = function(width) {
    return {
        width: width,
        padding: 5,
        backgroundColor: 'black'
    }
}

export const table_cell = function(width, border_right_width) {
    return {
        width: width,
        padding: 5,
        borderRightWidth: border_right_width
    }
}
