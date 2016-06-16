import React,{Component} from 'react';


export  default (props) => {
       return (
         <div className="search-widget">
         <h3 className="headerText"> Parkme App </h3>
         <div className="input-group">
         <form onSubmit={props.fetchParking} className="input-group">
           <input
             type="search"
             className="form-control"
             onChange={props.updateInput}
             placeholder="Enter Parking Location Here"
             value={props.userVal}
            />
            <span className="input-group-btn">
			       <button type="submit" className="btn btn-secondary">Find Parking</button>
			      </span>
          </form>
          </div>
         </div>
       );
   }
