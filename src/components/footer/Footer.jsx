import "./footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="top">
          <div className="logo-footer"><img src="/logo2.svg" alt="logo" /></div>
          <div className="footer-links">
          <ul>
            <li><a href='https://www.instagram.com/moe_ghourani/'><img src='/instagram_15713420.png' alt='' /></a></li>
            <li><a href='https://www.linkedin.com/in/mohamad-al-ghourani-3b3aa5208/'><img src='/social_12942307.png' alt='' /></a></li>
            <li><a href='https://github.com/mhamadghourani'><img src='/github_3291667.png' alt='' /></a></li>
          </ul>
          </div>
        </div>
          <div className="mid">
            <div className="mid-left">
            <p><strong>Address:</strong> Saadoum st Tripoli-Nord Lebanon</p>
            <p><strong>Phone:</strong> +961 76-541-699</p>
            <p><strong>Email:</strong> mhamadghourani155@gmail.com</p>
            </div>
            <div className="mid-right">
              <a href="/privacypolicy">PRIVACY POLICY</a>
              <a href="/about">ABOUT</a>
            </div>
          </div>
          <div className="bottom">
            <p>Copyright &copy; 2024. All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer