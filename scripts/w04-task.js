/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Pablo Toloza",
    photo: "images\placeholder.png",
    favoriteFoods: [
        "Peruvian grilled chicken",
        "hamburger",
        "french fries",
        "ice cream",
        "Argentinian fruit salad",
        "pizza",
        "pasta"],
    hobbies: [
        "Playing guitar",
        "Singing",
        "Sleeping",
        "Cooking",
        "Playing soccer (really bad)"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Buenos Aires, Argentina", 
        length: "24 years"
    },
    {
        place: "Lima, Perú",
        length: "2 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
let ul = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  ul.append(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });  


/* Places Lived DataList */

let placesLived = myProfile.placesLived;
let dl = document.querySelector('#places-lived');

placesLived.forEach(place => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');

  dt.textContent = place.place;
  dd.textContent = place.length;

  dl.appendChild(dt);
  dl.appendChild(dd);
});
