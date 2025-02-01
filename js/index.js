//King Island Lat,Long: -40.063669, 144.061626

//Kaneohe Bay Lat,Long: 21.458367, -157.759595
//Kaneohe Bay Open API for Daily Wave Height, Wave Direction, and Wave Period (7 days): https://marine-api.open-meteo.com/v1/marine?latitude=21.3999&longitude=-157.7989&daily=wave_height_max,wave_direction_dominant,wave_period_max&timezone=auto


/*========
King Island
=========*/

//Current Local Time
//Fetch request to get current time
fetch("https://www.timeapi.io/api/time/current/coordinate?latitude=-40.063669&longitude=144.061626")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        //create new date using current time
        const KItime = new Date(data.dateTime);
        console.log("KItime: ", KItime);
        //create variables for hour and minute
        const KIhour = KItime.getHours();
        console.log("KIhour: ", KIhour);
        const KImin = KItime.getMinutes();
        console.log("KImin: ", KImin);

        let hour = 14;
        let KIcurrentTime = "";
        //if hour equals 0, change it to 12 AM
        if (hour === 0) {
            let KIcurrentTime = `12:${KImin}am`;
            console.log("local time: ", KIcurrentTime);
        }
        //if hour is between 1 and 11, make it AM
        else if (1 <= hour <= 11) {
            let KIcurrentTime = `${hour}:${KImin}am`;
            console.log("local time: ", KIcurrentTime);
        } 
        //if hour is 12, make it PM
        else if (hour === 12) {
            let KIcurrentTime = `12:${KImin}pm`;
            console.log("local time: ", KIcurrentTime);
        }
        //if hour is between 13 and 23, make it PM
        else if (13 <= hour <= 23) {
            let KIcurrentTime = (Number(hour)-12) + ":" + KImin + " pm";
            console.log("local time: ", KIcurrentTime);
        }
        
    })
    .catch((error) => {
        console.log(error)
    });




// Current
fetch("https://marine-api.open-meteo.com/v1/marine?latitude=-40.063669&longitude=144.061626&current=wave_height,wave_direction,wave_period&timezone=Australia%2FSydney&forecast_days=1")
    .then((response) => {
        //show error if needed
        if(!response.ok) {
            throw new Error("Data not found");
        }
        return response.json();
        })
    .then((data) => {
        //create reference to KI-current-container
        const KIcurrContainer = document.querySelector(".ki-current-container");
        
        //define variables for each current height, direction, and period
        console.log("response for current wave variables at King Island: ", data);
        
        let KIcurrentHeight = data.current.wave_height;
        console.log("KIcurrentHeight: ", KIcurrentHeight);

        let KIcurrentDir = data.current.wave_direction;
        console.log("KIcurrentDir: ", KIcurrentDir);

        let KIcurrentPer = data.current.wave_period;
        console.log("KIcurrentPer: ", KIcurrentPer);


        //create three new <p> elements within the Current container that display the current data
        const KIcurrentHeightText = document.createElement("p");
        KIcurrentHeightText.innerHTML = `Wave Height: <strong>${KIcurrentHeight}m</strong>`;

        const KIcurrentDirText = document.createElement("p");
        KIcurrentDirText.innerHTML = `Wave Direction: <strong>${KIcurrentDir}&deg</strong>`;

        const KIcurrentPerText = document.createElement("p");
        KIcurrentPerText.innerHTML = `Wave Period: <strong>${KIcurrentPer}s</strong>`;


        //append these variables to the KI Current container
        KIcurrContainer.appendChild(KIcurrentHeightText);
        KIcurrContainer.appendChild(KIcurrentDirText);
        KIcurrContainer.appendChild(KIcurrentPerText);

    })
    .catch((error) => {
        console.log(error);
        });



// Tomorrow
fetch("https://marine-api.open-meteo.com/v1/marine?latitude=-40.0492&longitude=144.0561&daily=wave_height_max,wave_direction_dominant,wave_period_max&timezone=Australia%2FSydney")
    .then((response) => {
        //show error if needed
        if(!response.ok) {
            throw new Error("Data not found");
        }
        return response.json();
    })
    .then((data) => {


//Next 7 Days
        //create a reference to the KI Next 7 Days container
        const KIweekContainer = document.querySelector(".ki-week-container");
        console.log("KIweekContainer: ", KIweekContainer);

        //create array for just the date, wave direction, wave height, and period
        const KIdates = data.daily.time;
        console.log("KI dates array: ", KIdates);
        const KIdirections = data.daily.wave_direction_dominant;
        console.log("KIdirections: ", KIdirections);
        const KIheights = data.daily.wave_height_max;
        console.log("KIheights: ", KIheights);
        const KIperiods = data.daily.wave_period_max;
        console.log("KIperiods: ", KIperiods);

        //loop through the array, excluding tomorrow, to create a date for each day. 
        for (let i = 1; i < KIdates.length; i++) {
            let KIdate = new Date(KIdates[i]);
            let KIweekday = KIdate.getDay();
            console.log("KIweekday: ", KIweekday);
            let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
            let KIdayOfWeek = weekdays[KIweekday];
            console.log("KIdayOfWeek: ", KIdayOfWeek);
            let KIyear = KIdate.getFullYear();
            let KIday = KIdate.getDate();
            let KImonth = KIdate.getMonth() + 1;
            let KIfullDate = `${KImonth}/${KIday}/${KIyear}`;
            console.log(KIfullDate);
            //Create a div and an h3 for each of the dates; append the h3 to the div
            let KIweekDiv = document.createElement("div");
            KIweekDiv.classList.add(["ki-day"]);
            let h3Date = document.createElement("h3");
            h3Date.innerHTML = `${KIdayOfWeek} ${KIfullDate}`;
            //append the dates to the container
            KIweekContainer.appendChild(KIweekDiv);
            KIweekDiv.appendChild(h3Date);

             //for each date, append the div to add the three wave variables

             let KIheightTxt = document.createElement("p");
             KIheightTxt.innerHTML = `Max Wave Height: <strong>${KIheights[i]}m</strong>`;
             let KIdirTxt = document.createElement("p");
             KIdirTxt.innerHTML =  `Dominant Wave Direction: <strong>${KIdirections[i]}&deg</strong>`;
             let KIPerTxt = document.createElement("p");
             KIPerTxt.innerHTML = `Max Wave Period: <strong>${KIperiods[i]}s</strong>`;
         
             KIweekDiv.appendChild(KIheightTxt);
             KIweekDiv.appendChild(KIdirTxt);
             KIweekDiv.appendChild(KIPerTxt);
        }

       




    })
    .catch((error) => {
        console.log(error);
    });

    



//Insert copyright text into footer
const footer = document.querySelector("footer");
let today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.textContent = "\u00A9 Valerie Newton " + thisYear;
copyright.classList.add(["copyright-text"]);

footer.appendChild(copyright);

