let QuestionArr = [
  {
    category: "Geography",
    id: "622a1c357cc59eab6f95000b",
    correctAnswer: "Belgium",
    incorrectAnswers: ["Luxembourg", "Kingdom of the Netherlands", "France"],
    question: "Brussels is the capital of which country",
    tags: ["capital_cities", "geography"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Sport & Leisure",
    id: "62417cd80f96c4efe8d7738b",
    correctAnswer: "Calgary Flames",
    incorrectAnswers: ["Calgary Thunder", "Calgary Bears", "Calgary Royals"],
    question: "Which of these is a hockey team based in Calgary?",
    tags: ["sport"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Arts & Literature",
    id: "622a1c397cc59eab6f950eee",
    correctAnswer: "Joseph Conrad",
    incorrectAnswers: ["Charles Dickens", "Henryk Sienkiewicz", "Oscar Wilde"],
    question: "Which author wrote 'Heart of Darkness'?",
    tags: ["classic_novels", "literature", "arts_and_literature"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Science",
    id: "6242cb19d543524f1b19c90c",
    correctAnswer: "A school",
    incorrectAnswers: ["A parliament", "A clowder", "A stud"],
    question: "What is the word for a group of dolphins?",
    tags: ["science"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Music",
    id: "622a1c357cc59eab6f94ffc7",
    correctAnswer: "Roxette",
    incorrectAnswers: ["Arch Enemy", "Sabaton", "Europe"],
    question:
      'Whose Greatest Hits Album Was Entitled "Don\'t Bore Us With The Chorus"',
    tags: ["music_albums", "music"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Arts & Literature",
    id: "622a1c397cc59eab6f950ea7",
    correctAnswer: "J. K. Rowling",
    incorrectAnswers: ["Christopher Tolkien", "Philip Pullman", "C. S. Lewis"],
    question: "Which author wrote 'Quidditch Through the Ages'?",
    tags: ["literature", "arts_and_literature"],
    type: "Multiple Choice",
    difficulty: "easy",
    regions: [],
    isNiche: false,
  },
  {
    category: "Science",
    id: "63e4c35f106de6ffa7d4a7e2",
    correctAnswer: "Defense and thermoregulation",
    incorrectAnswers: ["Digging", "Attracting prey", "Climbing"],
    question:
      "What was the purpose of the spikes on the back of the Stegosaurus?",
    tags: ["science", "dinosaurs", "nature", "paleontology"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Science",
    id: "622a1c3a7cc59eab6f9510c1",
    correctAnswer: "Four",
    incorrectAnswers: ["One", "Two", "Three"],
    question: "How many chambers does the human heart have?",
    tags: ["science"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Science",
    id: "622a1c3a7cc59eab6f951079",
    correctAnswer: "Hertz",
    incorrectAnswers: ["Joule", "Watt", "Pascal"],
    question: "What are the units of measurement for Frequency?",
    tags: ["science"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
    isNiche: false,
  },
  {
    category: "Music",
    id: "622a1c357cc59eab6f94fea3",
    correctAnswer: "Elton John",
    incorrectAnswers: ["Eric Clapton", "Paul McCartney", "Sting"],
    question: "Which English singer-songwriter released the song 'Rocket Man'?",
    tags: ["songs", "musicians", "people", "general_knowledge", "music"],
    type: "Multiple Choice",
    difficulty: "easy",
    regions: [],
    isNiche: false,
  },
];
let quesNo = 0;

const setQuestion = (curr) => {
    document.querySelector(".ques").innerText =`${quesNo+1}.`+ QuestionArr[curr].question;
    document.querySelector(".one").innerText = QuestionArr[curr].incorrectAnswers[0];
    document.querySelector(".two").innerText = QuestionArr[curr].incorrectAnswers[1];
    document.querySelector(".three").innerText = QuestionArr[curr].incorrectAnswers[2];
    document.querySelector(".four").innerText = QuestionArr[curr].question;
};

if(quesNo==0){
    setQuestion(0);
}

const handleClick=()=>{
    if(quesNo<=8){
        quesNo++;
    setQuestion(quesNo);
    }
}

const handleSelect=(e)=>{
    console.log(e.target);
}


