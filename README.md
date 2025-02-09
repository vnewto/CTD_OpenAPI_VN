# Marine Wave Variables
The purpose of this project is to look at the current conditions and the upcoming week's predictions for three ocean wave variables (wave height, wave period, and wave direction) at two different Ocean Wave Energy project sites. Wave Energy is a type of renewable energy which uses wave movement to generate electricity. The two selected example sites are Kaneohe Bay in Hawaii and King Island in Australia, but the code could be modified for any location. 


# Description
This project is written with HTML, CSS, and JavaScript.

This project has a home page with some basic information about ocean wave energy and wave energy variables, as well as a page for each wave energy project site (in this case, an additional page for each Kaneohe Bay and King Island). The home page includes links to each wave energy project site; every page has a navigation bar that will take you to any page. 

Each wave energy site page includes the following three key sections:
    - Box 1: A picture of the wave energy project with a short description
    - Box 2: The wave energy project site's local date and time, current wave conditions (height(m), period(s), and direction(degrees))
    - Box 3: The projection of the daily average of the three wave variables for the next 7 days, as well as the upcoming dates and days of the week

Each wave energy site page uses three different GET requests from two different Open API sources. The [Time API] (https://www.timeapi.io/swagger/index.html) is used to fetch and display the local date and time, while the [Marine Weather API from Open-Meteo] (https://open-meteo.com/en/docs/marine-weather-api) is used to fetch and display the current and upcoming wave conditions. Latitude and Longitude coordinates were used for each location. 

An if/else statement is used to determine which fetch urls to use based on what page the user is on. This ensures the correct data will load for each ocean wave site.


# Getting Started
Code editing software is required to run this project on your local machine. GitHub offers their own free software called GitHub desktop, which can be downloaded at https://github.com/apps/desktop.

1. Create and/or open a folder where you want to save the repository. In your code editor, navigate to that folder. Clone the repository by typing the following command into your terminal: 
```bash
git clone git@github.com:vnewto/CTD_OpenAPI_VN.git
```
2. Navigate to the repository by typing the command 

```bash
cd CTD_OpenAPI_VN 
```

3. Click on index.html and open it on a browser.

You can select a wave energy project site by using the navigation bar or the buttons displayed on the home page. 


# Troubleshooting
If you are unable to clone the repository to your local machine, check your coding program for updates.

If the index.html page is not loading in the browser, check your internet connection. 

If the local time or any of the wave variables are not loading, double check the API website to make sure the urls are still current.

Please [submit an issue] (https://github.com/vnewto/CTD_OpenAPI_VN/issues) if you have any other problems.


# Contribution
The idea of this project is that it can be modified for any location and can be used to either make predictions about the upcoming week's potential energy generation or determine safety conditions for onsite workers. This project could also be modified to include additional marine variables including wind, swell, ocean velocity, and more. Other time intervals are included in the Marine Weather API including hourly variables and a daily average forecast up to 14 days. Pull requests are welcome if you would like to make any changes.

# Authors
Valerie Newton