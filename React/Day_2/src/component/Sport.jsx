import React from 'react'
import App from '../App'
const Sport = (props) => {


  //  Conditional rendering =====  return chya  aatmadhi if nahi lihu shakat 

  // if (Sport.length != 0) {
  //   return <h3>No Elements in array in if else  </h3>
  // }

  return (
    <>
      <h1>{props.Username}</h1>

      {/* ternary operator Conditional rensering  */}

      {Sport.length === 0 ? <h3>No Elements in array IN TERNERY </h3> : props.Sports.map((sports) => {
        return <li key={sports}>{sports}</li>

      })}

      
      {/* AND OPERATOR CONDITIONAL RENDERING */}
      
      { props.Username && <h3>my name is {props.Username} </h3>}



      {/* way of print array from another component */}

      {props.Sports.map((sports) => {   
        return <li key={sports}>{sports}</li>
        
      })}
    </>
  );
}

export default Sport;


// <>
//   <h1>I am in Sport</h1>
//   <ul>

//     {/* first method of print above array */}
//     {newArray}

//     {/* method of print above username */}
//     <h1> {username}</h1>

//     {/* second method pf print above array */}
//     {sport.map((sport1) => {
//       return <li key={sport1}>{sport1}</li>
//     })}
//   </ul>




// </>