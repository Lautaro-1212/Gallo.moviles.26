import {View, Text} from 'react-native';

export default function App(){
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text style={{color: 'white'}}>Esto es una pestaña con tabs</Text>
    </View>
  );
}