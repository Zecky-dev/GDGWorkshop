import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedContainer: {
        borderColor: colors.black,
        borderWidth: 2,
    }
});
export default styles;