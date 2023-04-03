
// // import React, { useState } from 'react'

// // const index = () => {
// //     const [state, setState] = useState({
// //         email,
// //         password
// //     });


// //     function submitted(event) {
// //         event.preventDefault();
// //     }
// //     return (
// //         <div className='Form'>

// //             <input type="email" placeholder='Email' value={email} onChange={() => { setState(state) }} />

// //             <input type="passwoed" placeholder='Password' value={password} onChange={() => { setState(value) }} />


// //             <input type="submit" value="Submit" onClick={submitted} />


// //         </div>
// //     )
// // }

// // export default index

// import { useState } from 'react'
// import React from 'react'

// const index = () => {
//     const [state, setState] = useState();

//     async function getData() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data)
//         setState(data);
//     }

//     getData();
//     return (

//         < div >
//             <table>

//                 {
//                     data.map(e => {
//                         return (
//                             <>
//                                 <h2>{e.title}</h2>
//                                 <p>{e.body}</p>



//                                 <input type="date" />
//                             </>


//                         )
//                     })
//                 }

//             </table>





//         </ div>
//     )
// }

// export default index



const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: { query: 'Mern developer', page: '1', num_pages: '1' },
    headers: {
        'X-RapidAPI-Key': '204f5787f4msh71df07b7a826485p1d142ajsne5cc8cb04a4f',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});