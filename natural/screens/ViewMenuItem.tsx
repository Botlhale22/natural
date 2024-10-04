import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

interface MenuItem {
  description: string;
  dishName: string;
  course: string;
  price: string;
}

const ViewMenuItems: React.FC<{ items: MenuItem[] }> = ({ items }) => {
 
  const itemsWithDishName = items.filter(item => item.dishName);

  
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
   
    Animated.timing(animatedValue, {
      toValue: itemsWithDishName.length, 
      duration: 1000, 
      useNativeDriver: false, 
    }).start();
  }, [itemsWithDishName.length]); 

  useEffect(() => {
  
    const listenerId = animatedValue.addListener(({ value }) => {
      setDisplayCount(Math.round(value)); 
    });

 
    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, [animatedValue]);


  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text>{item.description}</Text>
      <Text>Course: {item.course}</Text>
      <Text>Price: {item.price}</Text>
    </View>
  );

  type ViewMenuItemsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ViewMenuItem'>;
  const navigation = useNavigation<ViewMenuItemsNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Animated counter for number of menu items with dishName */}
      <Text style={styles.counterText}>
        Menu Items Available: {displayCount}
      </Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default ViewMenuItems;
