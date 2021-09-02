let name = "";
let email = "";
let active =false;
let fill = {
    name:false,
    email:false

}
let result = "FAIL"

let javaCount = 0;
let oopsCount = 0;
let dbmsCount = 0;
let finalCount = 0;
let javaPcount = 0;
let oopsPcount = 0;
let dbmsPcount = 0;
let finalPcount = 0;
let temp = ""
let QuestionsOfJava = ["Which of the following option leads to the portability and security of Java?",
"Which of the following is not a Java features?",
`_____ is used to find and fix bugs in the Java programs.`,
"What is the return type of the hashCode() method in the Object class?",
"Which of the following is a valid long literal?",
"What does the expression float a = 35 / 0 return?",
"Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
"Which of the following creates a List of 3 visible items and multiple selections abled?",
"Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
"Which of the following is a mutable class in java?"
]
let OptionsOfJava = [{option1: `Bytecode is executed by JVM`,option2: "The applet makes the Java code secure and portable",option3:"Use of exception handling" ,option4: "Dynamic binding between objects" },
{option1:"Dynamic" ,option2:"Architecture Neutral" ,option3: "Use of pointers", option4: "Object-oriented"},
{option1: "JVM" , option2:"JRC",option3:"JDK" , option4: "JDB"},
{option1: "Object" , option2:"Int",option3:"Long" , option4: "Void"},
{option1: `ABH8097`, option2:`L990023`,option3:`904423` , option4: `0xnf029L`},
{option1: "0" , option2:"Not a number",option3:"Infinity" , option4: "Runtime exception"},
{option1: "javap tool" , option2:"javaw command",option3:"Javadoc tool" , option4: "javah command"},
{option1: "new List(false,3)" , option2:"new List(3, true)",option3:"new List(true, 3)" , option4: "new List(3, false)"},
{option1: "getClass()" , option2:"intern()",option3:"getName()" , option4: "toString()"},
{option1: `java.lang.String`,option2: `java.lang.Byte`,option3: `java.lang.Short`,option4: `java.lang.StringBuilder`}
]
let AnswersOfJava = ["optionA",
"optionC",
"optionD",
"optionB",
"optionD",
"optionC",
"optionC",
"optionB",
"optionC",
"optionD"
]
let UserJavaAns = ["" ,"" ,"" , "","" ,"" ,"" ,"" , "",""]


let QuestionsOfOops = ["Which of the following language was developed as the first purely object programming language?",
"Who developed object-oriented programming?",
"Which of the following is not an OOPS concept?",
"Which feature of OOPS described the reusability of code?",
"Which of the following language supports polymorphism but not the classes?",
"Which among the following feature is not in the general definition of OOPS?",
"Which feature of OOPS derives the class from another class?",
"Define the programming language, which does not support all four types of inheritance?",
"A single program of OOPS contains _______ classes?",
"Which operator from the following can be used to illustrate the feature of polymorphism?"
]
let OptionsOfOops = [{option1:`SmallTalk` , option2: `C++` , option3:`Kotlin` , option4: `Java`},
{option1:`Adele Goldberg` , option2: `Dennis Ritchie` , option3:`Alan Kay` , option4: `Andrea Ferro`},
{option1:`Encapsulation` , option2: `Polymorphism` , option3:`Exception` , option4: `Abstraction`},
{option1:`Abstraction` , option2: `Encapsulation` , option3:`Polymorphism` , option4: `Inheritance`},
{option1:`C++ programming language` , option2: `Java programming language` , option3: `Ada programming language`,option:`C# programming language`},
{option1:`Modularity` , option2: `Efficient Code` , option3:`Code reusability` , option4: `Duplicate or Redundant Data`},
{option1:`Inheritance` , option2: `Data hiding` , option3:`Encapsulation` , option4: `Polymorphism`},
{option1:`Smalltalk` , option2: `Kotlin` , option3:`Java` , option4: `C++`},
{option1:`Only 1` , option2: `Only 999` , option3:`Only 100` , option4: `Any number`},
{option1:`Overloading <<` , option2: `Overloading &&` , option3:`Overloading | |` , option4: `Overloading +=`}
]
let AnswersOfOops = ["optionA",
"optionC",
"optionC",
"optionD",
"optionC",
"optionD",
"optionA",
"optionC",
"optionD",
"optionA",
]
let UserOopsAns = ["","","","","","","","","",""]



