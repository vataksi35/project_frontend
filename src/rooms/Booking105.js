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
    const [room, onChangeRoom] = useState(105);
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
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241456810.jpg?k=904e5ad9a9a64219e497c3250f196ff15bbd941330d2d90f32f01e6eb628bd74&o="},
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241456808.jpg?k=307557f527ec682a610f43c02103240c8db1303c1bf1a795d50ea7f273ac90fd&o=" },
      { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241456821.jpg?k=d59a3a36071b7290f0db68d1e751d9a2d8f28f4b1cec5407b2c6ad3612d79657&o=" },
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