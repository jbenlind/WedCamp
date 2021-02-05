import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './SearchResults.css';

const SearchResults = () => {
const venues = useSelector((state) => state.venueInfo.venues)
    return(
        <div className="search-body">
            <div className="search-body-grid">
                <div className="card-holder-container">
                    <div className="card-holder-grid">
                        {venues &&
                        venues.map((venue) => (
                            <Link className ='card-link' key={venue.id} to={`/explore/${venue.id}`}>
                                <div className="venue-card" value={venue.id} key={venue.id}
                                    style={ {backgroundImage: `url(${venue.imgUrl})`}}>
                                    <div className='card-title'>{venue.name}</div>
                                    <div className='card-location'>{`${venue.city}, ${venue.state}`}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="future-map">

                </div>
            </div>
        </div>
    )
}
export default SearchResults;
