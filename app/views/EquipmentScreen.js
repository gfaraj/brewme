import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getEquipment } from '../data/api.js'

export class EquipmentScreen extends React.Component {
    static navigationOptions = {
        title: 'Equipment',
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    async componentDidMount() {
        const equipment = await getEquipment();
        this.setState({
            equipment: equipment,
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
                    data={this.state.equipment}
                    renderItem={({item}) => (
                        <View>
                            <Text style={styles.listItemTitle}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={({id}, index) => id.toString()}
                    ListEmptyComponent={() => (<Text style={styles.emptyMessage}>No equipment yet</Text>)}
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