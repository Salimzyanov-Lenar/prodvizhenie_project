import React, { useEffect, useState } from 'react';
import './Team.css';


const Team = () => {
    const [teamCards, setTeamCards] = useState([]);


    useEffect(() =>{
        const fetchTeamCards  = async () => {
            try{
                const response = await fetch('http://127.0.0.1:8000/api/team-card/');
                
                if (!response.ok) {
                    throw new Error(`Ошибра при загрузке изображение: ${response.statusText}`);
                }

                const data = await response.json();
                setTeamCards(data);
            } catch(error) {
                console.error('Ошибка при выполнении запроса:', error.message)
            }
        };

        fetchTeamCards();
    }, []);

    return (
        <div className='team__content'>
                <p>БУДЕМ ЗНАКОМЫ! <br/>
                А ЭТО НАШИ КРЕАТИВНЫЕ СПИКЕРЫ</p>
            <div className='team-gallery'>
                {teamCards.map(card => (
                    <div key={card.id} className='team-item'>
                        <img
                            src={card.image}
                            alt={card.name}
                            onError={(e) => console.error('Ошибка загрузки изображения:', e)}
                        />
                        <div className='team-details'>
                            <h2>{card.name}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
