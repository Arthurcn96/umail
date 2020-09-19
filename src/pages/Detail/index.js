import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

import styles from  './styles'
import logoImg from '../../assets/logo.png'

const Separator = () => (
  <View style={styles.separator} />
);

export default function Detail() {
  const navigation = useNavigation();

  function navigateToPack(){
    navigation.navigate('Pack');
  }

    return (

      <View style={styles.container}>

      <View style={{ ...StyleSheet.absoluteFillObject,backgroundColor: "#F5F2F2"}}/>
        <View style={styles.topPart}>
            <View style={styles.header}>
              <Image source={logoImg}/>
              <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}> 0 pacotes</Text>
              </Text>
            </View>

        </View>


        <View >
        {/* <View style={{...StyleSheet.absoluteFillObject,backgroundColor: '#a2d5f2'}}/>   */}
        <View style={styles.middle}>
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Estes são os pacotes que estão sendo rastreados no momento.</Text>
        </View>

        <View style={styles.downPart}>


              <FlatList
              style={styles.packlist}
              data={[1, 2, 3, 4, 5]}
              showsVerticalScrollIndicator = {false}
              renderItem={()=>(
                <View>

                <View style={styles.pack}>

                    <Text style={styles.packProperty}><Feather name="calendar" size={20} color="black"/>   Previsão Entrega:</Text>
                    <Text style={styles.packValue}>05/04/21</Text>


                    <Text style={styles.packProperty}><Feather name="map" size={20} color="black"/>   Local:</Text>
                    <Text style={styles.packValue}>Vitória </Text>

                    <TouchableOpacity
                          style={styles.packDetailsButton}
                          onPress={navigateToPack}
                        ><Text style={styles.packDetailsButtonText}> Saiba mais</Text>
                    </TouchableOpacity>

                    {/* TODO
                        Criar um jeito de mostrar(Postado, encaminhado, entregue) */}


                </View>
                <Separator />
                </View>

              )}
              />

          </View>


         </View>


      </View>


    );
}
