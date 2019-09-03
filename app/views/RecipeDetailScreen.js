import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getRecipeById } from '../data/api.js'

export class RecipeDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Recipe',
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    async componentDidMount() {
        const item = await getRecipeById(this.props.navigation.getParam('itemId', -1));
        this.setState({
            item: item,
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
            <View style={{flex: 1, paddingTop:20}}>
                <Text>Name:</Text><Text>{this.state.item.name}</Text>
                <Text>Description:</Text><Text>{this.state.item.description}</Text>
                <Text>Last Brewed:</Text><Text>{this.state.item.lastBrewDate}</Text>
                <Text>Steps:</Text>
                <FlatList
                    data={this.state.item.steps}
                    renderItem={({step}) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemTitle}>{step.description}</Text>
                        </View>
                    )}
                    keyExtractor={({id}, index) => id}
                    ListEmptyComponent={() => (<Text style={styles.emptyMessage}>No steps defined for this recipe</Text>)}
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
    },    
    listItemTitle: {        
        fontSize: 16
    },
    listItemSubtitle: {        
        color: Colors.light
    }
});