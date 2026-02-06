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

  // JavaScript easy 
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
    difficulty: "easy",
    question: "Which of the following is the correct way to write 'Hello World' in an alert box?",
    type: "text",
    options: [
      "msg('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
      "console.log('Hello World');"
    ],
    answer: "alert('Hello World');",
  },
  {
    skill: "JavaScript",
    difficulty: "easy",
    question: "What is the output of the following code?",
    type: "code",
    code: `console.log(typeof "123");`,
    options: ["number", "string", "undefined", "object"],
    answer: "string",
  },
  {
    skill: "JavaScript",
    difficulty: "easy",
    question: "Which operator is used to assign a value to a variable?",
    type: "text",
    options: ["*", "x", "=", "-"],
    answer: "=",
  },
  {
    skill: "JavaScript",
    difficulty: "easy",
    question: "How do you create a function in JavaScript?",
    type: "text",
    options: [
      "function myFunction()",
      "def myFunction():",
      "create myFunction()",
      "function:myFunction()"
    ],
    answer: "function myFunction()",
  },

// JavaScript medium
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What is the output of the following code regarding hoisting?",
    type: "code",
    code: `
console.log(x);
var x = 5;
    `,
    options: ["5", "ReferenceError", "undefined", "null"],
    answer: "undefined",
  },
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "Which of the following describes the behavior of the Event Loop?",
    type: "text",
    options: [
      "It executes all code in parallel using multiple threads.",
      "It manages the execution of multiple chunks of your script over time.",
      "It is a built-in CSS layout engine.",
      "It stops execution until a Promise is resolved."
    ],
    answer: "It manages the execution of multiple chunks of your script over time.",
  },
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What will be logged to the console?",
    type: "code",
    code: `
const person = {
  name: "Alice",
  sayHi: () => {
    console.log(this.name);
  }
};
person.sayHi();
    `,
    options: ["Alice", "undefined", "ReferenceError", "null"],
    answer: "undefined",
  },
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What is the result of the following equality check?",
    type: "code",
    code: `console.log([] == ![]);`,
    options: ["true", "false", "TypeError", "undefined"],
    answer: "true",
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
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What is the output of the following code regarding closures?",
    type: "code",
    code: `
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());
    `,
    options: ["1 and 1", "1 and 2", "undefined and undefined", "ReferenceError"],
    answer: "1 and 2",
  },
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "Which of the following describes the priority of the Event Loop?",
    type: "text",
    options: [
      "Macrotasks (setTimeout) run before Microtasks (Promises)",
      "Microtasks (Promises) run before Macrotasks (setTimeout)",
      "All callbacks run in the order they were called",
      "Synchronous code runs after the first setTimeout"
    ],
    answer: "Microtasks (Promises) run before Macrotasks (setTimeout)",
  },
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What will be logged to the console in this arrow function scenario?",
    type: "code",
    code: `
const obj = {
  name: "Quiz",
  start: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};
obj.start();
    `,
    options: ["Quiz", "undefined", "window", "TypeError"],
    answer: "Quiz",
  },
  {
    skill: "JavaScript",
    difficulty: "medium",
    question: "What is the result of the following equality check?",
    type: "code",
    code: `console.log([] == ![]);`,
    options: ["true", "false", "TypeError", "undefined"],
    answer: "true",
  },

//   JavaScript hard questions
{
    skill: "JavaScript",
    difficulty: "hard",
    question: "What is the output of the following code involving the Temporal Dead Zone (TDZ)?",
    type: "code",
    code: `
let x = 10;
function func() {
  console.log(x);
  let x = 20;
}
func();
    `,
    options: ["10", "20", "ReferenceError", "undefined"],
    answer: "ReferenceError",
  },
  {
    skill: "JavaScript",
    difficulty: "hard",
    question: "What does the 'WeakMap' object do differently compared to a standard 'Map'?",
    type: "text",
    options: [
      "It allows only strings as keys.",
      "It does not prevent garbage collection of its keys.",
      "It is faster for lookups but slower for insertions.",
      "It can be iterated using a for...of loop."
    ],
    answer: "It does not prevent garbage collection of its keys.",
  },
  {
    skill: "JavaScript",
    difficulty: "hard",
    question: "What is the output of this Promise-based code?",
    type: "code",
    code: `
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
test();
console.log(3);
    `,
    options: ["1, 2, 3", "1, 3, 2", "3, 1, 2", "1, undefined, 3"],
    answer: "1, 3, 2",
  },
  {
    skill: "JavaScript",
    difficulty: "hard",
    question: "In the context of the V8 engine, what is 'Hidden Classes' used for?",
    type: "text",
    options: [
      "To protect private properties in a class.",
      "To optimize property access in objects.",
      "To manage memory for global variables.",
      "To handle inheritance between prototypes."
    ],
    answer: "To optimize property access in objects.",
  },
  {
    skill: "JavaScript",
    difficulty: "hard",
    question: "What is the result of the following 'this' binding scenario?",
    type: "code",
    code: `
function User(name) {
  this.name = name;
  return { name: "Override" };
}
const user = new User("Alice");
console.log(user.name);
    `,
    options: ["Alice", "Override", "undefined", "TypeError"],
    answer: "Override",
  },

