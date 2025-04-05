import React from 'react'
import AstrologerCard from '../Card/AstrologerCard'
import Footer from '../Footer/Footer'
import Faqs from '../Utils/Faqs/Faqs.jsx'
import Header from '../Header/Header.jsx'
import Carousal from '../Cursoler/Cursoler.jsx'
const Home = () => {
    return (
        <div>
            <Header />
            <Carousal />
            <AstrologerCard />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Home