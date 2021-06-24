import React from 'react';
import {Link} from 'react-router-dom';
import './TJonline.css'
import  t1 from './T1.jpg';
import  t2 from './T2.jpg';
import  t3 from './T3.jpg';
import  t5 from './T5.jpg';
import  t6 from './T6.jpg';
import  t7 from './T7.jpg';
import  t8 from './T8.jpg';
import TJ from './logo.png'
function TJonline(){
    return(
 <section>
      <div className="shop">
        <ul className="Dropme">
        <Link to="./"><li className="shopee">Login</li></Link>
        <li>Shop</li>
        </ul>
    </div>
 <div id="title"><ul id="tjdrop">
     <li ><img src={TJ}/></li>
     <li></li>
     </ul></div>
     <div className="baligya">
         <ul id="ukay">
         <li><img src={t1} width="500px" alt=""/><h3>BILLY TALENT AWESOME COOLNESS DESIGN OHMYGHAD</h3><button>BUY</button></li>
         <li><img src={t2} width="500px" alt=""/><h3>GREEN POWERS T-SHIRT </h3><button>BUY</button></li>
         <li><img src={t3} width="500px" alt=""/><h3>STRIPES BLUISH PANG SIMBAHAN</h3><button>BUY</button></li>
         <li><img src={t5} width="500px" alt=""/><h3>WHITE ASTROUNOT T-SHIRT</h3><button>BUY</button></li>
         <li><img src={t6} width="500px" alt=""/><h3>PANG MATANDA</h3><button>BUY</button></li>
         <li><img src={t7} width="500px" alt=""/><h3>KAHIT ANO LANG NA DESIGN</h3><button>BUY</button></li>
         <li><img src={t8} width="500px" alt=""/><h3>FRANCE T-SHIRT</h3><button>BUY</button></li>
         </ul>
     </div>
 </section>


    );
}
export default TJonline;