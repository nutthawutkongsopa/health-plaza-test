const questions = [
    {
        question: "What is 2 + 3?",
        choices: [
            { text: "4", isAnswer: false },
            { text: "5", isAnswer: true },
            { text: "6", isAnswer: false },
            { text: "7", isAnswer: false },
        ],
    },
    {
        question: "How many fingers do you have on one hand?",
        choices: [
            { text: "2", isAnswer: false },
            { text: "5", isAnswer: true },
            { text: "8", isAnswer: false },
            { text: "10", isAnswer: false },
        ],
    },
    {
        question: "If you have 3 apples and you eat 1, how many apples do you have left?",
        choices: [
            { text: "0", isAnswer: false },
            { text: "1", isAnswer: true },
            { text: "2", isAnswer: false },
            { text: "3", isAnswer: false },
        ],
    },
    {
        question: "What comes after the number 4?",
        choices: [
            { text: "5", isAnswer: true },
            { text: "6", isAnswer: false },
            { text: "7", isAnswer: false },
            { text: "8", isAnswer: false },
        ],
    },
    {
        question: "If you have 2 teddy bears and get 3 more, how many teddy bears do you have now?",
        choices: [
            { text: "2", isAnswer: false },
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: false },
            { text: "5", isAnswer: true },
        ],
    },
    {
        question: "What is the result of 1 + 1?",
        choices: [
            { text: "1", isAnswer: false },
            { text: "2", isAnswer: true },
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: false },
        ],
    },
    {
        question: "How many legs does a cat have?",
        choices: [
            { text: "2", isAnswer: false },
            { text: "4", isAnswer: true },
            { text: "6", isAnswer: false },
            { text: "8", isAnswer: false },
        ],
    },
    {
        question: "If you have 4 cookies and share them with 2 friends, how many cookies does each friend get?",
        choices: [
            { text: "1", isAnswer: false },
            { text: "2", isAnswer: true },
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: false },
        ],
    },
    {
        question: "What is the shape of a pizza?",
        choices: [
            { text: "Square", isAnswer: false },
            { text: "Circle", isAnswer: true },
            { text: "Triangle", isAnswer: false },
            { text: "Rectangle", isAnswer: false },
        ],
    },
    {
        question: "If you have 5 fingers on each hand, how many fingers do you have in total?",
        choices: [
            { text: "5", isAnswer: false },
            { text: "10", isAnswer: true },
            { text: "15", isAnswer: false },
            { text: "20", isAnswer: false },
        ],
    },
    {
        question: "What is the color of the sun?",
        choices: [
            { text: "Blue", isAnswer: false },
            { text: "Yellow", isAnswer: true },
            { text: "Red", isAnswer: false },
            { text: "Green", isAnswer: false },
        ],
    },
    {
        question: "How many sides does a square have?",
        choices: [
            { text: "2", isAnswer: false },
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: true },
            { text: "5", isAnswer: false },
        ],
    },
    {
        question: "What comes before the number 10?",
        choices: [
            { text: "8", isAnswer: false },
            { text: "9", isAnswer: true },
            { text: "10", isAnswer: false },
            { text: "11", isAnswer: false },
        ],
    },
    {
        question: "How many wheels does a bicycle have?",
        choices: [
            { text: "1", isAnswer: false },
            { text: "2", isAnswer: true },
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: false },
        ],
    },
    {
        question: "If you have 3 balloons and someone gives you 2 more, how many balloons do you have?",
        choices: [
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: false },
            { text: "5", isAnswer: true },
            { text: "6", isAnswer: false },
        ],
    },
    {
        question: "What is the opposite of 'big'?",
        choices: [
            { text: "Small", isAnswer: true },
            { text: "Tall", isAnswer: false },
            { text: "Fast", isAnswer: false },
            { text: "Heavy", isAnswer: false },
        ],
    },
    {
        question: "If you have 6 crayons and you give 3 to your friend, how many crayons do you have left?",
        choices: [
            { text: "2", isAnswer: false },
            { text: "3", isAnswer: false },
            { text: "4", isAnswer: false },
            { text: "6", isAnswer: true },
        ],
    },
    {
        question: "What shape is a traffic stop sign?",
        choices: [
            { text: "Circle", isAnswer: false },
            { text: "Square", isAnswer: false },
            { text: "Triangle", isAnswer: false },
            { text: "Octagon", isAnswer: true },
        ],
    },
    {
        question: "How many months are in a year?",
        choices: [
            { text: "6", isAnswer: false },
            { text: "10", isAnswer: false },
            { text: "12", isAnswer: true },
            { text: "24", isAnswer: false },
        ],
    },
    {
        question: "If you count from 1 to 10, which number comes after 7?",
        choices: [
            { text: "6", isAnswer: false },
            { text: "7", isAnswer: false },
            { text: "8", isAnswer: true },
            { text: "9", isAnswer: false },
        ],
    },
];

export function getRandomQuestions() {
    const shuffledQuestions = [...questions];

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }

    shuffledQuestions.forEach(question => {
        const shuffledAns = [...question.choices]
        for (let i = shuffledAns.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledAns[i], shuffledAns[j]] = [shuffledAns[j], shuffledAns[i]];
        }

        question.choices = shuffledAns
    });

    return shuffledQuestions;
}
