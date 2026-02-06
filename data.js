// Video Data Array
// Sort by ID (higher ID = newer video)
// ID 1 = Lecture 1, appears at bottom by default

const videoData = [
  {
    id: 2,
    number: "Lecture 2",
    title: "JavaScript Basics - Introduction & Setup || Class 2",
    thumbnail: "https://i.ytimg.com/vi/3otrQFA2Ai4/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/3otrQFA2Ai4",
    duration: "01:59:59",
    dateAdded: "12-Jan-2026",
    summary: `
        
<h2>Detailed Summary: JavaScript Basics - Introduction & Setup</h2>
<p><b>Video:</b> 12 January 2026. Class 2. </p>

<h3>Introduction and Importance of JavaScript</h3>
<dl>
    <dt><b>Class Review</b> <a href="https://youtu.be/3otrQFA2Ai4?t=514" target="_blank">(Video @ 8:34)</a></dt>
    <dd>The instructor starts by asking about the previous class's topic, which was the history of JavaScript. This discussion begins around <a href="https://youtu.be/3otrQFA2Ai4?t=503" target="_blank">(Video @ 8:23)</a> and continues to <a href="https://youtu.be/3otrQFA2Ai4?t=780" target="_blank">(Video @ 13:00)</a>.</dd>
    <dt><b>Language Definition</b> <a href="https://youtu.be/3otrQFA2Ai4?t=607" target="_blank">(Video @ 10:07)</a></dt>
    <dd>He introduces JavaScript as a programming language used to create various applications, including websites, mobile applications, web applications, AI applications, and chatbots.</dd>
    <dt><b>Global Demand</b> <a href="https://youtu.be/3otrQFA2Ai4?t=717" target="_blank">(Video @ 11:57)</a></dt>
    <dd>JavaScript is described as a highly demanded language globally, often ranking second only to Python.</dd>
    <dt><b>Career Paths</b> <a href="https://youtu.be/3otrQFA2Ai4?t=735" target="_blank">(Video @ 12:15)</a></dt>
    <dd>Learning JavaScript opens up career paths in web development (front-end and back-end), AI development, chatbot development, and blockchain development.</dd>
</dl>

<h3>Understanding Web Applications (Front-end vs. Back-end)</h3>
<dl>
    <dt><b>Application Architecture</b> <a href="https://youtu.be/3otrQFA2Ai4?t=837" target="_blank">(Video @ 13:57)</a></dt>
    <dd>The video explains web applications using a diagram, dividing them into two main parts: Front-end and Back-end. This section covers up to <a href="https://youtu.be/3otrQFA2Ai4?t=1320" target="_blank">(Video @ 22:00)</a>.</dd>
    <dt><b>Front-end Explanation</b> <a href="https://youtu.be/3otrQFA2Ai4?t=885" target="_blank">(Video @ 14:45)</a></dt>
    <dd>Front-end is the user-facing part of a web application (e.g., Facebook, Instagram, LinkedIn), which includes elements like text, buttons, and images <a href="https://youtu.be/3otrQFA2Ai4?t=895" target="_blank">(Video @ 14:55)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=1000" target="_blank">(Video @ 16:40)</a>.</dd>
    <dt><b>Front-end Technologies</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1067" target="_blank">(Video @ 17:47)</a></dt>
    <dd>Front-end development primarily uses HTML (for structure), CSS (for styling), and JavaScript (for dynamic behavior and logic).</dd>
    <dt><b>Back-end Explanation</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1006" target="_blank">(Video @ 16:46)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=1051" target="_blank">(Video @ 17:31)</a></dt>
    <dd>Back-end handles the business logic, data storage, and server-side operations. For example, it checks if user login credentials exist <a href="https://youtu.be/3otrQFA2Ai4?t=1012" target="_blank">(Video @ 16:52)</a>.</dd>
    <dt><b>JavaScript's Role</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1053" target="_blank">(Video @ 17:33)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=1179" target="_blank">(Video @ 19:39)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=1207" target="_blank">(Video @ 20:07)</a></dt>
    <dd>JavaScript is used for both front-end (99% of web application front-ends use JavaScript) and back-end development (using Node.js).</dd>
    <dt><b>Frameworks for Other Platforms</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1247" target="_blank">(Video @ 20:47)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=1283" target="_blank">(Video @ 21:23)</a></dt>
    <dd>The instructor also mentions that JavaScript frameworks like React Native are used for mobile application development and Electron.js for desktop applications.</dd>
    <dt><b>Other Domains</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1290" target="_blank">(Video @ 21:30)</a></dt>
    <dd>Other domains where JavaScript is used include AI applications (LangChain framework) and blockchain (Ethereum packages).</dd>
</dl>

<h3>What is a Programming Language?</h3>
<dl>
    <dt><b>Definition of JavaScript</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1920" target="_blank">(Video @ 32:00)</a></dt>
    <dd>The video defines JavaScript as a "programming language and core technology of the web." This topic is covered from <a href="https://youtu.be/3otrQFA2Ai4?t=1885" target="_blank">(Video @ 31:25)</a> to <a href="https://youtu.be/3otrQFA2Ai4?t=2272" target="_blank">(Video @ 37:52)</a>.</dd>
    <dt><b>Language as Communication</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1935" target="_blank">(Video @ 32:15)</a></dt>
    <dd>Language is explained as a "way of communication" between humans, and similarly, between humans and computers.</dd>
    <dt><b>Creating Programs</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2061" target="_blank">(Video @ 34:21)</a></dt>
    <dd>Programming language allows us to create "programs," which are essentially "set of instructions."</dd>
    <dt><b>Instructions for the Computer</b> <a href="https://youtu.be/3otrQFA2Ai4?t=1973" target="_blank">(Video @ 32:53)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=2080" target="_blank">(Video @ 34:40)</a></dt>
    <dd>These instructions tell the computer what to do (e.g., when a user clicks a button, open a new tab).</dd>
    <dt><b>Forming Applications</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2132" target="_blank">(Video @ 35:32)</a></dt>
    <dd>Multiple programs combine to form an "application."</dd>
    <dt><b>JavaScript's Primary Role</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2173" target="_blank">(Video @ 36:13)</a></dt>
    <dd>JavaScript is the primary language for client-side web page behavior (front-end).</dd>
    <dt><b>Server-Side Options</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2206" target="_blank">(Video @ 36:46)</a></dt>
    <dd>The video mentions other options are available for the server-side (back-end).</dd>
</dl>

<h3>Setting up the Development Environment with VS Code</h3>
<dl>
    <dt><b>Environment Setup Guide</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2424" target="_blank">(Video @ 40:24)</a></dt>
    <dd>The instructor guides users on how to set up their development environment using VS Code. This segment concludes at <a href="https://youtu.be/3otrQFA2Ai4?t=2927" target="_blank">(Video @ 48:47)</a>.</dd>
    <dt><b>Steps to Create Project</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2435" target="_blank">(Video @ 40:35)</a></dt>
    <dd>Steps include creating a project folder.</dd>
    <dt><b>Opening VS Code</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2473" target="_blank">(Video @ 41:13)</a> <a href="https://youtu.be/3otrQFA2Ai4?t=2486" target="_blank">(Video @ 41:26)</a></dt>
    <dd>Opening VS Code and dragging the folder into VS Code.</dd>
    <dt><b>Alternative Method</b> <a href="https://youtu.be/3otrQFA2Ai4?t=2860" target="_blank">(Video @ 47:40)</a></dt>
    <dd>An alternative and easier method is demonstrated: navigating to the project folder's address bar in Windows, typing <code>cmd</code>, pressing Enter, and then typing <code>code .</code> in the terminal to open the folder in VS Code.</dd>
</dl>
        
        `,
    // section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>",
        answer: "",
      },
    ],
  },
{
    id: 3,
    number: "Lecture 3",
    title: "JavaScript - Variables, Output & Setup || Class 3",
    thumbnail: "https://i.ytimg.com/vi/XlENpktoPGo/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/XlENpktoPGo",
    duration: "01:54:16",
    dateAdded: "14-Jan`-2026",
    summary: `
        
     <h2>Detailed Summary: JavaScript Class 3 - Variables, Output & Setup</h2>
<p><b>Video:</b> 14 January 2026. Class 3. Smit javascript</p>

<h3>1. Introduction to JavaScript</h3>
<dl>
    <dt><b>Class Start</b> <a href="https://youtu.be/XlENpktoPGo?t=222" target="_blank">(Video @ 3:42)</a></dt>
    <dd>The JavaScript class begins.</dd>
    
    <dt><b>Purpose Recap</b> <a href="https://youtu.be/XlENpktoPGo?t=527" target="_blank">(Video @ 8:47)</a> <a href="https://youtu.be/XlENpktoPGo?t=590" target="_blank">(Video @ 9:50)</a></dt>
    <dd>The class began with a recap of JavaScript's purpose and its use cases.</dd>
    
    <dt><b>Role in Web Apps</b> <a href="https://youtu.be/XlENpktoPGo?t=557" target="_blank">(Video @ 9:17)</a> <a href="https://youtu.be/XlENpktoPGo?t=563" target="_blank">(Video @ 9:23)</a></dt>
    <dd>Specifically emphasizing its role in web applications.</dd>
    
    <dt><b>Client & Server-Side</b> <a href="https://youtu.be/XlENpktoPGo?t=568" target="_blank">(Video @ 9:28)</a> <a href="https://youtu.be/XlENpktoPGo?t=571" target="_blank">(Video @ 9:31)</a></dt>
    <dd>JavaScript is used for both client-side and server-side operations.</dd>
    
    <dt><b>Scripting Language</b> <a href="https://youtu.be/XlENpktoPGo?t=578" target="_blank">(Video @ 9:38)</a> <a href="https://youtu.be/XlENpktoPGo?t=581" target="_blank">(Video @ 9:41)</a></dt>
    <dd>The instructor reiterated that JavaScript is a scripting language that runs in the browser.</dd>
</dl>

<h3>2. Variables and Basic Output</h3>
<dl>
    <dt><b>Variable Creation</b> <a href="https://youtu.be/XlENpktoPGo?t=622" target="_blank">(Video @ 10:22)</a> <a href="https://youtu.be/XlENpktoPGo?t=732" target="_blank">(Video @ 12:12)</a></dt>
    <dd>The class revisited variable creation.</dd>
    
    <dt><b>Keywords</b> <a href="https://youtu.be/XlENpktoPGo?t=652" target="_blank">(Video @ 10:52)</a> <a href="https://youtu.be/XlENpktoPGo?t=653" target="_blank">(Video @ 10:53)</a></dt>
    <dd>Using <code>var</code>, <code>let</code>, and <code>const</code> keywords.</dd>
    
    <dt><b>Syntax</b> <a href="https://youtu.be/XlENpktoPGo?t=660" target="_blank">(Video @ 11:00)</a> <a href="https://youtu.be/XlENpktoPGo?t=679" target="_blank">(Video @ 11:19)</a></dt>
    <dd>Explaining the syntax: <code>keyword variableName = value;</code>.</dd>
    
    <dt><b>Output Methods</b></dt>
    <dd>
        <b><code>alert</code></b> <a href="https://youtu.be/XlENpktoPGo?t=682" target="_blank">(Video @ 11:22)</a> <a href="https://youtu.be/XlENpktoPGo?t=683" target="_blank">(Video @ 11:23)</a> for user input.<br>
        <b><code>console.log</code></b> <a href="https://youtu.be/XlENpktoPGo?t=685" target="_blank">(Video @ 11:25)</a> <a href="https://youtu.be/XlENpktoPGo?t=691" target="_blank">(Video @ 11:31)</a> for developer output.
    </dd>
    
    <dt><b>Updating Variables</b> <a href="https://youtu.be/XlENpktoPGo?t=702" target="_blank">(Video @ 11:42)</a> <a href="https://youtu.be/XlENpktoPGo?t=704" target="_blank">(Video @ 11:44)</a></dt>
    <dd>The concept of updating variables was also discussed.</dd>
</dl>

<h3>3. Setting up the Development Environment</h3>
<dl>
    <dt><b>Setup Process</b> <a href="https://youtu.be/XlENpktoPGo?t=734" target="_blank">(Video @ 12:14)</a> <a href="https://youtu.be/XlENpktoPGo?t=850" target="_blank">(Video @ 14:10)</a></dt>
    <dd>The instructor demonstrated the setup process.</dd>
    
    <dt><b>Create Folder</b> <a href="https://youtu.be/XlENpktoPGo?t=740" target="_blank">(Video @ 12:20)</a> <a href="https://youtu.be/XlENpktoPGo?t=745" target="_blank">(Video @ 12:25)</a></dt>
    <dd>A new folder, Class 3, was created.</dd>
    
    <dt><b>Open in VS Code</b> <a href="https://youtu.be/XlENpktoPGo?t=747" target="_blank">(Video @ 12:27)</a> <a href="https://youtu.be/XlENpktoPGo?t=750" target="_blank">(Video @ 12:30)</a></dt>
    <dd>The folder was opened in VS Code.</dd>
    
    <dt><b>Linking Files</b></dt>
    <dd>The instructor demonstrated how to link a JavaScript file (<code>app.js</code>) to an HTML file (<code>index.html</code>) using the <code>script</code> tag.</dd>
</dl>
        
        `,
    // section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },

  {
    id: 4,
    number: "Lecture 4",
    title: "JavaScript Operators and Input || Class 4",
    thumbnail: "https://i.ytimg.com/vi/gS1JZnKyAA8/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/gS1JZnKyAA8",
    duration: "02:01:28",
    dateAdded: "19-Jan_2026",
    summary: `
        
<h2>Detailed Summary: JavaScript Operators and Input - Class 4</h2>

<h3>JavaScript Execution Order</h3>
<dl>
    <dt><b>Core Concept</b> <a href="https://youtu.be/gS1JZnKyAA8?t=160" target="_blank">(Video @ 2:40)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=191" target="_blank">(Video @ 3:11)</a></dt>
    <dd>The instructor clarifies that JavaScript runs from top to bottom and line by line. This explains why an alert function might display an older variable value if the variable is updated on a subsequent line.</dd>
</dl>

<h3>Class Start and Previous Topics Review</h3>
<dl>
    <dt><b>Review Begins</b> <a href="https://youtu.be/gS1JZnKyAA8?t=458" target="_blank">(Video @ 7:38)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=507" target="_blank">(Video @ 8:27)</a></dt>
    <dd>The class officially begins, and the instructor reviews topics from the previous session, including:</dd>
</dl>
<dl>
    <dt><b>Variables</b> <a href="https://youtu.be/gS1JZnKyAA8?t=592" target="_blank">(Video @ 9:52)</a></dt>
    <dd></dd>
    <dt><b>String and Number data types</b> <a href="https://youtu.be/gS1JZnKyAA8?t=490" target="_blank">(Video @ 8:10)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=594" target="_blank">(Video @ 9:54)</a></dt>
    <dd></dd>
    <dt><b>Arithmetic operators</b> <a href="https://youtu.be/gS1JZnKyAA8?t=494" target="_blank">(Video @ 8:14)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=597" target="_blank">(Video @ 9:57)</a></dt>
    <dd>addition, multiplication, division, modulus</dd>
    <dt><b>DMAS and BODMAS rules</b> <a href="https://youtu.be/gS1JZnKyAA8?t=499" target="_blank">(Video @ 8:19)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=604" target="_blank">(Video @ 10:04)</a></dt>
    <dd></dd>
    <dt><b>Concatenation</b> <a href="https://youtu.be/gS1JZnKyAA8?t=609" target="_blank">(Video @ 10:09)</a></dt>
    <dd></dd>
</dl>

<h3>JavaScript File Connection</h3>
<dl>
    <dt><b>Demonstration</b> <a href="https://youtu.be/gS1JZnKyAA8?t=630" target="_blank">(Video @ 10:30)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=730" target="_blank">(Video @ 12:10)</a></dt>
    <dd>The instructor demonstrates how to connect index.html and app.js files, using an <code>alert("Hello Class")</code> to verify the connection. He also briefly touches on why the <code>script</code> tag is placed at the bottom of the <code>body</code> tag, reserving a more detailed explanation for advanced topics.</dd>
</dl>

<h3>String Concatenation vs. Addition</h3>
<dl>
    <dt><b>Key Concept Explanation</b> <a href="https://youtu.be/gS1JZnKyAA8?t=809" target="_blank">(Video @ 13:29)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=915" target="_blank">(Video @ 15:15)</a></dt>
    <dd>A key concept is explained regarding the <code>+</code> operator in JavaScript:
        <ul>
            <li>If both operands are numbers, <code>+</code> performs addition.</li>
            <li>If one or both operands are strings, <code>+</code> performs concatenation (joining strings).</li>
        </ul>
        The instructor provides examples of how string values, even if they contain numbers, will be concatenated rather than added numerically.
    </dd>
</dl>

<h3>Increment and Decrement Operators (Post and Pre)</h3>
<dl>
    <dt><b>Major Topic Coverage</b> <a href="https://youtu.be/gS1JZnKyAA8?t=922" target="_blank">(Video @ 15:22)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=1964" target="_blank">(Video @ 32:44)</a></dt>
    <dd>This is a major topic covered in the class, with the instructor explaining how to update variable values:</dd>
    <dt><b>Basic Addition/Subtraction</b> <a href="https://youtu.be/gS1JZnKyAA8?t=936" target="_blank">(Video @ 15:36)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=1020" target="_blank">(Video @ 17:00)</a></dt>
    <dd>How to add a specific number (e.g., 5) to an existing variable.</dd>
    <dt><b>Shorthand Operators</b> <a href="https://youtu.be/gS1JZnKyAA8?t=1021" target="_blank">(Video @ 17:01)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=1130" target="_blank">(Video @ 18:50)</a></dt>
    <dd>Using <code>+=</code> for addition (e.g., <code>num1 += 5</code>) as a shorter way to update variables.</dd>
    <dt><b>Post-Increment (++) and Post-Decrement (--)</b> <a href="https://youtu.be/gS1JZnKyAA8?t=1191" target="_blank">(Video @ 19:51)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=1302" target="_blank">(Video @ 21:42)</a></dt>
    <dd>
        These operators add or subtract 1 from a variable's value.
        <ul>
            <li><b>Post-increment (<code>num++</code>):</b> The original value is used in the current expression, and then the variable is incremented.</li>
            <li><b>Post-decrement (<code>num--</code>):</b> The original value is used in the current expression, and then the variable is decremented.</li>
        </ul>
    </dd>
    <dt><b>Pre-Increment (++num) and Pre-Decrement (--num)</b> <a href="https://youtu.be/gS1JZnKyAA8?t=1885" target="_blank">(Video @ 31:25)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=1964" target="_blank">(Video @ 32:44)</a></dt>
    <dd>
        <ul>
            <li><b>Pre-increment (<code>++num</code>):</b> The variable is incremented first, and then the new value is used in the expression.</li>
            <li><b>Pre-decrement (<code>--num</code>):</b> The variable is decremented first, and then the new value is used in the expression.</li>
        </ul>
    </dd>
    <dt><b>Examples and Practice</b> <a href="https://youtu.be/gS1JZnKyAA8?t=1990" target="_blank">(Video @ 33:10)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=2990" target="_blank">(Video @ 49:50)</a></dt>
    <dd>The instructor walks through several complex examples to illustrate the order of operations with post and pre-increment/decrement in various equations, emphasizing step-by-step calculation.</dd>
</dl>

<h3>Prompt Method</h3>
<dl>
    <dt><b>Introduction</b> <a href="https://youtu.be/gS1JZnKyAA8?t=2997" target="_blank">(Video @ 49:57)</a> <a href="https://youtu.be/gS1JZnKyAA8?t=3229" target="_blank">(Video @ 53:49)</a></dt>
    <dd>The class introduces the <code>prompt()</code> method in JavaScript:</dd>
    <dt><b>Purpose</b></dt>
    <dd><code>prompt()</code> is used to get input dynamically from the user through a pop-up dialog box.</dd>
    <dt><b>Usage</b></dt>
    <dd>It takes a string as an argument, which serves as the message displayed to the user (e.g., <code>prompt("Enter Your Name")</code>).</dd>
    <dt><b>Storing Input</b></dt>
    <dd>The value entered by the user can be stored in a variable (e.g., <code>var userName = prompt("Enter Your Name");</code>).</dd>
    <dt><b>Dynamic Input</b></dt>
    <dd>This allows for dynamic content based on user input, unlike static values assigned directly in the code.</dd>
</dl>
        `,
    // section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },


  {
    id: 5,
    number: "Lecture 5",
    title: "JavaScript Conditional Statements || Class 5",
    thumbnail: "https://i.ytimg.com/vi/-roV0YO2E7c/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/t6cLvdJ0sZs",
    duration: "01:57:06",
    dateAdded: "21-Jan-2026",
    summary: `
        

        <h2>Detailed Summary: JavaScript Conditional Statements</h2>

<h3>Introduction to Conditionals</h3>
<dl>
    <dt><b>Fundamental Concept</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=524" target="_blank">(Video @ 8:44)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=607" target="_blank">(Video @ 10:07)</a></dt>
    <dd>The instructor explains the fundamental concept of if statements in JavaScript, likening them to "if-then" scenarios in real life. They emphasize using conditions for validation, such as checking a user's age or gender.</dd>
</dl>

<h3>Basic if/else Syntax and Logic</h3>
<dl>
    <dt><b>Structure and Logic</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=642" target="_blank">(Video @ 10:42)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=731" target="_blank">(Video @ 12:11)</a></dt>
    <dd>
        <ul>
            <li>The structure of an if statement includes the <code>if</code> keyword, round brackets for the condition, and curly brackets for the "block of statement."</li>
            <li>The if block executes if the condition evaluates to <code>true</code>.</li>
            <li>The else block executes if the if condition evaluates to <code>false</code>.</li>
            <li>It's highlighted that <code>if</code> and <code>else</code> are typically used together.</li>
        </ul>
    </dd>
</dl>

<h3>Assignment vs. Comparison Operators</h3>
<dl>
    <dt><b>Crucial Distinction</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=811" target="_blank">(Video @ 13:31)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=967" target="_blank">(Video @ 16:07)</a></dt>
    <dd>The crucial distinction between single (<code>=</code>), double (<code>==</code>), and triple (<code>===</code>) equal signs is explained.
        <ul>
            <li><code>=</code> (single equal) is for assignment.</li>
            <li><code>==</code> (double equal) is for equality comparison (value only).</li>
            <li><code>===</code> (triple equal) is for strict equality comparison (value and data type).</li>
        </ul>
        The instructor demonstrates how prompt's default string data type can lead to unexpected results with <code>===</code> and how to use <code>+</code> to convert prompt input to a number.
    </dd>
</dl>

<h3>Comparison Operators (>, >=, <, <=)</h3>
<dl>
    <dt><b>Operators Covered</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=973" target="_blank">(Video @ 16:13)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=1188" target="_blank">(Video @ 19:48)</a></dt>
    <dd>The video covers greater than (<code>></code>), greater than or equal to (<code>>=</code>), less than (<code><</code>), and less than or equal to (<code><=</code>) operators. Examples are provided to show how these operators are used to establish age ranges or other numerical conditions.</dd>
</dl>

<h3>Boolean Data Type</h3>
<dl>
    <dt><b>Introduction</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=1216" target="_blank">(Video @ 20:16)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=1269" target="_blank">(Video @ 21:09)</a></dt>
    <dd>The boolean data type (<code>true</code> or <code>false</code>) is introduced as the direct outcome of a condition. Conditions always return either <code>true</code> or <code>false</code>.</dd>
</dl>

<h3>else if for Multiple Conditions</h3>
<dl>
    <dt><b>Concept Introduction</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=1379" target="_blank">(Video @ 22:59)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=1716" target="_blank">(Video @ 28:36)</a></dt>
    <dd>
        <ul>
            <li>The concept of <code>else if</code> is introduced for handling multiple, distinct conditions sequentially.</li>
            <li>An example of checking gender (male, female, others) demonstrates how <code>else if</code> allows for more complex conditional flows.</li>
            <li>It's emphasized that only one block (either if or one of the else ifs) will execute if its condition is met, and the rest of the chain is skipped. Multiple <code>else if</code> statements can be used.</li>
        </ul>
    </dd>
</dl>

<h3>Building a Simple Calculator Application</h3>
<dl>
    <dt><b>Application Walkthrough</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=1745" target="_blank">(Video @ 29:05)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=2832" target="_blank">(Video @ 47:12)</a></dt>
    <dd>The instructor guides the class through creating a basic calculator using <code>prompt</code> to get two numbers (<code>num1</code>, <code>num2</code>) and an operator (e.g., <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) from the user.</dd>
    <dt><b>Input Handling with + for Number Conversion</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=1991" target="_blank">(Video @ 33:11)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=2097" target="_blank">(Video @ 34:57)</a></dt>
    <dd>The importance of using <code>+</code> before <code>prompt</code> when expecting numerical input is reiterated to avoid <code>NaN</code> (Not a Number) errors.</dd>
    <dt><b>Conditional Logic for Operations</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=2186" target="_blank">(Video @ 36:26)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=2819" target="_blank">(Video @ 46:59)</a></dt>
    <dd>
        <ul>
            <li><code>if</code> and <code>else if</code> statements are used to check the operator input and perform the corresponding arithmetic operation (addition, subtraction, multiplication, division).</li>
            <li>An <code>else</code> block is included at the end to handle "Invalid Operator" input, ensuring a fallback for unmatched conditions.</li>
            <li>The entire <code>if/else if/else</code> structure is presented as a "condition chain," where only the first true condition's block executes.</li>
        </ul>
    </dd>
</dl>

<h3>Introduction to "Gates" (Logical Operators - AND, OR)</h3>
<dl>
    <dt><b>Concept Begins</b> <a href="https://youtu.be/t6cLvdJ0sZs?t=2864" target="_blank">(Video @ 47:44)</a> <a href="https://youtu.be/t6cLvdJ0sZs?t=3090" target="_blank">(Video @ 51:30)</a></dt>
    <dd>The instructor begins to introduce the concept of "gates," which are logical operators (implicitly discussing AND and OR although not explicitly named yet) used to combine multiple conditions within a single <code>if</code> statement. The example of an age range (e.g., 18-50 years old) for course admission is used to illustrate the need for checking multiple conditions simultaneously.</dd>
</dl>
        `,
    // section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },

  {
    id: 6,
    number: "Lecture 6",
    title: "JavaScript- Variables, Data Types & Arrays || Class 6",
    thumbnail: "https://i.ytimg.com/vi/t6cLvdJ0sZs/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/-roV0YO2E7c",
    duration: "01:59:38",
    dateAdded: "26-Jan-2026",
    summary: `
        
<h2>Detailed Summary: JavaScript- Variables, Data Types & Arrays</h2>
<p><b>Video:</b> 2026-01-26 class 6 javascript SMIT</p>

<h3>Class Start and Q&A Session</h3>
<dl>
    <dt><b>Session Beginning</b> <a href="https://youtu.be/-roV0YO2E7c?t=135" target="_blank">(Video @ 2:15)</a> <a href="https://youtu.be/-roV0YO2E7c?t=620" target="_blank">(Video @ 10:20)</a></dt>
    <dd>The session begins with a brief waiting period for participants to join, followed by a Q&A segment.</dd>
    <dt><b>Assignment Problems</b> <a href="https://youtu.be/-roV0YO2E7c?t=250" target="_blank">(Video @ 4:10)</a></dt>
    <dd>Students ask about input validation for numbers.</dd>
    <dt><b>UI Error Display</b> <a href="https://youtu.be/-roV0YO2E7c?t=412" target="_blank">(Video @ 6:52)</a></dt>
    <dd>A question about displaying errors on the user interface.</dd>
    <dt><b>Class Logistics</b> <a href="https://youtu.be/-roV0YO2E7c?t=319" target="_blank">(Video @ 5:19)</a> <a href="https://youtu.be/-roV0YO2E7c?t=444" target="_blank">(Video @ 7:24)</a></dt>
    <dd>Questions about applying for leave from classes and Ramadan class timings.</dd>
    <dt><b>Career & Learning Advice</b> <a href="https://youtu.be/-roV0YO2E7c?t=494" target="_blank">(Video @ 8:14)</a> <a href="https://youtu.be/-roV0YO2E7c?t=533" target="_blank">(Video @ 8:53)</a></dt>
    <dd>The instructor shares advice on finding internships and discusses what language to learn after JavaScript.</dd>
</dl>

<h3>Previous Class Review and Recording Access</h3>
<dl>
    <dt><b>Content Recap</b> <a href="https://youtu.be/-roV0YO2E7c?t=661" target="_blank">(Video @ 11:01)</a></dt>
    <dd>The instructor briefly recaps the previous class, which covered conditional statements (<code>if</code>, <code>else</code>, <code>else if</code>, nested conditions), and various operators (increment, decrement, greater than, less than, equal to).</dd>
    <dt><b>Access Guidance</b> <a href="https://youtu.be/-roV0YO2E7c?t=718" target="_blank">(Video @ 11:58)</a></dt>
    <dd>He addresses concerns about accessing class recordings, guiding students to the correct location on the portal and advising them to download recordings promptly.</dd>
</dl>

<h3>Variable Initialization and Declaration</h3>
<dl>
    <dt><b>Key Difference</b> <a href="https://youtu.be/-roV0YO2E7c?t=818" target="_blank">(Video @ 13:38)</a> <a href="https://youtu.be/-roV0YO2E7c?t=989" target="_blank">(Video @ 16:29)</a></dt>
    <dd>The instructor explains the difference between variable <b>initialization</b> (declaring a variable and assigning a value, e.g., <code>var firstName = "Jaffer"</code>) and variable <b>declaration</b> (declaring a variable without assigning a value, e.g., <code>var firstName</code>).</dd>
    <dt><b>Demonstration</b></dt>
    <dd>He demonstrates that a declared but uninitialized variable will output <code>undefined</code> in the console.</dd>
</dl>

<h3>JavaScript Data Types</h3>
<dl>
    <dt><b>Five Primary Types</b> <a href="https://youtu.be/-roV0YO2E7c?t=1034" target="_blank">(Video @ 17:14)</a> <a href="https://youtu.be/-roV0YO2E7c?t=1361" target="_blank">(Video @ 22:41)</a></dt>
    <dd>The video delves into the five primary data types in JavaScript:</dd>
    <dt><b>String</b></dt>
    <dd>Group of characters enclosed in single or double quotes (e.g., <code>"Hello World"</code>, <code>"123"</code>).</dd>
    <dt><b>Number</b></dt>
    <dd>Numeric values (e.g., <code>10</code>, <code>20</code>, <code>3.14</code>, <code>-5</code>).</dd>
    <dt><b>Boolean</b></dt>
    <dd>Represents <code>true</code> or <code>false</code> values, often used in conditional statements.</dd>
    <dt><b>Undefined</b></dt>
    <dd>Occurs when a variable is declared but not assigned a value. It indicates that a variable has been created in memory but holds no specific data yet.</dd>
    <dt><b>Null</b></dt>
    <dd>Represents the intentional absence of any object value. Unlike <code>undefined</code>, <code>null</code> is an assigned value indicating that a variable explicitly has no value, and it reserves memory space.</dd>
</dl>

<h3>Introduction to Arrays</h3>
<dl>
    <dt><b>Core Concept</b> <a href="https://youtu.be/-roV0YO2E7c?t=1461" target="_blank">(Video @ 24:21)</a> <a href="https://youtu.be/-roV0YO2E7c?t=2176" target="_blank">(Video @ 36:16)</a></dt>
    <dd>The core of the lesson introduces arrays as a fundamental concept for handling collections of data.</dd>
    <dt><b>Problem Statement</b> <a href="https://youtu.be/-roV0YO2E7c?t=1520" target="_blank">(Video @ 25:20)</a></dt>
    <dd>The instructor illustrates the inefficiency of creating numerous individual variables for similar data (e.g., <code>userNameOne</code>, <code>userNameTwo</code> for hundreds of users).</dd>
    <dt><b>Array Definition</b> <a href="https://youtu.be/-roV0YO2E7c?t=1687" target="_blank">(Video @ 28:07)</a></dt>
    <dd>Arrays are defined as "collection of data," allowing multiple related values to be stored in a single variable.</dd>
    <dt><b>Array Syntax</b> <a href="https://youtu.be/-roV0YO2E7c?t=1829" target="_blank">(Video @ 30:29)</a></dt>
    <dd>Arrays are created using square brackets (referred to as "array brackets" in JavaScript) and values within the array are separated by commas (called "separators").</dd>
    <dt><b>Mixed Data Types in Arrays</b> <a href="https://youtu.be/-roV0YO2E7c?t=2013" target="_blank">(Video @ 33:33)</a></dt>
    <dd>The instructor clarifies that, unlike some other programming languages, JavaScript arrays can store values of different data types (e.g., strings, numbers, booleans, null, undefined) within the same array.</dd>
</dl>

<h3>How Arrays are Stored in Memory</h3>
<dl>
    <dt><b>Index Numbers</b> <a href="https://youtu.be/-roV0YO2E7c?t=2236" target="_blank">(Video @ 37:16)</a> <a href="https://youtu.be/-roV0YO2E7c?t=2473" target="_blank">(Video @ 41:13)</a></dt>
    <dd>The video explains that when an array is saved in memory, each value within the array is assigned an "index number." These index numbers always start from 0, reflecting how computer systems count.</dd>
    <dt><b>Example</b></dt>
    <dd>For example, in an array <code>["Karachi", "Lahore", "Multan"]</code>, "Karachi" would be at index 0, "Lahore" at index 1, and "Multan" at index 2.</dd>
</dl>
        

        
        `,
    // section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },


  {
    id: 7,
    number: "Lecture 7",
    title: "JavaScript Class on For Loops || Class 7",
    thumbnail: "https://i.ytimg.com/vi/S4jS8nb1sGY/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/S4jS8nb1sGY",
    duration: "02:02:08",
    dateAdded: "28-Jan-2026",
    summary: `
        
<h2>Detailed Summary: JavaScript Class on For Loops</h2>

<h3>Introduction to Loops</h3>
<dl>
    <dt><b>Core Concept</b> <a href="https://youtu.be/S4jS8nb1sGY?t=895" target="_blank">(Video @ 14:55)</a></dt>
    <dd>The instructor emphasizes the concept of loops as a way to repeat code. <a href="https://youtu.be/S4jS8nb1sGY?t=1225" target="_blank">(Video @ 20:25)</a></dd>
    
    <dt><b>Definition</b> <a href="https://youtu.be/S4jS8nb1sGY?t=905" target="_blank">(Video @ 15:05)</a></dt>
    <dd>A loop is defined as a process where the same task is repeated multiple times.</dd>
    
    <dt><b>Real-World Examples</b> <a href="https://youtu.be/S4jS8nb1sGY?t=911" target="_blank">(Video @ 15:11)</a> <a href="https://youtu.be/S4jS8nb1sGY?t=950" target="_blank">(Video @ 15:50)</a></dt>
    <dd>Examples given include a student's class schedule and a bicycle's pedals, both demonstrating repetitive actions.</dd>
    
    <dt><b>Programming Need</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1140" target="_blank">(Video @ 19:00)</a></dt>
    <dd>The primary need for loops in programming is to avoid writing the same code repeatedly.</dd>
    
    <dt><b>Inefficiency Example</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1151" target="_blank">(Video @ 19:11)</a></dt>
    <dd>For instance, printing "Hello World" 100 times manually is inefficient.</dd>
    
    <dt><b>Purpose</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1215" target="_blank">(Video @ 20:15)</a></dt>
    <dd>Loops provide "repetition of code."</dd>
</dl>

<h3>Types of Loops in JavaScript</h3>
<dl>
    <dt><b>Three Types Introduced</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1256" target="_blank">(Video @ 20:56)</a></dt>
    <dd>The video introduces three types of loops: <code>for</code> loop, <code>while</code> loop, and <code>do-while</code> loop.</dd>
    
    <dt><b>Current Focus</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1279" target="_blank">(Video @ 21:19)</a></dt>
    <dd>The current discussion focuses on the <code>for</code> loop.</dd>
</dl>

<h3>Understanding the for Loop</h3>
<dl>
    <dt><b>Three Main Components</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1279" target="_blank">(Video @ 21:19)</a></dt>
    <dd>A <code>for</code> loop requires three main components:</dd>
    
    <dt><b>1. Initialization</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1530" target="_blank">(Video @ 25:30)</a></dt>
    <dd>Creating a variable (e.g., <code>var a = 1</code>).</dd>
    
    <dt><b>2. Condition</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1589" target="_blank">(Video @ 26:29)</a></dt>
    <dd>A statement that determines if the loop continues (e.g., <code>a <= 5</code>).</dd>
    
    <dt><b>3. Increment/Decrement</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1616" target="_blank">(Video @ 26:56)</a></dt>
    <dd>How the variable changes with each iteration (e.g., <code>a++</code>).</dd>
    
    <dt><b>Execution Dependency</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1665" target="_blank">(Video @ 27:45)</a></dt>
    <dd>The loop's execution is dependent on the condition being <code>true</code>.</dd>
    
    <dt><b>Loop Termination</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1966" target="_blank">(Video @ 32:46)</a></dt>
    <dd>If the condition is <code>false</code>, the loop stops.</dd>
</dl>

<h3>for Loop Mechanism</h3>
<dl>
    <dt><b>Step-by-Step Execution</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1685" target="_blank">(Video @ 28:05)</a></dt>
    <dd>The instructor explains the step-by-step execution:</dd>
    
    <dt><b>1. Initialization</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1787" target="_blank">(Video @ 29:47)</a></dt>
    <dd>Initialization of the variable occurs once.</dd>
    
    <dt><b>2. Condition Check</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1796" target="_blank">(Video @ 29:56)</a></dt>
    <dd>Condition is checked.</dd>
    
    <dt><b>3. Code Execution</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1809" target="_blank">(Video @ 30:09)</a></dt>
    <dd>If the condition is <code>true</code>, the block of code inside the loop executes.</dd>
    
    <dt><b>4. Increment/Decrement</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1890" target="_blank">(Video @ 31:30)</a></dt>
    <dd>Increment/Decrement occurs.</dd>
    
    <dt><b>5. Process Repeats</b> <a href="https://youtu.be/S4jS8nb1sGY?t=1916" target="_blank">(Video @ 31:56)</a></dt>
    <dd>The process repeats from the condition check.</dd>
    
    <dt><b>No Re-initialization</b> <a href="https://youtu.be/S4jS8nb1sGY?t=2330" target="_blank">(Video @ 38:50)</a></dt>
    <dd>The process repeats without re-initializing the variable.</dd>
</dl>

<h3>Practical Example</h3>
<dl>
    <dt><b>Demonstration</b> <a href="https://youtu.be/S4jS8nb1sGY?t=2227" target="_blank">(Video @ 37:07)</a></dt>
    <dd>The video demonstrates printing "Hello World" with a counter (e.g., "Hello World 1", "Hello World 2") using a <code>for</code> loop to show how the loop variable updates with each iteration.</dd>
</dl>

<h3>Important Considerations</h3>
<dl>
    <dt><b>Caution with Conditions</b> <a href="https://youtu.be/S4jS8nb1sGY?t=2343" target="_blank">(Video @ 39:03)</a></dt>
    <dd>Using <code>true</code> as a condition (e.g., <code>for (true)</code>) creates an infinite loop, which can crash the system. <a href="https://youtu.be/S4jS8nb1sGY?t=2870" target="_blank">(Video @ 47:50)</a> The instructor advises caution with this.</dd>
    
    <dt><b>Core Purpose Reiterated</b> <a href="https://youtu.be/S4jS8nb1sGY?t=2690" target="_blank">(Video @ 44:50)</a></dt>
    <dd>The video concludes by reiterating the core purpose of <code>for</code> loops: to provide code repetition efficiently.</dd>
</dl>
        
        `,
    // section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },

   {
    id: 9,
    number: "Lecture 9",
    title: "Class 9",
    thumbnail: "https://i.ytimg.com/vi/EJd_bjTpLNE/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/EJd_bjTpLNE?",
    duration: "01:30:50",
    dateAdded: "02-Feb-2026",
    summary: `<h2>Detailed Summary: JavaScript Class 9 - For Loops & Arrays</h2>
<p><b>Video:</b> 02 FEB 2026 || Class 09 || SMIT JAVASCRIPT</p>

<h3>Introduction to For Loops</h3>
<dl>
    <dt><b>Core Components</b> <a href="https://youtu.be/EJd_bjTpLNE?t=455" target="_blank">(Video @ 7:35)</a></dt>
    <dd>The speaker explains that for loops are used for repetition in code, taking three main components: <b>initialization</b>, <b>condition</b>, and <b>increment/decrement</b>.</dd>
</dl>

<h3>Basic Loop Examples</h3>
<dl>
    <dt><b>Printing a Sequence</b> <a href="https://youtu.be/EJd_bjTpLNE?t=575" target="_blank">(Video @ 9:35)</a></dt>
    <dd>The video demonstrates how to use a <code>for</code> loop to print numbers from 1 to 10.</dd>
    <dt><b>Reverse Loops (Decrementing loops)</b> <a href="https://youtu.be/EJd_bjTpLNE?t=585" target="_blank">(Video @ 9:45)</a></dt>
    <dd>The speaker explains how to create a <code>for</code> loop that prints numbers in descending order, from 10 to 1, by using a decrement operator and adjusting the condition.</dd>
</dl>

<h3>Identifying Even and Odd Numbers</h3>
<dl>
    <dt><b>Using the Modulus Operator</b> <a href="https://youtu.be/EJd_bjTpLNE?t=880" target="_blank">(Video @ 14:40)</a></dt>
    <dd>The video illustrates how to use the modulus operator (<code>%</code>) within a <code>for</code> loop to identify and print numbers between 1 and 20.</dd>
    <dt><b>Odd Numbers</b> <a href="https://youtu.be/EJd_bjTpLNE?t=952" target="_blank">(Video @ 15:52)</a></dt>
    <dd>Numbers that are not divisible by 2 (e.g., <code>i % 2 === 1</code>).</dd>
    <dt><b>Even Numbers</b> <a href="https://youtu.be/EJd_bjTpLNE?t=1194" target="_blank">(Video @ 19:54)</a></dt>
    <dd>Numbers that are divisible by 2 (e.g., <code>i % 2 === 0</code>).</dd>
</dl>

<h3>Iterating Through Arrays with For Loops</h3>
<dl>
    <dt><b>Accessing Array Elements</b> <a href="https://youtu.be/EJd_bjTpLNE?t=1526" target="_blank">(Video @ 25:26)</a></dt>
    <dd>A significant portion of the video is dedicated to using <code>for</code> loops to access and print elements within an array.</dd>
    <dt><b>Zero-Based Indexing</b> <a href="https://youtu.be/EJd_bjTpLNE?t=1731" target="_blank">(Video @ 28:51)</a></dt>
    <dd>The importance of zero-based indexing for array loops is emphasized.</dd>
    <dt><b>The <code>array.length</code> Property</b> <a href="https://youtu.be/EJd_bjTpLNE?t=1860" target="_blank">(Video @ 31:00)</a></dt>
    <dd>The <code>array.length</code> property is introduced as a dynamic way to set the loop's end condition, making it adaptable to arrays of different sizes.</dd>
</dl>

<h3>Searching for Elements in an Array</h3>
<dl>
    <dt><b>Practical Search Example</b> <a href="https://youtu.be/EJd_bjTpLNE?t=2257" target="_blank">(Video @ 37:37)</a></dt>
    <dd>The speaker demonstrates how to use a <code>for</code> loop to search for a specific user-provided city within an array of cities.</dd>
    <dt><b>The <code>break</code> Keyword</b> <a href="https://youtu.be/EJd_bjTpLNE?t=2839" target="_blank">(Video @ 47:19)</a></dt>
    <dd>The <code>break</code> keyword is introduced to stop the loop once a match is found, improving efficiency.</dd>
</dl>`,

// section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },


   {
    id: 10,
    number: "Lecture 10",
    title: "Class 10",
    thumbnail: "https://i.ytimg.com/vi/ELQgIbpRuh8/hqdefault.jpg?",
    youtubeLink: "https://youtu.be/ELQgIbpRuh8",
    duration: "01:50:02",
    dateAdded: "04-Feb-2026",
    summary: `<h2>Detailed Summary: JavaScript Class 10 - String Manipulation</h2>
<p><b>Video:</b> 04 Feb 2026 || Class 10 || SMIT JAVASCRIPT</p>

<h3>Handling if-else within Loops</h3>
<dl>
    <dt><b>Common Issue</b> <a href="https://youtu.be/ELQgIbpRuh8?t=909" target="_blank">(Video @ 15:09)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=963" target="_blank">(Video @ 16:03)</a></dt>
    <dd>The instructor begins by explaining a common issue when using <code>if-else</code> statements inside a <code>for</code> loop: if both branches contain alerts, the user might see multiple outputs (e.g., "Not Found" then "Welcome") even if a match is eventually found. This happens because the <code>else</code> condition executes on every iteration where the <code>if</code> condition is false.</dd>
</dl>

<h3>Introducing the "Flag" Concept</h3>
<dl>
    <dt><b>Problem Solution</b> <a href="https://youtu.be/ELQgIbpRuh8?t=963" target="_blank">(Video @ 16:03)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=1091" target="_blank">(Video @ 18:11)</a></dt>
    <dd>To solve the multiple output problem, the "flag" concept is introduced. A boolean variable (e.g., <code>flag</code> or <code>isMatch</code>) is initialized to <code>false</code>. Inside the loop, if a match is found (e.g., user's city matches a city in the array), the flag is set to <code>true</code>, and a "Welcome" alert is displayed. After the loop finishes, an <code>if</code> condition checks if the flag is still <code>false</code>. If it is, it means no match was found, and a "Not Found" alert is shown. This ensures only one final output based on the loop's overall result.</dd>
</dl>

<h3>Strings as Array-like Data Types</h3>
<dl>
    <dt><b>Data Type Explanation</b> <a href="https://youtu.be/ELQgIbpRuh8?t=1226" target="_blank">(Video @ 20:26)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=1293" target="_blank">(Video @ 21:33)</a></dt>
    <dd>The video explains that strings in JavaScript are also considered a data type, specifically a "collection of data" similar to arrays. This means individual characters within a string can be accessed using array-like indexing (e.g., <code>string[0]</code> to get the first character).</dd>
</dl>

<h3>Converting Case (toUpperCase() and toLowerCase())</h3>
<dl>
    <dt><b>Case Methods</b> <a href="https://youtu.be/ELQgIbpRuh8?t=1513" target="_blank">(Video @ 25:13)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=1636" target="_blank">(Video @ 27:16)</a></dt>
    <dd>
        <ul>
            <li>The <code>toUpperCase()</code> method is demonstrated to convert an entire string to uppercase.</li>
            <li>The <code>toLowerCase()</code> method converts an entire string to lowercase.</li>
        </ul>
        These methods are crucial for handling case-sensitive comparisons in JavaScript.
    </dd>
</dl>

<h3>Addressing Case Sensitivity in User Input</h3>
<dl>
    <dt><b>Real-World Problem</b> <a href="https://youtu.be/ELQgIbpRuh8?t=1637" target="_blank">(Video @ 27:17)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=1832" target="_blank">(Video @ 30:32)</a></dt>
    <dd>The instructor illustrates a common real-world problem: user input might not match the case of stored data (e.g., "Karachi" vs. "karachi"). Since JavaScript is case-sensitive ('a' is not equal to 'A'), direct comparison fails. The solution is to convert the user's input to a consistent case (e.g., <code>toLowerCase()</code>) before comparing it with values in an array, ensuring accurate matches regardless of the user's input casing.</dd>
</dl>

<h3>Capitalization (Manual Implementation)</h3>
<dl>
    <dt><b>Three Cases</b> <a href="https://youtu.be/ELQgIbpRuh8?t=1980" target="_blank">(Video @ 33:00)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=2840" target="_blank">(Video @ 47:20)</a></dt>
    <dd>The video differentiates between uppercase, lowercase, and "capitalize" (where only the first letter is uppercase, and the rest are lowercase).</dd>
    <dt><b>No Built-in Method</b></dt>
    <dd>It's noted that JavaScript does not provide a built-in method for capitalization.</dd>
    <dt><b>Manual Implementation Steps</b></dt>
    <dd>
        A manual implementation is demonstrated:
        <ol>
            <li>Extract the first character using <code>string[0]</code>.</li>
            <li>Convert the first character to uppercase using <code>toUpperCase()</code>.</li>
            <li>Extract the rest of the string using the <code>slice(1)</code> method (which works on strings like arrays).</li>
            <li>Concatenate the uppercase first character with the rest of the string.</li>
        </ol>
        This manual approach helps understand how such a utility function would work behind the scenes.
    </dd>
</dl>

<h3>Understanding String Literals and Escaping Quotes</h3>
<dl>
    <dt><b>Best Practices</b> <a href="https://youtu.be/ELQgIbpRuh8?t=2900" target="_blank">(Video @ 48:20)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=3032" target="_blank">(Video @ 50:32)</a></dt>
    <dd>The video briefly touches upon best practices for writing strings, especially when they contain quotation marks. It explains that if a string is defined with double quotes, any internal double quotes must be escaped or the internal quotes should be single quotes, and vice-versa, to avoid syntax errors. It also clarifies that multi-line strings are not directly allowed without specific techniques like template literals (though not explicitly shown in this segment).</dd>
</dl>

<h3>Finding Substring Index (indexOf())</h3>
<dl>
    <dt><b>Method Introduction</b> <a href="https://youtu.be/ELQgIbpRuh8?t=3393" target="_blank">(Video @ 56:33)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=5837" target="_blank">(Video @ 1:37:17)</a></dt>
    <dd>The <code>indexOf()</code> method is introduced to find the first occurrence of a specified substring within a string, returning its starting index. This is presented as a more efficient way to find parts of a string compared to manually looping through characters.</dd>
    <dt><b>Practical Example</b></dt>
    <dd>A practical example demonstrates how <code>indexOf()</code> can be used to determine the endIndex for the <code>slice()</code> method, allowing dynamic extraction of string segments.</dd>
</dl>

<h3>Replacing Substrings (replace() and replaceAll())</h3>
<dl>
    <dt><b>Replacement Methods</b> <a href="https://youtu.be/ELQgIbpRuh8?t=5645" target="_blank">(Video @ 1:34:05)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=6100" target="_blank">(Video @ 1:41:40)</a></dt>
    <dd>
        <ul>
            <li>The <code>replace()</code> method is introduced as a simpler way to replace a specific word or character in a string. It takes two arguments: the substring to be replaced and the replacement string. It only replaces the first occurrence found.</li>
            <li>The <code>replaceAll()</code> method is then demonstrated to replace all occurrences of a specified substring within the string.</li>
        </ul>
    </dd>
    <dt><b>Crucial Point</b></dt>
    <dd>A crucial point highlighted is that both <code>replace()</code> and <code>replaceAll()</code> do not modify the original string; they return a new string with the replacements. Therefore, the result must be assigned to a new variable or the original variable to see the changes.</dd>
</dl>

<h3>charAt() Method</h3>
<dl>
    <dt><b>Character Access</b> <a href="https://youtu.be/ELQgIbpRuh8?t=6161" target="_blank">(Video @ 1:42:41)</a> <a href="https://youtu.be/ELQgIbpRuh8?t=6202" target="_blank">(Video @ 1:43:22)</a></dt>
    <dd>The <code>charAt()</code> method is presented as an alternative to array-like indexing for accessing a character at a specific position within a string. Both <code>string[index]</code> and <code>string.charAt(index)</code> achieve the same result.</dd>
</dl>
    
    `,

// section for questions
    qa: [
      {
        question: " <H1>This sections is under processing</H1> <br> <h3>Soon We will Lanuch this as well</h3>"
      ,
        answer: "",
      },
    ],
  },









];