//   React easy questions
{
    skill: "React",
    difficulty: "easy",
    question: "What is the correct syntax to embed a JavaScript expression inside JSX?",
    type: "text",
    options: ["{expression}", "[expression]", "(expression)", "%expression%"],
    answer: "{expression}",
  },
  {
    skill: "React",
    difficulty: "easy",
    question: "Which of the following is used to pass data from a parent component to a child component?",
    type: "text",
    options: ["State", "Props", "Context", "Redux"],
    answer: "Props",
  },
  {
    skill: "React",
    difficulty: "easy",
    question: "What is the purpose of the 'useState' hook in React?",
    type: "text",
    options: [
      "To handle side effects",
      "To manage local state in a functional component",
      "To navigate between pages",
      "To create a reference to a DOM element"
    ],
    answer: "To manage local state in a functional component",
  },
  {
    skill: "React",
    difficulty: "easy",
    question: "In JSX, which attribute is used instead of the standard HTML 'class' attribute?",
    type: "text",
    options: ["className", "clazz", "class", "styleClass"],
    answer: "className",
  },
  {
    skill: "React",
    difficulty: "easy",
    question: "What will be rendered by the following code snippet?",
    type: "code",
    code: `
function Welcome() {
  return <h1>Hello World</h1>;
}
    `,
    options: [
      "A plain text: Hello World",
      "An H1 heading with 'Hello World'",
      "A JavaScript object",
      "Nothing, it will throw an error"
    ],
    answer: "An H1 heading with 'Hello World'",
  },

//   React medium questions
{
    skill: "React",
    difficulty: "medium",
    question: "When updating state based on a previous value, why should you use a functional update (setCount(prev => prev + 1))?",
    type: "text",
    options: [
      "To make the code run faster",
      "To ensure you are working with the most recent state, avoiding closures issues",
      "Because React requires it for all updates",
      "To prevent the component from re-rendering"
    ],
    answer: "To ensure you are working with the most recent state, avoiding closures issues",
  },
  {
    skill: "React",
    difficulty: "medium",
    question: "What happens if you leave the dependency array empty ([]) in a useEffect hook?",
    type: "text",
    options: [
      "The effect runs on every re-render",
      "The effect never runs",
      "The effect runs only once, after the initial mount",
      "The effect runs only when the component unmounts"
    ],
    answer: "The effect runs only once, after the initial mount",
  },
  {
    skill: "React",
    difficulty: "medium",
    question: "Which hook would you use to store a mutable value that does NOT trigger a re-render when changed?",
    type: "text",
    options: ["useState", "useMemo", "useRef", "useReducer"],
    answer: "useRef",
  },
  {
    skill: "React",
    difficulty: "medium",
    question: "In the following code, what is the 'key' prop used for by React's reconciliation algorithm?",
    type: "code",
    code: `
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
    `,
    options: [
      "To style the list items individually",
      "To identify which items have changed, been added, or removed",
      "To create a unique CSS class for each element",
      "To pass data to the parent component"
    ],
    answer: "To identify which items have changed, been added, or removed",
  },
  {
    skill: "React",
    difficulty: "medium",
    question: "What is the primary benefit of using 'useContext' over passing props manually?",
    type: "text",
    options: [
      "It improves the visual performance of the app",
      "It avoids 'prop drilling' through many levels of components",
      "It automatically validates the types of props",
      "It allows you to skip using JSX"
    ],
    answer: "It avoids 'prop drilling' through many levels of components",
  },

