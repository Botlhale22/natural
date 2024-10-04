import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons'; 
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../types';
import { MenuItem } from '../types'; 

type AddMenuItemNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddMenuItem'>;

const AddMenuItem: React.FC<{ addItem: (item: MenuItem) => void }> = ({ addItem }) => {
  const navigation = useNavigation<AddMenuItemNavigationProp>();
  
  const [description, setDescription] = useState<string>('');
  const [dishName, setDishName] = useState<string>('');
  const [course, setCourse] = useState<string>(''); 
  const [price, setPrice] = useState<string>('');


    const handleAddToMenu = () => {
   
        if (!description || !dishName || !course || !price) {
            alert('Please fill in all fields.');
            return; 
        }
    
        const newItem = { description, dishName, course, price };
        addItem(newItem);
        alert(`Dish: ${dishName} added to the menu!`);
    
       
        setDescription('');
        setDishName('');
        setCourse('');
        setPrice('');
    
        
        navigation.navigate('Home');
    };
    


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          {/* Avatar */}
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/lB2omdJG7ha5GxCTqv00AbDrbRXh0fn4Jb2yc2zcfe4AADGnA.jpg' }}
            style={styles.avatar}
            width={50}
            height={50}
          />
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.welcomeText}>Chef</Text>
        </View>

       
        {/* Form */}
        <View>
          {/* Description */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter description"
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Dish Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Dish Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter dish name"
              value={dishName}
              onChangeText={setDishName}
            />
          </View>

          {/* Course Picker */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Course</Text>
            <Picker
              selectedValue={course}
              onValueChange={(itemValue:string) => setCourse(itemValue)}
              style={styles.picker} // Optional: Add styles for the picker
            >
              <Picker.Item label="Select a course" value="" />
              <Picker.Item label="Starters" value="Starters" />
              <Picker.Item label="Mains" value="Mains" />
              <Picker.Item label="Dessert" value="Dessert" />
            </Picker>
          </View>

          {/* Price */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter price"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>

          {/* Add to Menu Button */}
          <TouchableOpacity style={styles.button} onPress={handleAddToMenu}>
            <FontAwesome name="plus" size={16} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Add to Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    height:630,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    padding: 24,
    width: 520,
  },
  avatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    borderRadius: 25,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  uploadBox: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    height: 128, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16, 
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151', 
  },
  input: {
    marginTop: 8,
    width: '100%',
    backgroundColor: '#E5E7EB',
    padding: 8, 
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#E5E7EB', 
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#F97316',
    paddingVertical: 10, 
    borderRadius: 8,
    marginTop:34,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonIcon: {
    marginRight: 8, 
  },
});

export default AddMenuItem;
