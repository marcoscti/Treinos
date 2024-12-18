import { Text, ScrollView, View, SafeAreaView, Button } from 'react-native';
import { styles } from '../style'
import ListTreinos from '../Treino/ListTreinos';
import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { GlobalContext } from '../Globals/Welcome/GlobalContext';

export default function PageTreino() {
  const { treino } = useLocalSearchParams()
  const treinoName = treino.toString().replace(/treino/i, "")
  const { setStep } = useContext(GlobalContext)
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text style={styles.treinoTitle}>
            {treinoName}  
          </Text>
          <Button
              onPress={() => { setStep({ step: 'global' }) }}
              title="Back"
              color="#ff7976"
              accessibilityLabel="Back"
          />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <ListTreinos />
      </ScrollView>
    </View>
  );
}