//   React hard questions
{
    skill: "React",
    difficulty: "hard",
    question: "What is the primary difference between useLayoutEffect and useEffect?",
    type: "text",
    options: [
      "useLayoutEffect runs after the paint, while useEffect runs before.",
      "useLayoutEffect runs synchronously after DOM mutations but before paint.",
      "useEffect is only for class components.",
      "There is no difference; they are aliases."
    ],
    answer: "useLayoutEffect runs synchronously after DOM mutations but before paint.",
  },
  {
    skill: "React",
    difficulty: "hard",
    question: "Which of the following is a key feature of React's Fiber architecture?",
    type: "text",
    options: [
      "It allows React to pause and resume work to keep the main thread responsive.",
      "It replaces the Virtual DOM with a Real DOM.",
      "It makes all state updates synchronous.",
      "It removes the need for keys in lists."
    ],
    answer: "It allows React to pause and resume work to keep the main thread responsive.",
  },
  {
    skill: "React",
    difficulty: "hard",
    question: "What will happen in this scenario if 'user' is an object and the component re-renders?",
    type: "code",
    code: `
const memoizedComponent = React.memo(MyComponent);
// Parent renders:
<memoizedComponent user={{ name: 'John' }} />
    `,
    options: [
      "The component will NOT re-render because the data is the same.",
      "The component WILL re-render because a new object reference is created.",
      "React will throw an error.",
      "React will perform a deep comparison of the object."
    ],
    answer: "The component WILL re-render because a new object reference is created.",
  },
  {
    skill: "React",
    difficulty: "hard",
    question: "What is the purpose of the 'useTransition' hook introduced in React 18?",
    type: "text",
    options: [
      "To navigate between different pages in a React app.",
      "To mark state updates as non-urgent transitions.",
      "To handle CSS animations and transitions.",
      "To create a global store like Redux."
    ],
    answer: "To mark state updates as non-urgent transitions.",
  },
  {
    skill: "React",
    difficulty: "hard",
    question: "How does 'React.forwardRef' facilitate interaction with child components?",
    type: "text",
    options: [
      "It automatically logs all props passed to the child.",
      "It allows a parent component to pass a ref down to a DOM element in a child.",
      "It prevents the child from re-rendering.",
      "It allows the child to modify the parent's state directly."
    ],
    answer: "It allows a parent component to pass a ref down to a DOM element in a child.",
  },

//   Django easy questions
{
    skill: "Django",
    difficulty: "easy",
    question: "Which architectural pattern does Django follow?",
    type: "text",
    options: ["MVC", "MVT (Model-View-Template)", "Flux", "Monolithic"],
    answer: "MVT (Model-View-Template)",
  },
  {
    skill: "Django",
    difficulty: "easy",
    question: "Which command is used to start the development server?",
    type: "text",
    options: [
      "python manage.py run",
      "python manage.py startserver",
      "python manage.py runserver",
      "django-admin start"
    ],
    answer: "python manage.py runserver",
  },
  {
    skill: "Django",
    difficulty: "easy",
    question: "In which file do you define the database models for a Django app?",
    type: "text",
    options: ["views.py", "models.py", "db.py", "settings.py"],
    answer: "models.py",
  },
  {
    skill: "Django",
    difficulty: "easy",
    question: "What is the purpose of the 'settings.py' file?",
    type: "text",
    options: [
      "To store HTML templates",
      "To define URL patterns",
      "To configure project settings like databases and apps",
      "To handle user authentication logic"
    ],
    answer: "To configure project settings like databases and apps",
  },
  {
    skill: "Django",
    difficulty: "easy",
    question: "Which command is used to create the SQL statements for changes made to your models?",
    type: "text",
    options: [
      "python manage.py migrate",
      "python manage.py makemigrations",
      "python manage.py update",
      "python manage.py create"
    ],
    answer: "python manage.py makemigrations",
  },

//   Django medium questions
{
    skill: "Django",
    difficulty: "medium",
    question: "What is the primary difference between the 'save()' method and the 'update()' method in the Django ORM?",
    type: "text",
    options: [
      "save() is used for new records, while update() is only for existing ones.",
      "save() triggers the model's custom save logic and signals, while update() usually performs a direct SQL execution.",
      "update() is faster because it automatically validates all model fields before saving.",
      "There is no difference; they are aliases for the same SQL command."
    ],
    answer: "save() triggers the model's custom save logic and signals, while update() usually performs a direct SQL execution.",
  },
  {
    skill: "Django",
    difficulty: "medium",
    question: "How do you perform a 'JOIN' equivalent in Django ORM to retrieve related objects in a single query?",
    type: "text",
    options: [
      "Using the .join() method",
      "Using .select_related() for foreign keys and .prefetch_related() for many-to-many relationships",
      "By manually writing a SQL query inside the view",
      "By nesting for-loops in the template"
    ],
    answer: "Using .select_related() for foreign keys and .prefetch_related() for many-to-many relationships",
  },
  {
    skill: "Django",
    difficulty: "medium",
    question: "What will the following Django QuerySet return?",
    type: "code",
    code: `
# Entry model has a field 'pub_date'
Entry.objects.filter(pub_date__year=2023).exclude(headline__icontains="Draft")
    `,
    options: [
      "All entries from 2023 including those with 'Draft' in the headline",
      "All entries from 2023 except those where 'Draft' appears in the headline (case-insensitive)",
      "An error because __icontains is not a valid filter",
      "Only the entries from 2023 that have 'Draft' in the headline"
    ],
    answer: "All entries from 2023 except those where 'Draft' appears in the headline (case-insensitive)",
  },
  {
    skill: "Django",
    difficulty: "medium",
    question: "What is the purpose of Django 'Middleware'?",
    type: "text",
    options: [
      "To connect the database to the Python environment",
      "A framework of hooks into Django's request/response processing",
      "To translate Python code into HTML templates",
      "To manage the installation of third-party Python packages"
    ],
    answer: "A framework of hooks into Django's request/response processing",
  },
  {
    skill: "Django",
    difficulty: "medium",
    question: "In a Django View, what is the 'request.POST.get()' method used for?",
    type: "text",
    options: [
      "To retrieve data sent via a GET query parameter",
      "To safely retrieve a value from submitted form data without raising a KeyError",
      "To send a POST request to an external API",
      "To redirect the user to a different page after a form submission"
    ],
    answer: "To safely retrieve a value from submitted form data without raising a KeyError",
  },

