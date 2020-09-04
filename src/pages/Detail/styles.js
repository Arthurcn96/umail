import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header:{
        flexDirection: 'row', // Deixa os itens um do lado do outro
        justifyContent: 'space-between', // Adiciona um expaço entre logo e texto
        alignItems: 'center' //Coloca o texto na direita
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
    },
    
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
        color: '#737380'
        
    },

    // Package's Styles

    packList: {
        bottom: 32,
    },
    pack: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFC',
        marginBottom: 16,
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
        color: '#ffc93c',

        fontSize: 15,
        fontWeight: 'bold',
    }


})