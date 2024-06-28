import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    const handleClick = () => {
        navigate('/courses');
    };

    return (
    <>    
        <div className='main__content_home'>
            <div className='hero-section'>
                <div className='hero-content'>
                    <h1><span className='highlight'>ПРО</span>ДВИЖЕНИЕ</h1>
                    <h2>БУДЬ В <span className='highlight'>ДВИЖЕНИИ</span></h2>
                    <img src="./images/logo-light-blue.png" alt="Логотип" className="logo" />
                    <h2>ПРОДАВАЙ &nbsp;&nbsp;ЛЕГКО</h2>
                    <button className='cta-button' onClick={handleClick}>НАЧАТЬ ПРОДВИГАТЬСЯ</button>
                    <p className='description'>
                        ПРОдвижение — платформа с бесплатными видеоуроками <br/> о том, как продавать свои товары и услуги в социальных сетях
                    </p>
                </div>
            </div>
        </div>
        <div className='anchor__main-page'></div>
        <div className='main__content'>
            <div className='background-right'></div>
            <div className='background-left'></div>
            <div className='about-text-left'>
                Что такое <br/> ПРОДВИЖЕНИЕ?
            </div>
            <div className='about-text-right'>
            ПРОдвижение — платформа с бесплатными видеоуроками о том, как продавать свои товары и услуги в социальных сетях.<br/><br/>
                Мы многогранный проект. Здесь вы найдете как универсальные уроки, так и материал для старшего поколения.<br/><br/>
                Наша сила — бесплатная обратная связь.
                Абсолютно каждый желающий может написать экспертной команде и задать свои вопросы.
                Мы дадим советы, которые помогут вам продвинуть свое дело и решить медиа-проблемы.
            </div>
        </div>
        <div className='about-bottom-content'>
            <div className='about-bottom-video'>
                <YoutubeEmbed embedId="Vh7ndy5iu2w" />
            </div>
            <div className='new-background-left'></div>
            <div className='new-background-right'></div>
        </div>
    </>
    );
};

export default Home;