//   Django hard questions
{
    skill: "Django",
    difficulty: "hard",
    question: "What is the primary difference between select_related and prefetch_related?",
    type: "text",
    options: [
      "select_related follows Many-to-Many relationships, while prefetch_related follows Foreign Keys.",
      "select_related uses a SQL JOIN in a single query; prefetch_related does a separate query for each relationship.",
      "prefetch_related is only for the Django Admin, not for views.",
      "There is no difference; they are used interchangeably."
    ],
    answer: "select_related uses a SQL JOIN in a single query; prefetch_related does a separate query for each relationship.",
  },
  {
    skill: "Django",
    difficulty: "hard",
    question: "What is an 'F expression' used for in a Django QuerySet?",
    type: "code",
    code: `
from django.db.models import F
Product.objects.update(price=F('price') * 1.2)
    `,
    options: [
      "To filter products by the letter F.",
      "To perform calculations at the database level without loading objects into memory.",
      "To create a new field in the database permanently.",
      "To format the price string in the template."
    ],
    answer: "To perform calculations at the database level without loading objects into memory.",
  },
  {
    skill: "Django",
    difficulty: "hard",
    question: "In Django Migrations, what does 'RunPython.noop' do when passed as the second argument (reverse_code)?",
    type: "text",
    options: [
      "It stops the migration and raises an error.",
      "It allows the migration to be reversed without performing any action.",
      "It deletes the migration file automatically.",
      "It runs the forward logic again during the rollback."
    ],
    answer: "It allows the migration to be reversed without performing any action.",
  },
  {
    skill: "Django",
    difficulty: "hard",
    question: "What is the difference between aggregate() and annotate()?",
    type: "text",
    options: [
      "aggregate() adds a column to every row; annotate() returns a single dictionary.",
      "aggregate() is for strings; annotate() is for numbers.",
      "aggregate() returns a summary of the whole QuerySet; annotate() adds data to each individual item.",
      "They are identical functions with different names."
    ],
    answer: "aggregate() returns a summary of the whole QuerySet; annotate() adds data to each individual item.",
  },
  {
    skill: "Django",
    difficulty: "hard",
    question: "What does the @transaction.atomic decorator ensure?",
    type: "text",
    options: [
      "That the code runs faster by using multiple threads.",
      "That a block of database operations either all succeed or all roll back.",
      "That the database is backed up before the code runs.",
      "That only one user can access the view at a time."
    ],
    answer: "That a block of database operations either all succeed or all roll back.",
  },

//   HTML easy questions
{
    skill: "HTML",
    difficulty: "easy",
    question: "What does HTML stand for?",
    type: "text",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Management Language"
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    skill: "HTML",
    difficulty: "easy",
    question: "Which HTML element is used to define the title of a document which is shown in the browser's title bar?",
    type: "text",
    options: ["<meta>", "<head>", "<title>", "<header>"],
    answer: "<title>",
  },
  {
    skill: "HTML",
    difficulty: "easy",
    question: "Which tag is used to create a hyperlink?",
    type: "text",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    skill: "HTML",
    difficulty: "easy",
    question: "What is the correct HTML element for inserting a line break?",
    type: "text",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    answer: "<br>",
  },
  {
    skill: "HTML",
    difficulty: "easy",
    question: "Which attribute is used to provide an alternative text for an image if it cannot be displayed?",
    type: "text",
    options: ["title", "src", "alt", "longdesc"],
    answer: "alt",
  },

//   HTML medium questions
{
    skill: "HTML",
    difficulty: "medium",
    question: "Which semantic tag should be used to wrap the main navigation links of a website?",
    type: "text",
    options: ["<header>", "<section>", "<nav>", "<menu>"],
    answer: "<nav>",
  },
  {
    skill: "HTML",
    difficulty: "medium",
    question: "What is the purpose of the 'label' element's 'for' attribute?",
    type: "text",
    options: [
      "To specify how many characters an input can take",
      "To bind the label to a specific form element using its 'id'",
      "To define the color of the label text",
      "To group multiple labels together"
    ],
    answer: "To bind the label to a specific form element using its 'id'",
  },
  {
    skill: "HTML",
    difficulty: "medium",
    question: "In an HTML form, which attribute on an <input> tag is used to specify a regular expression that the value is checked against?",
    type: "text",
    options: ["regex", "validate", "pattern", "test"],
    answer: "pattern",
  },
  {
    skill: "HTML",
    difficulty: "medium",
    question: "What does the 'defer' attribute do when added to a <script> tag?",
    type: "text",
    options: [
      "It stops the script from ever running",
      "It downloads the script and executes it immediately, blocking HTML parsing",
      "It downloads the script while HTML parses and executes it after the document is fully parsed",
      "It forces the script to run in a background worker thread"
    ],
    answer: "It downloads the script while HTML parses and executes it after the document is fully parsed",
  },
  {
    skill: "HTML",
    difficulty: "medium",
    question: "Which attribute is used to tell search engines and screen readers that an element is a button, even if it is built using a <div> or <span>?",
    type: "text",
    options: ["class='button'", "id='btn'", "role='button'", "type='button'"],
    answer: "role='button'",
  },

