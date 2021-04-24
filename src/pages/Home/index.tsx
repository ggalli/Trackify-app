import React, { useState } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

import HomeImg from '../../assets/Illustration.png';

export default function Home() {
  const [ trackCode, setTrackCode ] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTrackCode}
        value={trackCode}
        placeholder="Insira o código de rastreio"
        placeholderTextColor='#9899E4'
        selectionColor='#4446E9'
        maxLength={13}
      />

      <RectButton style={styles.button}>
        <Icon name="search" size={24} color='#FFF' />
        <Text style={styles.buttonText}>Rastrear</Text>
      </RectButton>

      <Image source={HomeImg}/>
    </View>
  )
}