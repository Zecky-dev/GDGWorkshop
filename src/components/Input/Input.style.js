import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    label: {
        color: colors.black,
        fontFamily: 'Quicksand-Bold',
        fontSize: 14,
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 12,
        textAlignVertical: 'top',
        fontFamily: 'Quicksand-SemiBold',
    },
    

    
});
export default styles;