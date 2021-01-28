import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as venueActions from '../../store/venues';
import './explore.css'

const Explorer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(venueActions.getVenueInfo())
    }, [dispatch])

    const venues = useSelector((state) => state.venueInfo.venues);

    return(
        <div className='explorer-body'>
            <div className='grid-body'>
                {venues &&
                venues.map((venue) => (
                    <Link className ='card-link' to={`/explore/${venue.id}`}>
                        <div className="venue-card" value={venue.id} key={venue.id}
                            style={ {backgroundImage: `url(${venue.imgUrl})`}}>
                            <div className='card-title'>{venue.name}</div>
                            <div className='card-location'>{`${venue.city}, ${venue.state}`}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Explorer;
