import { Alert, StyleSheet, TextInput, View, } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import Colors from "../constants/colors";

export type StartGameScreenProps = {
    onConfirmNumber: (number: number) => any
}

const StartGameScreen = (props: StartGameScreenProps) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const onResetClicked = () => {
        setEnteredNumber('');
    }
    
    const onConfirmClicked = () => {
        const number = parseInt(enteredNumber);
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99', 
                [
                    { 
                        text:'Ok', 
                        style:'destructive', 
                        onPress: onResetClicked
                    } 
                ]
            );
            return;
        }
        props.onConfirmNumber(number);
    }

    const onEnterNumber = (value: string) => {
        setEnteredNumber(value)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={onEnterNumber} />
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
        backgroundColor: Colors.primary800,
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
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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