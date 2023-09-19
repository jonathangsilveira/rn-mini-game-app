import { Text, View } from "react-native";

export type GameScreenProps = {
    userNumber: number
}

const GameScreen = (props: GameScreenProps) => {
    return <View>
        <Text>Game Screen!</Text>
        <Text>User number: {props.userNumber}</Text>
    </View>
}

export default GameScreen;