//   HTML hard questions
{
    skill: "HTML",
    difficulty: "hard",
    question: "In Web Components, what is the difference between 'open' and 'closed' modes in the Shadow DOM?",
    type: "text",
    options: [
      "Open mode allows CSS leakage, while closed mode provides isolation.",
      "Open mode allows JavaScript to access the shadow root via the 'shadowRoot' property; closed mode does not.",
      "Closed mode is faster for the browser to render.",
      "Open mode is deprecated and should no longer be used."
    ],
    answer: "Open mode allows JavaScript to access the shadow root via the 'shadowRoot' property; closed mode does not.",
  },
  {
    skill: "HTML",
    difficulty: "hard",
    question: "Which attribute should be used to reduce Largest Contentful Paint (LCP) by prioritizing a specific high-value image?",
    type: "text",
    options: ["loading='eager'", "fetchpriority='high'", "importance='urgent'", "rel='preload'"],
    answer: "fetchpriority='high'",
  },
  {
    skill: "HTML",
    difficulty: "hard",
    question: "What is the primary function of the 'aria-live' attribute?",
    type: "text",
    options: [
      "To stream live video metadata.",
      "To indicate that a region will be updated dynamically and should be announced by screen readers.",
      "To keep the browser tab active even when not in focus.",
      "To prevent the page from caching."
    ],
    answer: "To indicate that a region will be updated dynamically and should be announced by screen readers.",
  },
  {
    skill: "HTML",
    difficulty: "hard",
    question: "When a script is marked with 'async', when does it execute?",
    type: "text",
    options: [
      "Immediately after the HTML is fully parsed.",
      "Only when the user interacts with the page.",
      "As soon as it is downloaded, potentially interrupting the HTML parser.",
      "In a background worker thread without blocking the main thread."
    ],
    answer: "As soon as it is downloaded, potentially interrupting the HTML parser.",
  },
  {
    skill: "HTML",
    difficulty: "hard",
    question: "How does the 'srcset' attribute benefit responsive web design?",
    type: "text",
    options: [
      "It allows the browser to choose from multiple image sources based on screen density and width.",
      "It converts images to the WebP format automatically.",
      "It creates a slideshow of images within a single tag.",
      "It serves as a fallback for browsers that don't support the <img> tag."
    ],
    answer: "It allows the browser to choose from multiple image sources based on screen density and width.",
  },

//   CSS easy questions
{
    skill: "CSS",
    difficulty: "easy",
    question: "What does CSS stand for?",
    type: "text",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets",
  },
  {
    skill: "CSS",
    difficulty: "easy",
    question: "Which HTML attribute is used to define inline styles?",
    type: "text",
    options: ["class", "styles", "font", "style"],
    answer: "style",
  },
  {
    skill: "CSS",
    difficulty: "easy",
    question: "Which property is used to change the background color?",
    type: "text",
    options: ["color", "bgcolor", "background-color", "fill"],
    answer: "background-color",
  },
  {
    skill: "CSS",
    difficulty: "easy",
    question: "In the CSS box model, which property creates space *inside* the border of an element?",
    type: "text",
    options: ["margin", "padding", "spacing", "border-width"],
    answer: "padding",
  },
  {
    skill: "CSS",
    difficulty: "easy",
    question: "How do you select an element with the id 'header' in CSS?",
    type: "text",
    options: [".header", "header", "#header", "*header"],
    answer: "#header",
  },

