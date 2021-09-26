import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Reviews from './Reviews/Reviews';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Reviews />
        </div>
    );
}

export default HomePage;