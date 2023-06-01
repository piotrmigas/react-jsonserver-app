import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>Double-click for toggle</div>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
