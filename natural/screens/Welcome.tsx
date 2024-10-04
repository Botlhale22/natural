import React from 'react';
import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type WelcomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();
  return (
        <View style={styles.container}>
          {/* Logo Image */}
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/1fBH9uAloURrHSaedUOfhW0Rh2hjSMZcKZQXScZ2Qdo7UBGnA.jpg' }}
            style={styles.logo}
            width={100}
            height={100}
            alt="Natural logo"
          />
    
          {/* Title */}
          <Text style={styles.title}>
            NATURAL
          </Text>
    
          {/* Description */}
          <Text style={styles.description}>
            Welcome to 
            <Text style={styles.highlightedText}>
              {' '}NATURAL{' '}
            </Text>
            ! Let’s Enjoy together
          </Text>
    
          {/* Illustration Image */}
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/zTthZ9Leh3w0X6W95KCAwnqbLLrn5vUwlDWykYdacV0NVgxJA.jpg' }}
            style={styles.illustration}
            width={300}
            height={200}
            alt="Illustration of a person standing next to a large burger"
          />
    
          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>
          Let's Start
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
      logo: {
        marginBottom: 16,
        height:250,
        width:250
      },
      title: {
        color: '#F97316', 
        fontSize: 40, 
        fontWeight: 'bold',
        marginBottom: 8,
      },
      description: {
        color: '#4B5563', 
        textAlign: 'center',
        marginBottom: 40,
      },
      highlightedText: {
        color: '#F97316', 
        fontWeight: 'bold',
      },
      illustration: {
        marginBottom: 72,
      },
      button: {
        backgroundColor: '#F97316', 
        borderRadius: 9999, 
        paddingVertical: 12, 
        paddingHorizontal: 32, 
      },
      buttonText: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold',
      },
    });
export default Welcome;
