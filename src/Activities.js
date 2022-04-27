import React from "react"
import "./Activities.css"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://scontent.ftia7-1.fna.fbcdn.net/v/t1.6435-9/65394808_1280229652126971_5561693635675684864_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=s5rCFj4_weoAX_Hf4Et&_nc_ht=scontent.ftia7-1.fna&oh=00_AT_tXOGXlX5mMfv6TgPBZTeMprEDEyX7Mp4dtxNkNx6tEw&oe=627FBE09" },
    { url: "https://scontent.ftia7-1.fna.fbcdn.net/v/t31.18172-8/21949972_851439488339325_766156918345878502_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=GFfHEASR_REAX_1tCpy&_nc_ht=scontent.ftia7-1.fna&oh=00_AT-ttBRiR6Mdrst_PkcLrVL6mu-WyFUFeQLiLBvo4Gkr8w&oe=627ECC75" },
    { url: "https://scontent.ftia7-1.fna.fbcdn.net/v/t31.18172-8/21768544_851439521672655_2428468351480221473_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=HozR84W7yNMAX_P01X6&_nc_ht=scontent.ftia7-1.fna&oh=00_AT-Mk1XWbjsZRc-h_yYq_F8OxHlYg41gw3FUadD_Qp9ufA&oe=62817EFD" },
  ];
  
  const Activities1 = () => {
    return (

      <div className="activities--">
              <h2 className="activities--main1">Boat Tour through Buna river and Shkodra lake</h2>

          <div style={{marginLeft:"250px",marginTop:"20px",opacity:"0.8"}}>
        <SimpleImageSlider
          width={1000}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <h3 className="activities--main2">We offer for our clients a beautiful experience. It is a one day tour through the river of Buna and Shkodra lake.
                We will see the whole lake side until the crossborder with Montenegro. </h3>
      </div>
    );
  }
  const images1 = [
    { url: "https://i.ytimg.com/vi/qRebR85nMQ0/maxresdefault.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Tarabosh%2C_Shkod%C3%ABr%2C_Albania_2016_02.jpg/1200px-Tarabosh%2C_Shkod%C3%ABr%2C_Albania_2016_02.jpg?20200505154805" },
    { url: "https://pbs.twimg.com/media/DSY9DkCXUAAosGP.jpg" },
  ];
  
  const Activities2 = () => {
    return (
        <div className="activities--1">
    <div style={{marginLeft:"10px",marginTop:"20px",opacity:"0.8"}}>
  <SimpleImageSlider
    width={900}
    height={504}
    images={images1}
    showBullets={true}
    showNavs={true}
  />
</div>
<div className="activities--text">
<h2 className="activities--main1">Hiking in Tarabosh mountain</h2>
<h3 className="activities--main2">Hiking is always a good idea. 
Our guide will take you to the top of the Tarabosh mountain where we can see the whole city of Shkodra and the whole lake. 
It will be a magnificent experience because the view is breathtaking. </h3>
          </div>
</div>
    );
  }



export default function Activities(){
    return(
    <div>
        <Activities1/>
        <Activities2 />
        </div>
    )
}