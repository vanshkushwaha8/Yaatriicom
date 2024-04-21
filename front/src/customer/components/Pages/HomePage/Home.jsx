import React from 'react'
// import MainCarosel from '../../HomeCarosel/MainCarosel'
// import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel'
// import {mens_kurta} from "../../../../Data/Men/men_kurta.js"
import HomePage from '../../Home/HomePage/HomePage.jsx'
import Packages from '../../Home/Packages/Packages.jsx'
import Connect from '../../Home/Connect/Connect.jsx'
import Footer from '../../Home/Footer/Footer.jsx'

const Home = () => {
  return (
    <div>
      {/* <MainCarosel/>
      <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/> */}
      {/* </div> */}
      <HomePage/>
    <Packages/>
    <Connect/>
    <Footer/>
    </div>
  )
}

export default Home
