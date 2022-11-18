import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import axios from "axios";

const Details = () => {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/destinations/${id}`)
            .then(response => setDetails(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
        <article>

            <h1>Here are the details</h1>
            { isLoading }
            { error && <p>{error}</p>}
            { details && 
                <ul className="items">

                    <h4>{details.destination}</h4>

                    {console.log(details)}

                        

                   

                </ul> 
            }

        </article> 
     );

}
 
export default Details;




