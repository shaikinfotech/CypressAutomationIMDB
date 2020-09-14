//  <reference types="cypress" />
//  const imdb = require('imdb-api')

describe('fetch name, ratings, and movie release year of top 50 movies from IMDB site ', () => {


it('Movie 1 of Top 50', () => {
  // imdb.get({id: 'tt0090190'}, {apiKey: 'http://www.omdbapi.com/?i=tt3896198&apikey=dde03fd6'}).then(console.log);

      cy.visit('https://www.imdb.com/title/tt0111161/');
      cy.title().should('equal','The Shawshank Redemption (1994) - IMDb'); //Name of the Movie and Release Year
      cy.url().should('include','imdb'); //URL Assertion
      cy.contains('9.3');  //Verifying User Ratings
      cy.visit('https://www.imdb.com/title/tt0111161/reviews?ref_=tt_ql_3').contains("Tied for the best movie I have ever seen");
      //Above line of code checks and verifys one of the user review in the Page.
    })
    it('Movie 2 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0068646/');
          cy.title().should('equal','The Godfather (1972) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('9.2');  
          cy.visit('https://www.imdb.com/title/tt0068646/reviews?ref_=tt_ql_3').contains("For Me, This Is The Definitive Film");
        })
        it('Movie 3 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0071562/');
          cy.title().should('equal','The Godfather: Part II (1974) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('9.0');  
          cy.visit('https://www.imdb.com/title/tt0071562/reviews?ref_=tt_ql_3').contains("Best gangster dramas of all time arguably");
        })
        it('Movie 4 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0468569/');
          cy.title().should('equal','The Dark Knight (2008) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('9.0');  
          cy.visit('https://www.imdb.com/title/tt0468569/reviews?ref_=tt_ql_3').contains("Film surpasses the hype");
        })
        it('Movie 5 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0050083/');
          cy.title().should('equal','12 Angry Men (1957) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.9');  
          cy.visit('https://www.imdb.com/title/tt0050083/reviews?ref_=tt_ql_3').contains("If you only ever see one Black and White movie, make this it.");
        })
        it('Movie 6 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0108052/');
          cy.title().should('equal',"Schindler's List (1993) - IMDb"); 
          cy.url().should('include','imdb'); 
          cy.contains('8.9');  
          cy.visit('https://www.imdb.com/title/tt0108052/reviews?ref_=tt_ql_3').contains("The most shattering film of all time.");
        })
        it('Movie 7 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0167260/'); 
          cy.title().should('equal','The Lord of the Rings: The Return of the King (2003) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.9');  
          cy.visit('https://www.imdb.com/title/tt0167260/reviews?ref_=tt_ql_3').contains("Details.");
        })
        it('Movie 8 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0110912/'); 
          cy.title().should('equal','Pulp Fiction (1994) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.9');  
          cy.visit('https://www.imdb.com/title/tt0110912/reviews?ref_=tt_ql_3').contains("Perfect Movie");
        })
        it('Movie 9 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0060196/'); 
          cy.title().should('equal','The Good, the Bad and the Ugly (1966) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0060196/reviews?ref_=tt_ql_3').contains("Brutal, brilliant, and one of the best Westerns ever made");
        })
        it('Movie 10 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0120737/'); 
          cy.title().should('equal','The Lord of the Rings: The Fellowship of the Ring (2001) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0120737/reviews?ref_=tt_ql_3').contains("An absolutely incredible film!");
        })
        it('Movie 11 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0137523/'); 
          cy.title().should('equal','Fight Club (1999) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0137523/reviews?ref_=tt_ql_3').contains("We should actually talk about the Fight Club");
        })
        it('Movie 12 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0109830/'); 
          cy.title().should('equal','Forrest Gump (1994) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0109830/reviews?ref_=tt_ql_3').contains("A beautiful fable for now and the future");
        })
        it('Movie 13 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt1375666/'); 
          cy.title().should('equal','Inception (2010) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt1375666/reviews?ref_=tt_ql_3').contains("A one-of-a-kind mind-blowing masterpiece!");
        })
        it('Movie 14 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0080684/'); 
          cy.title().should('equal','Star Wars: Episode V - The Empire Strikes Back (1980) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0080684/reviews?ref_=tt_ql_3').contains("Excellent timeless classic, the best sequel of all time!");
        })
        it('Movie 15 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0167261/'); 
          cy.title().should('equal','The Lord of the Rings: The Two Towers (2002) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0167261/reviews?ref_=tt_ql_3').contains("An Epic in every sense of the word.");
        })
        it('Movie 16 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0133093/'); 
          cy.title().should('equal','The Matrix (1999) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.8');  
          cy.visit('https://www.imdb.com/title/tt0133093/reviews?ref_=tt_ql_3').contains("The benchmark for all sci-fi films to come");
        })
        it('Movie 17 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0099685/'); 
          cy.title().should('equal','Goodfellas (1990) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.7');  
          cy.visit('https://www.imdb.com/title/tt0099685/reviews?ref_=tt_ql_3').contains("In one word: perfection");
        })
        it('Movie 18 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0073486/'); 
          cy.title().should('equal','One Flew Over the Cuckoos Nest (1975)- IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.7');  
          cy.visit('https://www.imdb.com/title/tt0073486/reviews?ref_=tt_ql_3').contains("Touching and moving, a great cinematic experience");
        })
        it('Movie 19 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0047478/'); 
          cy.title().should('equal','Seven Samurai (1954) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.7');  
          cy.visit('https://www.imdb.com/title/tt0047478/reviews?ref_=tt_ql_3').contains("Arguably, the best samurai film ever made");
        })
        it('Movie 20 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0114369/'); 
          cy.title().should('equal','Se7en (1995) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.7');  
          cy.visit('https://www.imdb.com/title/tt0114369/reviews?ref_=tt_ql_3').contains("Arguably, the best samurai film ever made");
        })
        it('Movie 21 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0118799/'); 
          cy.title().should('equal','Life Is Beautiful (1997) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.7');  
          cy.visit('https://www.imdb.com/title/tt0118799/reviews?ref_=tt_ql_3').contains("The Best Movie I've seen for a long long time.");
        })
         it('Movie 22 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0317248/'); 
          cy.title().should('equal','City of God (2002) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0317248/reviews?ref_=tt_ql_3').contains("Stunning - in every sense of the word");
        })
        it('Movie 23 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0102926/'); 
          cy.title().should('equal','The Silence of the Lambs (1991) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0102926/reviews?ref_=tt_ql_3').contains("Forever a Classic");
        })
        it('Movie 24 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0038650/'); 
          cy.title().should('equal',"It's a Wonderful Life (1946) - IMDb"); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0038650/reviews?ref_=tt_ql_3').contains("A Great Influence...");
        })
        it('Movie 25 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0076759/'); 
          cy.title().should('equal','Star Wars: Episode IV - A New Hope (1977) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0076759/reviews?ref_=tt_ql_3').contains("The Force will be with you, always.");
        })
        it('Movie 26 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0120815/'); 
          cy.title().should('equal','Saving Private Ryan (1998) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0120815/reviews?ref_=tt_ql_3').contains("The only movie my grandfather couldn't finish");
        })
        it('Movie 27 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0245429/'); 
          cy.title().should('equal','Spirited Away (2001) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0245429/reviews?ref_=tt_ql_3').contains("Strange, touching and beautiful");
        })
        it('Movie 28 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0120689/'); 
          cy.title().should('equal','The Green Mile (1999) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0120689/reviews?ref_=tt_ql_3').contains("this movie can tear emotions out of anyone.");
        })
        it('Movie 29 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt6751668/'); 
          cy.title().should('equal','Parasite (2019) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt6751668/reviews?ref_=tt_ql_3').contains("One of the best films of this decade");
        })
        it('Movie 30 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0816692/'); 
          cy.title().should('equal','Interstellar (2014) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0816692/reviews?ref_=tt_ql_3').contains("Who trusts Oscars anymore after they ignored this masterpiece???");
        })
        it('Movie 31 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0110413/'); 
          cy.title().should('equal','Léon: The Professional (1994) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0110413/reviews?ref_=tt_ql_3').contains("Originality, Violence, Love");
        })
        it('Movie 32 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0114814/'); 
          cy.title().should('equal','The Usual Suspects (1995) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0114814/reviews?ref_=tt_ql_3').contains("Forever a Classic");
        })
        it('Movie 33 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0056058/'); 
          cy.title().should('equal','Harakiri (1962) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0056058/reviews?ref_=tt_ql_3').contains("Disharmony of Sword and Pen");
        })
        it('Movie 34 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt8503618/'); 
          cy.title().should('equal','Hamilton (2020) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt8503618/reviews?ref_=tt_ql_3').contains("I felt like i was there!");
        })
        it('Movie 35 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0110357/'); 
          cy.title().should('equal','The Lion King (1994) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0110357/reviews?ref_=tt_ql_3').contains("A Film For All Ages");
        })
        it('Movie 36 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0088763/'); 
          cy.title().should('equal','Back to the Future (1985) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0088763/reviews?ref_=tt_ql_3').contains("You gotta come back with me...");
        })
        it('Movie 37 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0253474/'); 
          cy.title().should('equal','The Pianist (2002) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0253474/reviews?ref_=tt_ql_3').contains("A haunting film, one that you won't forget");
        })
        it('Movie 38 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0103064/'); 
          cy.title().should('equal','Terminator 2: Judgment Day (1991) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0103064/reviews?ref_=tt_ql_3').contains("Words cannot describe the greatness of this movie");
        })
        it('Movie 39 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0120586/'); 
          cy.title().should('equal','American History X (1998) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0120586/reviews?ref_=tt_ql_3').contains("This is a fantastic movie....");
        })
        it('Movie 40 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0027977/'); 
          cy.title().should('equal','Modern Times (1936) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0027977/reviews?ref_=tt_ql_3').contains("As relevant today as it was then - and still very funny");
        })
        it('Movie 41 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0054215/'); 
          cy.title().should('equal',' Psycho (1960) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0054215/reviews?ref_=tt_ql_3').contains("Movie At The Crossroads Of Time");
        })
        it('Movie 42 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0172495/'); 
          cy.title().should('equal','Gladiator (2000) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0172495/reviews?ref_=tt_ql_3').contains("Great");
        })
        it('Movie 43 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0021749/'); 
          cy.title().should('equal','City Lights (1931) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0021749/reviews?ref_=tt_ql_3').contains("Chaplin's Classic of Humor and Humanity");
        })
        it('Movie 44 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0407887/'); 
          cy.title().should('equal','The Departed (2006) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt0407887/reviews?ref_=tt_ql_3').contains("Great");
        })
        it('Movie 45 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt1675434/'); 
          cy.title().should('equal','The Intouchables (2011) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt1675434/reviews?ref_=tt_ql_3').contains("Just Excellent");
        })
        it('Movie 46 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt2582802/'); 
          cy.title().should('equal','Whiplash (2014) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.6');  
          cy.visit('https://www.imdb.com/title/tt2582802/reviews?ref_=tt_ql_3').contains("An incredibly powerful film!");
        })
        it('Movie 47 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0482571/'); 
          cy.title().should('equal','The Prestige (2006) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.5');  
          cy.visit('https://www.imdb.com/title/tt0482571/reviews?ref_=tt_ql_3').contains("Fantastic");
        })
        it('Movie 48 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0095327/'); 
          cy.title().should('equal','Grave of the Fireflies (1988) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.5');  
          cy.visit('https://www.imdb.com/title/tt0095327/reviews?ref_=tt_ql_3').contains("The best movie you'll never want to see again");
        })
        it('Movie 49 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0064116/'); 
          cy.title().should('equal','Once Upon a Time in the West (1968) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.5');  
          cy.visit('https://www.imdb.com/title/tt0064116/reviews?ref_=tt_ql_3').contains("Art");
        })
        it('Movie 50 of Top 50', () => {
          
          cy.visit('https://www.imdb.com/title/tt0034583/'); 
          cy.title().should('equal','Casablanca (1942) - IMDb'); 
          cy.url().should('include','imdb'); 
          cy.contains('8.4');  
          cy.visit('https://www.imdb.com/title/tt0034583/reviews?ref_=tt_ql_3').contains("A masterwork for all time...");
        })
  });
  