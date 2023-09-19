import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export type PrimaryButtonProps = {
    text: String,
    onClicked: () => any;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <View style={styles.outerButtonContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed ? [styles.innerButtonContainer, styles.pressed] : styles.innerButtonContainer
                } 
                android_ripple={{color: Colors.primary600}}
                onPress={props.onClicked}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </Pressable> 
        </View>
    );
}

const styles = StyleSheet.create({
    innerButtonContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    outerButtonContainer: {
        borderRadius: 24,
        margin: 4,
        overflow: 'hidden' // Clip ripple effect
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75 // 75% opace
    }
});

export default PrimaryButton;