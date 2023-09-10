const jsonData = {"page": 1,
"per_page": 5,
"total": 12,
"total_pages": 3,
"data": [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  }
],
"support": {
  "url": "https://reqres.in/#support-heading",
  "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
}
   
  };
  
  function extractNames(data) {
      const namesArray = [];
      for (let user of data.data) {
          namesArray.push(user.first_name);
      }
      return namesArray;
  }
  
  const names = extractNames(jsonData);
  console.log(names); 
  