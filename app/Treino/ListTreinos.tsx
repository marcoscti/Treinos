import { useEffect, useState } from "react"
import Treino from "."
import { ActivityIndicator, View } from "react-native"
import { getApiData } from "../utils/api"
import { useLocalSearchParams } from "expo-router"

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
                        image={item[6]}
                        title={item[0]}
                        series={item[1]}
                        performanceMin={item[2]}
                        performanceMax={item[3]}
                        sections={item[4]}
                        sectionMax={item[5]}
                    />
                </View>
            )
        }) : <ActivityIndicator size={"large"} />
    )
}

export default ListTreinos