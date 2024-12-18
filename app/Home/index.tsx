import React, { useContext } from 'react'
import { Text, View, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'
import { styles } from './style'
import HeaderBackground from '../Globals/HeaderBackground'
import { GlobalContext } from '../Globals/Welcome/GlobalContext'
import { useRouter } from 'expo-router';
import PageTreino from '../Treino/[treino]'


export default function HomeScreen() {

  const { step, setStep } = useContext(GlobalContext)
  const [treino, setTreino] = React.useState<string>('');
  const router = useRouter();
  const handleTraining = () => {
    router.push({
      pathname: '/',
      params: { treino: treino }
    })
    setStep({ step: treino })
  }
  return (
    <View>
      <StatusBar />
      <HeaderBackground />
      <View>
        <Text style={styles.treinoTitle}>
          Meus Treinos
        </Text>
      </View>
      {
        step.step == 'global' ?
          <ScrollView style={styles.scrollContainer}>
            <TouchableOpacity style={styles.link} onPress={() => { setTreino('treinoInferiores'), handleTraining() }}>
              <Text style={styles.linkItem}>Treino Inferiores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => { setTreino('treinoSuperiores'), handleTraining() }}>
              <Text style={styles.linkItem}>Treino Superiores</Text>
            </TouchableOpacity>
          </ScrollView> :
          <View>
            <PageTreino />
          </View>
      }
    </View>
  )
}