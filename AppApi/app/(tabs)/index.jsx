import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const style = StyleSheet.create({
    none: {display:'none'},

    flex: {display:'flex'}
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setUsuarios(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos', error)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="green" />;
  }

  function Lista({mostrar: CajasProps}){
    return (
      <View style={{ flex: 1, padding: 20}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color:'white' }}>
          Lista de usuarios
        </Text>

        <FlatList
          data={usuarios}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                marginBottom: 5,
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>
                {item.name}
              </Text>

              <Text>{item.email}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <Lista />
  );
}