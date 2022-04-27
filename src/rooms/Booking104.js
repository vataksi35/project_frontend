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
    const [room, onChangeRoom] = useState(104);
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
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241442956.jpg?k=8af5d9845a9a287be61b422fc583646fd4f38c93cbe5c9fbb1e40044837d3028&o="},
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241442966.jpg?k=30a5b33478f48f1d4f86e611e43b28b650916f411b3d835375438965ef0149ea&o=" },
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241442973.jpg?k=774faac3a892dd64d8f2b56425ec424c1d34e773f2a24a7eea2d2aee2f1dc248&o=" },
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