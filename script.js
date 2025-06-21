const questions = {
  os: [
    {question: "What is a process?", a: "A program in execution", b: "An OS function", c: "A system call", d: "A memory unit", correct: "a", explanation: "A process is a program in execution."},
    {question: "What is fork() used for?", a: "Terminating a process", b: "Creating a new process", c: "Allocating memory", d: "Switching context", correct: "b", explanation: "fork() creates a new child process."},
    {question: "Which of the following is not a process state?", a: "Running", b: "Waiting", c: "Executing", d: "Terminated", correct: "c", explanation: "Executing is not a formal process state."},
    {question: "What is a context switch?", a: "Switching the CPU from one process to another", b: "Changing the context menu", c: "Switching memory", d: "Changing the user process", correct: "a", explanation: "A context switch moves the CPU between processes."},
    {question: "Which scheduler selects the next process to run?", a: "Long-term", b: "Mid-term", c: "Short-term", d: "Dispatcher", correct: "c", explanation: "The short-term scheduler picks from the ready queue."},
    {question: "What is a semaphore?", a: "A process", b: "A synchronization tool", c: "A storage unit", d: "A system call", correct: "b", explanation: "Semaphores manage resource access synchronization."},
    {question: "When does thrashing occur?", a: "Too many page faults", b: "High CPU usage", c: "Low memory usage", d: "High I/O usage", correct: "a", explanation: "Thrashing is caused by excessive page faults."},
    {question: "What does SJF stand for?", a: "Shortest Job First", b: "Simple Job Format", c: "System Job Function", d: "Shortest Job Formula", correct: "a", explanation: "SJF selects the shortest next job."},
    {question: "Round Robin is which type of scheduling?", a: "Non-preemptive", b: "Preemptive", c: "Batch", d: "Real-time", correct: "b", explanation: "Round Robin is a preemptive scheduling algorithm."},
    {question: "Which of the following is a deadlock condition?", a: "Mutual exclusion", b: "Hold and wait", c: "No preemption", d: "All of the above", correct: "d", explanation: "Deadlock requires all four conditions."}
  ],
  dbms: [
  {question: "What is the purpose of normalization?", a: "To store data", b: "To remove redundancy", c: "To create an index", d: "To perform backup", correct: "b", explanation: "Normalization eliminates redundancy."},
  {question: "What must a primary key be?", a: "Not null", b: "Unique", c: "Both", d: "None", correct: "c", explanation: "A primary key must be unique and not null."},
  {question: "What does a foreign key do?", a: "Replicates data", b: "Links tables", c: "Indexes a table", d: "Deletes data", correct: "b", explanation: "A foreign key links to the primary key in another table."},
  {question: "What does DROP TABLE do?", a: "Deletes rows only", b: "Deletes table structure", c: "Deletes the database", d: "Deletes an index", correct: "b", explanation: "DROP TABLE removes the entire table structure."},
  {question: "What does ACID stand for?", a: "Atomicity, Consistency, Isolation, Durability", b: "Active, Centralized, Indexed, Durable", c: "Automated, Conditional, Immediate, Durable", d: "All Clear, Integrity, Durability", correct: "a", explanation: "ACID means Atomicity, Consistency, Isolation, and Durability."},
  {question: "Which of the following is a DDL command?", a: "SELECT", b: "INSERT", c: "UPDATE", d: "CREATE", correct: "d", explanation: "CREATE is a Data Definition Language (DDL) command."},
  {question: "Which is not a type of JOIN?", a: "Inner", b: "Outer", c: "Left", d: "Upward", correct: "d", explanation: "Upward join is not a valid SQL join type."},
  {question: "What is a view in SQL?", a: "A physical table", b: "A virtual table", c: "An index", d: "A stored procedure", correct: "b", explanation: "A view is a virtual representation of a table."},
  {question: "What does a transaction rollback do?", a: "Commits the transaction", b: "Reverses changes", c: "Deletes the table", d: "Adds an index", correct: "b", explanation: "Rollback reverses database changes."},
  {question: "Which SQL language is used to retrieve data?", a: "DQL", b: "DDL", c: "DML", d: "DCL", correct: "a", explanation: "SELECT is part of the Data Query Language (DQL)."}
],
cn: [
  {question: "What does TCP stand for?", a: "Transmission Control Protocol", b: "Transfer Control Protocol", c: "Tele Communication Packet", d: "None", correct: "a", explanation: "TCP stands for Transmission Control Protocol."},
  {question: "What does UDP stand for?", a: "User Datagram Protocol", b: "Universal Data Protocol", c: "Unique Datagram Protocol", d: "None", correct: "a", explanation: "UDP stands for User Datagram Protocol."},
  {question: "DNS resolves what?", a: "IP to URL", b: "URL to IP", c: "MAC to IP", d: "URL to MAC", correct: "b", explanation: "DNS maps domain names to IP addresses."},
  {question: "Which port does HTTP use?", a: "20", b: "21", c: "80", d: "443", correct: "c", explanation: "The default port for HTTP is 80."},
  {question: "How many layers does the OSI model have?", a: "5", b: "6", c: "7", d: "8", correct: "c", explanation: "The OSI model has 7 layers."},
  {question: "At which OSI layer does IP work?", a: "Network", b: "Transport", c: "Data Link", d: "Physical", correct: "a", explanation: "IP operates at the network layer."},
  {question: "A MAC address is used in which layer?", a: "Layer 2", b: "Layer 3", c: "Layer 1", d: "Layer 4", correct: "a", explanation: "MAC addresses are used at the data link layer (Layer 2)."},
  {question: "SMTP is used for?", a: "File transfer", b: "Email", c: "Web browsing", d: "DNS", correct: "b", explanation: "SMTP stands for Simple Mail Transfer Protocol."},
  {question: "Which protocol does Ping use?", a: "UDP", b: "ICMP", c: "TCP", d: "HTTP", correct: "b", explanation: "Ping uses the ICMP protocol."},
  {question: "At which layer does a router operate?", a: "Link", b: "Transport", c: "Network", d: "Application", correct: "c", explanation: "A router operates at the network layer."}
],
dsa: [
  {question: "Which principle does a stack use?", a: "FIFO", b: "LIFO", c: "Random", d: "Priority", correct: "b", explanation: "A stack follows the Last In, First Out principle."},
  {question: "Which principle does a queue use?", a: "LIFO", b: "FIFO", c: "Priority", d: "Random", correct: "b", explanation: "A queue follows the First In, First Out principle."},
  {question: "What is the time complexity of binary search?", a: "O(n)", b: "O(log n)", c: "O(n²)", d: "O(1)", correct: "b", explanation: "Binary search has a time complexity of O(log n)."},
  {question: "Inorder traversal of a BST gives?", a: "Sorted order", b: "Unsorted order", c: "Reverse sorted order", d: "Random order", correct: "a", explanation: "Inorder traversal of a BST gives a sorted order."},
  {question: "Which of the following is a balanced BST?", a: "AVL", b: "Heap", c: "Graph", d: "Hash", correct: "a", explanation: "AVL is a self-balancing binary search tree."},
  {question: "DFS uses which of the following?", a: "Queue", b: "Stack", c: "Recursion", d: "Both b & c", correct: "d", explanation: "DFS can use either a stack or recursion."},
  {question: "What is the average-case complexity of bubble sort?", a: "O(n²)", b: "O(n)", c: "O(log n)", d: "O(1)", correct: "a", explanation: "Bubble sort has an average-case complexity of O(n²)."},
  {question: "How are collisions handled in hash tables?", a: "Chaining", b: "Open addressing", c: "Both", d: "None", correct: "c", explanation: "Collisions are handled by chaining or open addressing."},
  {question: "In a full binary tree, the number of nodes is equal to?", a: "n + 1", b: "n × 2", c: "n - 1", d: "n", correct: "a", explanation: "In a full binary tree, number of leaves = internal nodes + 1."},
  {question: "Which algorithm can detect a cycle in a graph?", a: "DFS", b: "BFS", c: "Dijkstra", d: "Both a & b", correct: "a", explanation: "DFS can be used to detect cycles in a graph."}
],
se: [
  {question: "What does SDLC stand for?", a: "Software Development Life Cycle", b: "System Development Life Cycle", c: "Software Design Life Cycle", d: "System Design Life Cycle", correct: "a", explanation: "SDLC stands for Software Development Life Cycle."},
  {question: "The Waterfall model is?", a: "Iterative", b: "Linear and sequential", c: "Agile", d: "Hybrid", correct: "b", explanation: "The Waterfall model is a linear and sequential approach."},
  {question: "The Agile model uses?", a: "Iterations", b: "One phase only", c: "Waterfall", d: "Spiral", correct: "a", explanation: "Agile works in iterative sprints."},
  {question: "Which document defines software requirements?", a: "SRS", b: "FSD", c: "TRS", d: "RMS", correct: "a", explanation: "SRS stands for Software Requirements Specification."},
  {question: "White-box testing is done by?", a: "End-users", b: "Developers", c: "Testers", d: "Managers", correct: "b", explanation: "White-box testing is done by developers."},
  {question: "Black-box testing focuses on?", a: "Internal code", b: "Functional behavior", c: "Performance", d: "Security", correct: "b", explanation: "Black-box testing focuses on external functionality."},
  {question: "What do use-case diagrams show?", a: "Data flow", b: "User interactions", c: "Code structure", d: "UI layout", correct: "b", explanation: "Use-case diagrams represent user interactions."},
  {question: "CASE tools are used for?", a: "Manual coding", b: "Automation", c: "Testing only", d: "Design only", correct: "b", explanation: "CASE tools help automate software engineering processes."},
  {question: "Alpha testing is conducted by?", a: "Beta users", b: "Developers", c: "End-users", d: "Third-party testers", correct: "b", explanation: "Alpha testing is done by developers or internal testers."},
  {question: "Beta testing is conducted by?", a: "Dev team", b: "Internal testers", c: "Real users", d: "Management", correct: "c", explanation: "Beta testing involves real end-users."}
]
};

