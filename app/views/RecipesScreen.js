import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getRecipes } from '../data/api.js'
import { TouchableHighlight } from 'react-native-gesture-handler';

export class RecipesScreen extends React.Component {
    static navigationOptions = {
        title: 'Recipes',
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    async componentDidMount() {
        const recipes = await getRecipes();
        this.setState({
            recipes: recipes,
            isLoading: false
        })
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={{flex: 1, paddingTop:10}}>
                <FlatList
                    data={this.state.recipes}
                    renderItem={({item}) => (
                        <TouchableHighlight style={styles.listItem}
                            onPress={() => this.props.navigation.navigate("Recipe", {itemId: item.id})}>                            
                            <View>
                                <Text style={styles.listItemTitle}>{item.name}</Text>
                                <Text style={styles.listItemSubtitle}>{item.style}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={({id}, index) => id.toString()}
                    ListEmptyComponent={() => (<Text style={styles.emptyMessage}>No recipes yet</Text>)}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({    
    emptyMessage: {
        textAlign: 'center'
    },
    listItem: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 10,
        height: 200
    },    
    listItemTitle: {        
        fontSize: 16
    },
    listItemSubtitle: {        
        color: "#AAAAAA"
    }
});