import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export class Header extends React.Component {
    render() {
        return (
            <View style={styles.headStyle}>
                <Text style={styles.headText}>Brew Me</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headStyle: {
      backgroundColor: Colors.dark,
      paddingTop: 30,
      paddingBottom: 10,
      height: 100
    },
    headText: {
        textAlign: "center",
        color: Colors.light,
        fontSize: 25,
        fontWeight: "bold"
    }
});
