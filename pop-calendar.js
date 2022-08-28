var  currentDate, currentMonth, currentYear;
var listOfMonths= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var listOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


currentDate = new Date();
currentMonth = currentDate.getMonth();
currentYear = currentDate.getFullYear();
          

const calendarElement = document.getElementById("calendar");
const monthTitle = document.getElementById("month-title");


let setMonthTitle = (month) => document.getElementById("mtext-cont").innerText = listOfMonths[month].toUpperCase();

//calendarize library import kept throwing error
function calendarize(target, offset) {
	var i=0, j=0, week, out=[], date = new Date(target || new Date);
	var year = date.getFullYear(), month = date.getMonth();

	//day index (of week) for 1st of month
	var first = new Date(year, month, 1 - (offset | 0)).getDay();

	// how many days there are in this month
	var days = new Date(year, month+1, 0).getDate();

	while (i < days) {
		for (j=0, week=Array(7); j < 7;) {
			while (j < first) week[j++] = 0;
			week[j++] = ++i > days ? 0 : i;
			first = 0;
		}
		out.push(week);
	}
	return out;
}


function populateElement(date){
    let month = calendarize(date);
    for (let i = 0; i <= 6; i++) { //add days of the week to calendar id
        let dow = document.createElement("div");
        dow.innerText = listOfDays[i];
        dow.classList.add("dow");   //add class of dow
        calendarElement.appendChild(dow); //append element to calendar id
    }
    for (let i = 0; i < month.length; i++) { //calendarize returns a 2d array of (day of week) x (number of weeks)
        for (let j = 0; j < 7; j++) {
            let dayElement = document.createElement("div");
            dayElement.innerText = month[i][j]; //adds date to created div
            dayElement.classList.add("day"); 
            if(month[i][j] == 0){ //if date is 0 meaning it is from previous month
                dayElement.className = ''; //empty class list and it's inner text
                dayElement.classList.add("dummy-day");
                dayElement.innerText = null; 
            }
            if(j == 0 | j ==6){
                dayElement.classList.add("weekend");
            }
            calendarElement.appendChild(dayElement);
        }
    }
}

let nextMonth = function(id){
    let button = document.getElementById(id);
    button.addEventListener("click", () => { //add eventlistener to passed button
        calendarElement.innerHTML = ""; //empty calendar id before displaying new month    
        if(id == "backbtn"){
            if(currentMonth == 0){ //switch to previous year if current month is jan
                currentMonth = 11;
                currentYear -= 1;
            }
            else{
                currentMonth -= 1;
            }
            
            currentDate.setMonth(currentMonth);
            currentDate.setFullYear(currentYear);            
            setMonthTitle(currentMonth);
            populateElement(currentDate);
        }
        if(id == "nextbtn"){
            if(currentMonth == 11){
                currentMonth = 0;
                currentYear += 1;
            }
            else{
                currentMonth += 1;
            }

            currentDate.setMonth(currentMonth);
            currentDate.setFullYear(currentYear);             
            setMonthTitle(currentMonth);
            populateElement(currentDate);
        }
    });
}

//init
populateElement(currentDate);
setMonthTitle(currentMonth);
nextMonth("backbtn");
nextMonth("nextbtn");
