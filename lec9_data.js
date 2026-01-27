// بيانات تدريب المحاضرة التاسعة - Joint Probability & Correlation
const quizData = {
    title: "تدريب المحاضرة 9: Joint Probability & Correlation",
    questions: [
        {
            text: "The joint probability mass function of X and Y, denoted \\(p(x, y)\\), represents:",
            options: [
                "\\(P(X=x \\text{ or } Y=y)\\)",
                "\\(P(X=x \\text{ and } Y=y)\\)",
                "\\(P(X=x) + P(Y=y)\\)",
                "\\(P(X=x) / P(Y=y)\\)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "A fundamental property of the joint PMF is that the double summation \\(\\sum_x \\sum_y p(x, y)\\) equals:",
            options: ["0", "0.5", "1", "The total number of outcomes"],
            correct: 2 // Answer: c
        },
        {
            text: "In a joint probability table, the 'Marginal Probability' of X, \\(p_X(x)\\), is found by:",
            options: [
                "Summing the probabilities in a specific column (over all X).",
                "Summing the probabilities in a specific row (over all Y).",
                "Multiplying the row and column totals.",
                "Dividing the joint probability by the total sum."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "Using the table on Slide 3, what is the joint probability \\(P(X=1, Y=1)\\)?",
            options: ["0.03", "0.06", "0.24", "0.30"],
            correct: 2 // Answer: c
        },
        {
            text: "Using the same table, what is the marginal probability \\(P(X=0)\\)?",
            options: ["0.36", "0.40", "0.32", "1.0"],
            correct: 1 // Answer: b
        },
        {
            text: "Two discrete random variables X and Y are independent if:",
            options: [
                "\\(p(x,y) = 0\\)",
                "\\(p(x,y) = p_X(x) + p_Y(y)\\)",
                "\\(p(x,y) = p_X(x)p_Y(y)\\)",
                "\\(Cov(X,Y) = 1\\)"
            ],
            correct: 2 // Answer: c
        },
        {
            text: "If X and Y are independent, what is their Covariance?",
            options: ["It is 1.", "It is -1.", "It is 0.", "It is undefined."],
            correct: 2 // Answer: c
        },
        {
            text: "The Covariance of X and Y, denoted \\(Cov(X,Y)\\), is calculated as:",
            options: [
                "\\(\\mu_{XY} + \\mu_X \\mu_Y\\)",
                "\\(\\mu_{XY} - \\mu_X \\mu_Y\\)",
                "\\(Cov(X,Y) / (\\sigma_X \\sigma_Y)\\)",
                "\\(\\mu_X - \\mu_Y\\)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "In the covariance formula, the term \\(\\mu_{XY}\\) represents:",
            options: [
                "\\(E[X] + E[Y]\\)",
                "\\(E[X]E[Y]\\)",
                "\\(\\sum \\sum x y p(x, y)\\)",
                "\\(\\mu_X \\mu_Y\\)"
            ],
            correct: 2 // Answer: c
        },
        {
            text: "The Correlation coefficient \\(\\rho_{X,Y}\\) is defined as:",
            options: [
                "\\(Cov(X,Y)\\)",
                "\\(Cov(X,Y) / (\\mu_X \\mu_Y)\\)",
                "\\(Cov(X,Y) / (\\sigma_X \\sigma_Y)\\)",
                "\\(\\sigma_X \\sigma_Y / Cov(X,Y)\\)"
            ],
            correct: 2 // Answer: c
        },
        {
            text: "The value of the correlation coefficient \\(\\rho_{X,Y}\\) is always between:",
            options: ["0 and 1", "-1 and 0", "-1 and 1", "-\\infty and \\infty"],
            correct: 2 // Answer: c
        },
        {
            text: "In the Wood Paneling example, what does X represent?",
            options: [
                "Flaws due to foreign particles.",
                "Flaws due to uneven application of finish.",
                "Total number of flaws.",
                "The size of the panel."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "In the Wood Paneling example, what is the joint probability \\(p(1, 1)\\)?",
            options: ["0.05", "0.10", "0.15", "0.25"],
            correct: 2 // Answer: c
        },
        {
            text: "What is the calculated Mean of X (\\(\\mu_X\\)) for the Wood Paneling example?",
            options: ["0.65", "0.95", "1.05", "0.35"],
            correct: 2 // Answer: c
        },
        {
            text: "What is the calculated Mean of Y (\\(\\mu_Y\\)) for the Wood Paneling example?",
            options: ["0.65", "0.95", "1.05", "0.35"],
            correct: 1 // Answer: b
        },
        {
            text: "The expectation product term \\(\\mu_{XY}\\) (or \\(E[XY]\\)) was calculated to be:",
            options: ["-0.3475", "0.65", "1.0", "0.15"],
            correct: 1 // Answer: b
        },
        {
            text: "What is the final calculated Covariance for the Wood Paneling example?",
            options: ["0.65", "-0.499", "-0.3475", "0.7475"],
            correct: 2 // Answer: c (0.65 - (1.05 * 0.95))
        },
        {
            text: "What is the calculated Variance of X (\\(\\sigma^2_X\\)) in the example?",
            options: ["0.6475", "0.7475", "1.05", "0.25"],
            correct: 1 // Answer: b
        },
        {
            text: "What is the calculated Variance of Y (\\(\\sigma^2_Y\\)) in the example?",
            options: ["0.6475", "0.7475", "0.95", "0.35"],
            correct: 0 // Answer: a
        },
        {
            text: "What is the final Correlation Coefficient (\\(\\rho_{X,Y}\\)) calculated for the example?",
            options: ["-0.3475", "0.5", "-0.499", "1.0"],
            correct: 2 // Answer: c
        }
    ]
};
