import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Для иконки камеры

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (text: string) => setName(text);
  const handleAgeChange = (text: string) => setAge(text);

  const pickImage = () => {
    // Здесь будет код для выбора фото, пока оставим заглушку
    setPhoto('https://www.example.com/sample-photo.jpg'); // Просто пример URL фото
  };

  const handleSubmit = () => {
    console.log({ name, age, photo });
  };

  return (
    <View style={styles.container}>
      {/* Ввод имени */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What's your name?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={handleNameChange}
        />
      </View>

      {/* Ввод возраста */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>How old are you?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={handleAgeChange}
        />
      </View>

      {/* Добавление фото */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add a photo</Text>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <TouchableOpacity onPress={pickImage} style={styles.photoButton}>
            <Icon name="camera" size={30} color="gray" />
            <Text style={styles.photoText}>Tap to add a photo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Кнопка отправки данных */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
  },
  photoButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  photoText: {
    marginLeft: 10,
    color: 'gray',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default RegistrationScreen;
