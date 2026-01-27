// بيانات تدريب المحاضرة الثانية - System Reliability & Counting
const quizData = {
    title: "تدريب المحاضرة 2: System Reliability & Combinatorics",
    questions: [
        {
            text: "Consider a system with two components, A and B, connected in series. The system functions only if:",
            options: [
                "At least one component functions.",
                "Component A functions, regardless of B.",
                "Both components function simultaneously.",
                "Neither component fails."
            ],
            correct: 2 // Answer: c
        },
        {
            text: "In a Series System, if \\(P(A)=0.98\\) and \\(P(B)=0.95\\) independently, what is the probability the system functions?",
            options: ["1.93", "0.931", "0.03", "0.965"],
            correct: 1 // Answer: b (0.98 * 0.95)
        },
        {
            text: "In a parallel connection with components C and D, the system functions if:",
            options: [
                "Both C and D function.",
                "Either C or D (or both) functions.",
                "Only if C functions.",
                "P(C) + P(D) = 1."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "For a parallel system where \\(P(C)=0.90\\) and \\(P(D)=0.85\\), what is \\(P(\\text{System Functions})\\)?",
            options: ["1.75", "0.765", "0.985", "0.015"],
            correct: 2 // Answer: c (0.90 + 0.85 - 0.765)
        },
        {
            text: "Given \\(P(A) = 0.8\\) and \\(P(A \\cap B) = 0.2\\), what value must \\(P(B)\\) have for A and B to be independent?",
            options: ["0.16", "0.25", "0.60", "0.40"],
            correct: 1 // Answer: b (0.2 / 0.8)
        },
        {
            text: "Three designers work independently with success probabilities 0.6, 0.7, and 0.75. Probability the problem is solved is:",
            options: ["0.315", "2.05", "0.97", "0.03"],
            correct: 2 // Answer: c (1 - (0.4 * 0.3 * 0.25))
        },
        {
            text: "Which method is valid for calculating the union of three independent events \\(P(A \\cup B \\cup C)\\)?",
            options: [
                "\\(P(A) + P(B) + P(C)\\)",
                "\\(1 - P(A^c)P(B^c)P(C^c)\\)",
                "\\(P(A)P(B)P(C)\\)",
                "\\(1 - (P(A) + P(B) + P(C))\\)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "If A and B are independent events, which of the following pairs are also independent?",
            options: ["\\(A^c\\) and B", "A and \\(B^c\\)", "\\(A^c\\) and \\(B^c\\)", "All of the above"],
            correct: 3 // Answer: d
        },
        {
            text: "How many ways can 18 people be divided into two baseball teams of 9 players each?",
            options: ["18!", "2 × 9!", "48,620", "36"],
            correct: 2 // Answer: c (Combination 18 over 9)
        },
        {
            text: "A password has 8 characters (26 letters + 10 digits). How many passwords are possible?",
            options: ["36 × 8", "\\(36^8\\)", "\\(8^{36}\\)", "\\(\\binom{36}{8}\\)"],
            correct: 1 // Answer: b
        },
        {
            text: "Numerical value for possible passwords in the previous question (8 characters from 36 choices):",
            options: ["\\(2.82 \\times 10^{12}\\)", "288", "40,320", "\\(1.2 \\times 10^9\\)"],
            correct: 0 // Answer: a
        },
        {
            text: "Example 6: Committee of 5 from 5 men and 10 women. What is the size of sample space \\(n(S)\\)?",
            options: ["\\(\\binom{10}{5}\\)", "\\(\\binom{5}{5}\\)", "\\(\\binom{15}{5}\\)", "15!"],
            correct: 2 // Answer: c
        },
        {
            text: "What is the expression for the probability that the committee consists of 'All women'?",
            options: [
                "\\(\\binom{10}{5} / \\binom{15}{5}\\)",
                "\\(\\binom{5}{5} / \\binom{15}{5}\\)",
                "\\(\\binom{10}{5} \\times \\binom{5}{0}\\)",
                "10/15"
            ],
            correct: 0 // Answer: a
        },
        {
            text: "What is the numerator for the probability of choosing exactly '2 men and 3 women'?",
            options: [
                "\\(\\binom{5}{3}\\binom{10}{2}\\)",
                "\\(\\binom{5}{2}\\binom{10}{3}\\)",
                "\\(\\binom{15}{2}\\)",
                "\\(\\binom{5}{2} + \\binom{10}{3}\\)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "To find the probability of 'At most one man', which two cases must be summed?",
            options: [
                "(1 man, 4 women) and (2 men, 3 women)",
                "(1 man, 4 women) and (0 men, 5 women)",
                "(0 men, 0 women) and (1 man, 1 woman)",
                "All cases minus (5 men)"
            ],
            correct: 1 // Answer: b
        },
        {
            text: "Reading (R)=0.85, Math (M)=0.78, Both=0.65. Probability a student is Math-proficient but NOT Reading?",
            options: ["0.13", "0.20", "0.78", "0.65"],
            correct: 0 // Answer: a (0.78 - 0.65)
        },
        {
            text: "Same data (R=0.85, M=0.78, Both=0.65). Probability a student is Reading-proficient but NOT Math?",
            options: ["0.85", "0.13", "0.20", "0.10"],
            correct: 2 // Answer: c (0.85 - 0.65)
        },
        {
            text: "What is the probability that a student is proficient in neither subject (R=0.85, M=0.78, Both=0.65)?",
            options: ["0.65", "0.98", "0.02", "0.37"],
            correct: 2 // Answer: c (1 - (0.85+0.78-0.65))
        },
        {
            text: "Regarding the pairwise independence example with dice:",
            options: [
                "Pairwise independence always implies mutual independence.",
                "It is possible for events to be pairwise independent but NOT mutually independent.",
                "A, B, and C were found to be mutually independent.",
                "Pairwise independence is impossible for 3 events."
            ],
            correct: 1 // Answer: b
        },
        {
            text: "In the 'fair die rolled twice' experiment, total number of outcomes is:",
            options: ["12", "24", "30", "36"],
            correct: 3 // Answer: d
        }
    ]
};
