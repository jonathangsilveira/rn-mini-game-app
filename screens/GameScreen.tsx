import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

export type GameScreenProps = {
    userNumber: number
}

const GameScreen = (props: GameScreenProps) => {
    return <View style={styles.screen}>
        <Title text={'Opponent\'s Guess'}/>
        <View>
            
        </View>
        <View>
            <Text>LOG ROUNDS</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});

export default GameScreen;