import React from 'react';
import Title from './Title';
import computer from '../assets/images/computer.png';
import frisbee from '../assets/images/frisbee.png';

const AboutMe: React.FC = () => {
  return (
    <section className="py-20">
      {/* Header Section */}
      <Title title="About Me" align="left" />
      <div className="flex flex-col text-brown-p">
        <div className="flex flex-row justify-between w-full">
          <div className="w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
          <div className="w-1/2">
            <img className="w-2/3 max-w-80 m-auto" src={computer} alt="computer" />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-1/2">
            <img className="w-5/6 max-w-96 mr-auto" src={frisbee} alt="frisbee" />
          </div>
          <div className="w-1/2 flex flex-col justify-end">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
