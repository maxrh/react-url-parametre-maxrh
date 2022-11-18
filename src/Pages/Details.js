import { useState, useEffect } from "react";
import { useParams, Outlet } from 'react-router-dom';

import axios from "axios";

const Details = () => {

    let { pageid } = useParams()

    console.log(pageid)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/destinations")
            .then(response => setDetails(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))
    }, []);

    return ( 
        <article>

            <h1>Here are the detials</h1>
            { isLoading }
            { error && <p>{error}</p>}
            { details && 
                <ul className="items">

                    {details.map(detail => ( 

                        console.log(detail)

                    ))}

                </ul> 
            }

        </article> 
     );

}
 
export default Details;




