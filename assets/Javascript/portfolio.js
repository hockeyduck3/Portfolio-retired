$('.project').click(function(event) {
   event.preventDefault();

   console.log('clicked');

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
            'assets/images/Screenshot (34).png',
            'https://hockeyduck3.github.io/Quiz-Game/',
            'https://github.com/hockeyduck3/Quiz-Game'
         );

      case 'weather':
         description = 'This project was an api assignment for my Full Stack Web Course. I used the Open Weather api for grabbing all of the weather data. The rest of the site was built with HTML, Bootstrap, and jQuery. This assignment took me around 2 weeks to get the website where I wanted it to be, and I\'m really happy with how it turned out!';

         return enlargeProject(
            'My Weather App', 
            'assets/images/Screenshot (32).png',
            'https://hockeyduck3.github.io/Weather-Site/',
            'https://github.com/hockeyduck3/Weather-Site'
         );
         

      case 'password':
         description = 'This was a quick little project I made based off of the password generator assignment I had for my Full Stack Web Course. A lot of the code I made for that assignment I moved over to this site with some slight changes. The main thing that\'s different between the two is that for my assignment I had to use alerts for user input, this project doesn\'t, and the UI is my design instead of the design that was given to me.';   
            
         return enlargeProject(
            'My Password Generator', 
            'assets/images/Screenshot (28).png',
            'https://hockeyduck3.github.io/Password-Generator/',
            'https://github.com/hockeyduck3/Password-Generator'
         );

      case 'covid':
         description = 'This project was my first group project in my Full Stack Web Course. We made this website to help keep others informed about what was going on with a specific country and their COVID-19 cases. When you select a country or search for one, you\'ll see COVID-19 for that country as well as NY Times articles with related with that country. You\'ll also see Bloomberg articles to stay up to date on financial news around the globe.'

         return enlargeProject(
            'COVID-19 Website', 
            './assets/images/Screenshot (75).png',
            'https://hockeyduck3.github.io/COVID-Website/',
            'https://github.com/hockeyduck3/COVID-Website'
         );
   }
}

function enlargeProject(name, src, live, repo) {
   $('.card-body').slideUp('slow');

   setTimeout(() => {
      $('.mainSection').hide();

      $('.backBtn').show();

      $('.cardHeader').text(name);
      
      $('.portfolioBigImg').attr({
         'src': src,
         'alt': `'Screenshot of ${name}'`
      });

      $('.descriptionText').text(description);
      
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