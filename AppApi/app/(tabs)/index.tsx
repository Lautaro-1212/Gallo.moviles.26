import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function App() {

  useEffect(() => {
    console.log("La app se monto");
  },[])

  
}