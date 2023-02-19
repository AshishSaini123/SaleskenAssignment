
let curruser=JSON.parse(localStorage.getItem("curruser"));
let quesData=JSON.parse(localStorage.getItem("userQues"));

console.log(curruser,quesData);

let userDetails=(user)=>{
    let div=document.createElement("div");
    let name=document.createElement("p");
    name.innerText=`User Email : ` +user.email
    // let email=document.createElement("p");
    div.append(name);
    document.querySelector(".user-details").append(div);
}

userDetails(curruser);

let QuestionDetails=(data)=>{
    console.log('inside ques')
    let div=document.createElement("div");
    data.map((ele)=>{
        let div1=document.createElement("div");
        let ques=document.createElement("h3");
        ques.innerText=ele.currQues;
        let corr=document.createElement("p");
        corr.innerText=`Correct answer is : `+ele.corr;
        let userAns=document.createElement("p");
        userAns.innerText=`Your answer is : `+ele.ans;

        if(ele.corr===ele.ans){
            userAns.style.backgroundColor="green";
        }
        else{
            userAns.style.backgroundColor="red";
        }
        div1.append(ques,corr,userAns);
        div.append(div1);
    })
    document.querySelector(".question-details").append(div);

}

QuestionDetails(quesData);


const findMarks=(data)=>{
    let res=data.filter(ele=>{
        return ele.corr===ele.ans;
    })

    let p=document.createElement("h3");
    p.innerText=`Your result is ${res.length} / 10`

    document.querySelector(".marks").append(p);
}

findMarks(quesData)