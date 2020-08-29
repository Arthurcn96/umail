import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mapStyle: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },

    packList: {
        bottom: 230,
    },

    pack: {
        padding: 24,
        borderRadius: 8,
        marginBottom:16,
        marginLeft: 20,
        width:150,
        backgroundColor: '#FFFC',

    },

    packProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    packValue: {
        marginTop: 8,
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
        fontWeight: 'bold'
    }


  });
