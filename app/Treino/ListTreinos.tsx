import { useEffect, useState } from "react"
import Treino from "."
import { ActivityIndicator, View } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { getApiData } from "../Globals/utils/api"

const ListTreinos = () => {
    const { treino }: any = useLocalSearchParams()
    const [list, setList] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(() => {
        getApiData().then((data) => {
            if (treino) {
                setList(data[treino].slice(1))
                setLoad(true)
            }
        })
    }, [treino])

    return (
        load ? list.map((item: any, index: number) => {
            return (
                <View key={index}>
                    <Treino
                        image={item[7]}
                        title={item[0]}
                        series={item[1]}
                        performanceMin={item[2]}
                        performanceMax={item[3]}
                        sections={item[4]}
                        sectionMax={item[5]}
                        lastUpdate={item[6]}
                        planilha={treino}
                        linha={index + 2}
                    />
                </View>
            )
        }) : <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#9b73f7" />
        </View>
    )
}

export default ListTreinos