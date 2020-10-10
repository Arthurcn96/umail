import React, {useState} from 'react';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, Button, Text, TextInput, View, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FloatingAction } from "react-native-floating-action";
import { Formik } from 'formik';

const actions = [
  {
    text: "Adicionar",
    icon: require("../../../assets/favicon.png"),
    name: "bt_accessibility",
    position: 1
  },
];

 var isModalVisible = false;

import styles from  './styles'
import logoImg from '../../assets/logo.png'
import image from '../../assets/pacote.jpeg'

const Separator = () => (
  <View style={styles.separator} />
);

export default function Detail() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = React.useState();
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSubmit = (values) => {
    setModalVisible(!isModalVisible);
    console.log(values.tracking.toUpperCase());
  };

  function navigateToPack(){
    navigation.navigate('Pack');
  }

    return (

      <View style={styles.container}>


        <View style={styles.topPart}>
          <View style={styles.header}>
            <Image source={logoImg}/>
            <Text style={styles.headerText}>
              Total de <Text style={styles.headerTextBold}> 0 pacotes</Text>
            </Text>
          </View>
        </View>


        <View style={styles.middlePart}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Estes são os pacotes que estão sendo rastreados no momento.</Text>
          </ImageBackground>
        </View>


        <View style={styles.downPart}>

        <Modal isVisible={isModalVisible}>

          <View style={styles.modalWindow}>
            <View style={styles.CircleShapeView}>
            <Text style={styles.modalIcon}><Feather name="package" size={50} color="black"/></Text>
            </View>

            <Text style={styles.modalText}> Consulte a situação de seus objetos nos Correios: </Text>

            <Formik
                 initialValues={{ tracking: '' }}
                 onSubmit={values => onSubmit(values)}>

                 {({ handleChange, handleBlur, handleSubmit, values }) => (
                   <View>
                   <TextInput
                      onChangeText={handleChange('tracking')}
                      onBlur={handleBlur('tracking')}
                      style = {styles.search}
                      onPress={()=>{
        this.nameOrId.focus()
      }}
                      name="tracking"
                      placeholder="Digite o Código de rastreio"
                      value={values.tracking}
                    />
                    <TouchableOpacity
                         title="submit"
                         style={styles.modalCloseButton}
                         onPress={handleSubmit}
                        ><Text style={styles.modalCloseButtonText}>Rastrear</Text>
                    </TouchableOpacity>
                   </View>
                 )}
               </Formik>



          </View>
        </Modal>

          <FlatList
          style={styles.packlist}
          data={[1, 2, 3, 4]}
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
                      ><Text style={styles.packDetailsButtonText}> Saiba mais</Text>
                  </TouchableOpacity>
                  {/* TODO: Criar um jeito de mostrar(Postado, encaminhado, entregue) */}
              </View>
              <Separator />
            </View>
          )}
          />
        </View>

        <FloatingAction
           actions={actions}
           color='#105081'
           onPressItem={toggleModal}
         />



      </View>


    );
}
