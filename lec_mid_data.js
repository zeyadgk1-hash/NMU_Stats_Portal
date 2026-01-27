// بيانات امتحان الميدترم الشامل
const quizData = {
    title: "Midterm Exam Challenge 🔥",
    questions: [
        // --- Page 1: Basics ---
        {
            text: "Probabilities: Flaw Side=0.02, Top=0.03, Both=0.01. What is P(Flaw)?",
            options: ["0.04", "0.4", "0.01", "0.23"],
            correct: 0,
            explanation: "قانون الاتحاد يا وحش: P(A U B) = P(A) + P(B) - P(Inter). <br> 0.02 + 0.03 - 0.01 = 0.04"
        },
        {
            text: "What is the probability that a randomly chosen can has NO flaw?",
            options: ["0.52", "0.96", "0.28", "0.5"],
            correct: 1,
            explanation: "المكملة (Complement): 1 - احتمال وجود عيب <br> 1 - 0.04 = 0.96"
        },
        {
            text: "Prob that a bolt meets specification is 0.87. Prob it does NOT meet it?",
            options: ["0.87", "0.7", "0.13", "0.56"],
            correct: 2,
            explanation: "1 - 0.87 = 0.13 <br> تعويض مباشر."
        },
        {
            text: "4 True-False questions. Prob all answers are the same?",
            options: ["3/8", "5/16", "1/8", "1/16"],
            correct: 2,
            explanation: "عندنا حالتين بس: كلهم صح (TTTT) أو كلهم غلط (FFFF). <br> العدد الكلي للاحتمالات 2 أس 4 = 16. <br> الاحتمال = 2/16 = 1/8."
        },
        {
            text: "Find the probability that exactly one of the four answers is 'True'.",
            options: ["3/8", "5/16", "1/4", "2/4"],
            correct: 2,
            explanation: "يعني TFFF, FTFF, FFTF, FFFT (4 حالات). <br> الاحتمال = 4/16 = 1/4."
        },
        // --- Page 2 ---
        {
            text: "Find the probability that AT MOST one answer is 'True'.",
            options: ["3/8", "5/16", "1/4", "2/4"],
            correct: 1,
            explanation: "كلمة At most تعني (0 أو 1). <br> حالة 0 (FFFF) + 4 حالات (واحد صح) = 5 حالات. <br> الإجابة 5/16."
        },
        {
            text: "80% flawless, 15% minor, 5% major. Prob of ANY flaw (major or minor)?",
            options: ["0.50", "0.20", "0.70", "0.90"],
            correct: 1,
            explanation: "أي عيب = مجموع العيوب (Minor + Major) <br> 15% + 5% = 20% = 0.20"
        },
        {
            text: "Find the probability that a part has NO major flaw.",
            options: ["0.50", "0.20", "0.70", "0.95"],
            correct: 3,
            explanation: "مكملة الـ Major: <br> 1 - 0.05 = 0.95"
        },
        {
            text: "P(S)=0.4, P(C)=0.3, P(S and C)=0.2. Find P(S or C or Both).",
            options: ["0.1", "0.5", "0.3", "0.8"],
            correct: 1,
            explanation: "قانون الاتحاد تاني: 0.4 + 0.3 - 0.2 = 0.5"
        },
        {
            text: "Find the probability that a student has taken NEITHER stats nor chem.",
            options: ["0.1", "0.5", "0.3", "0.8"],
            correct: 1,
            explanation: "مكملة الاتحاد: 1 - 0.5 = 0.5"
        },
        {
            text: "Find the probability that a student has taken Statistics BUT NOT Chemistry.",
            options: ["0.1", "0.8", "0.3", "0.2"],
            correct: 3,
            explanation: "الفرق (Difference): P(S) - P(Intersection) <br> 0.4 - 0.2 = 0.2 <br> يعني اللي خد إحصاء بس وشيلنا منه المشترك."
        },
        // --- Page 3 & 4 (Set Theory) ---
        {
            text: "Reading(85%), Math(78%), Both(65%). Prob: Proficient in Math but NOT Reading?",
            options: ["0.25", "0.68", "0.13", "0"],
            correct: 2,
            explanation: "P(M) - P(Both) = 0.78 - 0.65 = 0.13"
        },
        {
            text: "Prob: Proficient in Reading but NOT Math?",
            options: ["0.20", "0.68", "0.13", "0"],
            correct: 0,
            explanation: "P(R) - P(Both) = 0.85 - 0.65 = 0.20"
        },
        {
            text: "Prob: Proficient in NEITHER?",
            options: ["0.20", "0.68", "0.13", "0.02"],
            correct: 3,
            explanation: "أول حاجة هات الاتحاد: 0.85 + 0.78 - 0.65 = 0.98 <br> الباقي بقى: 1 - 0.98 = 0.02"
        },
        {
            text: "System A(0.98), B(0.95), Union(0.99). System works only if BOTH work. Find Prob.",
            options: ["0.94", "0.82", "0.22", "1"],
            correct: 0,
            explanation: "عايز التقاطع (Both). <br> P(Inter) = P(A) + P(B) - P(Union) <br> 0.98 + 0.95 - 0.99 = 0.94"
        },
        {
            text: "If A and B are Mutually Exclusive, then P(A ∩ B) = ?",
            options: ["0", "1", "0.5", "P(A)"],
            correct: 0,
            explanation: "متنافية (Mutually Exclusive) يعني مبيتقابلوش أصلاً، فالتقاطع بصفر."
        },
        // --- Independence ---
        {
            text: "System: A fails(0.08), B fails(0.05). Independent. Prob System Functions?",
            options: ["0.05", "0.08", "0.874", "0.423"],
            correct: 2,
            explanation: "عشان السيستم يشتغل لازم الاتنين يشتغلوا. <br> P(A works) = 1 - 0.08 = 0.92 <br> P(B works) = 1 - 0.05 = 0.95 <br> Independent يعني نضرب: 0.92 × 0.95 = 0.874"
        },
        {
            text: "Eng(30%), Club(20%), Both(10%). Random student is Eng major?",
            options: ["0.1", "0.3", "0.2", "0.5"],
            correct: 1,
            explanation: "هو مديك الإجابة في السؤال أصلاً! Eng = 30% = 0.3"
        },
        {
            text: "Given student is Eng, prob they play Club?",
            options: ["2/3", "1/3", "2/4", "1/5"],
            correct: 1,
            explanation: "احتمال شرطي: P(Club | Eng) = P(Both) / P(Eng) <br> 0.1 / 0.3 = 1/3. <br> (الإجابة 1/3 مش موجودة في الاختيارات بس هي الصح، أقرب حاجة في الاجابات الغريبة دي هي 1/3 لو افترضنا خطأ مطبعي في B)."
        },
        {
            text: "Given student plays Club, prob they are Eng?",
            options: ["1/2", "2/3", "1/3", "3/4"],
            correct: 0,
            explanation: "P(Eng | Club) = P(Both) / P(Club) <br> 0.1 / 0.2 = 0.5 = 1/2"
        },
        // --- Dice & Max/Min ---
        {
            text: "4-sided die rolled twice. Prob Max is 3?",
            options: ["5/16", "6/16", "15/16", "3/16"],
            correct: 0,
            explanation: "الأزواج اللي الكبير فيها 3 هي: (1,3), (2,3), (3,3), (3,2), (3,1). <br> دول 5 أزواج من أصل 16."
        },
        {
            text: "Prob Min is 1?",
            options: ["11/16", "3/16", "5/16", "7/16"],
            correct: 3,
            explanation: "الأزواج اللي الصغير فيها 1 هي: (1,1) لحد (1,4) ودول 4، و (2,1), (3,1), (4,1) ودول 3. <br> المجموع 7/16."
        },
        {
            text: "Prob Max is 3 GIVEN Min is 1?",
            options: ["11/7", "3/7", "5/7", "2/7"],
            correct: 3,
            explanation: "الشرطي: المشترك بين (Max3 و Min1) هما الزوجين (1,3) و (3,1). <br> نقسمهم على عدد حالات الشرط (Min=1) اللي هما 7. <br> الإجابة 2/7. (تم تعديل الاختيارات لتناسب الحل الصحيح)."
        },
        // --- Bayes & Machines ---
        {
            text: "Machines A(60%, 2% def), B(30%, 3%), C(10%, 4%). Prob defective?",
            options: ["0.4", "0.1", "0.025", "0.7"],
            correct: 2,
            explanation: "Total Probability: <br> (0.6×0.02) + (0.3×0.03) + (0.1×0.04) <br> 0.012 + 0.009 + 0.004 = 0.025"
        },
        {
            text: "Given defective, prob NOT produced by A?",
            options: ["0.52", "0.48", "0.36", "1"],
            correct: 0,
            explanation: "الأول هات احتمال A بشرط Defective (Bayes): <br> (0.6×0.02) / 0.025 = 0.48 <br> يبقى اللي مش A هو الباقي: 1 - 0.48 = 0.52"
        },
        // --- Discrete RV ---
        {
            text: "X: 0(0.35), 1(0.25), 2(0.20), 3(0.15), 4(0.05). Find Mean.",
            options: ["1.3", "1.5", "5", "0.4"],
            correct: 0,
            explanation: "اضرب كل رقم في احتماله واجمع: <br> 0 + 0.25 + 0.4 + 0.45 + 0.2 = 1.3"
        },
        {
            text: "Same data. Find Variance.",
            options: ["0.64", "1.51", "2.50", "0.40"],
            correct: 1,
            explanation: "هات E(X^2) الأول: (0 + 0.25 + 0.8 + 1.35 + 0.8) = 3.2 <br> Var = E(X^2) - (Mean)^2 <br> 3.2 - (1.3)^2 = 3.2 - 1.69 = 1.51"
        },
        {
            text: "Find Standard Deviation.",
            options: ["0.64", "1.23", "2.50", "0.40"],
            correct: 1,
            explanation: "جذر التباين: sqrt(1.51) ≈ 1.23"
        },
        // --- Stores & Employees ---
        {
            text: "Store A(50, 50%W), B(75, 60%W), C(100, 70%W). Total=225. Prob Fired is Man?",
            options: ["17/45", "28/45", "20/45", "11/45"],
            correct: 0,
            explanation: "احسب عدد الرجالة في كل فرع: <br> A: 25, B: 30, C: 30. المجموع 85. <br> الاحتمال 85/225 = 17/45."
        },
        {
            text: "If fired employee was a Woman, prob she works in Store C?",
            options: ["1/3", "0.9", "0.2", "0.5"],
            correct: 3,
            explanation: "عدد الستات الكلي: 25+45+70 = 140. <br> الستات في C بس = 70. <br> الاحتمال = 70/140 = 0.5."
        },
        // --- Binomial ---
        {
            text: "Binomial n=18, p=0.1. Prob exactly 2 contain pollutant?",
            options: ["0.012", "0.532", "0.284", "0.845"],
            correct: 2,
            explanation: "القانون: 18C2 × (0.1)^2 × (0.9)^16 <br> احسبها تطلع ≈ 0.284"
        },
        {
            text: "Prob at least 4 contain pollutant?",
            options: ["0.352", "0.098", "0.723", "0.190"],
            correct: 1,
            explanation: "1 - (P0 + P1 + P2 + P3) <br> الحسابات بتقول المجموع 0.902 <br> الباقي 0.098"
        },
        // --- True / False ---
        {
            text: "TF: The standard deviation is the square root of the variance.",
            options: ["True", "False"],
            correct: 0,
            explanation: "طبعاً صح. دي معلومة أساسية."
        },
        {
            text: "TF: If A and B are Mutually Exclusive, P(A U B) = P(A) + P(B).",
            options: ["True", "False"],
            correct: 0,
            explanation: "صح، عشان مفيش تقاطع نطرحه."
        },
        {
            text: "TF: If A and B are Independent, then A' and B are Dependent.",
            options: ["True", "False"],
            correct: 1,
            explanation: "غلط. الاستقلال بيورث.. لو A مستقلة عن B، مكملاتهم برضه مستقلة."
        },
        {
            text: "TF: The mean of a random variable is called the 1st moment.",
            options: ["True", "False"],
            correct: 0,
            explanation: "صح (First Moment about the origin)."
        },
        {
            text: "TF: For any events A, B: P(A|B) = P(B|A).",
            options: ["True", "False"],
            correct: 1,
            explanation: "غلط جداً! دي مغالطة مشهورة. ده يساوي ده بس لو P(A)=P(B)."
        },
        {
            text: "TF: The possible arrangements of 5 persons in a row is 120.",
            options: ["True", "False"],
            correct: 0,
            explanation: "صح. مضروب 5 (5!) = 120."
        },
        {
            text: "TF: If P(A|B) = 1/9, then P(B|A) = 1/9.",
            options: ["True", "False"],
            correct: 1,
            explanation: "غلط، لازم نعرف الـ Base Rates الأول."
        },
        {
            text: "TF: Standard deviation can be negative.",
            options: ["True", "False"],
            correct: 1,
            explanation: "مستحيل. ده جذر تربيعي، والجذر دايماً موجب أو صفر."
        }
    ]
};
