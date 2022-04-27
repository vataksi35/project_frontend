import React, {useState}  from "react";
import "../book.css";
import { useForm } from "../useForm";
import SimpleImageSlider from "react-simple-image-slider";

export default function Booking(props) {
    const [id, onChangeId] = useForm();
    const [firstName, onChangeFirstName] = useForm();
    const [lastName, onChangeLastName] = useForm();
    const [contact, onChangeContact] = useForm();
    const [checkin, onChangeCheckin] = useForm();
    const [checkout, onChangeCheckout] = useForm();
    const [room, onChangeRoom] = useState(106);
    const { buttonText, titleText, includeId } = props;
  
    const submit = () => {
      const clientToAdd = {
        room: room,
        first_name: firstName,
        last_name: lastName,
        contact: contact,
        checkin: checkin,
        checkout: checkout,
      };
  
      if (includeId) {
        props.onSubmit(id, clientToAdd);
      } else {
        props.onSubmit(clientToAdd);
      }
    };
    const images = [
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241446285.jpg?k=4d8a6326b8164d955345e1f29b74da8697a2107fa384c7bb469c268e85e25ac9&o="},
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241446347.jpg?k=bb4f043f8d02011494a48f39a991af7b9174522c2c6e3e2fa768114a112eb6a7&o=" },
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241446386.jpg?k=056d1bec0cec91c2a399ad8858f25f49db8647ea5500563657f45d9cb6e08f03&o=" },
    ];
    
    const Home = () => {
      return (
        <div className="main--1">
            <div style={{marginLeft:"40px",marginTop:"20px",opacity:"0.8"}}>
          <SimpleImageSlider
            width={700}
            height={450}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        </div>)}
  
    return (
      <div className="Main-">
        <Home />
        <div className="content-">
        <h1 className="bookh1">{titleText}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {includeId && (
            <div className="inputs-">
              <input
              className="inputs-"
                type="text"
                placeholder="ID"
                value={id}
                onChange={onChangeId}
              />
            </div>
          )}
          <div>
            <h2 className="Room">Room : {room}</h2>
          </div>
          <div>
            <input
            className="inputs-"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={onChangeFirstName}
              required
            />
          </div>
          <div>
            <input
            className="inputs-"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={onChangeLastName}
              required
            />
          </div>
          <div>
            <input
            className="inputs-"
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={onChangeContact}
              required
            />
          </div>
          <div className="date">
          <div>
              <label className="booklabel">Check-in date:</label>
            <input
            className="inputs-"
              type="date"
              placeholder="Check-in date"
              value={checkin}
              onChange={onChangeCheckin}
              required
            />
          </div>
          <div>
           
          <label className="booklabel">Check-out date:</label>
            <input
            className="inputs-"
              type="date"
              placeholder="Checkout-out date"
              value={checkout}
              onChange={onChangeCheckout}
              required
            />
          </div>
          </div>
          <button className="bookbutton" onClick={submit}>{buttonText}</button>
          
          </form>
          </div>
      </div>
    );
  }