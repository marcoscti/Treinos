import React from 'react'
import GlobalContext from './Globals/Welcome/GlobalContext'
import HomeScreen from './Home'
import { SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <GlobalContext>
        <HomeScreen />
      </GlobalContext>
    </SafeAreaView>
  )
}