I have created a random password generator but have not made a user interface "shell" to see its true functionality.
After some minor research, I realized the task of creating a random password generator was pretty easy. Once I had understood entering all characters into a wordbank like array, the could could then randomly select characters frrom the list.
Then I decided to work on password length. It was easy to set up a certain character amount for the password but became more difficult when allowing the User to choose.
I then tried to make symbols, numbers, and letters customizable so the user could choose to include them or disclude them from their password. 
The most challenging part of the project and what is still giving me trouble is when I tried to make the arrays and the selector for which to include more than just a word bank by using CharCode which is one array of all ASICC characters.
This was particularly challenging because I needed to code a function that would include some parts of the array but not others.
At first "success" in this project meant function at whatever cost but then I realized just strictly function and simple code was not enough to satisfy my aspirations for the project.
The new idea of "success" to me for this project is getting it to work in a more efficient yet complex way.
I wouldn't say I used a skeleton code for my project but I do want to point out a source that definetly contributed the most to my project compared to the other sources.
Link: https://www.youtube.com/watch?v=duNmhKgtcsI (I say what I used specifically later in the Read.Me).

Code walk through:
The very beginning of the code is for a generate button function which will begin the generation of the password.
As I mentioned in the paragraph above, the next part of the code is me attempting to break each user "selectable" into different arrays that all pull from CharCode (ASCII).
By making them "Password types", I had the ability to run code depending on what type of characters were selected by the user.
Next I used code like "function getRandomLetter() { // Letter Array" which was inspired by the video https://www.youtube.com/watch?v=duNmhKgtcsI .
This allowed me to put parameters on the password types so the code would know what characters in the CharCode to include or disclude depending on if it was selected or not.
As you can see in the following lines, I attempted to replicate the same logic for all 3 types however, the symbols were not so easy as many the "ACCEPTABLE" password combinations do not allow for symbols like "^" or "(" or ")" which had interfeared with the sequence of the CharCode.
To combat this, I also tried some other ways to accomplish a similar goal and put those in // notes so you could see other possible ways of doing it.
Next I worked on password length which for the most part is just adding a user prompt and the function that allows the user to enter the number of characters they want.
Now, it gets more difficult as I had to use "const passwordTypesArr = Object.values(passwordTypes);" which essentially takes the array of password types and searches for the values within only those arrays.
This definetly could have been done a couple different ways as we have learned a few types of ways to use and manipulate the values of arrays and also how to create arrays like a word bank instead of using Arr.
This was just my attempt to try and elevate my code to the next level as I used similar "wordbank" like principles in my translation bot.
The last bit of code is about making a password fall within a reasonable amount of characters to keep the password complex but also not break the bot with too much characters needing to be generated quickly.

This project was definetly challenging once I tried to find more complex but shorter ways of doing it. This was mostly in the array creation. 
I say the word "wordbank" a lot in this readme and if you don't understand what that means, I am trying to say that there are a couple different ways to use arrays without having to list every single thing you want out. 
I found that the most efficient but challenging way was CharCode but I also had times where for the symbols, it porbably would have been better to stick to the simple list.

Overall I feel like I used resources and problem solved well for this project while also pushing myself into the next level of complexity even if that meant sacrificing function.
Arrays had been some what of a "re-teach" subject for me in coding as I struggled during the card game project.
I feel that I could have polished and had a more fully functioning generator if I had more time.
It was difficult to ask for help because of OpenX presentations but I should have reached out during drop or office hours to help the work time at home be more efficient.
Note: My process and previous revisions have been spread out across 2 different GitHub Projects. My computer at home over-road some of my last project with stuff from this one.
If you want to find the oldest drafts of the project, please look at that github project and look at the new Password Generator project for the more recent revisions. Sorry for the Inconvenience.