//   CSS medium questions
  {
    skill: "CSS",
    difficulty: "medium",
    question: "Which property is used in Flexbox to align items along the main axis?",
    type: "text",
    options: [
      "align-items",
      "justify-content",
      "align-content",
      "text-align"
    ],
    answer: "justify-content",
  },
  {
    skill: "CSS",
    difficulty: "medium",
    question: "What is the result of the following CSS specificity calculation? Which rule will apply to a <p id='text' class='note'> element?",
    type: "code",
    code: `
#text { color: red; }
.note { color: blue; }
p { color: green; }
    `,
    options: ["red", "blue", "green", "The colors will mix"],
    answer: "red",
  },
  {
    skill: "CSS",
    difficulty: "medium",
    question: "What does the 'box-sizing: border-box;' property do?",
    type: "text",
    options: [
      "It adds a border to all elements automatically.",
      "It includes padding and border in the element's total width and height.",
      "It makes the element's margin transparent.",
      "It prevents the element from growing larger than the viewport."
    ],
    answer: "It includes padding and border in the element's total width and height.",
  },
  {
    skill: "CSS",
    difficulty: "medium",
    question: "How do you make a background image scroll slower than the foreground content to create a 3D effect?",
    type: "text",
    options: [
      "background-attachment: fixed;",
      "background-repeat: slow;",
      "display: parallax;",
      "z-index: -1;"
    ],
    answer: "background-attachment: fixed;",
  },
  {
    skill: "CSS",
    difficulty: "medium",
    question: "What is the correct syntax to select all <a> elements that are a direct child of a <div> element?",
    type: "text",
    options: ["div a", "div + a", "div > a", "div.a"],
    answer: "div > a",
  },

//   CSS hard questions
{
    skill: "CSS",
    difficulty: "hard",
    question: "Which of the following actions will NOT create a new stacking context for an element?",
    type: "text",
    options: [
      "Setting 'opacity' to a value less than 1",
      "Setting 'position: fixed'",
      "Setting 'transform' to a value other than 'none'",
      "Setting 'z-index: 1' on an element with 'position: static'"
    ],
    answer: "Setting 'z-index: 1' on an element with 'position: static'",
  },
  {
    skill: "CSS",
    difficulty: "hard",
    question: "How do CSS Custom Properties (Variables) differ from preprocessor variables (like Sass or Less) regarding the cascade?",
    type: "text",
    options: [
      "CSS variables are compiled at build time and cannot be changed in the browser.",
      "CSS variables are dynamic and participate in the cascade, meaning they can be updated via media queries or JavaScript.",
      "CSS variables do not inherit from parent elements.",
      "CSS variables can only be used within the :root selector."
    ],
    answer: "CSS variables are dynamic and participate in the cascade, meaning they can be updated via media queries or JavaScript.",
  },
  {
    skill: "CSS",
    difficulty: "hard",
    question: "What is the result of using 'clamp(1rem, 5vw, 3rem)' for a font-size?",
    type: "text",
    options: [
      "The font will always be exactly 5% of the viewport width.",
      "The font will be 5vw, but never smaller than 1rem or larger than 3rem.",
      "The font size will transition between 1rem and 3rem based on the user's scroll speed.",
      "It creates three different media queries automatically."
    ],
    answer: "The font will 5vw, but never smaller than 1rem or larger than 3rem.",
  },
  {
    skill: "CSS",
    difficulty: "hard",
    question: "In a CSS Grid layout, what does the 'minmax(0, 1fr)' function specifically prevent that '1fr' alone might not?",
    type: "text",
    options: [
      "It prevents the grid item from overflowing its container if it contains a large fixed-width element.",
      "It forces the grid item to always stay at 0 pixels wide.",
      "It prevents the use of margins on the grid item.",
      "It disables the ability to use 'grid-gap'."
    ],
    answer: "It prevents the grid item from overflowing its container if it contains a large fixed-width element.",
  },
  {
    skill: "CSS",
    difficulty: "hard",
    question: "What is the effect of the 'will-change' property in CSS?",
    type: "text",
    options: [
      "It allows the browser to optimize for an expected change by promoting the element to its own layer (GPU acceleration).",
      "It is a required property for any element that uses CSS animations.",
      "It acts as a listener that triggers a JavaScript callback when a property changes.",
      "It forces the element to re-render 60 times per second regardless of changes."
    ],
    answer: "It allows the browser to optimize for an expected change by promoting the element to its own layer (GPU acceleration).",
  },

//   sQL easy questions
{
    skill: "SQL",
    difficulty: "easy",
    question: "Which SQL statement is used to extract data from a database?",
    type: "text",
    options: ["GET", "OPEN", "SELECT", "EXTRACT"],
    answer: "SELECT",
  },
  {
    skill: "SQL",
    difficulty: "easy",
    question: "Which SQL clause is used to filter the results of a query based on a specific condition?",
    type: "text",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE",
  },
  {
    skill: "SQL",
    difficulty: "easy",
    question: "How do you select all columns from a table named 'Users'?",
    type: "text",
    options: [
      "SELECT all FROM Users",
      "SELECT * FROM Users",
      "GET * FROM Users",
      "SELECT Users"
    ],
    answer: "SELECT * FROM Users",
  },
  {
    skill: "SQL",
    difficulty: "easy",
    question: "Which keyword is used to sort the result-set in descending order?",
    type: "text",
    options: ["SORT", "ORDER", "DESC", "REVERSE"],
    answer: "DESC",
  },
  {
    skill: "SQL",
    difficulty: "easy",
    question: "What does the 'INSERT INTO' statement do?",
    type: "text",
    options: [
      "Updates existing data in a table",
      "Deletes a table from the database",
      "Adds new rows of data to a table",
      "Creates a new database"
    ],
    answer: "Adds new rows of data to a table",
  },

