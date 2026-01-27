// بيانات تدريب المحاضرة الثامنة - Normal Distribution
const quizData = {
    title: "تدريب المحاضرة 8: Normal Distribution & Z-Scores",
    questions: [
        {
            text: "The Normal Distribution is also widely known as the:",
            options: ["Poisson distribution", "Binomial distribution", "Gaussian distribution", "Exponential distribution"],
            correct: 2 // Answer: c
        },
        {
            text: "Which parameters completely define a normal probability density function?",
            options: ["Mean (\\(\\mu\\)) and Median", "Mean (\\(\\mu\\)) and Variance (\\(\\sigma^2\\))", "Median and Standard Deviation", "Mode and Range"],
            correct: 1 // Answer: b
        },
        {
            text: "In a normal distribution, the curve is symmetric about:",
            options: ["The y-axis", "The standard deviation \\(\\sigma\\)", "The mean \\(\\mu\\)", "The origin (0,0)"],
            correct: 2 // Answer: c
        },
        {
            text: "For a normal population, which of the following is true?",
            options: ["Mean > Median", "Mean < Median", "Mean = Median", "There is no relationship"],
            correct: 2 // Answer: c
        },
        {
            text: "According to the '68-95-99.7% Rule', what % falls within \\(\\mu \\pm 2\\sigma\\)?",
            options: ["68%", "95%", "99.7%", "50%"],
            correct: 1 // Answer: b
        },
        {
            text: "Approximately 99.7% of the normal population lies within which interval?",
            options: ["\\(\\mu \\pm 1\\sigma\\)", "\\(\\mu \\pm 2\\sigma\\)", "\\(\\mu \\pm 3\\sigma\\)", "\\(\\mu \\pm 4\\sigma\\)"],
            correct: 2 // Answer: c
        },
        {
            text: "To convert x to a standard unit z, the formula is:",
            options: ["\\(z = x - \\mu\\)", "\\(z = (x - \\mu) / \\sigma\\)", "\\(z = (x - \\sigma) / \\mu\\)", "\\(z = \\sigma / (x - \\mu)\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "The 'Standard Normal Population' has which specific parameters?",
            options: ["Mean = 1, SD = 0", "Mean = 0, SD = 1", "Mean = 100, SD = 10", "Mean = \\(\\mu\\), SD = \\(\\sigma\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "The quantity z calculated using the standardization formula is called:",
            options: ["Variance score", "Median score", "z-score", "p-value"],
            correct: 2 // Answer: c
        },
        {
            text: "The cumulative function \\(\\phi(z)\\) for the standard normal represents:",
            options: ["\\(P(Z = z)\\)", "\\(P(Z \\le z)\\)", "\\(P(Z \\ge z)\\)", "The height of the curve"],
            correct: 1 // Answer: b
        },
        {
            text: "Using the standard normal table, \\(P(Z \\ge a)\\) is calculated as:",
            options: ["\\(\\phi(a)\\)", "\\(1 - \\phi(a)\\)", "\\(\\phi(-a) - 1\\)", "\\(1 + \\phi(a)\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "The probability \\(P(a \\le Z \\le b)\\) is calculated by:",
            options: ["\\(\\phi(b) + \\phi(a)\\)", "\\(\\phi(a) - \\phi(b)\\)", "\\(\\phi(b) - \\phi(a)\\)", "\\(1 - (\\phi(b) + \\phi(a))\\)"],
            correct: 2 // Answer: c
        },
        {
            text: "Due to symmetry, the probability \\(P(Z \\le -a)\\) is equivalent to:",
            options: ["\\(P(Z \\le a)\\)", "\\(1 - \\phi(a)\\)", "\\(\\phi(a) - 0.5\\)", "\\(1 - P(Z \\le -a)\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "Which relationship allows calculating \\(P(-a \\le Z \\le -b)\\)?",
            options: ["\\(\\phi(a) - \\phi(b)\\)", "\\(\\phi(b) - \\phi(a)\\)", "\\(\\phi(-b) + \\phi(-a)\\)", "\\(1 - \\phi(b)\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "Based on the lecture table, what is the area to the left of \\(z = 0.47\\)?",
            options: ["0.6808", "0.3192", "0.6554", "0.5000"],
            correct: 0 // Answer: a
        },
        {
            text: "In the example between \\(z = 0.71\\) and \\(1.28\\), what is \\(\\phi(1.28)\\)?",
            options: ["0.7611", "0.8997", "0.1386", "0.5000"],
            correct: 1 // Answer: b
        },
        {
            text: "In the same example, what is the value of \\(\\phi(0.71)\\)?",
            options: ["0.7611", "0.8997", "0.1386", "0.7580"],
            correct: 0 // Answer: a
        },
        {
            text: "What is the final calculated area between \\(z = 0.71\\) and \\(z = 1.28\\)?",
            options: ["0.8997", "1.6608", "0.1386", "0.7611"],
            correct: 2 // Answer: c
        },
        {
            text: "To find the z-score for the 75th percentile, we look for a value closest to:",
            options: ["0.7500", "0.2500", "75", "0.0075"],
            correct: 0 // Answer: a
        },
        {
            text: "Which z-score corresponds to a cumulative probability of approx 0.7517?",
            options: ["0.67", "0.68", "0.75", "0.71"],
            correct: 1 // Answer: b
        }
    ]
};
