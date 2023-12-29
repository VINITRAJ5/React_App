import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count,setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        //Api Calls
    }, []);

return(
    <div className="user-card m-4 p-4 bg-grey-50 rounded-lg">

   <h1>Count ={count}</h1>
   <h2>Count2 = {count2} </h2>
   <h2>Name: {name}</h2>
   <h3>Location Dehradun</h3>
   <h4>Contact: @vineet</h4>
   </div>  
);

};

export default User;