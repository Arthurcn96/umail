import React from 'react';
import { Text, View, TextInput,Image } from 'react-native';

import styles from  './styles'
import logoImg from '../../assets/logo.png'



export default class Pack extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>

          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}> 0 pacotes</Text>
          </Text>
        </View>

        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style={styles.description}>Estes são os pacotes que estão sendo rastreados no momento.</Text>
      
      </View>

    );
  }
}
