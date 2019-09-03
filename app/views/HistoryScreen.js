import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getBrewHistory } from '../data/api.js'
import { TouchableHighlight } from 'react-native-gesture-handler';

export class HistoryScreen extends React.Component {
    static navigationOptions = {
        title: 'History',
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    async componentDidMount() {
        const history = await getBrewHistory();
        this.setState({
            history: history,
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

        //TODO: display history by month/year, display star-rating
        return (
            <View style={{flex: 1, paddingTop:10}}>
                <FlatList
                    data={this.state.recipes}
                    renderItem={({item}) => (
                        <TouchableHighlight style={styles.listItem}
                            onPress={() => this.props.navigation.navigate("Recipe", {itemId: item.recipeId})}>                            
                            <View>
                                <Text style={styles.listItemTitle}>{item.recipeName}</Text>
                                <Text style={styles.listItemSubtitle}>{item.brewed_date}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={({id}, index) => id.toString()}
                    ListEmptyComponent={() => (<Text style={styles.emptyMessage}>No brew history yet</Text>)}
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