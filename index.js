
let x=document.getElementById("login");
let y=document.getElementById("register");
let z=document.getElementById("btn");

const Register=()=>{
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

const Login=()=>{
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}

const handleLogin=()=>{
    event.preventDefault()
    let email=document.querySelector(".email1").value;
    let pass=document.querySelector(".pass1").value;
    console.log(email,pass);
    let users=JSON.parse(localStorage.getItem("setUsers")) || [];
    let loggedin=users.find((ele)=>{
        return ele.email===email && ele.pass===pass;
    })
    loggedin.status=true;
    

    localStorage.setItem("curruser",JSON.stringify(loggedin));
    if(loggedin){
        console.log('success')
        window.location.href="./components/quiz.html"
    }
    else{
        alert("invalid credentials");
    }

    document.getElementById("login").reset();
}

const handleRegister=()=>{
    event.preventDefault()
    let email=document.querySelector(".email2").value;
    let pass=document.querySelector(".pass2").value;
    console.log(email,pass);

    let user={
        email,
        pass,
        status:false,
    }

    let users=JSON.parse(localStorage.getItem("setUsers")) || [];
    users.push(user);
    localStorage.setItem("setUsers",JSON.stringify(users));
    let use=JSON.parse(localStorage.getItem("setUsers"));
    console.log(use);
    document.getElementById("register").reset();
    Login();

}