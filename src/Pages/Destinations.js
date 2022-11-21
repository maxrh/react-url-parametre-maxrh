import { useState, useEffect } from "react";
import axios from "axios";
import Destination from "../Components/Destination";

const Destinations = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [destinations, setDestinations] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/destinations")
            .then(response => setDestinations(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))

    }, []);

    return (

        <>
            <h1>Her er Destinations</h1>
            { isLoading }
            { error && <p>{error}</p>}
            { destinations && 
                <ul className="items">
                    {destinations.map(destination => ( 
                        <Destination {...destination} key={destination.id} />
                    ))}
                </ul> 
            }
        </> 

     );
}

export default Destinations;