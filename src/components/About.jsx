import React, { Component } from 'react';
import RainBow from './hoc/rainbow';

const About = () => {
    return ( 
        <div className="container">
            <h4 className="center"> About </h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ab cupiditate quaerat voluptas, dolore nisi modi architecto at,
                voluptate explicabo soluta laboriosam reiciendis commodi nesciunt
                accusamus velit similique odit fugit magni! </p>
        </div>
     );
}
 
export default RainBow(About);