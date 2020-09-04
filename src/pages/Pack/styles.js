import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants'
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenStackHeaderCenterView } from 'react-native-screens';


export const meuc = styled.ScrollView`
    horizontal: true,
    contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
`;

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mapStyle: {
      width: Dimensions.get('screen').width,
    //   height: 500,
      height: Dimensions.get('screen').height,
    },
    search: {
        width: Dimensions.get('screen').width*0.9,
        height: 50,
        bottom: Dimensions.get('screen').height - Constants.statusBarHeight - 20 , 
        backgroundColor: '#FFFE',
        borderRadius: 30,
        marginHorizontal: 20,
        paddingHorizontal: 30

    },

    packView: {
        position: 'absolute',
        width: '95%',
        paddingLeft: '5%',
        marginTop: 80,
        height: 800,

    },

    packList: {
        bottom: 250,
        flexDirection: 'row', // Deixa os itens um do lado do outro
        alignItems: 'center' //Coloca o texto na direita
    },

    pack: {
        
        padding: 24,
        borderRadius: 8,
        marginBottom:12,
        marginLeft: 20,
        width:150,
        backgroundColor: '#FFFC',
        bottom: 20,
    },


    packProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    packValue: {
        marginTop: 2,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    packDetailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    packDetailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    }


  });
