
import { useSelector } from 'react-redux';
import './index.css'
const SearchResults = () => {

    const venues = useSelector((state) => state.venueInfo.venues)
    return(
        <div>
            <h2 className="search-header">Locations found...</h2>
            <ul>
              {venues &&
              venues.map((venue) => (
                 <li key={venue.id}>{venue.name}</li>
              ))}
            </ul>
        </div>
    )
}
export default SearchResults;
