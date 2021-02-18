import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import SearchMap from '../searchMap'
import './SearchResults.css';

const SearchResults = () => {
const venues = useSelector((state) => state.venueInfo.venues)

const numberTranslator = (number) => {
    if (number === 1) {
        return "one"
    } else if (number === 2) {
        return "two"
    }else if (number === 3) {
        return "three"
    } else if (number === 4) {
        return "four"
    } else if (number === 5) {
        return "five"
    } else if (number === 6) {
        return "six"
    } else if (number === 7) {
        return "seven"
    } else if (number === 8) {
        return "eight"
    } else if (number === 9) {
        return "nine"
    } else if (number === 10) {
        return "ten"
    }  else if (number === 11) {
        return "eleven"
    } else {
        return "twelve"
    }
}

    return(
        <div className="search-body">
            <div className="search-flex">
                <div className="card-holder-container">
                    <div className="card-holder-flex">
                       {venues &&
                       <p className="search-header">{`We found ${numberTranslator(venues.length)} venue(s) near you`}</p>}
                        {venues &&
                        venues.map((venue) => (
                            <Link className ='card-link-search' key={venue.id} to={`/explore/${venue.id}`}>
                                <div className="venue-card" value={venue.id} key={venue.id}
                                    style={ {backgroundImage: `url(${venue.imgUrl})`}}>
                                    <div className='card-title'>{venue.name}</div>
                                    <div className='card-location'>{`${venue.city}, ${venue.state}`}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <SearchMap />
                </div>
            </div>
        </div>
    )
}
export default SearchResults;
