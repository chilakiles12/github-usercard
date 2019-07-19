/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/chilakiles12')
  .then(function(data) {
    // handle success
    console.log(data);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
let cards = document.querySelector('.cards');
cards.textContent = 'start of cards container';
cards.style.backgroundColor = 'yellow';

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function domCreator(data) {
  let newCard = document.createElement('card');
  newCard.classList.add('card');

  const img = document.createElement('img');
  // img.src = data.avatarUrl;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  let name = document.createElement('h3');
  name.classList.add('name');
  // name.textContent = data.name;

  let userName = document.createElement('p');
  userName.classList.add('username');
  // userName.textContent = data.followersUrl(name);

  let location = document.createElement('p');
  // location.textContent = data.location;

  let profile = document.createElement('p');
  profile.textContent = 'Profile:';

  let anchor = document.createElement('a');
  // anchor.href = data.followingUrl;
  profile.appendChild(anchor);

  let followers = document.createElement('p');
  // followers.textContent = 'Followers:';followers.textContent = data.followers;

  let following = document.createElement('p');
  following.textContent = 'Following';
  // following.dataset = data.following;

  let bio = document.createElement('p');
  bio.textContent = 'Bio';

  console.log(
    newCard,
    img,
    cardInfo,
    name,
    userName,
    location,
    profile,
    followers,
    following,
    bio
  );

  return domCreator;
}
domCreator();
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
