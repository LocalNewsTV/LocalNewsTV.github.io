/****************************************************************************
 * 
 * All the projects with their writeups are contained here so new ones can 
 * easily be added with this template object 
 * 
 *****************************************************************************/
/*
    {
        id: "",
        title: "",
        sourceImage: "images/projectImg/<File>",
        description: "",
            writeUp: {
                url: "https://localnewstv.github.io/<Repo>",
                github: "https://github.com/LocalNewsTV/<Repo>",
                tools: "",
                summary: ""
            },
    },
 */
    projects = [
        {
            id: "passwordGenerator",
            title: "Password Generator",
            sourceImage: "images/projectImg/PasswordGenerator.webp",
            description: "Javascript class for scrambling passwords",
                writeUp: {
                    url: "https://localnewstv.github.io/PasswordGenerator",
                    github: "https://github.com/LocalNewsTV/PasswordGenerator",
                    tools: "ES6 Classes, HTML, CSS",
                    summary: "A simple tool for people to use stronger passwords while remembering weaker versions. Application can help those with weak passwords avoid becoming victims of brute forcing attacks. This class can be imported or used in other programs. A simple web page was created to demonstrate functionality. You can remember 'Password1' but use 'P2hBJLd$K'"
                },
        },
        {
            id: "pokeHelper",
            title: "Pokemon Weakness Helper",
            sourceImage: "images/projectImg/PokeHelper.webp",
            description: "",
                writeUp: {
                    url: "https://localnewstv.github.io/PokeHelper",
                    github: "https://github.com/LocalNewsTV/PokeHelper",
                    tools: "JS, jQuery, HTML, CSS",
                    summary: "Suitable for parents or those who havent played in a long time, using the PokeAPI this app charts type effectiveness so you can always make your attacks supereffective"
                },
        },
        {
            id: "blackjack",
            title: "BlackJack",
            sourceImage: "images/projectImg/BlackJack.webp",
            description: "",
            writeUp: {            
                url: "https://localnewstv.github.io/BlackJack",
                github: "https://github.com/LocalNewsTV/BlackJack",
                tools: "JavaScript, JQuery, HTML/CSS",
                summary: `The classic game of 21<br>
                Using JS a deck of cards is generated and played from, a deck tally is added so a player can attempt to count cards if they so choose. The app follows the standard rules for a game of BlackJack with the round being Player Vs Dealer.`,
            }
        },
        {
            id: "weatherApp",
            title: "Weather Application",
            sourceImage: "images/projectImg/WeatherApp.webp",
            description: "Weather Application",
            writeUp: {
                url: "https://localnewstv.github.io/WeatherApp",
                github: "https://github.com/LocalNewsTV/WeatherApp",
                tools: "JavaScript, JQuery, HTML/CSS",
                summary: `With the browser standard of having search engines coded into the address bar, the days of having Google as your homepage are no more! I created this app using the free API from 'WeatherApi.com' and used a JS/JQuery to generate the page design into a template HTML file.`,
            }
        },
        {
            id: "senseWeather",
            title: "Sense Hat Weather",
            sourceImage: "images/projectImg/piWeather.webp",
            description: "Python Script for Sense Weather",
            writeUp: {
                url: "n/a",
                github: "https://github.com/LocalNewsTV/HomeTemp",
                tools: "Python, Raspberry Pi, Sense Hat",
                summary: `Small Script that goes off on 15 minute intervals between designated 'safe hours', the script relays the current Weather outdoors, and the humidity in the room and displays them onto the 8x8px SenseHat LED board`
            }
        },
        {
            id: "fakeStore",
            title: "128 Final Project",
            sourceImage: "images/projectImg/128Final.webp",
            description: "Thumbnail or Final Project",
            writeUp: {
                url: "https://localnewstv.github.io/128Final-FakeStoreFront",
                github: "https://github.com/LocalNewsTV/128Final-FakeStoreFront",
                tools: "JavaScript, JQuery, HTML/CSS, Bootstrap",
                summary: `Utilizing the skills gained in our Web Scripting course, the final project consisted of creating a mobile responsive web Application simulating the online experience. User information is handled with a form and parsed through regex validators to ensure accuracy before being sent off. Store inventory is passed through an API call to the 'Fake Store API' and laid out into cards.`,
            }
        },
        {
            id: "browserCombat",
            title: "Browser Combat Simulator",
            sourceImage: "images/projectImg/CombatSimulator.webp",
            description: "Thumbnail for Browser Combat Simulator",
            writeUp: {
                url: "https://localnewstv.github.io/BrowserCombatSimulator",
                github: "https://github.com/LocalNewsTV/BrowserCombatSimulator",
                tools: "JavaScript, JQuery, HTML/CSS",
                summary: `Made during my reading week, the purpose of this project was to further my understanding of JavaScripts ES6 Classes/Inheritance. Using a classic text box with button inputs, it is nostalgic of an early era of videogames.`,
            }
        },
        {
            id: "ticTacToe",
            title: "Tic Tac Toe",
            sourceImage: "images/projectImg/ttt.webp",
            description: "Thumbnail for Tic Tac Toe",
            writeUp: {
                url: "https://localnewstv.github.io/TicTacToe",
                github: "https://github.com/LocalNewsTV/TicTacToe",
                tools: "JavaScript, HTML",
                summary: `A Classic game of Tic Tac Toe made in JavaScript. The game has a functional CPU Partner to play against, with flow based strategy. There is an updating scoreboard so players can show off their wins (or losses).`,
            }
        },
        {
            id: "nierAutomata",
            title: "Nier Automata Fanpage",
            sourceImage: "images/projectImg/nierAutomata.webp",
            description: "Thumbnail for Nier Fanpage",
                writeUp: {
                    url: "https://localnewstv.github.io/Single-Page-Fanpage/",
                    github: "https://github.com/LocalNewsTV/Single-Page-Fanpage/",
                    tools: "HTML/CSS",
                    summary: "Midterm assignment for Year one, Web Fundamentals. The goal was to create a mobile-responsive 4-section webpage to showcase our skills learned through the semester."
                },
        },
    ]