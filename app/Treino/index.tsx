import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native"
import { TreinoType } from "../types";


const Treino = (i: TreinoType) => {
    const handlePress = () => {
        console.log('Pressionou')
    }
    const handleSection = () => {
        console.log('Pressionou na secao')
    }
    return (
        <TouchableOpacity style={styles.containerCard} onPress={handlePress}>

            <View style={styles.subcontainerImage}>
                <Image source={{ uri: i.image, width: 95, height: 95 }} />
            </View>
            <View style={styles.subcontainerData}>
                <Text style={styles.titleCard}>{i.title}</Text>
                <Text style={styles.performanceData}>{i.series} x {i.performanceMin} {i.performanceMax > 0 && `~ ${i.performanceMax}`}</Text>
                <Text>Sessoes: {i.sections}/{i.sectionMax}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%' }}>
                    <Button
                        title="+"
                        color="#9b73f7"
                        onPress={handleSection}
                    />
                    <Button
                        title="-"
                        color="#ff7976"
                        onPress={handleSection}
                    />
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
        fontWeight: 'bold'
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