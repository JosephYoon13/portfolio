import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transtion={{ duration: 0.5 }}
        >
          Seok Ki Yoon
        </motion.span>
        <div className='social'>
          <a href=''>
            <img src='/facebook.png' alt='' />
          </a>
          <a href=''>
            {/* github */}
            <img src='/instagram.png' alt='' />
          </a>
          <a href=''>
            {/* linkedin */}
            <img src='/youtube.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
