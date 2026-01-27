// بيانات تدريب المحاضرة الخامسة - Bernoulli & Binomial Distributions
const quizData = {
    title: "تدريب المحاضرة 5: Bernoulli & Binomial Distributions",
    questions: [
        {
            text: "A Bernoulli distribution is used for an experiment that results in:",
            options: [
                "Any integer value.",
                "A continuous range of values.",
                "One of two outcomes: 'success' or 'failure.'",
                "At least three different outcomes."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "In a Bernoulli trial, if the probability of success is p, what is the probability of failure?",
            options: ["p", "1 - p", "p - 1", "1/p"],
            correct: 1 // Answer: b
        },
        {
            text: "For a Bernoulli random variable X, which numerical value is assigned to a 'success'?",
            options: ["0", "1", "p", "n"],
            correct: 1 // Answer: b
        },
        {
            text: "What is the mean (\\(\\mu_X\\)) of a Bernoulli random variable with success probability p?",
            options: ["np", "1-p", "p", "p(1-p)"],
            correct: 2 // Answer: c
        },
        {
            text: "What is the variance (\\(\\sigma^2_X\\)) of a Bernoulli random variable?",
            options: ["p^2", "p(1-p)", "\\(\\sqrt{p(1-p)}\\)", "np(1-p)"],
            correct: 1 // Answer: b
        },
        {
            text: "Which of the following is cited as the 'simplest Bernoulli trial'?",
            options: ["Rolling a die.", "Selecting a component.", "The toss of a coin.", "Drawing a card."],
            correct: 2 // Answer: c
        },
        {
            text: "In component selection, if 'success' is finding a defective component, then p represents:",
            options: [
                "The proportion of working components.",
                "0.5.",
                "The proportion of defective components in the population.",
                "The total number of components."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "A Binomial distribution describes the number of successes in:",
            options: [
                "A single Bernoulli trial.",
                "An infinite sequence of trials.",
                "n independent Bernoulli trials.",
                "Dependent trials with varying probabilities."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "Which condition is NOT required for a Binomial experiment?",
            options: [
                "The trials are independent.",
                "Each trial has the same success probability p.",
                "There are exactly n trials.",
                "The trials must result in more than two possible outcomes."
            ],
            correct: 3 // Answer: d
        },
        {
            text: "How is a random variable X with a Binomial distribution denoted?",
            options: ["X \\(\\sim\\) Bern(p)", "X \\(\\sim\\) Bin(n, p)", "X = np", "X \\(\\sim\\) Normal(\\(\\mu, \\sigma\\))"],
            correct: 1 // Answer: b
        },
        {
            text: "What is the formula for the PMF of a Binomial random variable?",
            options: [
                "\\(\\binom{n}{x} p^x(1-p)^{n-x}\\)",
                "\\(p^x(1-p)^{1-x}\\)",
                "\\(\\frac{1}{n} p^x\\)",
                "\\(np(1-p)\\)"
            ],
            correct: 0 // Answer: a
        },
        {
            text: "The Mean (\\(\\mu_X\\)) of a Binomial random variable \\(X \\sim Bin(n, p)\\) is:",
            options: ["p", "np", "n(1-p)", "np(1-p)"],
            correct: 1 // Answer: b
        },
        {
            text: "The Variance (\\(\\sigma^2_X\\)) of a Binomial random variable is:",
            options: ["np", "p(1-p)", "np(1-p)", "\\(\\sqrt{np(1-p)}\\)" ],
            correct: 2 // Answer: c
        },
        {
            text: "In the example \\(X \\sim Bin(10, 0.4)\\), what is the value of n?",
            options: ["0.4", "4", "5", "10"],
            correct: 3 // Answer: d
        },
        {
            text: "With n=10 and p=0.4, what is the probability of exactly 5 successes \\(P(X=5)\\)?",
            options: ["0.5000", "0.2007", "0.6000", "0.0400"],
            correct: 1 // Answer: b
        },
        {
            text: "In the 'Fair Die' example (8 rolls), what is a 'success'?",
            options: ["Rolling an odd number.", "Rolling a six.", "Rolling a number less than 2.", "Rolling a tails."],
            correct: 1 // Answer: b
        },
        {
            text: "What is the success probability p for rolling a six on a fair die?",
            options: ["1/2", "1/8", "5/6", "1/6"],
            correct: 3 // Answer: d
        },
        {
            text: "The probability that 'no more than 2 sixes come up' is written as:",
            options: ["\\(P(X = 2)\\)", "\\(P(X > 2)\\)", "\\(P(X \\le 2)\\)", "\\(P(X \\ge 2)\\)"],
            correct: 2 // Answer: c
        },
        {
            text: "To calculate \\(P(X \\le 2)\\), which individual probabilities are summed?",
            options: [
                "\\(P(X=1) + P(X=2)\\)",
                "\\(P(X=0) + P(X=1) + P(X=2)\\)",
                "\\(P(X=0) + P(X=2)\\)",
                "\\(P(X=2)\\) only"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "Final probability for rolling no more than 2 sixes in 8 rolls:",
            options: ["0.2326", "0.2605", "0.3721", "0.8652"],
            correct: 3 // Answer: d
        }
    ]
};
