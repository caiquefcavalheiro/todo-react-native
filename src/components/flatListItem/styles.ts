import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    generalContainer: {
        paddingHorizontal: 16, 
        marginTop: 12
    },
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        gap: 4,
        padding: 8,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#262626",
        borderRadius: 8,
        borderColor: "#333333",
        borderWidth: 1,
    },
    checkContainer: {
        width: 24,
        height: 24,
    },
    trashContainer: {
        width: 32,
        height: 32,
    },
    textStyle: {
        flex: 1,
        color: "#fff",
        fontSize: 14,
        fontFamily: "Inter",
        textAlign: "left",
        flexWrap: 'wrap',
    },
    textCheckStyle: {
        flex: 1,
        color: "#808080",
        fontSize: 14,
        fontFamily: "Inter",
        textAlign: "left",
        flexWrap: 'wrap',
        textDecorationLine: "line-through",
    },
})