//   SQL medium questions
{
    skill: "SQL",
    difficulty: "medium",
    question: "Which JOIN type returns all records from the left table and the matched records from the right table, with NULLs for unmatched right-side rows?",
    type: "text",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: "LEFT JOIN",
  },
  {
    skill: "SQL",
    difficulty: "medium",
    question: "What is the main difference between the WHERE and HAVING clauses?",
    type: "text",
    options: [
      "WHERE is for numbers, HAVING is for text.",
      "WHERE filters rows before grouping; HAVING filters groups after the GROUP BY clause.",
      "HAVING is only used in DELETE statements.",
      "There is no difference; they are interchangeable."
    ],
    answer: "WHERE filters rows before grouping; HAVING filters groups after the GROUP BY clause.",
  },
  {
    skill: "SQL",
    difficulty: "medium",
    question: "Which aggregate function would you use to find the average value of a numeric column?",
    type: "text",
    options: ["MEAN()", "AVG()", "SUM() / COUNT()", "MEDIAN()"],
    answer: "AVG()",
  },
  {
    skill: "SQL",
    difficulty: "medium",
    question: "What does the following SQL query perform?",
    type: "code",
    code: `
SELECT Department, COUNT(*) 
FROM Employees 
GROUP BY Department 
HAVING COUNT(*) > 5;
    `,
    options: [
      "Lists all employees in departments with more than 5 people.",
      "Counts the total number of employees in the company.",
      "Shows departments that have more than 5 employees.",
      "Deletes departments with fewer than 5 employees."
    ],
    answer: "Shows departments that have more than 5 employees.",
  },
  {
    skill: "SQL",
    difficulty: "medium",
    question: "What is a subquery in SQL?",
    type: "text",
    options: [
      "A backup of the main database.",
      "A query nested inside another SELECT, INSERT, UPDATE, or DELETE statement.",
      "A table that only contains unique IDs.",
      "A command that runs only if the primary server fails."
    ],
    answer: "A query nested inside another SELECT, INSERT, UPDATE, or DELETE statement.",
  },

//   SQL hard questions
{
    skill: "SQL",
    difficulty: "hard",
    question: "Which window function would you use to find a value in a row that is a certain number of rows *before* the current row within a partition?",
    type: "text",
    options: ["LEAD()", "LAG()", "RANK()", "FIRST_VALUE()"],
    answer: "LAG()",
  },
  {
    skill: "SQL",
    difficulty: "hard",
    question: "What is the primary purpose of a Recursive Common Table Expression (CTE)?",
    type: "text",
    options: [
      "To perform calculations faster than a standard JOIN.",
      "To query hierarchical data, such as an organizational chart or tree structure.",
      "To automatically back up a table before running a DELETE command.",
      "To combine results from two different database engines."
    ],
    answer: "To query hierarchical data, such as an organizational chart or tree structure.",
  },
  {
    skill: "SQL",
    difficulty: "hard",
    question: "In a window function, what does the 'PARTITION BY' clause accomplish?",
    type: "text",
    options: [
      "It deletes the data in that specific section of the database.",
      "It divides the result set into partitions to which the window function is applied independently.",
      "It works exactly like GROUP BY and reduces the number of rows returned.",
      "It physically moves the data to a different server partition."
    ],
    answer: "It divides the result set into partitions to which the window function is applied independently.",
  },
  {
    skill: "SQL",
    difficulty: "hard",
    question: "What is the result of the following query regarding ranking?",
    type: "code",
    code: `
SELECT Score, 
       DENSE_RANK() OVER (ORDER BY Score DESC) as Ranking
FROM ExamResults;
-- If scores are 100, 90, 90, 80
    `,
    options: [
      "1, 2, 2, 3",
      "1, 2, 2, 4",
      "1, 2, 3, 4",
      "1, 1, 1, 1"
    ],
    answer: "1, 2, 2, 3",
  },
  {
    skill: "SQL",
    difficulty: "hard",
    question: "When using a CASE statement inside an aggregate function, what pattern are you likely implementing?",
    type: "text",
    options: [
      "A recursive search.",
      "Conditional Aggregation (Pivoting data).",
      "Full Text Indexing.",
      "Database Normalization."
    ],
    answer: "Conditional Aggregation (Pivoting data).",
  },

