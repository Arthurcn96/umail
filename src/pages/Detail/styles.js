import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const primary = '#FFC740';
const secondary = '#105081';
const background = '#F0F0F5';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    topPart: {
        backgroundColor: primary,
        paddingHorizontal: 24,
        paddingBottom:10,
        paddingTop: Constants.statusBarHeight + 5,

    },

    middlePart: {
      padding:100,
      backgroundColor: primary,
      borderBottomRightRadius:75,
      borderRadius:30,

    },

    image: {
      ...StyleSheet.absoluteFillObject,
      padding:10,
      justifyContent: "center",
    },

    downPart: {
        paddingHorizontal: 50,
        backgroundColor: background
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
        paddingHorizontal: 24,
        paddingBottom:10,
        fontSize: 30,
        margin: 24,
        color: '#ECECE3',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    description: {
        paddingHorizontal: 24,
        paddingBottom:10,
        fontSize: 13,
        lineHeight: 24,
        color: '#ECECDF',
        textAlign: 'center',

    },

    // Pacote

    packList: {

    },

    pack: {
        marginTop:20,
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
        backgroundColor: secondary,
        padding: 10,
        width:102,
        borderRadius:30,
        textAlign: 'center',
        fontSize: 14,

    },


// MODAL
    modalWindow: {
      paddingHorizontal:40,
      paddingBottom:25,
      borderRadius: 32,
      backgroundColor: '#F9F9FF',
      // margin: 30,
      // marginBottom: 5,

    },
    modalCloseButton: {
      alignItems: 'center',
    },

    modalCloseButtonText: {
        color: '#FFF',
        backgroundColor: primary,
        padding: 10,
        marginTop:30,
        width:100,
        borderRadius:30,
        textAlign: 'center',

    },

    CircleShapeView: {
      marginTop:-60/2,
      width: 60,
      height: 60,
      borderRadius: 60/2,
      backgroundColor: '#FFF',
      alignSelf: 'center',

    },
    modalIcon: {
      textAlign: 'center',
      margin:6,
    },

    modalText: {
      textAlign: 'center',
      margin:30,
      fontSize:16,
    },

    search: {
      textAlign: 'center',
      height: 50,
      borderRadius: 30,
      marginHorizontal: 20,
      paddingHorizontal: 30,
    },

    separator: {
    marginTop:20,
    borderBottomColor: primary,
    borderBottomWidth: 1,
    alignSelf:"center",
    width:200,
  }


})
