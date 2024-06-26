import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed';

const Home = () => {

    const scrollToContent = () => {
        document.querySelector('.under-home').scrollIntoView({behavior: 'smooth'});
    };
    

    return (
    <>    
        <div className='main__content_home'>
            <div className='hero-section'>
                <div className='hero-content'>
                    <h1>ПРОДВИЖЕНИЕ</h1>
                    <h2>БУДЬ В ДВИЖЕНИИ</h2>
                    <h2>ПРОДАВАЙ ЛЕГКО</h2>
                    <button className='cta-button' onClick={scrollToContent}>НАЧАТЬ ПРОДВИГАТЬСЯ</button>
                    <p className='description'>
                        ПРОдвижение — платформа с бесплатными видеоуроками <br/> о том, как продавать свои товары и услуги в социальных сетях
                    </p>
                </div>
            </div>
        </div>
        <div className='under-home'>
            <div className='under-home-text'>
            <h1>ПРОдвижение — платформа с бесплатными видеоуроками о том, как продавать свои товары и услуги в социальных сетях. Мы многогранный проект. Здесь вы найдете как универсальные уроки, так и материал для старшего поколения. Наша сила — бесплатная обратная связь.Абсолютно каждый желающий может написать экспертной команде и задать свои вопросы. Мы дадим советы, которые помогут вам продвинуть свое дело и решить медиа-проблемы.</h1>
            </div>
            <div className='under-home-video'>
                <YoutubeEmbed embedId="Vh7ndy5iu2w" />
            </div>
            <div className='under-home-button'>
                <Link to="/courses"><button className='cta-under-home-button'>ПЕРЕЙТИ К КУРСАМ</button></Link>
            </div>
        </div>
    </>
    );
};

export default Home;
