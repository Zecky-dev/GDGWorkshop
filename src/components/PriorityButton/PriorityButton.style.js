import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 12,
    },
    selectedContainer: {
        borderColor: colors.black,
        borderWidth: 2,
    }
});

export default styles;