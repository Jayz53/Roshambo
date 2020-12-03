import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View  } from 'react-native';


const rock = require('../assets/r2.png')
const paper = require('../assets/p1.png')
const scissor = require('../assets/s1.png')

const randomRPS = () => {
  const signs = [rock, scissor, paper];
  const rand = Math.floor(Math.random()*3);
  return signs [rand];
};


const bgColors = ['#783937ff', '#28334AFF', '#006747FF', ]

const Play = () => {

  const [counter, setCounter] = useState(3)
  useEffect(() => {
    if (counter === 0) return
    const timer = setTimeout(() => {
      setCounter(counter - 1)
    }, 500);
    return () => {
      clearTimeout(timer)
    }
  }, [counter])

  return (
    <View style={ StyleSheet.compose(styles.container, {backgroundColor: bgColors[counter - 1]})}>
      <View style={styles.bannerH}>
     
      </View> 
      {counter > 0?
      (<Text style={styles.header}>{counter}</Text>) : (
       <> 
       <Image style={styles.img} source={randomRPS()} />

       <View style={styles.btn}>
       <Button  onPress={()=> setCounter(3)} title="Play Again" />
       </View>
      </>
      )}   
         <View style={styles.bannerF}>
     
      </View>

    </View>
    
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
    fontSize: 200,
    fontWeight: "bold",
    color: "#fff"

  },
  img: {
    width: 350,
    height: 350,
    backgroundColor: '#fff',
    marginBottom: -100,
    
  },
  btn: {
    position: "absolute",
    bottom: 130,
    width: 150,
  },
   bannerH: {
    marginTop: -400,
    padding: 60
  },
   bannerF: {
    marginBottom: -560,
    padding: 225
    }
});

export default Play;
