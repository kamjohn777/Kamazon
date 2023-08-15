import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <>
            <div className="home">
               <div className="home_container">
               {/* <img alt="Try Amazon Clinic" src="https://m.media-amazon.com/images/I/716cIg8qwvL._SX3000_.jpg" class="amazon-banner" data-a-hires="https://m.media-amazon.com/images/I/716cIg8qwvL._SX3000_.jpg" /> */}
               <img className="amazon_banner_two" src="https://viatea.es/wp-content/uploads/2020/06/amazon-prime-video-spain-contenido.jpg" alt="amazon-banner"/>
               </div>

               <div className="home_row">
                    <Product 
                        id="123121321"
                        title='The Road to React'
                        price={25.99} 
                        // image={<img src="https://m.media-amazon.com/images/I/41DA89Z1RIL.jpg" />} 
                        image="https://m.media-amazon.com/images/I/41DA89Z1RIL.jpg"
                        rating={4}
            />
                    <Product
                        id="42148222"
                        title="iBUYPOWER Trace MR183A Gaming PC AMD Ryzen 3700X Radeon RX 5700XT 16GB RAM 1TB SSD"
                        price={1799.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMjj0Fqjzhwy2_OWEgA8PaPgHwpiH5w51JJGurnaRro0y8vpU-SUyw1-EHdO3IeLVSoc&usqp=CAU"
                        rating={4}
                    />
                    {/* Product component */}
                    {/* Product compnent */}
               </div>

               <div className="home_row">
                    <Product
                        id="8231098302"
                        title="MOTPK L Shaped Gaming Desk with LED Lights, Corner Gaming Computer Desk 55inch with Power Outlets, Gaming Table with PC Storage Shelf, Gamer Desk with Monitor Shelf, Carbon Fiber Texture, Black"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/81-AfM2nqmL._AC_UF894,1000_QL80_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="1293812312"
                        title="Pink Gaming Keyboard and Mouse Headset Headphones and Mouse pad, Wired LED RGB Backlight Bundle Pink PC Accessories for Gamers and Xbox and PS4 PS5 Nintendo Switch Users - 4in1 Edition Hornet RX-250"
                        price={214.99}
                        image="https://m.media-amazon.com/images/I/71BPP0UaaqS._AC_UF1000,1000_QL80_.jpg"
                        rating={3}                    
                    />
                    <Product
                        id="12312321"
                        title="Eastar Drum Set 14 inch for Beginners,3 Piece Junior Drum Kit with Bass Tom Snare Drum,Adjustable Throne, Cymbal, Pedal & Two Pairs of Drumsticks, Metallic Purple"
                        price={313.99}
                        image="https://m.media-amazon.com/images/I/71f3JCnVkQL._AC_UF894,1000_QL80_.jpg"
                        rating={5}
                    />
                    {/* Product component */}
                    {/* Product compnent */}
                     {/* Product compnent */}
               </div>

               
               <div className="home_row">
                    <Product 
                        id="31294354"
                        title="Galaxy S23 Ultra True View Bundle"
                        price={1899.99}
                        image="https://static.esrgear.com/wp-content/uploads/2023/01/Galaxy-S23-Ultra-True-View-Bundle-1-1.jpg"
                        rating={4}
                    />
                    {/* Product component */}
               </div>
            </div>
        </>
    )
}

export default Home;