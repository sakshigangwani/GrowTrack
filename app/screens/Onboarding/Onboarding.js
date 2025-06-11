import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Onboarding() {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        {
            title: 'Welcome to GrowTrack - Your Personal Habit Tracker',
            description: 'Take control of your habits and transform your life with GrowTrack. Let\'s get started on your journey to success.',
            image: require('../../assets/images/activity1.png'),
        },
        {
            title: 'Explore GrowTrack Features for Your Journey!',
            description: 'With intuitive habit creation and insightful progress tracking. GrowTrack makes it easy to stay focused, motivated and accountable. ',
            image: require('../../assets/images/activity2.png'),
        },
        {
            title: 'Unlock your Potential with GrowTrack Now!',
            description: 'Achieve your goals with GrowTrack’s suite of features. Start your habit journey today and unlock your full potential.',
            image: require('../../assets/images/activity3.png'),
        },
    ];

    const handleContinue = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            // Navigate to your main app screen here
            console.log('Onboarding complete!');
        }
    };

    const handleSkip = () => {
        // Navigate to your main app screen directly
        console.log('Skipped onboarding!');
    };

    return (
        <View style={styles.container}>
            <Image source={pages[currentPage].image} style={styles.image} />

            <Text style={styles.title}>{pages[currentPage].title}</Text>
            <Text style={styles.description}>{pages[currentPage].description}</Text>

            <View style={styles.dotsContainer}>
                {pages.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentPage === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                {currentPage === pages.length - 1 ? (
                    <TouchableOpacity style={styles.buttonGetStarted} onPress={handleContinue}>
                        <Text style={styles.buttonTextWhite}>Let's Get Started</Text>
                    </TouchableOpacity>
                ) : (
                    <>
                        <TouchableOpacity style={styles.buttonSkip} onPress={handleSkip}>
                            <Text style={styles.buttonText}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContinue} onPress={handleContinue}>
                            <Text style={styles.buttonTextWhite}>Continue</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 393,
        height: 314,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#777',
        marginBottom: 20,
        lineHeight: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 6,
    },
    activeDot: {
        backgroundColor: '#00B0F0',
        width: 26
    },
    inactiveDot: {
        backgroundColor: '#D3D3D3',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 30,
    },
    buttonSkip: {
        backgroundColor: '#E6F4FF',
        paddingVertical: 22,
        paddingHorizontal: 24,
        borderRadius: 10,
        width: 168
    },
    buttonContinue: {
        backgroundColor: '#00B0F0',
        paddingVertical: 22,
        paddingHorizontal: 24,
        borderRadius: 10,
        width: 168
    },
    buttonGetStarted: {
    backgroundColor: '#00B0F0',
    paddingVertical: 22,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
},

    buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: "center",
        fontWeight: 600
    },
    buttonTextWhite: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center",
        fontWeight: 600
    },
});
