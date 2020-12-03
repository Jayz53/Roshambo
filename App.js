import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View  } from 'react-native'
import Play from './screens/play';

export default function App() {
    
const [play, setPlay] = useState(false)
  return (
    play ? ( <Play />) : (
      
        <View style={styles.container}>
          <View style={styles.banner}>
        
      </View>
      <Image source={require('./assets/main.jpg')} />
      <Text style={styles.header}> Rock      Paper    Scissor</Text>
      <View  style={styles.btnContainer} >
      <Button  onPress={()=> setPlay(true)   } title="Start" />
      </View>
    </View>
    ) 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
   header: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold"
  },
   btnContainer: {
    marginTop: 30,
    width: 240,
  },
  banner: {
    marginTop: -50,
  }

});
