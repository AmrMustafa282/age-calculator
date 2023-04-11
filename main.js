let btn =document.querySelector(".btn");
let yearR = document.querySelector(".one");
let dayR= document.querySelector(".two");
let monthR= document.querySelector(".three");
btn.onclick = ()=>{
    let value = document.querySelector("#date").value;
    let regEx = /\d+\s\d+\s\d+/ig;
    let ageBox = document.querySelector(".ageBox");
    if(regEx.test(value))
    {
        console.log("this works!");
        let dateNow = new Date();
        // let value = "6 19 2003";
        let birthDay = new Date(value);
        let dateDiff = dateNow-birthDay;
        let age =(dateDiff /1000 /60 /60 /24 /365.25);
        let years = Math.floor(age);
        let monthtotal = (age-years)*12;
        let month =Math.floor(monthtotal);
        let daystotal = (monthtotal-month)*31;
        let days = Math.floor(daystotal);
        console.log(years);
        console.log(month);
        console.log(days);
        yearR.textContent =years+"\tyears";
        dayR.textContent =days +"\tdays";
        monthR.textContent =month+"\tmonths";
        ageBox.appendChild(yearR);
        ageBox.appendChild(dayR);
        ageBox.appendChild(monthR);
    }
    
    else
    return false;
}







