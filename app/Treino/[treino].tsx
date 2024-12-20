import { Text, ScrollView, View, Button, useWindowDimensions } from 'react-native';
import { styles } from '../style'
import ListTreinos from '../Treino/ListTreinos';
import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { GlobalContext } from '../Globals/Welcome/GlobalContext';

export default function PageTreino() {
  const { treino } = useLocalSearchParams()
  const treinoName = treino.toString().replace(/treino/i, "")
  const { setStep } = useContext(GlobalContext)
  const { height } = useWindowDimensions()
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text style={styles.treinoTitle}>
            {treinoName}
          </Text>
          <View style={{ width: 80,marginRight:20 }}>
            <Button
              onPress={() => { setStep({ step: 'global' }) }}
              title="Voltar"
              color="#ff7976"
              accessibilityLabel="Voltar"
            />
          </View>
        </View>
      </View>
      <ScrollView style={{ height: height - 390, marginLeft: 10, marginRight: 10 }} showsVerticalScrollIndicator={true}>
        <ListTreinos />
      </ScrollView>
    </View>
  );
}