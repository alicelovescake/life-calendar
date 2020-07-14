const totalImages = 22;
const num = Math.ceil(Math.random()* totalImages);
document.body.background = 'images/background/'+num+'.jpg';  


const lifeCalendar = [];
let prevDate = null
//get value of birthday from stored value (May 1, 1991)

chrome.storage.sync.get(['birthdate'], ({ birthdate }) => {
    if (!birthdate) {
        return;
    }
    prevDate = birthdate;
    //create 80 rows for 80 years alive
    for (let i = 0; i < 80; i++) {
        //create a year
        const year = [];

        //Fill year with weeks
        for (let j = 0; j < 52; j++) {
            prevDate = new Date(prevDate); // (May 1, 1991 0:00:00)string into data structure turning stored birthday into a date object whose component values (year, month, day, hour minute, etc) all com from certain parameters. Any missing field is lowest ossible value
            prevDate.setDate(prevDate.getDate() + 7);   //getDate() returns day of the month (1) setDate (1 +7)-> sets the prevDay to 8 (7 days = 1 box. 52 boxes = 1 row)
            year.push({ date: prevDate });   //push into the year array key date, value birthday
        }
        lifeCalendar.push(year);
    }
    const today = new Date(); 
    const calendar = document.getElementById('calendar');  // document method that returns element object representing element whose ID matches string. ID= calendar

    lifeCalendar.forEach(year => {
        const yearRow = document.createElement('div'); //creates new div element for yearRow
        yearRow.classList.add('year');  // creates new class called year on yearRow
        year.forEach(week => {
            const weekCol = document.createElement('div'); // creates  div element for weekCol
            if (week.date < today){
                weekCol.classList.add('past'); // creates new class called past on weekCol in the date less than today
            }
            weekCol.classList.add('week');// creates new classed called week on weekCol in the date greater than today
            yearRow.appendChild(weekCol); //
        })
        calendar.appendChild(yearRow);
    })
})
    //Start the date on birthday entered

    



