import { StyleSheet, Text } from "react-native"
import Colors from "../constants/colors"

export type TitleProps = {
    text: string
}

const Title = (props: TitleProps) => {
    return (<Text style={styles.title}>{props.text}</Text>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    }
});

export default Title;