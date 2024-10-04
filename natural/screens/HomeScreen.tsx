import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/lB2omdJG7ha5GxCTqv00AbDrbRXh0fn4Jb2yc2zcfe4AADGnA.jpg' }}
            style={styles.avatar}
            width={50}
            height={50}
          />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenuItem')}>
        <Text style={styles.buttonText}>
        Add Menu Items
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('ViewMenuItem')}>
        <Text style={styles.buttonText2}>
        View Menu Items
        </Text>
        </TouchableOpacity>
      
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#F97316', 
      paddingVertical: 12, 
      paddingHorizontal: 32, 
    },
    buttonText: {
      color: 'white',
      fontSize: 18, 
      fontWeight: 'bold',
    },
    button2: {
        backgroundColor: '#F97316',
        marginTop:63, 
        paddingVertical: 12, 
        paddingHorizontal: 32, 
      },
      buttonText2: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold',
      },
      avatar: {
        height:500,
        width:500,
        borderRadius: 25,
        marginBottom: 86,
      },
  });

export default HomeScreen;
