import ImageSlider, { Slide } from "react-auto-image-slider";
import test1 from '../../img//test3.jpg'
import '../Testimonies/testimonies.css'
export default function Testiomony() {
  return (
    <div>
        <h1>What Our Clients Say’s</h1>
      <ImageSlider effectDelay={500} autoPlayDelay={1000}>
        <Slide>
          <div>
            <h1>Lorem1</h1>
            <div className="test-card">
                
               <img  id="card-img" src={test1} alt="image description" />
               <p>
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
            <h1>Lorem3</h1>
            <div className="test-card">
            <img  id="card-img" src={test1} alt="image description" />
            <p>
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
            <h1>Lorem4</h1>
            <div className="test-card">
            <img  id="card-img" src={test1} alt="image description"
            class="rounded-full border border-gray-100 shadow-sm"
            />
            <p>
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
