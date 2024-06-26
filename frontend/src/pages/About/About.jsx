import React from 'react';
import './About.css';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';

const About = () => {
    return (
    <>
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

export default About;
