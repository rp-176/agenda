let currentDate = new Date();
const calendarElement = document.getElementById("calendar");


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
    for (let i = 0; i < month.length; i++) {
        for (let j = 0; j < 7; j++) {
            let dayElement = document.createElement("div");
            dayElement.innerText = month[i][j];
            dayElement.classList.add("day");
            if(month[i][j] == 0){
                dayElement.classList.add("dummy-day");
            }
            if(j == 0 | j ==6){
                dayElement.classList.add("weekend");
            }
            calendarElement.appendChild(dayElement);
        }
    }
}

populateElement("Aug 16 2022");
console.log("HELLO");

