import React from 'react';

import {Box,Grid,Card,CardContent} from '@mui/material';
import gold1 from "./images/1gold.jpg";
import gold2 from "./images/2gold.jpg";
import gold3 from "./images/3gold.jpg";
import facebook from "./images/facebook.jpg";
import twitter from "./images/twitter.jpg";
import whatsapp from "./images/whatsapp.jpg";
import arrow from "./images/arrow.jpg";
import "./Article.css";

function Art() {
  return (
    <div className="ReadArticles">
    <Box className="ArticleTop" sx={{ width: '100%' }}>
            
                 <h1 className="head" style={{font:"normal normal medium 62px/81px Poppins" }}>Read top articles from Yellowmetals</h1>
                    <p className="parag"
                    >Convert your digital gold to physical gold by paying a nominal minting charge. Your delivery comes with free insurance, to ensure your coins and bars reach you safely.</p>
               
          
        </Box>
    
    <Grid container  justifyContent="center" spacing={3} style={{padding:'80px 0'}} >
    
    <Grid item>
       <Card className='card' variant="outlined" sx={{ maxWidth: "300",marginLeft:"316px"}}> 
       <img src={gold1} alt="hola" />
               <CardContent className="cardContent">
               <h1 className="cardHead">Imports made up 86% of India's gold supply from 2016-2020</h1>
                   <p className="cardP" >According to a World Gold Council report, bullion banking is one of the key pillars to address mulple challenges faced by India's gold market, such as a lack of quality assurance
                   </p>
                   <img className="socialIcon" src={facebook} alt="hola" />
                   <img className="socialIcon" src={twitter} alt="hola" />
                   <img className="socialIcon" src={whatsapp} alt="hola" />
                   <p className="readmore" style={{color:"#4562DB",display:"inline-flex"}}>Read more</p>
                   <img  src={arrow} alt="hola" style={{width:"21px",height:"21px",marginLeft:"14.4px"}} />
           </CardContent>
           
           </Card>
    </Grid>
    
    <Grid item style={{paddingLeft:"0px"}}>
    <Card className="card" variant="outlined" sx={{ maxWidth: "300"}}>
    <img src={gold2} alt="hola" />
               <CardContent className="cardContent"> 
               <h1 className="cardHead" >Gold rate today: Yellow metal rises by Rs 200; silver steady</h1>
                   <p className="cardP">NEW DELHI: Gold prices were trading higher on Friday, but were set for a third weekly fall, weighed down by hawkish signals from the Federal Reserve officials.
                   </p>
                   <img className="socialIcon" src={facebook} alt="hola" />
           <img className="socialIcon" src={twitter} alt="hola" />
           <img className="socialIcon" src={whatsapp} alt="hola" />
           <p className="readmore"  style={{color:"#4562DB",display:"inline-flex"}}>Read more </p>
           <img  src={arrow} alt="hola" style={{width:"21px",height:"21px",marginLeft:"14.4px"}} />
           </CardContent>
           
    </Card>
    </Grid>

    <Grid item  style={{paddingLeft:"0px"}}>
       <Card className="card" variant="outlined" sx={{ maxWidth: "300" }}> 
      
               <img src={gold3} alt="hola" />
             
               <CardContent className="cardContent" >
               <h1 className="cardHead" >Gold prices today:Yellow metal up by Rs 200,silver near Rs.63,900</h1>
                   <p className="cardP">NEW DELHI: Risk of another wave of Covid pandemic, thanks to a mutaon detected in South Africa, increased the appeal of bullion counters on Friday as investors took a flight from risky.
                   </p>
                   <img className="socialIcon" src={facebook} alt="hola" />
           <img className="socialIcon" src={twitter} alt="hola" />
           <img className="socialIcon" src={whatsapp} alt="hola" />
           <p className="readmore"  style={{color:"#4562DB",display:"inline-flex"}}>Read more </p>
           <img  src={arrow} alt="hola" style={{width:"21px",height:"21px",marginLeft:"14.4px"}}/>
           </CardContent>
           
           </Card>
    </Grid>
    

    </Grid>
      <div container className="pageNo" style={{color:"#4562DB"}} >
        <div className='text'>
        <p>Previous</p>
        </div>
        <div className="circle1">1
        </div>
        <div className="circle">2
        </div>
        <div className="circle">3
        </div>
        <div className="circle">4
        </div>
        <div className="circle">5
        </div>
        <div className='text'>
        <p>Next</p>
        </div>
    </div>
      
    </div>
    

  )
}

export default Art