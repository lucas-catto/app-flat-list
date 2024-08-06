
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
} from 'react-native';

// React Native Paper
import {
    List
} from 'react-native-paper';

// Example of data
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '2 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '5869d4a0f-3da1-471f-bd96-145571e29d72',
        title: '3 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '586d94a0f-3da1-471f-bd96-145571e29d72',
        title: '4 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694dsa0f-3da1-471f-bd96-145571e29d72',
        title: '5 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694asd0f-3da1-471f-bd96-145571e29d72',
        title: '6 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694asd0f2-3da1-471f-bd96-145571e29d72',
        title: '7 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694asd06f-3da1-471f-bd96-145571e29d72',
        title: '8 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694asd50f-3da1-471f-bd96-145571e29d72',
        title: '9 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694as2d0f-3da1-471f-bd96-145571e29d72',
        title: '10 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694a4sd0f-3da1-471f-bd96-145571e29d72',
        title: '11 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '586943asdd0f-3da1-471f-bd96-145571e29d72',
        title: '12 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '586943asad0f-3da1-471f-bd96-145571e29d72',
        title: '13 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '586943adsd0f-3da1-471f-bd96-145571e29d72',
        title: '14 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '586943easd0f-3da1-471f-bd96-145571e29d72',
        title: '15 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
    {
        id: '58694r3asd0f-3da1-471f-bd96-145571e29d72',
        title: '16 Item',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis id cumque ducimus rem, pariatur incidunt vel, sed placeat praesentium mollitia et commodi sit. Blanditiis consequuntur exercitationem beatae dolores illum?',
    },
];

// Function to read title
const Item = ({ title }) => (
    /*
    <View style={ styles.item }>
        <Text style={ styles.title }>{ title }</Text>
    </View>
    */
    <List.Item
        title={ title }
        description={ title.description }
        left={props => <List.Icon {...props} icon="folder" />}
    />
);

// App
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ DATA }
                renderItem={({ item }) =>
                    <Item title={ item.title } />
                }
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
});

// Export
export default App;
