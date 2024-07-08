import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Button, View, TouchableOpacity} from 'react-native';



function App() {
    const [count, setCount] = useState(10);
   
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.number}>{count}</Text>
            <TouchableOpacity onPress={increment}>
            <View style={styles.buttonLayout}>
                <Text style={styles.buttonText}>+</Text>

            </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
buttonText: {
    fontSize: 48,
    color: "white",

},
buttonLayout: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 20,

},

safeArea: {
    alignItems: 'center',
    flex: 1,

},
    number: {
        fontSize: 96,
    },
    button: {
        fontsize: 60,
    }
});

export default App;