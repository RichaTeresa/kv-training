const login = (username, password) => {
  return new Promise((resolve, reject) => {
    const isLoggedIn = true;
    if (isLoggedIn) {
      resolve({
        isLoggedIn: true,
        username: username,
        message: "User logged in",
      });
    } else {
      reject({
        isLoggedIn: false,
        username: username,
        message: "User not logged in",
      });
    }
  });
};

 // fill here

const fetchdata = (userdata) => {
    return new Promise((resolve,reject)=>{
        const fetched=true;
        if(fetched) {
            resolve(userdata.username)
        }
        else{
            reject("data fetch failed")
        }
    })
}


const displayUser = (user)  => {
    console.log(`Welcome  ${user}`);
}

login("fenyroykv", "password")
   .then(userinfo => {return fetchdata(userinfo)})
   .then(user => {return displayUser(user)})
   .catch(error => console.error(error));