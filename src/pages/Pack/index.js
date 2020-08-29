import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

// TODO
// https://reactnative.dev/docs/view

import styles from  './styles'
import generatedMapStyle from './generatedMap.json'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Pack extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
        provider = { MapView.PROVIDER_GOOGLE }
        customMapStyle = { generatedMapStyle }
        />

<View style={styles.packList}>
          <View style={styles.pack}>
            <Text style={styles.packProperty}> Previsão:</Text>
            <Text style={styles.packValue}> 05/04/08</Text>

            <Text style={styles.packProperty}> Local:</Text>
            <Text style={styles.packValue}> Puta que Pariu</Text>

            <TouchableOpacity
              style={styles.packDetailsButton}
              onPress={() => {}}
            >
              <Text style={styles.packDetailsButtonText}> Mais Detalhes</Text>
            </TouchableOpacity>
            
          </View>
        </View>

      </View>
    );
  }
}
