let arrOfDates = [
    {
        day: "10/01/2022",
        wage: 1.25
    },
    {
        day: "10/02/2022",
        wage: 1.24
    },
    {
        day: "10/03/2022",
        wage: 1.23
    },
    {
        day: "10/04/2022",
        wage: 1.25
    },
    {
        day: "10/05/2022",
        wage: 1.25
    },
    {
        day: "10/06/2022",
        wage: 1.25
    },
    {
        day: "10/07/2022",
        wage: 1.25
    },
];

function promptUserForDate() {
  const userInput = prompt("Date Employee Worked");

  if (arrOfDates.some(arrOfDates => arrOfDates.day === userInput)) 
  //if user input matches data in the array the continue
  {    
    //matches user value with array value then pulls whole respective object
    let userDateObject = JSON.stringify(arrOfDates.find(arrOfDates=>arrOfDates.day === userInput));
    //result is {"day":"10/01/2022","wage":1.25}
      let sliceObject = userDateObject.replace(/\D/g, "");
      //result is 10022022124
        let x = sliceObject.slice(8, 11);
        //results will be uniform for my dataset so I can slice consistently
        const y = .01
        //.replace replaced the decimal with nothing, so I am multiplying to get correct decimal point
        const userHours = prompt("Hours Worked");
        //prompt for user hours worked for date selected
        
            
  alert(x*y*userHours)
  
  } else {
    alert("No data for the selected date");

    promptUserForDate();
  }
}

promptUserForDate();