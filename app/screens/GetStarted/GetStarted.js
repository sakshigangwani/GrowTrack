import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SocialButton from "../../components/SocialButton";

export default function GetStarted() {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../../assets/images/splash.png')} style={styles.img}/> */}
            <Text style={styles.logo}>GrowTrack</Text>
            <Text style={styles.title}>Let's Get Started!</Text>
            <Text style={styles.caption}>Let's dive into your account</Text>
            <View style={styles.btnContainer}>
                <SocialButton name="Continue with Google" onPress={() => console.log("Google pressed")} icon={require('../../assets/images/google.png')} />
                <SocialButton name="Continue with Apple" onPress={() => console.log("Apple pressed")} icon={require('../../assets/images/apple.png')} />
                <SocialButton name="Continue with Facebook" onPress={() => console.log("Facebook pressed")} icon={require('../../assets/images/google.png')} />
                <SocialButton name="Continue with Github" onPress={() => console.log("Github pressed")} icon={require('../../assets/images/apple.png')} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonGetStarted} >
                    <Text style={styles.buttonTextWhite}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonSkip} >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text>Privacy Policy</Text>
                <Text>Terms of Service</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        width: 400,
        height: 100
    },
    title: {
        fontSize: 22,
        textAlign: "center",
    },
    caption: {
        fontSize: 18,
        marginTop: 10,
        textAlign: "center",
    },
    btnContainer: {
        marginTop: 30
    },
    logo: {
        fontSize: 55,
        marginBottom: 20,
        color: "#00B0F0",
        fontWeight: "700"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    buttonGetStarted: {
        backgroundColor: '#00B0F0',
        paddingVertical: 22,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonTextWhite: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center",
        fontWeight: 600
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: "center",
        fontWeight: 600
    },
    buttonSkip: {
        backgroundColor: '#E6F4FF',
        paddingVertical: 22,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: 168,
        width: '80%',
    },
    footer: {
        marginTop: 10,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        top: 100,
        position:"relative"
    }
})