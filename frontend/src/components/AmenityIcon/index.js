


const AmenityIcon = ({amenity}) => {
    let component;
    switch(amenity.name) {
        case "Indoor seating":
            component = (<div><i className="far fa-toilet"></i><p>{amenity.name}</p></div>)
            break;
        default:
            component = (<div>{amenity.name}</div>)

    }

    return component;

}

export default AmenityIcon;
