import calendarize from 'C:/Users/patel/AppData/Roaming/npm/node_modules/calendarize';

let currentDate = new Date();
const calendarElement = document.getElementById("calendar");


function populateElement(date){
    let getMonth = calendarize(date);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let dayElement = document.createElement("div");
            dayElement.innerText = getMonth[i][j];
            dayElement.classList.add("day");
            if(getMonth[i][j] == 0){
                dayElement.classList.add("dummy-day");
            }
            if(j == 0 | j ==6){
                dayElement.classList.add("weekend");
            }
            calendarElement.appendChild(dayElement);
        }
    }
}

populateElement(currentDate);
