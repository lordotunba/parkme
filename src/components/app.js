import React, {Component} from 'react';
import axios from 'axios';
import Search from './search';
import ParkMap from './map';



export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
             userLocation:'',
             parks:[],
             selectedPark:null,
             currentLocation:''
           };
    this.handleFetchPark = this.handleFetchPark.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  makeApiCall(location){
    this.setState({currentLocation:location});
    axios.get('./parking.json')
         .then((response) => {
           response.data.data.parkingResponse.parkingLocations.map((latLng,index) => {
                       const eachMarker = {
                            position:{
                              lat:parseFloat(latLng.location.geoPosition.latitude),
                              lng:parseFloat(latLng.location.geoPosition.longitude)
                           },
                           key:index,
                           currentPark:latLng,
                           defaultAnimation:2
                        };
            this.setState({parks:this.state.parks.concat([eachMarker])});

         });
  });

}


handleFetchPark(e){
  e.preventDefault();
  if(this.state.userLocation !== ''){
    this.makeApiCall(this.state.userLocation);
    this.setState({userLocation:''});
  }


}




handleInputChange(e){
  this.setState({userLocation:e.target.value});
}


selectedPark(marker){
  this.setState({selectedPark:marker});
}

  render() {
    return (
        <div className="row">
         <Search
           userVal={this.state.userLocation}
           fetchParking={this.handleFetchPark}
           updateInput={this.handleInputChange}
           />
         <div className="section-map">
          {/*{this.state.selectedStock == null ? '': <StockChart stock={this.state.selectedStock}/>}*/}
          {this.state.parks.length == 0 ? '' : <ParkMap selectedPark={this.selectedPark.bind(this)}
                                                        parkingLocations={this.state.parks}
                                                        currentLocation={this.state.currentLocation}
                                                        chosenPark={this.state.selectedPark} />}
          </div>
        </div>
    );
  }
}