let QuestionsOfDbms = ["A Database Management System is a type of _________software.",
`The term "FAT" is stands for_____`,
`Which of the following can be considered as the maximum size that is supported by FAT?`,
`The term "NTFS" refers to which one of the following?`,
`Which of the following can be considered as the maximum size that is supported by NTFS?`,
`A huge collection of the information or data accumulated form several different sources is known as ________:`,
`Which of the following can be used to extract or filter the data & information from the data warehouse?`,
`Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.`,
`Which one of the following refers to the "data about data"?`,
`Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?`
]
let OptionsOfDbms = [{option1:`It is a type of system software` , option2: `It is a type of system software` , option3: `It is a kind of general software` , option4: `Both A and C`},
{option1:`File Allocation Tree` , option2: `File Allocation Table` , option3: `File Allocation Graph` , option4: `All of the above`},
{option1:`8GB` , option2: `4GB` , option3: `4TB` , option4: `None of the above`},
{option1:`New Technology File System` , option2: `New Tree File System` , option3: `New Table type File System` , option4: `Both A and C`},
{option1:`4GB` , option2: `16TB` , option3: `64TB` , option4: `8TB`},
{option1:`Data Management` , option2: `Data Mining` , option3: `Data Warehouse` , option4: `Both B and C`},
{option1:`Data redundancy` , option2: `Data recovery tool` , option3: `Data mining` , option4: `Both B and C`},
{option1:`Data Repository` , option2: `Data Inconsistency` , option3: `Data Mining` , option4: `Data Redundancy`},
{option1:`Directory` , option2: `Sub Data` , option3: `Warehouse` , option4: `Meta Data`},
{option1:`Conceptual Level` , option2: `Physical Level` , option3: `File Level` , option4: `Logical Level`}
]
let AnswersOfDbms = ["optionA",
"optionB",
"optionB",
"optionA",
"optionA",
"optionC",
"optionC",
"optionD",
"optionD",
"optionB"
]
let UserDbmsAns = ["","","","","","","","","",""]


let page2 = document.createElement("div")
page2.innerHTML = `
<div class = "question-count"></div>
<div class = "specific-question"></div>
<div class = "help"></div>`
page2.setAttribute("class" , "all-features")

let javaClicked = false;
let oopsClicked = false;
let dbmsClicked = false;
let allQuestions = document.querySelectorAll(".question")
let nameEntered = document.querySelector(".name-entered")
let emailEntered = document.querySelector(".email-entered")
let nameMe = document.querySelector(".name-cont")
let emailMe = document.querySelector(".email-cont")
let infoBtn = document.querySelector(".second-btn")
let submitBtn = document.querySelector(".first-btn")
let main = document.querySelector(".contact")
let body = document.querySelector("body")
let start = document.querySelector(".start-page")
let java = document.getElementById("java")
let oops = document.getElementById("oops")
let dbms = document.getElementById("dbms") 
let videoTillNow = []
        let mediaRecorderObject = ""
        let constrain = {video: true}

