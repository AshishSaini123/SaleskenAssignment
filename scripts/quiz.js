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

let currQues;
let corr;
const setQuestion = (curr) => {

    //Here firstly i will set the question
    currQues=`${quesNo+1}.`+ QuestionArr[curr].question;
    corr=QuestionArr[curr].correctAnswer;

    document.querySelector(".ques").innerText =`${quesNo+1}.`+ QuestionArr[curr].question+" ?";

    //Now here i will try to generate a random number between 0 to 3
    // so that i can place my correct answer at different postion in
    //diff questions
    const randNo=Math.floor(Math.random()*(4-0)+0)
    let reqArr=['one','two','three','four'];
    let req=document.querySelector(`.${reqArr[randNo]}`);
    //Here i have placed the correct ans
    req.innerText=QuestionArr[curr].correctAnswer;

    //this variable is for taking the other options from incorrect array
    let i=0;
   

    //this loop is for placing the incorrect options
    for(let x=0;x<reqArr.length;x++){
        if(reqArr[randNo]!==reqArr[x]){
            document.querySelector(`.${reqArr[x]}`).innerText = QuestionArr[curr].incorrectAnswers[i];
            i++;
        }
    }
};

//Here i am using this because at first i want to show the first question
if(quesNo==0){
    setQuestion(0);
}

// this function is for when the user click on next or skip
let ans;
const handleClick=()=>{
    let rest=document.querySelectorAll(".option");
    for (const x of rest) {
        x.style.backgroundColor="#fff"
    }
    if(quesNo<=8){
        //Now i am trying to store the question and ans of user on ls

        // let userArr=JSON.parse(localStorage.getItem("setUsers"));
        
        let userQues={
            currQues,
            ans,
            corr
        }

        console.log(userQues)
        let userDataofQuestions=JSON.parse(localStorage.getItem("userQues")) || [];
        console.log(userDataofQuestions)
        userDataofQuestions=[...userDataofQuestions,userQues];
        localStorage.setItem("userQues",JSON.stringify(userDataofQuestions));


         setTimeout(()=>{
            quesNo++;
            setQuestion(quesNo);
         },500)
        

    }
}

// this function is for which option the user select
const handleSelect=(e)=>{
    let selected=e.target;
    ans=e.target.innerText;
    let rest=document.querySelectorAll(".option");
    for (const x of rest) {
        x.style.backgroundColor="#fff"
    }
    selected.style.backgroundColor="#f2f2f2"
}


