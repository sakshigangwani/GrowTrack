import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SocialButton({ name, onPress, icon }) {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Image source={icon} style={styles.icon}/>
                <Text>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#E6F4FF',
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center"
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
})