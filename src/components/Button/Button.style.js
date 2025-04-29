import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        padding: 14,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Quicksand-SemiBold',
    }
});
export default styles;