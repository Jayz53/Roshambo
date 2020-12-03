import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View  } from 'react-native'
import Play from './screens/play';
import { BannerAd, BannerAdSize, InterstitialAd, AdEventType} from '@react-native-firebase/admob';

export default function App() {
    useEffect(() => {
  const interstitial = InterstitialAd.createForAdRequest("ca-app-pub-4009417255688208/6808369203", {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});
let interstitialListener= interstitial.onAdEvent(type => {
  if(type === AdEventType.LOADED){
    interstitial.show()
  }
});
interstitial.load();

return()=>{
interstitialListener=null;
}
}, []);

const [play, setPlay] = useState(false)
  return (
    play ? ( <Play />) : (
      
        <View style={styles.container}>
          <View style={styles.banner}>
        <BannerAd size={BannerAdSize.SMART_BANNER} unitId="ca-app-pub-4009417255688208/8059400372" />
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
