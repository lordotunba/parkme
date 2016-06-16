import React from 'react';

 const ParkDetails =  ({chosenPark}) => {

        const address = chosenPark.location.address.street;
        const state = chosenPark.location.address.state;
        const city = chosenPark.location.address.city;
        const prices = chosenPark.priceSchema.prices[0].costs[0].text;
        const paymentTypes = chosenPark.paymentTypes[1];
        const distance = chosenPark.distance/100;
        const parkStatus = chosenPark.realTime.totalParkingSpaces;

        return(
          <div className="col-lg-6 wrapper card-inverse card-success text-xs-left ">
             <div className="cardss">
               <div className="card-block">
              <h4 className="card-title">Selected Parking Details:</h4>
              <p className="card-text">{address}, {city},{state}</p>
            </div>
              <div className="card-block">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Distance : {distance}  miles </li>
                  <li className="list-group-item">Payment Type : {paymentTypes} </li>
                  <li className="list-group-item">Price : {prices} </li>
                 <li className="list-group-item">Total Parking Space Available : {parkStatus} </li>
               </ul>
               <div class="card-block">
                    <a href="#" className="card-link btn ">Reserve Parking</a>

                    <a href="#" className="card-link btn ">Make Payment</a>
                 </div>
               </div>
             </div>
         </div>
        )

  }

  export default ParkDetails;
