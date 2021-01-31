// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import * as mapActions from "../../store/maps";

// const Map = () => {
//     const dispatch = useDispatch();
//     const { venueId } = useParams();

//   useEffect(() => {
//     dispatch(mapActions.getMapsInfo({venueId}))
//   }, [dispatch, venueId])

//   const map = useSelector((state) => state.mapInfo.map);

//   const defaultCenter = {
//       lat: Number(map.latitude),
//       lng: Number(map.longitude)
//   }

//   const position = defaultCenter;

//   let containerStyle = {
//     width: '2vh',
//     height: '2vh'
//   }
//   return (
//       <div>

//       </div>
//   )
// }

// export default Map;
