import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 4,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    label: {
        color: colors.black,
        fontFamily: 'Quicksand-Medium',
        fontSize: 14,
    },
});

export default styles;