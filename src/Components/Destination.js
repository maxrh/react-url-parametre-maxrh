import { Link } from 'react-router-dom';


const Destination = (props) => {

    return ( 

        <li className="item">
            
            <img src={`/assets/img/${props.image}`} />

            <div class="item--footer">
                <i class="fa-solid fa-heart favorite" data-id={`${props.id}`}></i>
                <Link to={`/details/:${props.id}`} >more</Link>
            </div>

        </li>

    );
}
 
export default Destination;