import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton text="Reset" />
            <PrimaryButton text="Confirm" />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1, // It will make the container take all the available space 
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#72063C',
        elevation: 8, // Specific to Android. It doesn't work on iOS. (Suck it Steve Jobs!!!)
        shadowColor: 'black', // Specific to iOS.
        shadowOffset: { width: 0, height: 2 }, // Specific to iOS.
        shadowRadius: 6, // Specific to iOS.
        shadowOpacity: 0.25
    }
});

export default StartGameScreen;