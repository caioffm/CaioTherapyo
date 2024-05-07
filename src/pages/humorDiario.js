import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './style'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerTopo}>
        <Text style={styles.tituloTherapyo}>Therapyo</Text>
      </View>

      <Text style={styles.tituloPagina}>Adicionar meu humor</Text>

      <View style={styles.containerBranco}>

        <Text style={styles.tituloContainerBranco}>Estou me sentindo</Text>

      </View>


    </SafeAreaView>

  );
}

