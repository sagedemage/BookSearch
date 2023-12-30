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
