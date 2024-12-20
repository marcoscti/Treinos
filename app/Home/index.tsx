import React, { useContext, useState } from 'react'
import { Text, View, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native'
import { styles } from './style'
import HeaderBackground from '../Globals/HeaderBackground'
import { GlobalContext } from '../Globals/Welcome/GlobalContext'
import { useRouter } from 'expo-router';
import PageTreino from '../Treino/[treino]'


export default function HomeScreen() {

  const { step, setStep } = useContext(GlobalContext)
  const router = useRouter();
  const handleTraining = (treino: string) => {
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
      <View style={styles.titleContainer}>
        <Text style={styles.treinoTitle}>
          Meus Treinos
        </Text>
      </View>
      {
        step.step == 'global' ?
          <ScrollView style={styles.scrollContainer}>
            <TouchableOpacity style={styles.link} onPress={() => { handleTraining('treinoInferiores') }}>
              <Text style={styles.linkItem}><Text style={styles.treinoLabel}>Treino (A):</Text> Membros Inferiores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => { handleTraining('treinoSuperiores') }}>
              <Text style={styles.linkItem}><Text style={styles.treinoLabel}>Treino (B):</Text> Membros Superiores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => { handleTraining('treinoAbdomen') }}>
              <Text style={styles.linkItem}><Text style={styles.treinoLabel}>Treino (C):</Text> Abdômen</Text>
            </TouchableOpacity>
          </ScrollView> :
          <View>
            <PageTreino />
          </View>
      }
    </View>
  )
}