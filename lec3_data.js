// بيانات تدريب المحاضرة الثالثة - Conditional Probability & Bayes' Theorem
const quizData = {
    title: "تدريب المحاضرة 3: Conditional Probability & Bayes' Rule",
    questions: [
        {
            text: "The conditional probability of event A given event B, denoted \\(P(A|B)\\), is defined as:",
            options: [
                "\\(\\frac{P(A \\cup B)}{P(B)}\\)",
                "\\(\\frac{P(A \\cap B)}{P(A)}\\)",
                "\\(\\frac{P(A \\cap B)}{P(B)}\\)",
                "\\(P(A) \\times P(B)\\)"
            ],
            correct: 2 // Answer: c
        },
        {
            text: "For the conditional probability \\(P(A|B)\\) to be defined, which condition must be met?",
            options: ["\\(P(A) \\neq 0\\)", "\\(P(B) \\neq 0\\)", "A and B must be independent", "A and B must be mutually exclusive"],
            correct: 1 // Answer: b
        },
        {
            text: "In the context of Venn diagrams, when calculating \\(P(A|B)\\), what becomes the new 'sample space'?",
            options: ["The intersection \\(A \\cap B\\)", "The original sample space S", "Event A", "Event B"],
            correct: 3 // Answer: d
        },
        {
            text: "Based on the Multiplication Rule, if \\(P(B) \\neq 0\\), then \\(P(A \\cap B)\\) is equal to:",
            options: ["\\(P(A)P(B)\\)", "\\(P(B)P(A|B)\\)", "\\(P(A) + P(B)\\)", "\\(P(B) / P(A|B)\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "If two events A and B are independent, how does the conditional probability \\(P(A|B)\\) simplify?",
            options: ["\\(P(A|B) = P(B)\\)", "\\(P(A|B) = 1\\)", "\\(P(A|B) = P(A)\\)", "\\(P(A|B) = 0\\)"],
            correct: 2 // Answer: c
        },
        {
            text: "College Ex: 25% fail Math (M), 15% fail Chem (C), 10% fail both. What is \\(P(C|M)\\)?",
            options: ["0.15", "0.25", "2/5 (0.4)", "2/3 (0.67)"],
            correct: 2 // Answer: c (0.1 / 0.25)
        },
        {
            text: "Using the same data (M=25%, C=15%, Both=10%), what is \\(P(M|C)\\)?",
            options: ["2/5", "2/3", "1/10", "0.6"],
            correct: 1 // Answer: b (0.1 / 0.15)
        },
        {
            text: "In the Car Engine example (Ex 1), the engine sizes (Small, Medium, Large) represent:",
            options: ["Independent events", "Mutually exclusive and exhaustive events", "Intersecting events", "Conditional events"],
            correct: 1 // Answer: b
        },
        {
            text: "In the Car Engine example, what is the probability of a car having a 'Small' engine?",
            options: ["0.20", "0.35", "0.45", "0.10"],
            correct: 2 // Answer: c
        },
        {
            text: "What is the probability that a 'Small' engine car fails the emissions test \\(P(B|A_1)\\)?",
            options: ["0.45", "0.12", "0.15", "0.10"],
            correct: 3 // Answer: d
        },
        {
            text: "Using Total Probability in the Car Example, what is the total probability a car fails the test?",
            options: ["0.045", "0.117", "0.37", "0.883"],
            correct: 1 // Answer: b (0.45*0.1 + 0.35*0.12 + 0.2*0.15)
        },
        {
            text: "The Law of Total Probability states that P(B) is the sum of:",
            options: ["\\(P(A_i \\cap B)\\) for all exhaustive \\(A_i\\)", "P(B|A_i) only", "P(A_i) + P(B)", "P(A_i|B)P(B)"],
            correct: 0 // Answer: a
        },
        {
            text: "Which formula represents the general case of Bayes' Rule for finding \\(P(A_k|B)\\)?",
            options: [
                "\\(\\frac{P(B|A_k)P(A_k)}{P(B)}\\)",
                "\\(\\frac{P(A_k|B)P(B)}{P(A_k)}\\)",
                "\\(P(B|A_k) \\times P(A_k)\\)",
                "\\(\\frac{P(A_k)P(B)}{\\sum P(A_i)}\\)"
            ],
            correct: 0 // Answer: a
        },
        {
            text: "In Bayes' special case with only A and \\(A^c\\), the denominator for \\(P(A|B)\\) is:",
            options: [
                "\\(P(B|A)P(A) + P(B|A^c)P(A^c)\\)",
                "\\(P(A) + P(A^c)\\)",
                "\\(P(B|A) + P(B|A^c)\\)",
                "1"
            ],
            correct: 0 // Answer: a
        },
        {
            text: "In the Factory example, 5 machines produce pieces (1000, 1200, 1800, 2000, 3000). Total production is:",
            options: ["5000 pieces", "8000 pieces", "9000 pieces", "10,000 pieces"],
            correct: 2 // Answer: c
        },
        {
            text: "What is the probability that a randomly selected piece comes from the fourth machine \\(P(A_4)\\)?",
            options: ["1/9", "2/15", "2/9", "1/3"],
            correct: 2 // Answer: c (2000/9000)
        },
        {
            text: "What is the defective rate for the fourth machine in the factory example?",
            options: ["0.5%", "1%", "2%", "5%"],
            correct: 1 // Answer: b
        },
        {
            text: "If a piece is defective (A), what is the probability it came from machine 4 \\(P(A_4|A)\\)?",
            options: ["0.05", "0.19", "0.22", "0.35"],
            correct: 1 // Answer: b
        },
        {
            text: "Which machine has the highest daily production volume?",
            options: ["Machine 1", "Machine 3", "Machine 4", "Machine 5"],
            correct: 3 // Answer: d (3000 pieces)
        },
        {
            text: "Which machine has the highest defective rate (2%)?",
            options: ["Machine 1", "Machine 2", "Machine 4", "Machine 5"],
            correct: 3 // Answer: d
        }
    ]
};
