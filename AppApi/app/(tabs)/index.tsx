import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function App() {

  useEffect(() => {
    console.log("La app se monto");
  },[])

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'white'}}>Usar useEffect</Text>
    </View>
  );
}