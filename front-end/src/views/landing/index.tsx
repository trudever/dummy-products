import { Link } from 'react-router-dom';

const Landing = () => (
  <div className='flex flex-col md:flex-row h-screen bg-[url("/assets/welcome.png")] bg-cover'>
    <div className='bg-[#00000070] w-full h-full text-white select-none relative'>
      <div className='absolute h-full w-[100vw] bg-[#000000a0] transition-all duration-200'>
        <div className='h-full py-8 px-12 md:px-32 flex flex-col justify-around items-center'>
          <div>
            <h1 className='text-[48px] uppercase text-center mt-16 p-4'>
              WELCOME
            </h1>
            <p className='w-full text-center'>
              This is a small application that fetches and displays dummy product data
              <br />
              {
                'Tech used: React, Redux, Typescript, TailwindCSS, Express(Node.js), Webpack(CRA)'
              }
            </p>
          </div>
          <Link
            to='/dashboard'
            className='bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 w-fit p-[15px_30px] rounded-xl uppercase text-lg'
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
