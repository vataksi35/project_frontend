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
    const [room, onChangeRoom] = useState(107);
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
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241452131.jpg?k=8bed78130bea66386e3c7a5d10a23d9e643bdf778e707b6bc12f567fdd942e91&o="},
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241452143.jpg?k=4602bfbe1b09e67be2c25d7b4e7eea44ac1ca6dd6abd563ba5d79807437c2024&o=" },
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241452153.jpg?k=d918a31a4bc01798921e2d8d9d1e7434ce878b0b0f005446831357660c4d1a03&o=" },
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