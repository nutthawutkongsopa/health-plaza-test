import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { getRandomQuestions } from './questionData'
import { useEffect, useState } from 'react';

const Question = () => {
    const [questions, setQuestions] = useState(getRandomQuestions())
    useEffect(() => {
      setQuestions(getRandomQuestions())
    }, [])
    console.log(questions)
    return (
        <View style={[styles.container]}>
            {questions.map((q,index) => (<View key={index} style={[
                styles.question
            ]}>
            <Text>{index + 1}. {q.question}</Text>
            <View style={[styles.answerContainer]}>
                <Text>a) {q.choices[0].text}</Text>
                <Text>b) {q.choices[1].text}</Text>
                <Text>c) {q.choices[2].text}</Text>
                <Text>d) {q.choices[3].text}</Text>
            </View>
            </View>))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
    },
    question: {
        flexDirection: 'column',
        marginBottom: '2rem'
    },
    answerContainer: {
        flexDirection: "column",
        paddingLeft: 10
    }
});

export default Question;