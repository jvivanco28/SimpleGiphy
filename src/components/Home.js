import React from 'react';
import { Jumbotron } from 'reactstrap';

const random = () => {
    return (
        <Jumbotron>
            <h1>Crazy About Gifs</h1>

            <iframe
                title="home"
                src="https://giphy.com/embed/l2JI304n1oBhOPYXu"
                width="480"
                height="270"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen/>

        </Jumbotron>
    );
};

export default random;