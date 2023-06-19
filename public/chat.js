document.addEventListener(
 "DOMContentLoaded",
 function () {
  var addUserButton =
   document.getElementById(
    "add-user-button"
   );
  var userInfo =
   document.getElementById("user-info");

  addUserButton.addEventListener(
   "click",
   function () {
    // Make API request using Axios
    axios
     .get(
      "https://api.example.com/addUser"
     )
     .then(function (response) {
      // Update the text dynamically with the API response
      userInfo.querySelector(
       "p"
      ).textContent =
       "User added successfully!";
     })
     .catch(function (error) {
      userInfo.querySelector(
       "p"
      ).textContent =
       "some thing wrong";
      console.log(error);
     });
   }
  );
 }
);
