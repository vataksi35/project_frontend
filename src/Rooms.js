import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Roomapi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rooms: [],
        freerooms:[],
        jacuzzi:[],
        breakfast:[],
        allrooms: true,
        withbreakfast:false,
        withjacuzzi:false,
      }
    }
  
    componentDidMount() {
      this.fetchRooms()
      this.fetchfreeRooms()
      this.fetchJacuzzi()
      this.fetchBreakfast()
      
    }
    async fetchRooms() {
      const response = await fetch("http://localhost:8080/rooms");
      try {
        const json = await response.json();
        this.setState({ rooms: json });
        console.log(this.state.rooms);
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    }

    async fetchfreeRooms() {
      const response = await fetch("http://localhost:8080/rooms/free");
      try {
        const json = await response.json();
        this.setState({ freerooms: json});
        console.log(this.state.freerooms);
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    }

    async fetchJacuzzi() {
      const response = await fetch("http://localhost:8080/rooms/jacuzzi");
      try {
        const json = await response.json();
        this.setState({ jacuzzi: json});
        console.log(this.state.jacuzzi);
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    }


    async fetchBreakfast() {
      const response = await fetch("http://localhost:8080/rooms/breakfast");
      try {
        const json = await response.json();
        this.setState({ breakfast: json});
        console.log(this.state.breakfast);
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    }
    render() {
      return (
        <div>
          <label>Filter:</label>
          
          <input className="radio" name="filter" type="radio" onClick={()=>this.setState({allrooms:true,withjacuzzi:false,withbreakfast:false})} defaultChecked/><label>All Rooms</label>
          <input className="radio" name="filter" type="radio" onClick={()=>this.setState({allrooms:false,withjacuzzi:false,withbreakfast:false})}/><label>Free Rooms</label>
          <input className="radio" name="filter" type="radio" onClick={()=>this.setState({allrooms:false,withjacuzzi:true,withbreakfast:false})}/><label>With Jacuzzi</label>
          <input className="radio" name="filter" type="radio" onClick={()=>this.setState({allrooms:false,withbreakfast:true,withjacuzzi:false})}/><label>With Breakfast</label>
          
        
      {this.state.allrooms === true && this.state.withbreakfast === false && this.state.withjacuzzi === false &&(
        <div className="App">
          

          {this.state.rooms.map(el =>

               <div>

                 <img  src ={el.image} className='rooms--img' alt="img"/>

                <div className='rooms--text'><h2>Room: {el.room}</h2><h4>Number of beds: {el.beds}</h4>
                <h4>There is {el.jacuzzi}!</h4><div className="price"><h4>There is {el.roomService} included!</h4>
                <h4>{el.price}$ per night</h4></div><div className="booked-alert">
                  <div>{el.reserved ? <Link to ="/book"><button className="booked" disabled>Book</button></Link> 
                  : <Link to ={el.room}><button className="book">Book</button></Link>}</div>
                  <div>{el.reserved && <h4>Sorry, this room is booked &#128542;</h4>}</div></div></div></div>)}

      </div>)}
        
      {this.state.allrooms === false && this.state.withjacuzzi === false && this.state.withbreakfast === false && (
        <div className="App">
          

          {this.state.freerooms.map(el =>

               <div>

                 <img  src ={el.image} className='rooms--img' alt="img"/>

                <div className='rooms--text'><h2>Room: {el.room}</h2><h4>Number of beds: {el.beds}</h4>
                <h4>There is {el.jacuzzi}!</h4><div className="price"><h4>There is {el.roomService} included!</h4>
                <h4>{el.price}$ per night</h4></div>{el.reserved ? <Link to ="/book"><button className="booked" disabled>Book</button>
                </Link> : <Link to ={el.room}><button className="book">Book</button></Link>}</div></div>)}

      </div>)}

      {this.state.withjacuzzi === true && this.state.withbreakfast === false &&(
        <div className="App">
          

          {this.state.jacuzzi.map(el =>

               <div>

                 <img  src ={el.image} className='rooms--img' alt="img"/>

                <div className='rooms--text'><h2>Room: {el.room}</h2><h4>Number of beds: {el.beds}</h4><h4>There is {el.jacuzzi}!</h4>
                <div className="price"><h4>There is {el.roomService} included!</h4><h4>{el.price}$ per night</h4></div>
                <div className="booked-alert"><div>{el.reserved ? <Link to ="/book"><button className="booked" disabled>Book</button>
                </Link> : <Link to ={el.room}><button className="book">Book</button></Link>}</div>
                <div>{el.reserved && <h4>This room is booked &#128542;</h4>}</div></div></div></div>)}

      </div>)}

      {this.state.withbreakfast === true && (
        <div className="App">
          

          {this.state.breakfast.map(el =>

               <div>

                 <img  src ={el.image} className='rooms--img' alt="img"/>

                <div className='rooms--text'><h2>Room: {el.room}</h2><h4>Number of beds: {el.beds}</h4>
                <h4>There is {el.jacuzzi}!</h4><div className="price"><h4>There is {el.roomService} included!</h4>
                <h4>{el.price}$ per night</h4></div><div className="booked-alert"><div>{el.reserved ? <Link to ="/book">
                  <button className="booked" disabled>Book</button></Link> : <Link to ={el.room}><button className="book">Book</button>
                  </Link>}</div><div>{el.reserved && <h4>This room is booked &#128542;</h4>}</div></div></div></div>)}

      </div>)}

      


      </div>
      );
    }
  }

export default function Rooms(){
    return(
        <Roomapi />
    )
}