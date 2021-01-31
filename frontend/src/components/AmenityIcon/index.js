


const AmenityIcon = ({amenity}) => {
    let component;
    switch(amenity.name) {
        case "Indoor seating":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-chair"></i><p>{amenity.name}</p></div>)
            break;
        case "Wifi":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-wifi"></i><p>{amenity.name}</p></div>)
            break;
        case "Parking":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-parking"></i><p>{amenity.name}</p></div>)
            break;
        case "Yard games":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-game-board"></i><p>{amenity.name}</p></div>)
            break;
        case "Prep kitchen":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-knife-kitchen"></i><p>{amenity.name}</p></div>)
            break;
        case "Restrooms":
            component = (<div id="amenity-line"><i id="amenity-icon" className="far fa-toilet"></i><p>{amenity.name}</p></div>)
            break;
        case "Handicap accessible":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-wheelchair"></i><p>{amenity.name}</p></div>)
            break;
        case "Free clean up":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-washer"></i><p>{amenity.name}</p></div>)
            break;
        case "Dance area":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-music"></i><p>{amenity.name}</p></div>)
            break;
        case "Electricity":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-outlet"></i><p>{amenity.name}</p></div>)
            break;
        case "Full bar":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-glass-martini-alt"></i><p>{amenity.name}</p></div>)
            break;
        case "Sound system":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-speakers"></i><p>{amenity.name}</p></div>)
            break;
        case "Venue planner":
            component = (<div id="amenity-line"><i id="amenity-icon" className="far fa-clipboard"></i><p>{amenity.name}</p></div>)
            break;
        case "Dressing area":
            component = (<div id="amenity-line"><i id="amenity-icon" className="far fa-male"></i><p>{amenity.name}</p></div>)
            break;
        case "Running water":
            component = (<div id="amenity-line"><i id="amenity-icon" className="far fa-tint"></i><p>{amenity.name}</p></div>)
            break;
        case "Stage":
            component = (<div id="amenity-line"><i id="amenity-icon" className="fas fa-podium"></i><p>{amenity.name}</p></div>)
            break;
        case "Smoking allowed":
            component = (<div id="amenity-line"><i id="amenity-icon" className="far fa-smoking"></i><p>{amenity.name}</p></div>)
            break;
        case "Lighting":
            component = (<div id="amenity-line"><i id="amenity-icon" className="far fa-lightbulb-on"></i><p>{amenity.name}</p></div>)
            break;
        default:
            component = (<div>{amenity.name}</div>)
            break;

    }


    return component;

}

export default AmenityIcon;
