import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

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

        <FlatList
        style={styles.packlist}
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator = {false}
        renderItem={()=>(
          <View style={styles.pack}>
              <Text style={styles.packProperty}> Previsão Entrega:</Text>
              <Text style={styles.packValue}> 05/04/21</Text>

              <Text style={styles.packProperty}> Local:</Text>
              <Text style={styles.packValue}> Vitória </Text>

              {/* TODO
                  Criar um jeito de mostrar(Postado, encaminhado, entregue) */}
          </View>
        )}
        />

        <View >
          
        </View>

      </View>

    );
  }
}
