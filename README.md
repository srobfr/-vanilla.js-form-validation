# -vanilla.js-form-validation

Here's a live preview: https://yewhral.github.io/-vanilla.js-form-validation/
Here's a screenshot: http://i.imgur.com/QWvi4Aq.jpg


This was one of a test projects that I got to do while looking for a job.
As nothing indicates what company gave me this task and they are changing recruitment tasks every time anyway - I am putting it here on GitHub.

I don't quite agree with a visual design or some html parts that I got to work with, but I'm posting it "as is".

This project allowed me to learn more about validating form on frontend side (obviously), but what especially interested me was how to properly validate an email adress.
I read some very rich discussions about that. What was fun about this project was that the form isn't submitted anywhere, but gets saved to a localstorage.

It was my first project where I tried testing my code, but as I was short on time I used some native javascript functions for that.

This project was supposed to work on every browser on every screen and that was very challenging, but rewarding as well!

Gulp.js was used here, it was the first time where I tried to applied so many different Gulp plugins at once. I still think I prefer Grunt.js, but Gulp isn't scary at all now.
If, for some reason, you want to create your own build version you should write in commandline:

- gulp dev (for developer version)
- gulp release (for version adapted to older browsers, for example by transcompiling ECMA6 with Babel, please launch this version)

if you are busy, or lazy and don't want to install gulp for that, fear not. I added both of those folders here on GitHub.