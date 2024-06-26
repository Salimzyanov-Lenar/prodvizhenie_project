import React from 'react';
import PropTypes from "prop-types";
import './YoutubeEmbed.css';



const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}?rel=0&showinfo=0&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

