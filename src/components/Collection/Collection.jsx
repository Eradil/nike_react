import React from 'react';
import { Card } from 'antd';
import { nikeCollection } from './CollectionDB';
import { Carousel } from 'antd';
import video3 from '../../media/video3.mp4'


const { Meta } = Card;

const contentStyle = {
  height: '540px',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const NikeCollection = () => {
  
  return (
    
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        margin: "40px auto",
      }}
    >,
    <video style={{marginBottom:"50px"}} className='main-video container' autoPlay muted loop src={video3}/>,
      {nikeCollection.map((item) => (
        
        <Card
          hoverable
          style={{ width: "400px", margin: "5px ", border: "none" }}
          // cover={<img alt="example" src={item.image1} />}
          // <img alt="example" src={item.image1} />
          cover={
            <Carousel autoplay>
              <div>
                <img style={contentStyle} height='100%' alt="example" src={item.image1} />
              </div>
              <div>
                <img style={contentStyle} alt="example" src={item.image2} />
              </div>
              <div>
                <img style={contentStyle} alt="example" src={item.image3} />
              </div>
              <div>
                <img style={contentStyle} alt="example" src={item.image4} />
              </div>
              <div>
                <img style={contentStyle} alt="example" src={item.image5} />
              </div>
          </Carousel>
          }
        


        >
          <Meta
            style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
            title={
              <>
                <h4>{item.brand}</h4>
              </>
            }
            description={
              <>
                <h3>{item.model}</h3>
              </>
            }
          />



        </Card>
      ))}
    </div>
  );
};

export default NikeCollection;