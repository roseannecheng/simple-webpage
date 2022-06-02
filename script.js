//Home Page
myFunc=()=>{
    let buttons = document.getElementsByName("radiobtn");
    let response1 = document.getElementById("response1");

    for(let i=0; i<buttons.length; i++){
        if(buttons[i].checked){
            option = buttons[i].parentElement.innerText;
            
        }
    }
    response1.innerHTML = `You have ${option}`;
}

let surveyArr = new Array();
let forms = document.getElementsByTagName("form");
console.log(forms[0]);

surveyForm=(form)=>{
    let question2 = document.getElementById("question2").value;
    let response2 = document.getElementById("response2");

    surveyArr[0] = question2;

    if(question2==1){
        surveyArr[0] = `You have sensitive skin <br><br> We recommend you use our Low PH Cleanser with our Oil-Free Moisturizer.`;
    } else if (question2 == 2){
        surveyArr[0] = `You have acne-prone skin <br><br> We recommend you use our Low PH Cleanser with our Oil-Free Moisturizer.`;
    } else if(question2 == 3){
        surveyArr[0] = `You have an uneven skin tone <br><br> We recommend you use our Vitamin C Serum to brighten your skin.`;
    }

    for (let element of surveyArr){
        response2.innerHTML = `${surveyArr[0]}`;
    }
}

//Shop Now Page 
let imgs = document.getElementsByTagName("img");
console.log(imgs);
function mouseovereffect1(){
    imgs[1].src="images/1.png";
}

function mouseouteffect1(){
    imgs[1].src="images/product1.png";
}

function mouseovereffect2(){  
    imgs[2].src="images/2.png";  
}

function mouseouteffect2(){ 
    imgs[2].src="images/product2.png"; 
}

function mouseovereffect3(){  
    imgs[3].src="images/3.png";
}

function mouseouteffect3(){  
    imgs[3].src="images/product3.png";
}

function shopFunction1(){
    let button1 = document.getElementById("cleanserButton");

    button1.innerHTML = "Thank you for shopping!";
}

function shopFunction2(){
    let button2 = document.getElementById("moisturizerButton");

    button2.innerHTML = "Thank you for shopping!";
}

function shopFunction3(){
    let button3 = document.getElementById("serumButton");

    button3.innerHTML = "Thank you for shopping!";
}

//Contact Us Page
submitFunc=(form)=>{
    let forms = document.getElementsByTagName("form");
    console.log(forms[0]);
    let username = document.getElementById("username").value;
    console.log(username);
    let emailAdd = document.getElementById("emailAdd").value;
    console.log(emailAdd);
    let textbox = document.getElementById("textbox").value;
    console.log(textbox);

    //To display error message
    let errorMsg1 = document.getElementById("errorMsg1");
    let errorMsg2 = document.getElementById("errorMsg2");
    let errorMsg3 = document.getElementById("errorMsg3");

    //Form validation
    if(username == ""){
        document.getElementById("username").style.border="1px solid red";
        errorMsg1.innerHTML = `Name cannot be left blank. Please enter your first name and last name.`;
    }

    if(emailAdd == ""){
        document.getElementById("emailAdd").style.border="1px solid red";
        errorMsg2.innerHTML = `Email address cannot be left blank. Please enter your email address.`;
    } 

    if(textbox == ""){
        document.getElementById("textbox").style.border="1px solid red";
        errorMsg3.innerHTML = `Message cannot be left blank. Please enter your message in the text box.`;
    } 

    const stylesApplied ={
        fontSize: "12px",
        color: "red",
        marginTop: "0px"
    }

    Object.assign(errorMsg1.style, stylesApplied);
    Object.assign(errorMsg2.style, stylesApplied);
    Object.assign(errorMsg3.style, stylesApplied);
}
