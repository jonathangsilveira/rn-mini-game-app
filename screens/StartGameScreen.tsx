import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View>
            <TextInput />
            <PrimaryButton text="Reset" />
            <PrimaryButton text="Confirm" />
        </View>
    );
}

export default StartGameScreen;