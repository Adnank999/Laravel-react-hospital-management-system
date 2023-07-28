// import React from "react";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const UserData = () => {
//     const [posts, setPosts] = useState([]);

//     // const url = 'http://127.0.0.1:8000/userData';

//     // const getData = () => {
//     //     return axios
//     //         .get(`{$url}`)
//     //         .then((response) => setUser(response.data));
//     // };

//     useEffect(() => {
//         axios
//             .get("http://127.0.0.1:8000/userData")
//             .then(({ result }) => {
//                 console.log(result.data);
//                 setUsers(result.data);
//             })

//             .catch((error) => console.log(error));
//     }, []);

//     return (
//         <div>
//             {posts.map((data) => {
//                 return (
//                     <div key={data.id}>
//                         <h1>Hello</h1>
//                         <h4>{data.name}</h4>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default UserData;
