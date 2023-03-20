
function store(){
    var userName = document.getElementById("Username").value;
    localStorage.setItem("userName",userName);
    var quizname = document.getElementById("QuizName").value;
    localStorage.setItem("quizname",quizname);
}

function showdata(){
    var Qua1 = document.getElementById("queOne").value;
    localStorage.setItem("Qua1",Qua1);
    
    var optA = document.getElementById("opt1").value;
    localStorage.setItem("optA",optA);

    var optB = document.getElementById("opt2").value;
    localStorage.setItem("optB",optB);

    var optC = document.getElementById("opt3").value;
    localStorage.setItem("optC",optC);

    var optD = document.getElementById("opt4").value;
    localStorage.setItem("optD",optD);
    
}

window.onload = function(){
    document.getElementById("userName").innerText = localStorage.getItem("userName");
    document.getElementById("quiz").innerText = localStorage.getItem("quizname");

 
}
window.onload = function(){
    document.getElementById("showQue").innerText = localStorage.getItem("Qua1");

    document.getElementById("Opt1").innerText = localStorage.getItem("optA");
    document.getElementById("Opt2").innerText = localStorage.getItem("optB");
    document.getElementById("Opt3").innerText = localStorage.getItem("optC");
    document.getElementById("Opt4").innerText = localStorage.getItem("optD");
   
}