import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>My very blank view</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        color: 'white',
        alignItems: 'center'
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})

export default App