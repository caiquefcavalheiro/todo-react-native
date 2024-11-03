import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D"
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 64,
    },
    inputContainer: {
        width: "100%",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 24,
        marginTop: -48,
    },
    textInput: {
        flex: 1,
        backgroundColor: "#262626",
        padding: 12,
        borderRadius: 5,
        fontFamily: "Inter",
        fontSize: 16,
        color: "#fff",
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E6F9F",
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "#1A1A1A",
    },
    tasksContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#333333",
        borderBottomWidth: 1,
        marginHorizontal: 24,
        paddingBottom:20,
    },
    taskView: {
        flexDirection: "row",
        gap: 8,
    },
    firstTaskText: {
        color: "#4EA8DE",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "bold",
    },
    secondTaskText: {
        color: "#8284FA",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "bold",
    },
    countText: {
        color: "#fff",
        backgroundColor: "#333333",
        borderRadius: 40,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    flatListEmpty: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 48,
    },
    flatListFirstText:{
        marginTop: 16,
        color: "#808080",
        fontFamily: "Inter",
        fontWeight: "bold",
    },
    flatListSecondText: {
        color: "#808080",
        fontFamily: "Inter",
    }
})