nameEntered.addEventListener("blur" , function(e){
    if(e.target.value != ""){
        name = e.target.value;
        nameMe.removeChild(nameEntered);
        let myName = document.createElement("div")
        myName.setAttribute("class","mydet")
        myName.innerText = "Name Entered: " + name;
        nameMe.appendChild(myName)
        fill.name = true;
    }
})
emailEntered.addEventListener("blur" , function(e){
    if(e.target.value != ""){
        email = e.target.value;
        emailMe.removeChild(emailEntered);
        let myEmail = document.createElement("div")
        myEmail.setAttribute("class","mydet")
        myEmail.innerText = "Email Entered:     " + email;
        emailMe.appendChild(myEmail)
        fill.email = true;
    }
})
java.addEventListener("click",function(){
    if(javaClicked == true){
        javaClicked=false
    }
    else{
        javaClicked=true
    }
})
oops.addEventListener("click",function(){
    if(oopsClicked == true){
        oopsClicked=false
    }
    else{
        oopsClicked=true
    }
})
dbms.addEventListener("click",function(){
    if(dbmsClicked == true){
        dbmsClicked=false
    }
    else{
        dbmsClicked=true
    }
})
let streamWeGot = navigator.mediaDevices.getUserMedia(constrain)  //pass constrains
        streamWeGot.then(function(stream){
        // video.srcObject = stream
        mediaRecorderObject = new MediaRecorder(stream);
        
        mediaRecorderObject.addEventListener("dataavailable" , function(e){
            videoTillNow.push(e.data)
            console.log(videoTillNow)
        })
        
        mediaRecorderObject.addEventListener("stop" , function(){
            const blob = new Blob(videoTillNow, { type: 'video/mp4' });
            const url = window.URL.createObjectURL(blob);
            let a  = document.createElement("a")
            a.href = url
            a.download = "video.mp4"
            a.click()

        })

        })
