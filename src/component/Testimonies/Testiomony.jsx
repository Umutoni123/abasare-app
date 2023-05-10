import ImageSlider, { Slide } from "react-auto-image-slider";
import test1 from '../../img//test1.jpg'
import test2 from '../../img//test2.jpg'
import test3 from '../../img//test3.jpg'
import '../Testimonies/testimonies.css'
export default function Testiomony() {

  return (
    <div className="test">
      <h1 id="header1">Our Clients Testimonies</h1>      
      <ImageSlider  autoPlayDelay={6000}>
        <Slide>
          <div>
            <div className="test-card">    
               <img  id="card-img" src={test1} alt="image description" />
               <p id="p-test">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              porro sapiente dolore qui harum, eum deleniti pariatur itaque
              veniam exercitationem facilis quae vero sunt tempore, sequi iste
              facere eligendi? Assumenda numquam amet, placeat quaerat,
              excepturi molestias quam accusantium rerum repellendus doloribus
              eligend.
            </p>

            </div>
            
          </div>
        </Slide>
        <Slide>
          <div>
            <div className="test-card">
            <img  id="card-img" src={test2} alt="image description" />
            <p id="p-test">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              porro sapiente dolore qui harum, eum deleniti pariatur itaque
              veniam exercitationem facilis quae vero sunt tempore, sequi iste
              facere eligendi? Assumenda numquam amet, placeat quaerat,
              excepturi molestias quam accusantium rerum repellendus doloribus
              eligend.
            </p>
            </div>
            
          </div>
        </Slide>
        <Slide>
          <div>
            <div className="test-card">
            <img  id="card-img" src={test3} alt="image description"
            class="rounded-full border border-gray-100 shadow-sm"
            />
            <p id="p-test">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              porro sapiente dolore qui harum, eum deleniti pariatur itaque
              veniam exercitationem facilis quae vero sunt tempore, sequi iste
              facere eligendi? Assumenda numquam amet, placeat quaerat,
              excepturi molestias quam accusantium rerum repellendus doloribus
              eligend.
            </p>
            </div>
          </div>
        </Slide>
      </ImageSlider>
    </div>
  );
}
