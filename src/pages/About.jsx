import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div>
      <h1 className='text-9xl mb-6'>Weather App</h1>
      <p className='mb-4 text-5xl font-light mb-10 text-rose-700 font-normal'>
        A React app to show the weather in your city
        <strong></strong>
      </p>
      <p className='text-3xl text-black-400 mb-2 font-black '>
        Made By:
        <a
          className='text-rose-700 ml-5 font-medium'
          href='https://twitter.com/Carlos_m_32'>
          Carlos Martinez
        </a>
      </p>
      <p className='text-3xl text-black mb-2 font-black'>
        Version :<span className='text-rose-700 ml-5 font-medium'>1.0.0</span>
      </p>
      <p className='text-3xl text-black font-black'>
        Github repo:
        <a
          className='text-rose-700 ml-5 font-medium '
          href='https://github.com/cmart88/weather-app'>
          Weather App
        </a>
      </p>
    </div>
  );
}

export default About;
