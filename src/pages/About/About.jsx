import React from 'react';
import { useParams } from 'react-router-dom';


const About = () => {

  const { text } = useParams();

  return (
    <div>
      <h1 className='title'>
        { text }
      </h1>
    </div>
  )
}

export default About