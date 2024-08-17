
// React
import React from 'react';

// React Native
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';

// React Native Paper
import {
    List
} from 'react-native-paper';

// Example of data
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        titulo: '1 Item',
        descricao: 'Descrição do Item 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        titulo: '2 Item',
        descricao: 'Descrição do Item 2',
    },
    {
        id: '5869d4a0f-3da1-471f-bd96-145571e29d72',
        titulo: '3 Item',
        descricao: 'Descrição do Item 3',
    }
    
];

// Function to read title
const Item = ({elemento: item}) => {
    return(   
    <List.Item
        title={item.titulo}
        description={item.descricao}
        // left={props => <List.Icon {...props} icon="folder" />}
        left={props => 
            <Image {...props} 
                style={styles.tinyLogo} 
                source={
                    {
                        uri: 'https://cdn.pixabay.com/photo/2012/04/13/17/00/lcd-32872_1280.png'
                    }
                }/>}
    />
)};

// App
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ DATA }
                renderItem={({ item }) =><Item elemento={ item } /> }
                keyExtractor={ item => item.id }
            />
        </SafeAreaView>
    );
};

// Style
const styles = StyleSheet.create({
    container: {
        flex:      1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding:          20,
        marginVertical:   8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

// Export
export default App;
