console.log('js is running');

// 1. I would use booleans, and an object for a light switch that can be turned on or off.  A boolean to control the switch then an object with images.

// 2. A string.  A string held in a variable.

// 3. Strings and some booleans and an Object.  Youll need strings to help explain what is happeneing, booleans to help with the functions running all 
// the bells and whistles of your spaceship, and an Object to put it all in.  Maybe even an array to hold a series of objects each one  handling a different
// spaceship tech.

// 4. An array and strings.  Youll need an array with strings each one being a classmates name.

// 5. An Array containing objects and strings.  Youll have an Array with objects for each persons name with a string and a location key with a string in it.

// 6. An array with objects and strings.  An array containing objects for each person.  Each object will have a name, location for strings and array
// for a list of favorite TV shows.

const rainArr = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

console.log(rainArr[4]);

const robbie = {
    favoriteFood: 'pizza',
    hobby: 'video games',
    city: 'Denver',
    favDataType: 'Objects'
};

console.log(robbie.hobby);

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.nicknames[1]);
  console.log(crazyObject.larry.characters[1]);

  const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null);

 // Change the value of limbo to null.
 
 