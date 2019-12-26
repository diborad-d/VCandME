import React from 'react';
import HomeBtn from './HomeBtn';

function HomeMenuBody(props) {
  const styles = {
    bodyStyle: {
      display: "flex",
      alignItems: "center"
      

    },
    picBtn: { 
      display: "flex",
      flexDirection: 'column',
      margin: '20px',
      alignItems: "stretch"

    },

    Image: {
      height: '200px',
      width: '200px'
    }
  }

  // const { para, img, title, link } = props
  const 
    para=props.para,
    img=props.img,
    title=props.title,
    link=props.link

    console.log(img)

  return (
    <div style={styles.bodyStyle}>
      <div style={styles.picBtn}> 
        <img src={img} alt={title} style={styles.Image} />
        <HomeBtn title={title} className="btn" link={link} />
      </div>
      
      <span><p>{para}.</p></span>

    </div>
    
    // use mixins for flex here
  ) 
}

export default HomeMenuBody