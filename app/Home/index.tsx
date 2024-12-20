import React, { useContext } from 'react'
import { Text, View, StatusBar, ScrollView, Button, TouchableOpacity, RefreshControl } from 'react-native'
import { styles } from './style'
import HeaderBackground from '../Globals/HeaderBackground'
import { GlobalContext } from '../Globals/Welcome/GlobalContext'
import { useRouter } from 'expo-router';
import PageTreino from '../Treino/[treino]'
import { getApiData } from '../utils/api'
import { ApiResponse } from '../types'

export default function HomeScreen() {
  const { step, setStep, setUsuario,usuario } = useContext(GlobalContext)
  const router = useRouter();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getApiData()
      .then((data: ApiResponse) => {
        setUsuario({
          name: data.usuarioData[0][1],
          photo: data.usuarioData[1][1],
          capa: data.usuarioData[2][1],
        })
        setStep({ step: "global" })
      })
      .catch((err) => console.error("Error fetching user data:", err))
    setRefreshing(false);
  }, [usuario]);
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
          <ScrollView style={styles.scrollContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <TouchableOpacity style={styles.link} onPress={() => { handleTraining('treinoInferiores') }}>
              <Text style={styles.linkItem}><Text style={styles.treinoLabel}>Treino (A):</Text> Membros Inferiores</Text>
              <Text>Quadríceps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => { handleTraining('treinoSuperiores') }}>
              <Text style={styles.linkItem}><Text style={styles.treinoLabel}>Treino (B):</Text> Membros Superiores</Text>
              <Text>Costas, Bíceps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => { handleTraining('treinoAbdomen') }}>
              <Text style={styles.linkItem}><Text style={styles.treinoLabel}>Treino (C):</Text> Membros Inferiores</Text>
              <Text>Glúteo, Posterior</Text>
            </TouchableOpacity>
          </ScrollView> :
          <View>
            <PageTreino />
          </View>
      }
    </View>
  )
}