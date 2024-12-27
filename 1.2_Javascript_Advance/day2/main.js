// promise

// const resPromise = fetch("https://dummyjson.com/users/1");

// resPromise                           //=================================================
//   .then((data) => data.json())      // convert to json 
//   .then((obj) => {                  // json promise create karat mhnun parat then lihava lagat
//     // console.log(obj);            //  fetch all object
//     console.log(obj.firstName);
//     console.log(obj.lastName);
//     console.log(obj.maidenName);
//     console.log(obj.age);
//   })
//   .catch((error) => {
//     console.log("From .catch block");
//     console.loglog(error);
//   });



// resPromise
//   .then((data) => {
//     console.log(data)
//     data.json()
//   })
//   .then((obj) => console.log(obj))
//   .catch((error) => {
//     console.log("From .catch block");
//     console.loglog(error);
//   });

function button() {
  const resPromise = fetch("https://dummyjson.com/users/1");

  resPromise                           //=================================================
    .then((data) => data.json())      // convert to json 
    .then((obj) => {                  // json promise create karat mhnun parat then lihava lagat
      // console.log(obj);            //  fetch all object
      console.log(obj.firstName);
      console.log(obj.lastName);
      console.log(obj.maidenName);
      console.log(obj.age);
      console.log(obj);
    })
    .catch((error) => {
      console.log("From .catch block");
      console.loglog(error);
    });
  

}