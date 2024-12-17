import { ArrowUpward, Facebook, Telegram, WhatsApp, X} from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
import Newsletter from '../Newsletter/Newsletter';
import { socialLinks } from '../../data';
import Promotion from '../../assets/promotion_1xbet.png';

const Footer = ({user}) => {
    const [isAdmin, setIsAdmin] = useState(null);

    const handleScroll = (e) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })}

      useEffect(() => {
        if(user !== null){
            if(user.email === 'kkibetkkoir@gmail.com' || user.email === 'charleykibet254@gmail.com' || user.email === 'aronkorir8@gmail.com') {
                setIsAdmin(true)
            } else {
                setIsAdmin(false)
            }
        }
      }, [user])
    return (
        <div className='footer theme'>
            <Link to={socialLinks.promotion} title='200% bonus' target='_blank'><img src={Promotion} alt="1xbet" /></Link>
            <div className="wrapper">
                <div className="sections">
                <section>
                    <h3>Flash VIP Tips</h3>
                    <div className="container">
                        <NavLink to="/" title='healthgen'>HOME</NavLink>
                        <NavLink to="/tips" title='books'>GET TIPS</NavLink>
                        <NavLink to="/blogs" title='contact'>READ BLOGS</NavLink> 
                        <NavLink to="/about" title='contact'>ABOUT US</NavLink>

                    </div>
                </section>
                <section>
                    <h3>USEFUL LINKS</h3>
                    <div className="container">
                        <NavLink to="/login" title='login'>LOGIN</NavLink>
                        <NavLink to="/register" title='register'>REGISTER</NavLink>
                        <NavLink to="/pay" title='get vip'>GET VIP</NavLink>
                        <Link to={socialLinks.affliateLink} title='contact' target='_blank'>SPIN & WIN</Link>
                        {isAdmin && <>
                            <NavLink to="/admin/tips" title='contact'>ADD TIP</NavLink>
                            <NavLink to="/admin" title='contact'>ADD NEWS</NavLink>
                            <NavLink to="/users" title='contact'>ALL USERS</NavLink>
                        </>}
                    </div>
                </section>
                </div>
                <section>
                    <Newsletter />
                    <div className='social'>
                <h4>Follow us</h4>
                <div className='wrapper'>
                    <Link to={socialLinks.telegramChannel}  title='@powerkingtips' target='_blank' className="telegram">
                        <Telegram />
                        <div className="tooltip">Telegram</div>
                    </Link>
                    <Link to={socialLinks.whatsappChannel} title='whatsapp' target='_blank' className="whatsapp">
                        <WhatsApp />
                        <div className="tooltip">Whatsapp</div>
                    </Link>
                    <Link to={socialLinks.facebookPage} title='facebook' target='_blank' className="facebook">
                        <Facebook />
                        <div className=" tooltip">Facebook</div>
                    </Link>
                    <Link to={socialLinks.xPage} title='x' target='_blank' className="x">
                        <X />
                        <div className="tooltip">X(Twitter)</div>
                    </Link>
                </div >
                
                    </div>
                </section>
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; Flash VIP TIPS {new Date().getFullYear()}</p>
                <button className={`btn-top`} onClick={() => handleScroll()} aria-label="to-top"><ArrowUpward/></button>
            </div>
        
        </div>
    );
}

export default Footer;
