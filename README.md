# Running the Server

This Challenge will require you to setup and run the application in this repository.

[Refer to the jQuery AJAX lecture notes for installing and running the server]  (https://github.com/kdszafranski/prime-ajax-intro)

These instructions will be the same for all of our node applications.

------------------------------------------------------------------------------

Assignment Details:

https://github.com/kdszafranski/phi-weekend2-start

Weekend Challenge 02:
Welcome to your second weekend challenge! We're going to build a common web user interface app called a Carousel.

Setup:
Download or fork this repo.
Open the repo in terminal and run npm install.

TIPS:
Don't forget, to test an application with a node server, you will need to enter npm start (as defined in the package.json file).
To shut down a server, hold down control and press 'C'.

Challenge Overview:
I created a new JSON data file and inside it you will find an array of objects. Each object, is each one of you!

On the DOM

On the DOM should be:

1. One person's information

2. A series of 18 (or the number of people in the data array) index points with the first person's index highlighted or called out in style differently than the others.

3. A 'Next' button and a 'Previous' button
Clicking on the Next button should navigate to the next person, clicking on the Previous button should navigate to the previous person. The highlighted index point should update also as you click through to other people.
Person Display

4. When a person is displayed, show their name, their Github link, and their piece of shoutout feedback. Only one person should be showcased at any given time.

tip:
You will need to combine everything you learned this week to accomplish this task, and each of the challenges you have completed this week play a part in this task.


Working Example:

Here is a similar example from Zeta so you can see the functionality. It's really ugly, however. The code is also minified (no cheating!):

https://polar-ravine-37299.herokuapp.com/

HARD MODE:
Include a fade out and fade in animation in-between transitioning people.


PRO MODE:
Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds.