let qList = [], score = 0, current = 0, answered = {};

function startQuiz() {
  const subj = document.getElementById("subject").value;
  if (!questions[subj]) return;
  qList = [...questions[subj]].sort(() => Math.random() - 0.5);
  score = 0;
  current = 0;
  answered = {};
  document.getElementById("scoreBox").style.display = "block";
  document.getElementById("scoreCard").style.display = "none";
  document.getElementById("retryButton").style.display = "none";
  document.getElementById("printButton").style.display = "none";
  showQuestion();
}

function showQuestion() {
  const q = qList[current];
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `<div class="question">${current + 1}. ${q.question}</div>`;

  ['a', 'b', 'c', 'd'].forEach(k => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.textContent = q[k];

    if (answered[current] !== undefined) {
      // User already answered
      const selected = answered[current];
      if (k === q.correct) opt.classList.add("correct");
      if (k === selected && k !== q.correct) opt.classList.add("wrong");
      opt.onclick = null;
    } else {
      opt.onclick = () => handleAnswer(opt, k, q);
    }

    quizDiv.appendChild(opt);
  });

  if (answered[current] !== undefined) {
    const ex = document.createElement("div");
    ex.style.marginTop = "10px";
    ex.innerHTML = `<em>Explanation: ${q.explanation}</em>`;
    quizDiv.appendChild(ex);
  }

  document.getElementById("progressText").textContent = `Question ${current + 1} of ${qList.length}`;
  document.getElementById("scoreBox").textContent = `Score: ${score}`;
  document.getElementById("nextButton").style.display = (current < qList.length - 1) ? "inline-block" : "none";
  document.getElementById("prevButton").style.display = (current > 0) ? "inline-block" : "none";
}

