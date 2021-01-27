import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as venueActions from '../../store/venues';

const Explorer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(venueActions.getVenueInfo())
    }, [dispatch])

    const venues = useSelector((state) => state.venueInfo.venues);

    return(
        <div>
            <ul>
                {venues &&
                venues.map((venue) => (
                    <li key={venue.id}>{venue.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Explorer;
