import React from 'react';
import Navbar from '../components/layout/navbar.layout';
import Footer from '../components/layout/footer.layout';

function Home() {
    return (
        <div className="home default-theme">
            {/* Header section */}
            <header>
                <Navbar />
            </header>
            Home
            <Footer />
        </div>
    );
}

export default Home;
