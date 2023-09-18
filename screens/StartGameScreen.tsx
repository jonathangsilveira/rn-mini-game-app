import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    const onResetClicked = () => {
        console.log("Reset button clicked!")   
    }
    
    const onConfirmClicked = () => {
        console.log("Confirm button clicked!")   
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton text="Reset" onClicked={onResetClicked}/>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton text="Confirm" onClicked={onConfirmClicked}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1, // It will make the container take all the available space
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#4e0329',
        elevation: 8, // Specific to Android. It doesn't work on iOS. (Suck it Steve Jobs!!!)
        shadowColor: 'black', // Specific to iOS.
        shadowOffset: { width: 0, height: 2 }, // Specific to iOS.
        shadowRadius: 6, // Specific to iOS.
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 48,
        width: 48,
        fontSize: 20,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;