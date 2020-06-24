$('.project').click(function(event) {
   event.preventDefault();

   const projectPick = $(this).data('name');

   findProject(projectPick);
});

$('.backBtn').click(event => {
   event.preventDefault();

   $('.card-body').slideUp('slow');

   setTimeout(() => {
      setTimeout(() => {
         $('.backBtn').hide();

         $('.cardHeader').text('My Portfolio');

         $('.mainSection').show();

         $('.enlarged').hide();

         $('.card-body').slideDown('slow');
      }, 700);
   }, 500);
});

let description;

function findProject(name) {
   switch(name) {
      case 'quiz':
         description = 'This is a quick and simple quiz game that I made for Full Stack Web Course. Using just regular HTML, Bootstrap, and vanilla Javascript. The point of the game is simple, you have 60 seconds to answer all 10 questions! For every question you get right you\'ll recieve 5 points, but if you get a question wrong you\'ll love 5 seconds off the timer. Good luck and have fun!';

         return enlargeProject(
            'My Quiz Game', 
            'assets/images/Quiz-2.png',
            'https://hockeyduck3.github.io/Quiz-Game/',
            'https://github.com/hockeyduck3/Quiz-Game',
            '21px'
         );

      case 'weather':
         description = 'This project was an api assignment for my Full Stack Web Course. I used the Open Weather api for grabbing all of the weather data. The rest of the site was built with HTML, Bootstrap, and jQuery. This assignment took me around 2 weeks to get the website where I wanted it to be, and I\'m really happy with how it turned out!';

         return enlargeProject(
            'My Weather App', 
            'assets/images/Weather-2.png',
            'https://hockeyduck3.github.io/Weather-Site/',
            'https://github.com/hockeyduck3/Weather-Site',
            '25px'
         );
         

      case 'password':
         description = 'This was a quick little project I made based off of the password generator assignment I had for my Full Stack Web Course. A lot of the code I made for that assignment I moved over to this site with some slight changes. The main thing that\'s different between the two is that for my assignment I had to use alerts for user input, this project doesn\'t, and the UI is my design instead of the design that was given to me.';   
            
         return enlargeProject(
            'My Password Generator', 
            'assets/images/Password-2.png',
            'https://hockeyduck3.github.io/Password-Generator/',
            'https://github.com/hockeyduck3/Password-Generator',
            '38px'
         );

      case 'covid':
         description = 'This project was my first group project in my Full Stack Web Course. We made this website to help keep others informed about what was going on with a specific country and their COVID-19 cases. When you select a country or search for one, you\'ll see COVID-19 for that country as well as NY Times articles with related with that country. You\'ll also see Bloomberg articles to stay up to date on financial news around the globe.';

         return enlargeProject(
            'COVID-19 Website', 
            './assets/images/Covid-2.png',
            'https://hockeyduck3.github.io/COVID-Website/',
            'https://github.com/hockeyduck3/COVID-Website',
            '50px'
         );

      case 'note':
         description = 'This project was another assignment given to me from my Full Stack Web Course. For this assignment the front-end was given to us, but we had to go and build the backend ourselves. But after I was done building the backend I did go and change up the frontend just a little bit. 😁';

         return enlargeProject(
            'Simple Note Taker', 
            './assets/images/Note-Taker-2.jpg',
            'https://simple-notes-taker.herokuapp.com/',
            'https://github.com/hockeyduck3/Simple-Note-Taker',
            '33px'
         );

      case 'employee':
         description = 'For this project I had to go and build a Node.js app that also connected to a SQL server! The app can be used to help keep track and employee\'s in the company, what job they have, what department they\'re in, what their salary is, and even who their manager is! This app doesn\'t have a live website attached to it, but feel free to watch the video below to see this project in action!';

         return enlargeProject(
            'Employee Mangement App', 
            './assets/images/Employee-Management-2.jpg',
            'https://www.youtube.com/watch?v=UztqwmOUK84&feature=youtu.be',
            'https://github.com/hockeyduck3/Employee-Management-System',
            '37px'
         ); 

      case 'burger':
         description = 'For this project I had to go and make a simple burger eating website that utilized a SQL database. The website itself is using Handlebars for HTML handling, Bootstrap, jQuery, Express, and JawsDB. The main point of this website is simple, you can add a burger to the "Burgers to Devour" list, and then once you click on that burger it will move over to the "Devoured burgers" list! All of this is saved within a JawsDB SQL server.';

         return enlargeProject(
            'Eat-Dat-Burger!', 
            './assets/images/Eat-Dat-Burger-2.jpg',
            'https://eat-dat-burger-website.herokuapp.com/',
            'https://github.com/hockeyduck3/Eat-Dat-Burger',
            '34px'
         );

      case 'poke':
         description = 'This was my second group project in my Full Stack Web Course. We wanted to do something really fun for this project, something that both challenged us and something that we\'d be proud of! With Poke-Build you can go and view other user created Pokemon, Battle Pokemon, or simply make your own Pokemon!';

         return enlargeProject(
            'Poke-Build!', 
            './assets/images/Poke-Build-2.jpg',
            'https://poke-build.herokuapp.com/',
            'https://github.com/Akessler314/DREAM-TEAM',
            '20px'
         );
   }
}

function enlargeProject(name, src, live, repo, margin) {
   $('.card-body').slideUp('slow');

   setTimeout(() => {
      $('.mainSection').hide();

      $('.backBtn').show();

      $('.cardHeader').text(name);
      
      $('.portfolioBigImg').attr({
         'src': src,
         'alt': `'Screenshot of ${name}'`
      });

      // Found this solution here: https://stackoverflow.com/questions/19291873/window-width-not-the-same-as-media-query
      if (!window.matchMedia('(max-width: 991px)').matches) {
         $('.portfolioBigImg').css('margin-top', margin);
      } else {
         $('.portfolioBigImg').css('margin-top', '10px');
      }

      $('.descriptionText').text(description);

      if (name === 'Employee Mangement App') {
         $('.liveLinkText').text('Youtube Video');
      } else {
         $('.liveLinkText').text('Live Site');
      }
      
      $('.liveLink')
         .attr('href', live);

      $('.repoLink')
         .attr('href', repo);

      setTimeout(() => {
         $('.enlarged').show();
         $('.card-body').slideDown('slow');
      }, 500);
   }, 600);
}