function handleAnswer(opt, k, q) {
  if (answered[current] !== undefined) return;
  answered[current] = k;
  document.querySelectorAll(".option").forEach(o => o.onclick = null);

  if (k === q.correct) {
    opt.classList.add("correct");
    score++;
  } else {
    opt.classList.add("wrong");
    document.querySelectorAll(".option").forEach(o => {
      if (o.textContent === q[q.correct]) o.classList.add("correct");
    });
  }

  const ex = document.createElement("div");
  ex.style.marginTop = "10px";
  ex.innerHTML = `<em>Explanation: ${q.explanation}</em>`;
  document.getElementById("quiz").appendChild(ex);
  document.getElementById("scoreBox").textContent = `Score: ${score}`;

  if (Object.keys(answered).length === qList.length) completeQuiz();
}

function nextQuestion() {
  if (current < qList.length - 1) {
    current++;
    showQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

function completeQuiz() {
  document.getElementById("scoreCard").style.display = "block";
  document.getElementById("scoreCard").innerHTML =
    `<strong>Quiz Completed!</strong><br>Your Score: ${score}/${qList.length}`;
  document.getElementById("retryButton").style.display = "block";
  document.getElementById("printButton").style.display = "block";
}

function retryQuiz() {
  document.getElementById("subject").value = "";
  document.getElementById("quiz").innerHTML = "";
  document.getElementById("progressText").textContent = "";
  document.getElementById("scoreBox").style.display = "none";
  document.getElementById("scoreCard").style.display = "none";
  document.getElementById("retryButton").style.display = "none";
  document.getElementById("printButton").style.display = "none";
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("prevButton").style.display = "none";
}

function printResult() {
  const printContent = document.getElementById("scoreCard").innerHTML;
  const win = window.open('', '', 'height=600,width=800');
  win.document.write('<html><head><title>Quiz Result</title></head><body>');
  win.document.write(printContent);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}
