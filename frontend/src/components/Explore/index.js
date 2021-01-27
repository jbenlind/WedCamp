import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
            {venues &&
            venues.map((venue) => (
                <div className="venue-card" key={venue.id}
                style={ {backgroundImage: `url(${venue.imgUrl})`}}>
                    <div className='card-title'>{venue.name}</div>
                    <div className='card-location'>{`${venue.city}, ${venue.state}`}</div>
                </div>
            ))}
        </div>
    )
}

export default Explorer;
