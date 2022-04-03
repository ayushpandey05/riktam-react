import {
  UserPhoto,
  UserPhoto1,
  UserPhoto2,
  UserPhoto3,
  UserPhoto4,
} from "../assets/images";

const users = [
  {
    id: 2,
    name: "Henry Boyd",
    email: "henryboyd@gmail.com",
    photo: UserPhoto1,
    designation: "Lead UX/UI Designer",
  },
  {
    id: 3,
    name: "Martha Curtis",
    email: "marthacurtis@gmail.com",
    photo: UserPhoto2,
    designation: "Backend Developer",
  },
  {
    id: 4,
    name: "Phillip Tucker",
    email: "philliptucker@gmail.com",
    photo: UserPhoto3,
    designation: "Frotnend Developer",
  },
  {
    id: 5,
    name: "Christine Reid",
    email: "christinereid@gmail.com",
    photo: UserPhoto4,
    designation: "Android Developer",
  },
];

const currentUser = {
  id: 1,
  name: "Ayush Pandey",
  email: "ayushpandey0508@gmail.com",
  photo: UserPhoto,
  designation: "React/React Native Developer",
};


const getUserById = (userId: number)=>{
    if(currentUser.id === userId){
        return currentUser
    }
    
    const userIndex = users.findIndex(user=>user.id === userId)
    return users[userIndex]
}

export { users, currentUser, getUserById };
