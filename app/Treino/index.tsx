import { Text, View, StyleSheet, Image, TouchableOpacity, Button, ActivityIndicator } from "react-native"
import { TreinoType } from "../types";
import { useState } from "react";
import { setApiData } from "../Globals/utils/api";
import { setLastUpdate } from "../Globals/utils/setLastUpdate";


const Treino = ({ image, title, series, performanceMin, performanceMax, sections, sectionMax, lastUpdate, planilha, linha }: TreinoType) => {
    const [getSection, setSection] = useState(sections)
    const [load, setLoad] = useState(false)
    const handlePressPlus = async () => {
        setLoad(true)
        setSection(getSection + 1)
        const treinoName = planilha.toString().replace(/treino/i, "")
        await setApiData(treinoName, linha, 5, getSection + 1)
        await setApiData(treinoName, linha, 7, new Date().toISOString())
        setLoad(false)
    }
    const handlePressMinus = async () => {
        setLoad(true)
        setSection(getSection - 1)
        const treinoName = planilha.toString().replace(/treino/i, "")
        await setApiData(treinoName, linha, 5, getSection - 1)
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
                <View style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Text style={styles.performanceData}>{series} x {performanceMin} {performanceMax > 0 && `~ ${performanceMax}`} <Text style={{fontSize:14}}>(Series x Repetições)</Text></Text>
                    <Text style={styles.performanceData}>Sessões: {getSection} / {sectionMax}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '60%' }}>
                    <View style={{ flex: 1 }}>
                        <Button
                            title={load ? '...' : '+'}
                            color="#9b73f7"
                            onPress={() => { handlePressPlus() }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title={load ? '...' : '-'}
                            color="#ff7976"
                            onPress={() => { handlePressMinus() }}
                            disabled={load}
                        />
                    </View>

                </View>
                <View>
                    <Text style={{ marginTop: 10}}>Última Execução: <Text>{setLastUpdate(lastUpdate)}</Text></Text>
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
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        gap: 8
    },
    titleCard: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#34376c'
    },
    subcontainerImage: {
        width: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subcontainerData: {
        justifyContent: 'space-around'
    },
    performanceData: {
        fontSize: 18
    }
});
export default Treino