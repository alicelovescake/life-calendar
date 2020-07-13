
console.log("HI")
const lifeCalendar = [];
let prevDate = null
//get value of birthday from stored value

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
            prevDate = new Date(prevDate);
            prevDate.setDate(prevDate.getDate() + 7);
            year.push({ date: prevDate });
        }
        lifeCalendar.push(year);
    }
    const today = new Date();
    const calendar = document.getElementById('calendar');

    lifeCalendar.forEach(year => {
        const yearRow = document.createElement('div');
        yearRow.classList.add('year');
        year.forEach(week => {
            const weekCol = document.createElement('div');
            if (week.date < today){
                weekCol.classList.add('past');
            }
            weekCol.classList.add('week');
            yearRow.appendChild(weekCol);
        })
        calendar.appendChild(yearRow);
    })
})
    //Start the date on birthday entered






