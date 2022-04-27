import "./Main.css";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/124829388_1736943843122214_5506622445268771862_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=wgyl-Hk8YjQAX9uxNpv&_nc_ht=scontent-sof1-1.xx&oh=00_AT-ZnQzyBt1Vbq5V9MVaavrY4wOqKUA4RdxevDPDkkfkpA&oe=62749C8D"},
    { url: "https://cf.bstatic.com/images/hotel/840x460/241/241453626.jpg" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79960488.jpg?k=43c88ec7e6e8307876e771fe4b053c83b9df53a8301c178f39d406ff7723573e&o=&hp=1" },
  ];
  
  const Home = () => {
    return (
      <div className="main--">
          <div style={{marginLeft:"40px",marginTop:"20px",opacity:"0.8"}}>
        <SimpleImageSlider
          width={700}
          height={450}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="main--content">
              <h4>''Started as a house for the Grandpa and now is one of the best rated hotels in Shkoder.The welcoming staff, the delicious food, the amazing view are our best qualities.''</h4>
          </div>
      </div>
    );
  }
  const images1 = [
    { url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a1/3e/08/shpija-e-gjyshit.jpg?w=900&h=600&s=1" },
    { url: "https://childfriendlytourism.com/wp-content/uploads/2020/11/IMG_0159-scaled.jpg" },
    { url: "https://cf.bstatic.com/images/hotel/840x460/210/210803262.jpg" },
  ];
  
  const Home1 = () => {
    return (
      <div className="main--1">
          <div className="main--content">
              <h4>''There is a spa where you can chill any time of the year and enjoy the amazing view from the top of the mountain.''</h4>
          </div>
          <div className="main--photos1" style={{marginRight:"30px",marginTop:"40px",opacity:"0.8"}}>
        <SimpleImageSlider
          width={700}
          height={450}
          images={images1}
          showBullets={true}
          showNavs={true}
        />
      </div>
      
      </div>
    );
  }



export default function Main(){
    return(
    <div>
        <Home/>
        <Home1 />
        </div>
    )
}