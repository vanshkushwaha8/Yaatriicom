import React, { useRef, useState } from 'react'
import './FilterPackage.css'
import bg from '../Assets/product_1.jpg'
import bg1 from '../Assets/product_2.jpg'
import bg2 from '../Assets/product_3.jpg'
import bg3 from '../Assets/product_4.jpg'
import bg4 from '../Assets/product_5.jpg'
import bg5 from '../Assets/product_6.jpg'
import bg6 from '../Assets/product_7.webp'
import bg7 from '../Assets/product_8.webp'
import bg8 from '../Assets/product_9.webp'
import bg9 from '../Assets/product_10.webp'
import bg10 from '../Assets/product_11.webp'
import bg11 from '../Assets/product_12.webp'
import bg12 from '../Assets/product_13.webp'
import bg13 from '../Assets/product_14.webp'
import bg14 from '../Assets/product_15.webp'
import bg15 from '../Assets/product_16.webp'
import bg16 from '../Assets/product_17.webp'
import bg17 from '../Assets/product_18.webp'
import bg18 from '../Assets/product_19.webp'
import bg19 from '../Assets/product_20.webp'
import { Link } from 'react-router-dom'

function FilterPackage() {
  // const [menu,setMenu]= useState("FilterPackage");

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Total number of pages

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [isFiltered, setIsFiltered] = useState(false);
    const [showLeft, setShowLeft] = useState(false);
    const productCardRef = useRef(null);
    const scrollToProductCard = () => {
        if (productCardRef.current) {
          productCardRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    function toggleFilters() {
      setShowLeft(!showLeft);
    }
    
  
    function filterProducts() {
      const checkboxes = document.querySelectorAll(".filter-checkbox");
      const productCards = document.querySelectorAll(".product-card");
  
      productCards.forEach((card) => {
        let showCard = true;
        checkboxes.forEach((checkbox) => {
          if (
            checkbox.checked &&
            card.dataset[checkbox.name] !== checkbox.value
          ) {
            showCard = false;
          }
        });
        if (showCard) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    function clearFilters() {
      const checkboxes = document.querySelectorAll(".filter-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      filterProducts();
    }
    // const filterData = (card) => {
    //     if (
    //         card.dataset["State"] === " " &&
    //         card.dataset["Famous-Cities"] === " " &&
    //         card.dataset["price-range"] === " "
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };
  
    return (
        <div className="producttt">
        <button className="menu-button" onClick={toggleFilters}>
          Menu
        </button>
        <div className={`containert ${showLeft ? "show-left" : ""}`}>
          <div className="left" id="filterOptions">
            <h2 style={{ color: "#F79489" }}>Filters</h2>
            <h3 style={{ color: "#32cd50" }}>State</h3>
            <label>
              <input
                type="checkbox"
                name="State"
                value="Bihar"
                className="filter-checkbox"
              />
              Bihar
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="New-Delhi"
                className="filter-checkbox"
              />
              New Delhi
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Madhya-pradesh"
                className="filter-checkbox"
              />
              Madhya-pradesh
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Goa"
                className="filter-checkbox"
              />
              Goa
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Kashmir"
                className="filter-checkbox"
              />
              Kashmir
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Jharkhand"
                className="filter-checkbox"
              />
              Jharkhand
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Uttarpradesh"
                className="filter-checkbox"
              />
              Uttarpradesh
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Uttarkhand"
                className="filter-checkbox"
              />
              Uttarkhand
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Rajasthan"
                className="filter-checkbox"
              />
              Rajasthan
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Kerala"
                className="filter-checkbox"
              />
            Kerala
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Punjab"
                className="filter-checkbox"
              />
            Punjab
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="West-Bengal"
                className="filter-checkbox"
              />
              West-Bengal
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="State"
                value="Odisha"
                className="filter-checkbox"
              />
              Odisha
            </label>
            <br />
      
            <h3 style={{ color: "#32cd50" }}>Famous-Cities</h3>
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Darbhanga"
                className="filter-checkbox"
              />
              Darbhanga
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Kochi"
                className="filter-checkbox"
              />
              Kochi
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Patna"
                className="filter-checkbox"
              />
              Patna
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Rhisikesh"
                className="filter-checkbox"
              />
              Rhisikesh
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Gao-beach"
                className="filter-checkbox"
              />
              Gao-beach
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Mussoorie"
                className="filter-checkbox"
              />
              Patna
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Manali"
                className="filter-checkbox"
              />
              Manali
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Srinagar"
                className="filter-checkbox"
              />
              Srinagar
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Goa"
                className="filter-checkbox"
              />
              Goa
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Chhattarpur"
                className="filter-checkbox"
              />
              Chhattarpur
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Durgapur"
                className="filter-checkbox"
              />
              Durgapur
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Jaipur"
                className="filter-checkbox"
              />
              Jaipur
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Bhopal"
                className="filter-checkbox"
              />
              Bhopal
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="puri"
                className="filter-checkbox"
              />
              puri
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Kolkata"
                className="filter-checkbox"
              />
              Kolkata
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="humayun-tomb"
                className="filter-checkbox"
              />
              humayun tomb
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Varanasi"
                className="filter-checkbox"
              />
              Varanasi
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Agra"
                className="filter-checkbox"
              />
              Agra
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Ram-mandir"
                className="filter-checkbox"
              />
              Ayodhya
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Udaipur"
                className="filter-checkbox"
              />
              Udaipur
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Jaisalmer"
                className="filter-checkbox"
              />
              Jaisalmer
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Amritsar"
                className="filter-checkbox"
              />
              Amritsar
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Shimla"
                className="filter-checkbox"
              />
              Shimla
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Darjeeling"
                className="filter-checkbox"
              />
              Darjeeling
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Famous-Cities"
                value="Ladak"
                className="filter-checkbox"
              />
              Ladak
            </label>
            <br />
            <h3 style={{ color: "#32cd50" }}>Price-Range</h3>
            <label>
              <input
                type="checkbox"
                name="price-range"
                value="₹5000-9000"
                className="filter-checkbox"
              />
              ₹5000-9000
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="price-range"
                value="₹10000-20000"
                className="filter-checkbox"
              />
              ₹10000-20000
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="price-range"
                value="₹25000-30000"
                className="filter-checkbox"
              />
              ₹25000-30000
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="price-range"
                value="₹30000-60000"
                className="filter-checkbox"
              />
              ₹30000-450000
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="price-range"
                value="₹70000-90000"
                className="filter-checkbox"
              />
              ₹60000-750000
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="price-range"
                value="₹100000-150000"
                className="filter-checkbox"
              />
              ₹100000-150000
            </label>
            <br />
            <button className='add-button' onClick={() => { setIsFiltered(true); scrollToProductCard(); }} style={{ backgroundColor: "#007bff" }}>Apply Filter</button>

            {/* <button onClick={() => setIsFiltered(true)} style={{ backgroundColor: "#007bff" }}>Apply Filter</button> */}
            {/* <button style={{ backgroundColor: "#007bff" }}onClick={filterProducts}>
              Apply Filters
            </button> */}
            <button className='add-button' style={{ backgroundColor: "#ff5722" }} onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
         
          <div className="right"> 
          
          
         <div
      ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Rajasthan"
      data-Famous-Cities="jaipur"
      data-price-range="₹30000-450000"
    >
      <img src={bg1} alt=''/>
      <div className="product-info">
        <h3>Jaipur</h3>
        <p>Admire the grandeur of Amber Fort and shop in the vibrant markets of the Pink City.</p>
        <p>Price: ₹30000-450000</p>
        <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
     <button className='add-button'  >
     <Link  to='/ProductDisplay'>Book Now</Link>
     </button>
        
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


       <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="New-Delhi"
      data-Famous-Cities="humayun-tomb"
      data-price-range="₹60000-75000">
<img src={bg2} alt=''/>
  <div className="product-info">
    <h3>New Delhi</h3>
    <p>Explore the historical Chhattarpur Temple and the nearby Qutub Minar.</p>
    <p>Price: ₹60000-75000</p>
    
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
        <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay1'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


<div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="West-Bengal"
      data-Famous-Cities="Kolkata"
      data-price-range="₹10000-20000" >
<img src={bg3} alt=''/>
  <div className="product-info">
    <h3>Kolkata</h3>
    <p>Immerse yourself in the cultural vibrancy of Victoria Memorial and taste street food in Park Street.</p>
    <p>Price: ₹10000-20000</p>
    
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay2'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


<div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Uttarpradesh"
      data-Famous-Cities="Agra"
      data-price-range="₹10000-20000" >
<img src={bg4} alt=''/>
  <div className="product-info">
    <h3>Agra</h3>
    <p> Marvel at the architectural masterpiece Taj Mahal and explore the Agra Fort.</p>
    <p>Price: ₹10000-20000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay3'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Punjab"
      data-Famous-Cities="Amritsar"
      data-price-range="₹25000-30000"  >
<img src={bg5} alt=''/>
  <div className="product-info">
    <h3>Amritsar</h3>
    <p>Visit the Golden Temple and witness the patriotic fervor at Wagah Border ceremony.</p>
    <p>Price: ₹25000-30000</p>
    
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay4'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Kerala"
      data-Famous-Cities="Kochi"
      data-price-range="₹25000-30000"  >
<img src={bg6} alt=''/>
  <div className="product-info">
    <h3>Kochi</h3>
    <p>Experience the serene backwaters of Alleppey and rejuvenate at the lush tea plantations of Munnar.</p>
    <p>Price: ₹10000-20000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay5'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Kashmir"
      data-Famous-Cities="Srinagar"
      data-price-range="₹25000-30000" >
<img src={bg7} alt=''/>
  <div className="product-info">
    <h3>Srinagar</h3>
    <p>Take a shikara ride on Dal Lake and explore the Mughal Gardens.</p>
    <p>Price: ₹25000-30000</p>
    
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay6'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Jharkhand"
      data-Famous-Cities="Shimla"
      data-price-range="₹10000-20000" >
<img src={bg8} alt=''/>
  <div className="product-info">
    <h3>Shimla</h3>
    <p>Take a heritage walk on the Mall Road and enjoy panoramic views from Jakhu Hill.</p>
    <p>Price: ₹10000-20000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay7'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Bihar"
      data-Famous-Cities="Darbhanga"
      data-price-range="₹25000-30000"  >
<img src={bg9} alt=''/>
  <div className="product-info">
    <h3>Darbhanga</h3>
    <p>Visit the Raj Darbhanga Palace for its grandeur and explore the ancient temples.</p>
    <p>Price: ₹25000-30000</p>
    
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay8'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>

     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="New-Delhi"
      data-Famous-Cities="Chhattarpur"
      data-price-range="₹5000-9000" >
<img src={bg10} alt=''/>
  <div className="product-info">
    <h3>Chhattarpur</h3>
    <p>Explore the historical Chhattarpur Temple and the nearby Qutub Minar.</p>
    <p>Price: ₹5000-9000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay9'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Madhya-pradesh"
      data-Famous-Cities="Bhopal"
      data-price-range="₹10000-20000" >
<img src={bg11} alt=''/>
  <div className="product-info">
    <h3>Bhopal</h3>
    <p>Explore the fascinating Bhimbetka rock shelters and visit the beautiful Upper Lake.</p>
    <p>Price: ₹10000-20000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay10'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Odisha"
      data-Famous-Cities="Puri"
      data-price-range="₹30000-45000"  >
<img src={bg12} alt=''/>
  <div className="product-info">
    <h3>Puri</h3>
    <p>Seek blessings at the Jagannath Temple and relax on the sandy beaches.</p>
    <p>Price: ₹30000-45000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay11'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="West-Bengal"
      data-Famous-Cities="Durgapur"
      data-price-range="₹10000-20000" >
<img src={bg13} alt=''/>
  <div className="product-info">
    <h3>Durgapur</h3>
    <p>Discover the steel industry at the Durgapur Barrage and explore Troika Park.</p>
    <p>Price: ₹10000-20000</p>
    
   <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay12'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


<div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Uttarpradesh"
      data-Famous-Cities="Ayodhya"
      data-price-range="₹30000-45000" >
<img src={bg14} alt=''/>
  <div className="product-info">
    <h3>Ayodhya</h3>
    <p>Visit the revered Ram Janmabhoomi temple site and explore the spiritual significance of Hanuman Garhi.</p>
    <p>Price: ₹30000-45000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay13'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Uttarkhand"
      data-Famous-Cities="Rishikesh"
      data-price-range="₹60000-75000">
<img src={bg15} alt=''/>
  <div className="product-info">
    <h3>Rishikesh</h3>
    <p>Engage in spiritual retreats and adventure sports amidst the serene Himalayan backdrop.</p>
    <p>Price: ₹60000-75000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay14'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


     <div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Goa"
      data-Famous-Cities="Goa-beach"
      data-price-range="₹30000-45000" >
<img src={bg16} alt=''/>
  <div className="product-info">
    <h3>Goa</h3>
    <p>Relax on the pristine beaches and party at the lively nightclubs.</p>
    <p>Price: ₹30000-45000</p>
    
   <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay15'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


<div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Uttarkhand"
      data-Famous-Cities="Nainital"
      data-price-range="₹60000-75000"  >
<img src={bg17} alt=''/>
  <div className="product-info">
    <h3>Nainital</h3>
    <p>Enjoy boating on the picturesque Naini Lake and take a cable car ride to Snow View Point for panoramic views of the Himalayas.</p>
    <p>Price: ₹60000-75000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay16'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


<div ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Uttarkhand"
      data-Famous-Cities="Manali"
      data-price-range="₹30000-45000" >
<img src={bg18} alt=''/>
  <div className="product-info">
    <h3>Manali</h3>
    <p>Experience the thrill of adventure sports in Solang Valley and explore the scenic beauty of Rohtang Pass.</p>
    <p>Price: ₹30000-45000</p>
    
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay17'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>

      
<div  ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Uttarkhand"
      data-Famous-Cities="Mussoorie"
      data-price-range="₹60000-75000"  >
<img src={bg19} alt=''/>
  <div className="product-info">
    <h3>Mussoorie</h3>
    <p> Delight in the scenic beauty of Kempty Falls and take a cable car ride to Gun Hill for breathtaking views of the Himalayas.</p>
    <p>Price: ₹60000-75000</p>
   
    <p>Rating: 
          {[...Array(5)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 3 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay18'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>

 
 <div  ref={productCardRef}
      className={`product-card ${isFiltered ? 'filtered' : ''}`}
      data-State="Rajasthan"
      data-Famous-Cities="Jaisalmer"
      data-price-range="₹30000-45000" >
<img src={bg} alt=''/>
  <div className="product-info">
    <h3>Jaisalmer</h3>
    <p>Explore the majestic Jaisalmer Fort and go on a camel safari in the Thar Desert.</p>
    <p>Price: ₹30000-45000</p>
   
    <p>Rating: 
          {[...Array(9)].map((star, i) => (
            <span key={i} className={`star ${isFiltered ? 'blink' : ''}`} style={{ color: i < 5 ? 'gold' : 'grey' }}>★</span>
          ))}
        </p>
      </div>
      <div className="button-container">
      <button className='add-button'>Add to Wishlist</button>
       <button className='add-button'  >
     <Link  to='/ProductDisplay19'>Book Now</Link>
     </button>
        <button className="add-button" id='check-review'>Check Reviews</button>
      </div>
    </div>


        {/* Other product-card elements here */}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
            <span>Page {currentPage} of {totalPages}</span>
            <button className='add-button' onClick={handlePreviousPage}>PREVIOUS</button>
            {Array.from({ length: totalPages > 10 ? 10 : totalPages }, (_, i) => (
                <button className='add-button' key={i + 1} onClick={() => handlePageClick(i + 1)}>{i + 1}</button>
            ))}
            <button className='add-button' onClick={handleNextPage}>NEXT</button>
        </div>
        </div>
        </div>
       
      </div>
      
  
  )
}

export default FilterPackage
