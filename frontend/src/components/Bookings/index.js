// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { findBookings } from '../../store/bookings';

// function UpComingBookings() {
//     const dispatch = useDispatch();



//     // needs setup
//     const bookings = useSelector((state) => state.booking)

//     const sessionUser = useSelector((state)=> state.session.user)

//     useEffect(() => {
//         dispatch(findBookings(sessionUser.id))
//     }, [dispatch])


//     return(
//         <>
//         <nav>
//           <h1>Grocery Store</h1>
//           <button className="bookings-button" onClick={() => setShowBookings(true)}>
//             <i className="fal fa-address-book"></i>/
//             Checkout
//           </button>
//         </nav>
//         <main style={showBookings ? { marginRight: '300px' } : {}} >
//           {/* <ProduceList /> */}
//         </main>
//         <div
//           className="sidebar"
//           style={showBookings ? { transform: 'translateX(-100%)' } : {}}
//         >
//           <div className="sidebar-header">
//             <button className="arrow-button" onClick={() => setShowBookings(false)}>
//               <i className="fas fa-arrow-right"></i>
//             </button>
//           </div>
//           {/* <Cart /> */}
//         </div>
//       </>
//     )
// }

// export default UpComingBookings;
