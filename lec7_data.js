// بيانات تدريب المحاضرة السابعة - Continuous Random Variables
const quizData = {
    title: "تدريب المحاضرة 7: Continuous Random Variables & PDF",
    questions: [
        {
            text: "A random variable is considered 'continuous' if its probabilities are determined by:",
            options: [
                "Summing discrete values.",
                "Counting outcomes.",
                "Areas under a curve called the probability density function.",
                "The number of trials."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "For a continuous random variable X, the probability \\(P(X=a)\\) for any single point 'a' is always:",
            options: ["\\(f(a)\\)", "1", "0", "Undefined"],
            correct: 2 // Answer: c
        },
        {
            text: "The Cumulative Distribution Function (CDF) \\(F(x)\\) for a continuous RV is defined as:",
            options: [
                "\\(\\int_{-\\infty}^{\\infty} f(t) dt\\)",
                "\\(\\int_{-\\infty}^{x} f(t) dt\\)",
                "\\(\\int_{x}^{\\infty} f(t) dt\\)",
                "The derivative of f(x)."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "To compute the probability \\(P(a \\le X \\le b)\\) using the pdf \\(f(x)\\), one must:",
            options: [
                "Calculate \\(f(b) - f(a)\\).",
                "Integrate \\(f(x)\\) from a to b.",
                "Sum \\(f(x)\\) for all integers between a and b.",
                "Multiply \\(f(a)\\) by \\(f(b)\\)."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "The total area under the probability density curve \\(f(x)\\) from \\(-\\infty\\) to \\(\\infty\\) must equal:",
            options: ["0", "0.5", "1", "100"],
            correct: 2 // Answer: c
        },
        {
            text: "The Mean (\\(\\mu_X\\)) of a continuous random variable is calculated by:",
            options: [
                "\\(\\int_{-\\infty}^{\\infty} f(x) dx\\)",
                "\\(\\int_{-\\infty}^{\\infty} x f(x) dx\\)",
                "The value where \\(F(x) = 0.5\\).",
                "The maximum value of \\(f(x)\\)."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "The Variance (\\(\\sigma^2_X\\)) formula involving integrals is:",
            options: [
                "\\(\\int_{-\\infty}^{\\infty} x^2 f(x) dx - \\mu_X^2\\)",
                "\\(\\int_{-\\infty}^{\\infty} (x - \\mu)^2 dx\\)",
                "\\(\\sqrt{\\sigma^2}\\)",
                "\\(\\int_{-\\infty}^{\\infty} x f(x) dx\\)"
            ],
            correct: 0 // Answer: a
        },
        {
            text: "The Median (\\(x_m\\)) of a continuous random variable is the value that satisfies:",
            options: ["\\(f(x_m) = 0.5\\)", "\\(F(x_m) = 0.5\\)", "\\(x_m = \\mu_X\\)", "\\(P(X > x_m) = 1\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "The p-th percentile is the value \\(x_p\\) such that the area to the left of \\(x_p\\) is:",
            options: ["p", "1 - p", "p/100", "100/p"],
            correct: 2 // Answer: c
        },
        {
            text: "Sheet Metal Ex: \\(f(x) = 1.25(1-x^4)\\) for \\(0 < x < 1\\). What represents the 'shaft clearance'?",
            options: ["The variable X in millimeters.", "The area under the curve.", "The radius of the hole.", "The scrapped components."],
            correct: 0 // Answer: a
        },
        {
            text: "Components are scrapped if clearance > 0.8 mm. This probability is calculated as:",
            options: [
                "\\(\\int_{0}^{0.8} f(x) dx\\)",
                "\\(\\int_{0.8}^{1} f(x) dx\\)",
                "\\(1 - F(0.8)\\)",
                "Both b and c"
            ],
            correct: 3 // Answer: d
        },
        {
            text: "The calculated probability of scrapping a component (clearance > 0.8) is approximately:",
            options: ["0.0819", "0.617", "0.5", "1.25"],
            correct: 0 // Answer: a
        },
        {
            text: "For the interval \\(0 < x < 1\\), the CDF \\(F(x)\\) was found to be:",
            options: ["\\(1.25(x - \\frac{x^5}{5})\\)", "\\(1.25(1 - x^4)\\)", "\\(x^2\\)", "1"],
            correct: 0 // Answer: a
        },
        {
            text: "What is the value of \\(F(0.5)\\), representing the probability that clearance is \\(\\le 0.5\\)?",
            options: ["0.0819", "0.500", "0.617", "0.4167"],
            correct: 2 // Answer: c
        },
        {
            text: "The calculated Mean (\\(\\mu_X\\)) for the sheet metal distribution is:",
            options: ["0.617", "0.4167", "0.0645", "0.5"],
            correct: 1 // Answer: b
        },
        {
            text: "In the radioactive emission example, the pdf is given by:",
            options: [
                "\\(f(x) = e^{-x}\\)",
                "\\(f(x) = 0.1e^{-0.1x}\\) for \\(x > 0\\)",
                "\\(f(x) = 1 - e^{-0.1x}\\)",
                "\\(f(x) = \\ln(x)\\)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "To find the median time \\(x_m\\) for emissions, we solve the equation:",
            options: [
                "\\(1 - e^{-0.1x_m} = 0.5\\)",
                "\\(e^{-0.1x_m} = 0.1\\)",
                "\\(0.1x_m = 0.5\\)",
                "\\(\\ln(x_m) = 0.5\\)"
            ],
            correct: 0 // Answer: a
        },
        {
            text: "The calculated Median time between emissions is:",
            options: ["0.6931", "6.931", "9.163", "5.0"],
            correct: 1 // Answer: b
        },
        {
            text: "To find the 60th percentile (\\(x_{60}\\)), we set the cumulative probability equal to:",
            options: ["0.4", "0.5", "0.6", "60"],
            correct: 2 // Answer: c
        },
        {
            text: "The calculated 60th percentile time for the radioactive emission is:",
            options: ["6.931 seconds", "0.9163 seconds", "9.163 seconds", "4.0 seconds"],
            correct: 2 // Answer: c
        }
    ]
};
