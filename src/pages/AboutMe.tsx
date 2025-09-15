import React from 'react';
import Title from '../components/Title';
import soldierSittingOnWall from '../assets/images/soldier-sitting-on-wall.png';
import catchingFrisbee from '../assets/images/catching-frisbee.png';

const AboutMe: React.FC = () => {
  return (
    <section>
      <Title title="About Me" align="left" />
      <div className="flex flex-col text-brown-p dark:text-pink-p gap-16 laptop:gap-0 text-xl">
        <div className="flex flex-col laptop:flex-row justify-between w-full gap-16 laptop:gap-0">
          <div className="w-full laptop:w-1/2">
            I moved to Israel at eighteen, where I learned Hebrew and enlisted in the Golani Brigade as a combat
            soldier. After completing my service, I taught myself programming and quickly developed a deep passion for
            software development. Since then, I’ve grown into a dedicated engineer while also serving nearly 400 days of
            reserve duty.
          </div>
          <div className="w-full laptop:w-1/2">
            <img className="w-2/3 max-w-80 m-auto" src={soldierSittingOnWall} alt="soldier sitting on wall" />
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row justify-between w-full gap-16 laptop:gap-0">
          <div className="w-full laptop:w-1/2 flex flex-col laptop:justify-end laptop:order-2">
            <div>
              Outside of tech, I’m a professional Ultimate Frisbee player, competing both on the beach and on grass. I’m
              proud to be part of Nivheret Israel and to represent Israel in the World Championships. And for fun, I can
              also ride a unicycle.
            </div>
          </div>
          <div className="w-full mx-auto laptop:w-1/2">
            <img className="h-80 laptop:mr-auto m-auto" src={catchingFrisbee} alt="person catching frisbee" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
