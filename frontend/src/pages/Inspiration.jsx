import React, { useEffect, useState } from 'react';
import './Inspiration.css';

const Inspiration = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/inspiration-images/');
                
                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке изображений: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    const text = await response.text();
                    throw new Error(`Ответ не является JSON: ${text}`);
                }

                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error.message);
            }
        };

        fetchImages();
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='main__content'>
            <p>ВДОХНОВЛЯЙТЕСЬ, ВДОХНОВЛЯЙТЕ!</p>
            <div className='image-gallery'>
                {images.map(image => (
                    <div key={image.id} className='image-item'>
                        <img 
                            src={image.image} 
                            alt={image.caption} 
                            onClick={() => handleImageClick(image)}
                            onError={(e) => console.error('Ошибка загрузки изображения:', e)} 
                        />
                        {image.caption && <p>{image.caption}</p>}
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className='modal' onClick={handleCloseModal}>
                    <span className='close'>&times;</span>
                    <img className='modal-content' src={selectedImage.image} alt={selectedImage.caption} />
                    <div className='caption'>{selectedImage.caption}</div>
                </div>
            )}
        </div>
    );
};

export default Inspiration;
