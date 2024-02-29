import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Seok Ki Yoon</span>
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
