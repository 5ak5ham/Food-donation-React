import "./footer.css";

function Footer() {
  return (
    <div className="Foot">
      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a className="footer__link" href="#">
              Twitter
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Github
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              LinkedIn
            </a>
          </li>
          <div className="topRight">
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-x-twitter"></i>
            <i className="topIcon fa-brands fa-square-facebook"></i>
          </div>
        </ul>
        <p className="footer__copyright">Design By Saksham Agrawal</p>
      </footer>
    </div>
  );
}

export default Footer;
