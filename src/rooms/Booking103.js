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
    const [room, onChangeRoom] = useState(103);
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
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241457673.jpg?k=f387f27bd420fe22f3e52a652dee4614ffd964570d58e7e19afcf249a495e29a&o="},
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241457725.jpg?k=1607120a7c291a36ce98832285ca912ca4dcd801a4d8b591e372c5bffb234f67&o=" },
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241457781.jpg?k=e453a4e22edfdfa50394214b63cb59fb8b76481dc4b124bd2ecadb705e057b1c&o=" },
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