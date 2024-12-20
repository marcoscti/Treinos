import { Text, View, StyleSheet, Image, TouchableOpacity, Button, ActivityIndicator } from "react-native"
import { TreinoType } from "../types";
import { setLastUpdate } from "../utils/setLastUpdate";
import { useState } from "react";
import { setApiData } from "../utils/api";

const Treino = ({ image, title, series, performanceMin, performanceMax, sections, sectionMax, lastUpdate, planilha, linha }: TreinoType) => {
    const [getSection, setSection] = useState(sections)
    const [load, setLoad] = useState(false)

    const handlePressPlus = async (operator?: string) => {
        setLoad(true)
        operator === 'plus' ? setSection(getSection + 1) : setSection(getSection - 1)
        setSection(getSection + 1)
        const treinoName = planilha.toString().replace(/treino/i, "")
        await setApiData(treinoName, linha, 5, operator === 'plus' ? getSection + 1 : getSection - 1)
        await setApiData(treinoName, linha, 7, new Date().toISOString())
        setLoad(false)
    }
    return (
        <TouchableOpacity style={styles.containerCard}>
            <View style={styles.subcontainerImage}>
                <Image source={{ uri: image, width: 95, height: 95 }} />
            </View>
            <View style={styles.subcontainerData}>
                <Text style={styles.titleCard}>{title}</Text>
                <Text style={styles.performanceData}>{series} x {performanceMin} {performanceMax > 0 && `~ ${performanceMax}`}</Text>
                <Text>Sessoes: {getSection}/{sectionMax}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '60%' }}>
                    <View style={{ flex: 1 }}>
                        <Button
                            title={load ? '...' : '+'}
                            color="#9b73f7"
                            onPress={() => { handlePressPlus('plus') }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title={load ? '...' : '-'}
                            color="#ff7976"
                            onPress={() => { handlePressPlus('minus') }}
                            disabled={load}
                        />
                    </View>

                </View>
                <View>
                    <Text>Última Execução: <Text>{setLastUpdate(lastUpdate)}</Text></Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
    },
    titleCard: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#34376c'
    },
    subcontainerImage: {
        width: 100,
        height: 100
    },
    subcontainerData: {
        justifyContent: 'space-around'
    },
    performanceData: {
        fontSize: 22
    }
});
export default Treino