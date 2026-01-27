// بيانات تدريب المحاضرة الرابعة - Discrete Random Variables
const quizData = {
    title: "تدريب المحاضرة 4: Discrete Random Variables & CDF",
    questions: [
        {
            text: "A random variable is defined as a function that:",
            options: [
                "Assigns a probability to every event.",
                "Assigns a numerical value to each outcome in a sample space.",
                "Is always equal to 1.",
                "Represents the sample space itself."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "A random variable is considered 'discrete' if:",
            options: [
                "Its values form a continuous interval.",
                "It can take on any value between two numbers.",
                "Its possible values form a discrete set with gaps between them.",
                "The set of possible values is empty."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "Which of the following is an example of a discrete random variable mentioned in the text?",
            options: ["The height of a person.", "The exact time it takes to run a mile.", "The set of all integers.", "The temperature of a room."],
            correct: 2 // Answer: c
        },
        {
            text: "In the 'Copper Wire' example, 48% have no flaws. If X is the number of flaws, this is written as:",
            options: ["\\(P(X=0) = 0.48\\)", "\\(P(X=1) = 0.48\\)", "\\(P(X \\le 0) = 1\\)", "\\(F(0) = 0\\)"],
            correct: 0 // Answer: a
        },
        {
            text: "In the computer chip example (Y = imperfections), why is Y considered discrete?",
            options: [
                "It takes on values between 0 and 1.",
                "It takes on only integer values (0, 1, 2, 3, 4, 5).",
                "Probabilities sum to 100.",
                "The sample space is infinite."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "The Probability Mass Function (PMF) of a discrete random variable X is defined as:",
            options: [
                "\\(F(x) = P(X \\le x)\\)",
                "\\(p(x) = P(X = x)\\)",
                "\\(\\mu = \\sum x\\)",
                "\\(\\sigma^2 = E(X)\\)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "Which condition must always be true for a probability mass function \\(\\sum p(x)\\)?",
            options: ["The sum must equal 0.", "The sum must equal 100.", "The sum must equal 1.", "The sum can be any positive number."],
            correct: 2 // Answer: c
        },
        {
            text: "Computer Chip example: If \\(P(Y=0)=0.09\\), \\(P(Y=1)=0.22\\), and \\(P(Y=2)=0.26\\), what is \\(P(Y=2)\\)?",
            options: ["0.57", "0.09", "0.22", "0.26"],
            correct: 3 // Answer: d
        },
        {
            text: "The Cumulative Distribution Function (CDF), denoted by F(x), specifies the probability that:",
            options: [
                "X is exactly equal to x.",
                "X is greater than x.",
                "X is less than or equal to x \\(P(X \\le x)\\).",
                "X is equal to the mean."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "How is the CDF \\(F(x)\\) calculated from the PMF \\(p(t)\\)?",
            options: ["\\(F(x) = p(x)\\)", "\\(F(x) = 1 - p(x)\\)", "\\(F(x) = \\sum_{t \\le x} p(t)\\)", "\\(F(x) = p(x)^2\\)"],
            correct: 2 // Answer: c
        },
        {
            text: "In the coin toss example (3 tosses), what is the total number of outcomes in the sample space \\(n(S)\\)?",
            options: ["3", "6", "8", "9"],
            correct: 2 // Answer: c
        },
        {
            text: "In the coin toss example (3 tosses), if X is the number of heads, what is \\(P(X=1)\\)?",
            options: ["1/8", "3/8", "4/8", "7/8"],
            correct: 1 // Answer: b
        },
        {
            text: "In the coin toss example, what is the value of the Cumulative function \\(F_X(2)\\)?",
            options: ["3/8", "4/8", "7/8", "1"],
            correct: 2 // Answer: c (P(0)+P(1)+P(2))
        },
        {
            text: "What must be the final value of a Cumulative Distribution Function at the maximum value of X?",
            options: ["0", "0.5", "1", "Infinity"],
            correct: 2 // Answer: c
        },
        {
            text: "The mean of a discrete random variable X, also called the expectation E(X), is calculated by:",
            options: ["\\(\\sum p(x)\\)", "\\(\\sum x^2 p(x)\\)", "\\(\\sum x P(X=x)\\)", "\\(\\frac{\\sum x}{n}\\)"],
            correct: 2 // Answer: c
        },
        {
            text: "The variance of X, denoted \\(\\sigma^2_X\\), is given by the formula:",
            options: ["\\(\\sum x P(X=x)\\)", "\\(\\sum x^2 P(X=x) - \\mu_X^2\\)", "\\(\\sqrt{\\sigma^2_X}\\)", "\\((E(X))^2\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "How is the standard deviation related to the variance?",
            options: ["It is the square of the variance.", "It is the square root of the variance.", "It is the inverse of the variance.", "They are the same."],
            correct: 1 // Answer: b
        },
        {
            text: "Industrial Process: 0(0.35), 1(0.25), 2(0.20), 3(0.15), 4(0.05). What is the probability \\(P(X=3)\\)?",
            options: ["0.05", "0.15", "0.20", "0.25"],
            correct: 1 // Answer: b
        },
        {
            text: "Calculate the Mean (\\(\\mu\\)) for the Industrial Process example mentioned above:",
            options: ["1.0", "1.3", "2.0", "1.5"],
            correct: 1 // Answer: b (0*0.35 + 1*0.25 + 2*0.20 + 3*0.15 + 4*0.05)
        },
        {
            text: "For the Industrial Process, what is the value of the term \\(\\sum x^2 P(x)\\)?",
            options: ["1.3", "1.69", "3.2", "2.5"],
            correct: 2 // Answer: c (0+0.25+0.8+1.35+0.8)
        }
    ]
};
