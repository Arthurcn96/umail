import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

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
      width: width,
    //   height: 500,
      height: height,
    },
    search: {
        width: width*0.9,
        height: 50,
        bottom: height - Constants.statusBarHeight - 20 ,
        backgroundColor: '#FFFE',
        borderRadius: 30,
        marginHorizontal: 20,
        paddingHorizontal: 30

    },

    packView: {
        width: '95%',
        paddingLeft: '5%',
        marginTop: 80,
        height: 800,

    },

    packList: {
        bottom: 160,
        flexDirection: 'row', // Deixa os itens um do lado do outro
    },

    pack: {
        padding: 12,
        borderRadius: 50,
        marginLeft: 20,
        backgroundColor: '#FFFC',
    },

    packDetailsButton: {
        alignItems: 'center'
    },

    packDetailsButtonText: {
        color: '#ffc93c',
        fontSize: 42,
        fontWeight: 'bold',
    }
  });
