import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navigation from '../customer/components/Navigation/Navigation'
import Cart from '../customer/components/Cart/Cart';
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderDetails from '../customer/components/Order/OrderDetails';
import Order from '../customer/components/Order/Order'
import PaymentSuccess from '../customer/Payment/PaymentSuccess';
import Map from '../customer/components/Product/Map.js';
import MainPages from '../Components/Main/MainPages.jsx'
import About from "../Components/About/About.jsx";
import Guide from "../Components/Tourguide/Guide.jsx";
import Wishlist from "../Components/Wishlist/Wishlist.jsx";
import ContactApp from "../Components/Contact/ContactApp.jsx";
import FeedbackForm from '../Components/Feedbacks/FeedbackForm.jsx';
// import {Homes} from "../Components/Pages/Homes.js";







const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
      <Routes>
        <Route path='/' element={<MainPages/>} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Tour" element={<Tour />} /> */}
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/ContactApp" element={<ContactApp />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        {/* <Route path="/Pages" element={<Homes />} /> */}
        {/* <Route path="/feedback" element={<Feedback />} /> */}
        {/* <Route path="/getFeedback" element={<GetFeedback />} /> */}
        {/* <Route path="/userProfile" exact element={<UserProfile />} /> */}
        {/* <Route path="/editProfile" exact element={<EditProfile />} /> */}
        {/* <Route path="/userTourTable" element={<UserTourTable />} /> */}
        {/* <Route path="/add-tourists" element={<AddTourist />} /> */}
        {/* <Route path="/getBookedTours" element={<GetBookedTours />} /> */}
        {/* <Route path="/getByBudget" element={<UserSearchByBudget />} /> */}
        {/* <Route path="/gettours" element={<UserSearchTour />} /> */}
        {/* <Route path="/getbydestination/:destination" element={<UserSearchByDestination />} /> */}
        {/* <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} /> */}

        <Route path='/cart' element={<Cart/>} />
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/account/order' element={<Order/>} />
        <Route path='/account/order/:orderId' element={<OrderDetails/>} />
        <Route path='/payment/:orderId' element={<PaymentSuccess/>} />
        <Route path='/map' element={<Map/>}/>


        {/* <Route path="/admin" element={<Admin />} />
          <Route path="/addTour" element={<AddTour />} />
          <Route path="/updateTour/:tourId" element={<UpdateTour />} />
          <Route path="/tourTable" element={<TourTable />} />
          <Route path="/search" element={<SearchTour />} />
          <Route path="/getallbookings" element={<GetAllBookedTours />} />
          <Route path="/searchbydestination/:destination" element={<SearchByDestination />} />
          <Route path="/searchByBudget" element={<SearchByBudget />} /> */}


      </Routes>
      <div>
      {/* <Footer/> */}
      </div>
    </div>
  )
}

export default CustomerRoutes
