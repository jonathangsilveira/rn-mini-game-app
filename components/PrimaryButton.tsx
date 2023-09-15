import { Text, View } from "react-native";

export type PrimaryButtonProps = {
    text: String
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

export default PrimaryButton;