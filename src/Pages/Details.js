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
            
    }, [id]);

    return ( 
        <>

            <h1>Here are the details</h1>
            { isLoading }
            { error && <p>{error}</p>}
            { details && 
                <article className="details">

                    <div className="details__image">
                        <img src={`/assets/img/${details.image}`} alt="" />
                    </div>

                    <div className="details__content">

                        <p>{details.destination}</p>
                        <h1>{details.title}</h1>
                        <p>{details.subtitle}</p>
                        <p>{details.text}</p>

                        <ul>
                            {details.facilities.map(facility => ( 
                                <li>{facility}</li>
                            ))}
                        </ul>

                    </div>

                </article> 
            }

        </> 
     );

}
 
export default Details;




