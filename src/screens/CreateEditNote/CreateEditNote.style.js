import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    // Kapsayıcı içerisindeki elemanların yan yana dizilmesini sağlar
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },  
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        padding: 16,
    },
    title: {
        color: colors.black,
        fontFamily: 'Quicksand-SemiBold', 
        fontSize: 32,
    },
    icon: {
        marginTop: 4,
        marginRight: 8,
    },
    inputsContainer: {
        flex: 1,
        gap: 12,
        marginTop: 16,
    },
    fieldContainer: {
        gap: 12,
    },
    fieldTitle: {
        color: colors.black,
        fontFamily: 'Quicksand-Bold',
        fontSize: 14,
    },
    colorsButtonContainer: {
        flexDirection: 'row',
        gap: 8,
    },  
    prioritiyButtonsContainer: {
        gap: 12,
    },
    buttonContainer: {
        marginTop: 24,
    },
    
});

export default styles;