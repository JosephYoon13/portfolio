import { useRef } from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: '/people.webp',
    desc: 'asdf asfd asdf asdf asfd asf asf asdf  saff asdfadsf asdf asf dsaf saf saf dsa asdf fasf sa fsda f sadf sd f  sdf sfasdfas fdsafdsa fasfdasfsafsda fsdaf asdffs daf .',
  },
  {
    id: 2,
    title: 'Music App',
    img: '/people.webp',
    desc: 'asdf asfd asdf asdf asfd asf asf asdf  saff asdfadsf asdf asf dsaf saf saf dsa asdf fasf sa fsda f sadf sd f  sdf sfasdfas fdsafdsa fasfdasfsafsda fsdaf asdffs daf .',
  },
  {
    id: 3,
    title: 'Datin App',
    img: '/people.webp',
    desc: 'asdf asfd asdf asdf asfd asf asf asdf  saff asdfadsf asdf asf dsaf saf saf dsa asdf fasf sa fsda f sadf sd f  sdf sfasdfas fdsafdsa fasfdasfsafsda fsdaf asdffs daf .',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className='projects' ref={ref}>
      <div className='progress'>
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
