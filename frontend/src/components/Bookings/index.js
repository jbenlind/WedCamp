// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// // use selector

// function upComingBookings() {

//     const [showBookings, setShowBookings] = useState(false);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch()
//     }, [dispatch])


//     return(
//         <>
//         <nav>
//           <h1>Grocery Store</h1>
//           <button className="bookings-button" onClick={() => setShowBookings(true)}>
//             <i class="fal fa-address-book"></i>/
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
