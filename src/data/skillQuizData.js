export const skillQuizzes = [
// Python Easy questions
 {
    skill: "Python",
    difficulty: "easy",
    question: "What is the correct way to create a variable with the numeric value 5?",
    type: "text",
    options: ["x = 5", "int x = 5", "x := 5", "var x = 5"],
    answer: "x = 5",
  },
  {
    skill: "Python",
    difficulty: "easy",
    question: "Which of these is used to define a block of code (like a loop or function) in Python?",
    type: "text",
    options: ["Curly braces {}", "Parentheses ()", "Indentation", "Semicolons ;"],
    answer: "Indentation",
  },
  {
    skill: "Python",
    difficulty: "easy",
    question: "What is the output of the following code?",
    type: "code",
    code: `print(10 // 3)`,
    options: ["3.33", "3", "4", "1"],
    answer: "3",
  },
  {
    skill: "Python",
    difficulty: "easy",
    question: "Which method is used to add an element to the end of a list?",
    type: "text",
    options: ["add()", "insert()", "push()", "append()"],
    answer: "append()",
  },
  {
    skill: "Python",
    difficulty: "easy",
    question: "What is the output of this string operation?",
    type: "code",
    code: `print("Hello" * 2)`,
    options: ["HelloHello", "Hello 2", "Error", "HHeelllloo"],
    answer: "HelloHello",
  },

//  Python Medium questions  
  {
    skill: "Python",
    difficulty: "medium",
    question: "Which of the following is mutable?",
    type: "text",
    options: ["tuple", "string", "list", "int"],
    answer: "list",
  },
  {
    skill: "Python",
    difficulty: "hard",
    question: "What will be the output?",
    type: "code",
    code: `
def func(x=[]):
    x.append(1)
    return x

print(func())
print(func())
    `,
    options: [
      "[1] and [1]",
      "[1] and [1,1]",
      "Error",
      "[] and []",
    ],
    answer: "[1] and [1,1]",
  },


  {
    skill: "Python",
    difficulty: "medium",
    question: "What is the output of this list comprehension?",
    type: "code",
    code: `
nums = [1, 2, 3, 4]
res = [x * 2 for x in nums if x % 2 == 0]
print(res)
    `,
    options: ["[2, 4, 6, 8]", "[4, 8]", "[2, 4]", "[1, 4]"],
    answer: "[4, 8]",
  },
  {
    skill: "Python",
    difficulty: "medium",
    question: "Which of the following statements about Python dictionaries is true?",
    type: "text",
    options: [
      "Keys must be mutable objects", 
      "Keys must be unique", 
      "Dictionaries are indexed by integers only", 
      "Dictionaries do not support nesting"
    ],
    answer: "Keys must be unique",
  },
  {
    skill: "Python",
    difficulty: "medium",
    question: "What will be the result of this boolean expression?",
    type: "code",
    code: `print(bool([]) or bool("False"))`,
    options: ["True", "False", "None", "Error"],
    answer: "True",
  },
  {
    skill: "Python",
    difficulty: "medium",
    question: "What is the result of the following set operation?",
    type: "code",
    code: `
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 & set2)
    `,
    options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "Error"],
    answer: "{3}",
  },

//   Python Hard questions

{
    skill: "Python",
    difficulty: "hard",
    question: "What is the output of the following code regarding variable scope?",
    type: "code",
    code: `
x = 10
def outer():
    x = 20
    def inner():
        nonlocal x
        x = 30
    inner()
    print(x)

outer()
    `,
    options: ["10", "20", "30", "Error"],
    answer: "30",
  },
  {
    skill: "Python",
    difficulty: "hard",
    question: "What does the '__init__' method do in a Python class?",
    type: "text",
    options: [
      "It deletes an instance of a class.",
      "It is a constructor that initializes a new object.",
      "It makes a class method private.",
      "It converts an object into a string."
    ],
    answer: "It is a constructor that initializes a new object.",
  },
  {
    skill: "Python",
    difficulty: "hard",
    question: "What is the output of this dictionary comprehension with a collision?",
    type: "code",
    code: `
d = {i: i * 2 for i in range(3)}
d[1] = 10
print(sum(d.values()))
    `,
    options: ["6", "12", "14", "10"],
    answer: "14",
  },
  {
    skill: "Python",
    difficulty: "hard",
    question: "In Python's memory management, what is 'interning'?",
    type: "text",
    options: [
      "Storing only one copy of certain immutable objects.",
      "The process of deleting unused variables.",
      "A way to bypass the Global Interpreter Lock (GIL).",
      "The conversion of Python code to Bytecode."
    ],
    answer: "Storing only one copy of certain immutable objects.",
  },
  {
    skill: "Python",
    difficulty: "hard",
    question: "What is the output of the following generator-related code?",
    type: "code",
    code: `
def gen():
    yield 1
    yield 2

g = gen()
next(g)
print(next(g))
    `,
    options: ["1", "2", "StopIteration", "None"],
    answer: "2",
  },

  // JavaScript
  {
    skill: "JavaScript",
    difficulty: "easy",
    question: "Which keyword is used to declare a constant?",
    type: "text",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },

  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What is the output?",
    type: "code",
    code: `console.log(typeof null);`,
    options: ["null", "object", "undefined", "number"],
    answer: "object",
  },
]
