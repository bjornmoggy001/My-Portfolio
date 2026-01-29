import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { myProjects } from '../constants';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-200 border border-black-50 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover object-left  rounded-2xl'
          />
          
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            {/* GitHub Link */}
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-br from-gray-800 to-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <img 
                src="/images/logos/github.png" 
                alt="github"
                className="w-full h-full object-contain" 
              />  
            </div>
            
            {/* Live Demo Link */}
            {live_link && (
              <div 
                onClick={() => window.open(live_link, "_blank")}
                className="bg-gradient-to-br from-blue-600 to-blue-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white-50 text-[14px]'>{description}</p>
        </div>
        
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const AppShowcase = () => {
  return (
    <div id="work" className="section-padding">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-white-50 uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white-50 md:text-xl text-base max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos. 
          It reflects my ability to solve complex problems, work with different technologies, 
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-10'>
        {myProjects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default AppShowcase;