import React from 'react'
import AstrologerCard from '../Card/AstrologerCard'
import Footer from '../Footer/Footer'
import Faqs from '../Utils/Faqs/Faqs.jsx'

const Home = () => {
    return (
        <div>
            <AstrologerCard />
            <Faqs/>
            <Footer />
        </div>
    )
}

export default Home