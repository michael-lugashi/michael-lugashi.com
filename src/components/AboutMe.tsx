import React from 'react';
import Title from './Title';
import computer from '../assets/images/computer.png';
import frisbee from '../assets/images/frisbee.png';

const AboutMe: React.FC = () => {
  return (
    <section className="p-20">
      <Title title="About Me" align="left" />
      <div className="flex flex-col text-brown-p gap-16 laptop:gap-0">
        <div className="flex flex-col laptop:flex-row justify-between w-full gap-16 laptop:gap-0">
          <div className="w-full laptop:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
          <div className="w-full laptop:w-1/2">
            <img className="w-2/3 max-w-80 m-auto" src={computer} alt="computer" />
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row justify-between w-full gap-16 laptop:gap-0">
          <div className="w-full laptop:w-1/2 flex flex-col laptop:justify-end laptop:order-2">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </div>
          </div>
          <div className="w-full mx-auto laptop:w-1/2">
            <img className="laptop:w-5/6 w-2/3 max-w-96 laptop:mr-auto m-auto" src={frisbee} alt="frisbee" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
