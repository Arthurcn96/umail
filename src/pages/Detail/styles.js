import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, heigh } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffc93c',
    },

    topPart: {
        backgroundColor: '#FFC740',
        paddingHorizontal: 24,
        paddingBottom:10,
        paddingTop: Constants.statusBarHeight + 20,
        // borderBottomRightRadius: 25,
        // borderBottomLeftRadius: 25

    },

    middle: {
        backgroundColor: '#FFCE59',
        paddingHorizontal: 24,
        paddingBottom:10,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25

    },

    downPart: {
        paddingHorizontal: 24,
        paddingTop: 16,
        backgroundColor: '#F9F9F9'
    },


    header:{

        flexDirection: 'row', // Deixa os itens um do lado do outro
        justifyContent: 'space-between', // Adiciona um expaço entre logo e texto
        alignItems: 'center' //Coloca o texto na direita
    },

    headerText: {
        fontSize: 15,
        color: '#434350'

    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 24,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
        color: '#131320',
    },

    // Pacote

    packList: {

    },

    pack: {

        padding: 40,
        paddingBottom:25,
        borderRadius: 32,
        backgroundColor: '#FFF',
        // margin: 30,
        // marginBottom: 5,

    },


    packProperty: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',
    },

    packValue: {
        marginTop: 6,
        paddingLeft:30,
        fontSize: 14,
        marginBottom: 24,
        color: '#737380'
    },

    packDetailsButton: {
      alignItems: 'center',
    },

    packDetailsButtonText: {

        color: '#FFF',
        backgroundColor: "#105081",
        padding: 10,
        width:102,
        borderRadius:30,
        textAlign: 'center',
        fontSize: 14,

    },
    separator: {
    margin:20,
    borderBottomColor: '#ffc93c',
    borderBottomWidth: 1,
    alignSelf:"center",
    width:200,


  }


})
