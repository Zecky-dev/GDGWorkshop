import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyNoteIcon: {
        width: 92,
        height: 92,
    },
    emptyNoteText: {
        color: colors.muted_black,
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 20,
        width: 200,
        textAlign: 'center',
        marginTop: 4, 
    },
});
export default styles;