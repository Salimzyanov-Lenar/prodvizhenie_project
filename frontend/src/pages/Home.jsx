import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='main__content_home'>
            <div className='hero-section'>
                <div className='hero-content'>
                    <h1>ПРОДВИЖЕНИЕ</h1>
                    <h2>БУДЬ В ДВИЖЕНИИ</h2>
                    <h2>ПРОДАВАЙ ЛЕГКО</h2>
                    <button className='cta-button'>НАЧАТЬ ПРОДВИГАТЬСЯ</button>
                    <p className='description'>
                        ПРОдвижение — платформа с бесплатными видеоуроками <br/> о том, как продавать свои товары и услуги в социальных сетях
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
