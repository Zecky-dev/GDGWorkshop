import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.note_color_red,
        padding: 12,
        borderRadius: 12,
        gap: 12, // Container içerisindeki elemanlar arasında bırakılacak eşit boşluk
    },
    title: {
        color: colors.white,
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 20,
    },
    description: {
        color: colors.white,
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 14,
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
    }
});

export default styles;