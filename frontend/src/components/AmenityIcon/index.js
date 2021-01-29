


const AmenityIcon = ({amenity}) => {
    let component;
    switch(amenity.name) {
        case "Indoor seating":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-chair"></i></div>)
            break;
        case "Wifi":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-wifi"></i></div>)
            break;
        case "Parking":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-parking"></i></div>)
            break;
        case "Yard games":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-game-board"></i></div>)
            break;
        case "Prep kitchen":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-knife-kitchen"></i></div>)
            break;
        case "Restrooms":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-toilet"></i></div>)
            break;
        case "Handicap accessible":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-wheelchair"></i></div>)
            break;
        case "Free clean up":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-washer"></i></div>)
            break;
        case "Dance area":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-music"></i></div>)
            break;
        case "Electricity":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-outlet"></i></div>)
            break;
        case "Full bar":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-glass-martini-alt"></i></div>)
            break;
        case "Sound system":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-speakers"></i></div>)
            break;
        case "Flatware":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-utensil-fork"></i></div>)
            break;
        case "Venue planner":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-clipboard"></i></div>)
            break;
        case "Dressing area":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-male"></i></div>)
            break;
        case "Running water":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-tint"></i></div>)
            break;
        case "Stage":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="fas fa-podium"></i></div>)
            break;
        case "Smoking allowed":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-smoking"></i></div>)
            break;
        case "Lighting":
            component = (<div id="amenity-line"><p>{amenity.name}</p><i id="amenity-icon" className="far fa-lightbulb-on"></i></div>)
            break;
        default:
            component = (<div>{amenity.name}</div>)
            break;

    }


    return component;

}

export default AmenityIcon;
