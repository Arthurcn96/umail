import React from 'react';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'
import { Text, View, TextInput, FlatList} from 'react-native';

// TODO
// https://reactnative.dev/docs/view

import styles from  './styles'
import generatedMapStyle from './generatedMap.json'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Pack() {
  const navigation = useNavigation();

  function navigateToDetail(){
    navigation.navigate('Detail');
  }

    return (
      <View style={styles.container}>

        <MapView style={styles.mapStyle}
        provider = { MapView.PROVIDER_GOOGLE }
        customMapStyle = { generatedMapStyle }
        initialRegion={{
          latitude: -18.72011,
          longitude: -39.85891,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />

        <View>
          <TextInput
            style = {styles.search}
            onChangeText = {text => onChangeText(text)}
            value = 'Digite o código de Rastreio'

          />
        </View>

        <View style={styles.packList}>

                <View style={styles.pack}>
                  <TouchableOpacity
                    style={styles.packDetailsButton}
                    onPress={navigateToDetail}
                  ><Text style={styles.packDetailsButtonText}> 📦 </Text>
                  </TouchableOpacity>
                </View>

          </View>

      </View>
    );
}
