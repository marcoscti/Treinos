import { Image, Text, View } from "react-native"
import { styles } from './style'
import { useContext } from "react"
import { GlobalContext } from "../Welcome/GlobalContext"

const HeaderBackground = () => {
    const { usuario } = useContext(GlobalContext)
    const {capa, photo, name} = usuario
    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.welcomeSubContainer}>
            <Image source={{uri: capa}} style={styles.imageBack}></Image>
            <View style={styles.welcomeText}>
                <Image source={{uri:photo}} style={styles.userIcon}></Image>
                <Text style={styles.userName}>{name}</Text>
            </View>
            </View>
        </View>
    )
}

export default HeaderBackground