//   Tailwind easy questions
{
    skill: "Tailwind CSS",
    difficulty: "easy",
    question: "What is the primary philosophy behind Tailwind CSS?",
    type: "text",
    options: [
      "Object-Oriented CSS",
      "Utility-first CSS",
      "Semantic-first CSS",
      "Inline-only CSS"
    ],
    answer: "Utility-first CSS",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "easy",
    question: "Which class is used to set the text color to a specific shade of blue?",
    type: "text",
    options: ["color-blue-500", "font-blue", "text-blue-500", "bg-blue-500"],
    answer: "text-blue-500",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "easy",
    question: "In Tailwind, what does the class 'p-4' represent?",
    type: "text",
    options: [
      "Position: absolute",
      "Padding of 1rem (16px) on all sides",
      "Paragraph size 4",
      "Point size of 4 units"
    ],
    answer: "Padding of 1rem (16px) on all sides",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "easy",
    question: "How do you apply a bold font weight to an element in Tailwind?",
    type: "text",
    options: ["font-bold", "text-bold", "weight-bold", "bold"],
    answer: "font-bold",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "easy",
    question: "Which class would you use to create a flexbox container?",
    type: "text",
    options: ["display-flex", "d-flex", "flex", "flexbox"],
    answer: "flex",
  },

//   CSS medium questions
{
    skill: "Tailwind CSS",
    difficulty: "medium",
    question: "How do you apply a different background color specifically for medium-sized screens and above in Tailwind?",
    type: "text",
    options: [
      "md-bg-red-500",
      "bg-red-500@md",
      "md:bg-red-500",
      "tablet:bg-red-500"
    ],
    answer: "md:bg-red-500",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "medium",
    question: "Which class would you use to change an element's opacity only when the user moves their mouse over it?",
    type: "text",
    options: [
      "onhover:opacity-50",
      "hover:opacity-50",
      "mouse-opacity-50",
      "active:opacity-50"
    ],
    answer: "hover:opacity-50",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "medium",
    question: "What is the correct way to apply a custom spacing value (e.g., 13px) that isn't in Tailwind's default theme using arbitrary values?",
    type: "text",
    options: [
      "m-[13px]",
      "m-custom-13",
      "margin(13px)",
      "m-{13px}"
    ],
    answer: "m-[13px]",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "medium",
    question: "In Tailwind's Grid system, how do you specify that an element should span 3 columns?",
    type: "text",
    options: [
      "grid-span-3",
      "cols-3",
      "col-span-3",
      "span-cols-3"
    ],
    answer: "col-span-3",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "medium",
    question: "Which file is primarily used to customize the default theme, add plugins, or extend the color palette?",
    type: "text",
    options: [
      "tailwind.css",
      "styles.config.js",
      "tailwind.config.js",
      "postcss.config.js"
    ],
    answer: "tailwind.config.js",
  },

//   CSS hard questions
{
    skill: "Tailwind CSS",
    difficulty: "hard",
    question: "What is the purpose of the 'content' (formerly 'purge') option in the tailwind.config.js file?",
    type: "text",
    options: [
      "To specify which external CSS files to import into the bundle.",
      "To provide paths to all template files so Tailwind can tree-shake unused styles in production.",
      "To define the HTML content that should be injected into the DOM.",
      "To list the plugins that should be active during development."
    ],
    answer: "To provide paths to all template files so Tailwind can tree-shake unused styles in production.",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "hard",
    question: "How does Tailwind's Just-In-Time (JIT) engine differ from the classic engine used in versions prior to v3.0?",
    type: "text",
    options: [
      "The JIT engine generates all possible CSS combinations upfront for faster browser loading.",
      "The JIT engine generates styles on-demand as you write your HTML, rather than generating a massive pre-built file.",
      "The JIT engine requires a runtime JavaScript library to be loaded in the user's browser.",
      "The JIT engine only works with React and Vue components."
    ],
    answer: "The JIT engine generates styles on-demand as you write your HTML, rather than generating a massive pre-built file.",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "hard",
    question: "In the context of Tailwind's 'Group-Hover' feature, what happens if you apply 'group-hover:opacity-100' to a child element?",
    type: "text",
    options: [
      "The child becomes visible only when the child itself is hovered.",
      "The child becomes visible when any element with the 'group' class (usually a parent) is hovered.",
      "The entire page's opacity changes when the group is hovered.",
      "It triggers a JavaScript event listener on the parent element."
    ],
    answer: "The child becomes visible when any element with the 'group' class (usually a parent) is hovered.",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "hard",
    question: "Which Tailwind directive is used to inject Tailwind's 'base', 'components', and 'utilities' styles into your main CSS file?",
    type: "code",
    code: `
/* entry.css */
@______ base;
@______ components;
@______ utilities;
    `,
    options: ["import", "tailwind", "use", "apply"],
    answer: "tailwind",
  },
  {
    skill: "Tailwind CSS",
    difficulty: "hard",
    question: "What is the correct way to use the '@apply' directive to reference a custom value defined in your theme's configuration?",
    type: "text",
    options: [
      "@apply theme('colors.blue.500')",
      "@apply text-blue-500",
      "@apply var(--blue-500)",
      "@apply .text-blue-500"
    ],
    answer: "@apply text-blue-500",
  }
]
