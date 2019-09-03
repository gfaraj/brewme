import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const menuButtonColor1 = "#841584"
const menuButtonColor2 = "#841554"

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.homeStyle}>
                <View style={styles.menuRow}>
                    <Button
                        title='Recipes'
                        color={menuButtonColor1}
                        onPress={() => this.props.navigation.navigate("Recipes")}
                    />
                </View>
                <View style={styles.menuRow}>
                    <Button
                        title='History'
                        color={menuButtonColor2}
                        onPress={() => this.props.navigation.navigate('History')}
                    />
                </View>
                <View style={styles.menuRow}>
                    <Button
                        title='Equipment'
                        color={menuButtonColor1}
                        onPress={() => this.props.navigation.navigate('Equipment')}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    homeStyle: {
      flex: 6,
      margin: 0,
      flexDirection: 'column',
    },
    menuRow: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },    
    menuButtonText: {
        color: Colors.light,
        backgroundColor: "transparent"
    }
});