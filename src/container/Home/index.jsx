import React from 'react';
import { HomeStyle } from './home.style';
import Button from '../../components/button';

function Home(){
    return(
        <HomeStyle>
            <Button type="btn">Previous</Button>
            <Button type="btn">Next</Button>
            <img
          src="/image/header-bg-low.jpg"
          alt="bg"
        />
        </HomeStyle>
    );
}

export default Home;