let isRecording = false
submitBtn.addEventListener("click" , function(){
    if(fill.name == true && fill.email == true && (javaClicked || oopsClicked || dbmsClicked)==true){ 
          
        if(java.checked){
            javaClicked = true
            // console.log(1)
        }
        if(oops.checked){
            oopsClicked = true
        }
        if(dbms.checked){
            dbmsClicked = true
        }
        
        
        
// if(isRecording == false){
//     mediaRecorderObject.start()
//     isRecording = true
// }
        body.removeChild(start)
        body.appendChild(page2)
        mediaRecorderObject.start()
        // console.log(mediaRecorderObject)
        let FinalSub = document.createElement("button")
        FinalSub.setAttribute("class" , "submission")
        FinalSub.innerText = "SUBMIT TEST"
        let questionCount = document.querySelector(".question-count")
        let specificQuestion = document.querySelector(".specific-question")
        let help = document.querySelector(".help")
        help.appendChild(FinalSub)
        if(javaClicked == true){
            let javaQue = document.createElement("div")
            javaQue.setAttribute("class" , "java")
            let topic = document.createElement("div")
            javaQue.appendChild(topic)
            topic.setAttribute("class" , "portion")
            topic.innerText = "JAVA"
            topic.style.color = "whitesmoke"
                for(let i = 0 ; i<10 ; i++){
                let que = document.createElement("button")
                que.setAttribute("class" , "question")
                javaQue.appendChild(que)
                que.innerText = i+1;
                specificQuestion.innerHTML = ""
                specificQuestion.innerHTML = `<div class = "start"> Let's Start</div>`
                que.addEventListener("click" , function(){
                    // for(let k = 0 ; k<allQuestions.length ; k++){
                    //     allQuestions[k].classList.remove("active-btn")
                    // }    
                    // que.classList.add("active-btn")
                    specificQuestion.innerHTML =""
                    specificQuestion.innerHTML = `<div class="whole-question">
                    <div class="queDes">${QuestionsOfJava[i]}
                    <br><br><br>
                    <input type="checkbox" class="optionA opti mark">
                    <label for="optionA" class = "mark">${OptionsOfJava[i].option1}</label>
                    <br>
                    <input type="checkbox" class="optionB opti mark">
                    <label for="optionB" class = "mark">${OptionsOfJava[i].option2}</label>
                    <br>
                    <input type="checkbox" class="optionC opti mark">
                    <label for="optionC" class = "mark">${OptionsOfJava[i].option3}</label>
                    <br>
                    <input type="checkbox" class="optionD opti mark">
                    <label for="optionD" class = "mark">${OptionsOfJava[i].option4}</label>
                    </div>
                </div>`    
                let allOpt = document.querySelectorAll(".opti")
                for(let x = 0 ; x<allOpt.length ; x++){
                    allOpt[x].addEventListener("click" , function(e){
                        for(let z= 0 ; z <allOpt.length ; z++){
                            allOpt[z].checked = false
                        }
                        UserJavaAns[i] = e.target.classList[0]
                        allOpt[x].checked = true;
                        que.classList.add("active-btn")
                    })
                }
                    
                })
                }
            questionCount.appendChild(javaQue)
            console.log(AnswersOfJava)
            console.log(UserJavaAns)
        }
        if(oopsClicked == true){
            let oopsQue = document.createElement("div")
            oopsQue.setAttribute("class" , "oops")
            let topic = document.createElement("div")
            oopsQue.appendChild(topic)
            topic.setAttribute("class" , "portion")
            topic.innerText = "OOPS"
            topic.style.color = "whitesmoke"
                for(let i = 0 ; i<10 ; i++){
                let que = document.createElement("button")
                que.setAttribute("class" , "question")
                oopsQue.appendChild(que)
                que.innerText = i+1;
                specificQuestion.innerHTML = ""
                specificQuestion.innerHTML = `<div class = "start"> Let's Start</div>`
                que.addEventListener("click" , function(){
                    // for(let k = 0 ; k<allQuestions.length ; k++){
                    //     allQuestions[k].classList.remove("active-btn")
                    // }    
                    // que.classList.add("active-btn")
                    specificQuestion.innerHTML =""
                    specificQuestion.innerHTML = `<div class="whole-question">
                    <div class="queDes">${QuestionsOfOops[i]}
                    <br>
                    
                    <br><br>
                    <input type="checkbox" class="optionA opt mark">
                    <label for="optionA" class = "mark">${OptionsOfOops[i].option1}</label>
                    <br>
                    <input type="checkbox" class="optionB opt mark">
                    <label for="optionB" class = "mark">${OptionsOfOops[i].option2}</label>
                    <br>
                    <input type="checkbox" class="optionC opt mark">
                    <label for="optionC" class = "mark">${OptionsOfOops[i].option3}</label>
                    <br>
                    <input type="checkbox" class="optionD opt mark">
                    <label for="optionD" class = "mark">${OptionsOfOops[i].option4}</label>
                    <br>
                    </div>
                </div>`  
                
                let allOpt = document.querySelectorAll(".opt")
                for(let x = 0 ; x<allOpt.length ; x++){
                    allOpt[x].addEventListener("click" , function(e){
                        for(let z= 0 ; z <allOpt.length ; z++){
                            allOpt[z].checked = false
                        }
                        UserOopsAns[i] = e.target.classList[0]
                        allOpt[x].checked = true;
                        que.classList.add("active-btn")
                    })
                }
                })
                }
            questionCount.appendChild(oopsQue)
        }
        if(dbmsClicked == true){
            let dbmsQue = document.createElement("div")
            dbmsQue.setAttribute("class" , "oops")
            let topic = document.createElement("div")
            dbmsQue.appendChild(topic)
            topic.setAttribute("class" , "portion")
            topic.innerText =   "DBMS"
            topic.style.color = "whitesmoke"
                for(let i = 0 ; i<10 ; i++){
                let que = document.createElement("button")
                que.setAttribute("class" , "question")
                dbmsQue.appendChild(que)
                que.innerText = i+1;
                specificQuestion.innerHTML = ""
                specificQuestion.innerHTML = `<div class = "start"> Let's Start</div>`
                que.addEventListener("click" , function(){
                    // for(let k = 0 ; k<allQuestions.length ; k++){
                    //     allQuestions[k].classList.remove("active-btn")
                    // }    
                    // que.classList.add("active-btn")
                    specificQuestion.innerHTML =""
                    specificQuestion.innerHTML = `<div class="whole-question">
                    <div class="queDes">${QuestionsOfDbms[i]}
                    <br>
                    <br>
                    <br>
                    <input type="checkbox" class="optionA optio mark">
                    <label for="optionA" class = "mark">${OptionsOfDbms[i].option1}</label>
                    <br>
                    <input type="checkbox" class="optionB optio mark">
                    <label for="optionB" class = "mark">${OptionsOfDbms[i].option2}</label>
                    <br>
                    <input type="checkbox" class="optionC optio mark">
                    <label for="optionC" class = "mark">${OptionsOfDbms[i].option3}</label>
                    <br>
                    <input type="checkbox" class="optionD optio mark">
                    <label for="optionD" class = "mark">${OptionsOfDbms[i].option4}</label>
                    <br>
                    </div>
                </div>`    
                let allOpt = document.querySelectorAll(".optio")
                for(let x = 0 ; x<allOpt.length ; x++){
                    allOpt[x].addEventListener("click" , function(e){
                        for(let z= 0 ; z <allOpt.length ; z++){
                            allOpt[z].checked = false
                        }
                        UserDbmsAns[i] = e.target.classList[0]
                        allOpt[x].checked = true;
                        que.classList.add("active-btn")
                    })
                }
                })
                }
            questionCount.appendChild(dbmsQue)
        }
        FinalSub.addEventListener("click" , function(){
                mediaRecorderObject.stop()
                constrain = {video:false}
                streamWeGot = ""
                mediaRecorderObject = ""
                constrain= {video:false}
            javaCount = calculate(AnswersOfJava,UserJavaAns)
            dbmsCount = calculate(AnswersOfDbms,UserDbmsAns)
            oopsCount = calculate(AnswersOfOops,UserOopsAns)
            finalCount = javaCount+dbmsCount+oopsCount
            javaPcount = ((javaCount/10)*100).toFixed(2)
            
            oopsPcount = ((oopsCount/10)*100).toFixed(2)
            dbmsPcount = ((dbmsCount/10)*100).toFixed(2)
            // console.log(studentDB.name)
            finalPcount = ((finalCount/29)*100).toFixed(2)
            if(finalPcount >=40){
                result = "PASS"
            }
            body.removeChild(page2)
            let lastPage = document.createElement("div")
// let x = studentDB.name
lastPage.innerHTML = `
<h1>Thank You ${name}! </h1>
<h3>Your test has been submitted successfully</h3>
<h3>Result : ${result}</h3>
<table class = "main-table">
<tbody>
    <th class = "heading">
        Subject
    </th>
    <th class = "heading">
        Correct
    </th>
    <th class = "heading">
        Percentage
    </th>
    <tr class = "rows">
        <td>
            JAVA
        </td>
        <td>
            ${javaCount}
        </td>
        <td>
            ${javaPcount}%
        </td>
    </tr>
    <tr class = "rows">
        <td>
            OOPS
        </td>
        <td>
            ${oopsCount}
        </td>
        <td>
            ${oopsPcount}%
        </td>
    </tr>
    <tr class = "rows">
        <td>
            DBMS
        </td>
        <td>
            ${dbmsCount}
        </td>
        <td>
            ${dbmsPcount}%
        </td>
    </tr>
    <tr class = "total" >
        <td>
            TOTAL
        </td>
        <td>
            ${finalCount}
        </td>
        <td>
            ${finalPcount}%
        </td>
    </tr>
</tbody>
</table>`

body.appendChild(lastPage)
        // console.log(studentDB.name)
        })
        
    }
    
    else if(fill.name == false && fill.email == true){
        alert("Enter name")
    }
    else if(fill.name == true && fill.email == false){
        alert("Enter email")
    }
    else if(fill.name == true && fill.email == true && (javaClicked || oopsClicked || dbmsClicked)==false){
        alert("Please select atleast 1 topic")
    }
    else{
        alert("Enter name and email")
    }
})
function calculate(ans , user){
    let c = 0;
    for(let i = 0 ; i<ans.length ; i++){
        if(ans[i] == user[i]){
            c++;
        }
    }
    return c;
}

