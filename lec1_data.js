// بيانات تدريب المحاضرة الأولى - Probability
const quizData = {
    title: "تدريب المحاضرة 1: Probability Basics",
    questions: [
        {
            text: "What is the definition of an 'experiment' in the context of probability?",
            options: [
                "A process with a known, certain outcome.",
                "A subset of a sample space.",
                "A process that results in an outcome that cannot be predicted in advance with certainty.",
                "The quantitative measure of how likely an event is to occur."
            ],
            correct: 2 // الإجابة c
        },
        {
            text: "The set of all possible outcomes of an experiment is called the:",
            options: ["Event", "Sample Space", "Intersection", "Complement"],
            correct: 1 // الإجابة b
        },
        {
            text: "Which of the following is the correct sample space for tossing a coin?",
            options: ["{1, 2, 3, 4, 5, 6}", "{Heads, Tails}", "{Heads}", "{0, 1}"],
            correct: 1 // الإجابة b
        },
        {
            text: "A subset of a sample space is technically defined as:",
            options: ["An experiment", "An outcome", "An event", "A union"],
            correct: 2 // الإجابة c
        },
        {
            text: "Two events A and B are said to be 'mutually exclusive' (or disjoint) if:",
            options: [
                "They have all outcomes in common.",
                "Their probabilities sum to 1.",
                "They have no outcomes in common.",
                "One implies the other."
            ],
            correct: 2 // الإجابة c
        },
        {
            text: "The union of two events A and B, denoted \\(A \\cup B\\), contains outcomes that belong to:",
            options: ["Only A.", "Only B.", "Both A and B simultaneously.", "Either A, B, or both."],
            correct: 3 // الإجابة d
        },
        {
            text: "In words, the intersection \\(A \\cap B\\) translates to:",
            options: ["'A or B'", "'A and B'", "'Not A'", "'A minus B'"],
            correct: 1 // الإجابة b
        },
        {
            text: "The complement of event A, denoted as \\(A^c\\), consists of:",
            options: [
                "All outcomes in the sample space that do not belong to A.",
                "All outcomes common to A and the sample space.",
                "The empty set.",
                "All outcomes in A plus outcomes in B."
            ],
            correct: 0 // الإجابة a
        },
        {
            text: "If event A is the set {1, 2, 3} and event B is {2, 3, 4}, what is \\(A \\cap B\\)?",
            options: ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "\\(\\emptyset\\) (Empty Set)"],
            correct: 1 // الإجابة b
        },
        {
            text: "According to the slides, what represents the event 'not A'?",
            options: ["\\(A \\cup B\\)", "\\(A \\cap B\\)", "\\(A^c\\)", "P(A)"],
            correct: 2 // الإجابة c
        },
        {
            text: "Which of the following is the first axiom of probability regarding the sample space S?",
            options: ["P(S) = 0", "P(S) = 0.5", "P(S) = 1", "P(S) < 1"],
            correct: 2 // الإجابة c
        },
        {
            text: "For any event A, the probability P(A) must satisfy:",
            options: ["\\(P(A) \\ge 1\\)", "\\(-1 \\le P(A) \\le 1\\)", "\\(0 \\le P(A) \\le 1\\)", "P(A) = 0"],
            correct: 2 // الإجابة c
        },
        {
            text: "If A and B are mutually exclusive, the probability of their union \\(P(A \\cup B)\\) is:",
            options: ["\\(P(A) \\times P(B)\\)", "P(A) + P(B)", "P(A) - P(B)", "\\(P(A) + P(B) - P(A \\cap B)\\)"],
            correct: 1 // الإجابة b
        },
        {
            text: "What is the 'General Addition Rule' for any two events?",
            options: [
                "P(A \\cup B) = P(A) + P(B)",
                "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
                "P(A \\cup B) = P(A) \\times P(B)",
                "P(A \\cup B) = 1 - P(A)"
            ],
            correct: 1 // الإجابة b
        },
        {
            text: "The probability of the complement of A is calculated as:",
            options: ["P(A^c) = 1 + P(A)", "P(A^c) = P(A) - 1", "P(A^c) = 1 - P(A)", "P(A^c) = P(S) + P(A)"],
            correct: 2 // الإجابة c
        },
        {
            text: "In the resistor example, event A and event C were determined to be mutually exclusive. This means:",
            options: [
                "They happen at the same time.",
                "They have no outcomes in common.",
                "Their union is the sample space.",
                "P(A) = P(C)."
            ],
            correct: 1 // الإجابة b
        },
        {
            text: "Aluminum Cans example: If P(side) = 0.02, P(top) = 0.03, and P(both) = 0.01, what is P(side OR top)?",
            options: ["0.06", "0.05", "0.04", "0.01"],
            correct: 2 // الإجابة c (0.02 + 0.03 - 0.01 = 0.04)
        },
        {
            text: "Using the previous result (P(flaw) = 0.04), what is the probability that a can has NO flaw?",
            options: ["0.04", "0.90", "0.96", "1.00"],
            correct: 2 // الإجابة c (1 - 0.04 = 0.96)
        },
        {
            text: "According to De Morgan's Law, \\(P(A^c \\cap B^c)\\) is equivalent to:",
            options: ["1 - P(A \\cup B)", "1 - P(A \\cap B)", "P(A) + P(B)", "P(A^c) + P(B^c)"],
            correct: 0 // الإجابة a
        },
        {
            text: "The probability of 'A occurring and B NOT occurring' (P(A - B)) is:",
            options: ["P(B) - P(A)", "P(A) - P(B)", "P(A) - P(A \\cap B)", "1 - P(A \\cap B)"],
            correct: 2 // الإجابة c
        }
    ]
};
