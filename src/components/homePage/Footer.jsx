import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <NavLink className="footer-logo">
            <div><img src="" alt="" /></div>
        </NavLink>
        <NavLink className="footer-menu">
            <div className='footer-div'>О компании</div>
            <div className='footer-div'>Контакты</div>
            <div className='footer-div'>Ваканции</div>
            <div className='footer-div'>Статьи</div>
            <div className='footer-div'>Политика обработки персональных данных</div>
        </NavLink>
        <NavLink className="footer-icons">
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
        <div className='ftr'>
        <div className="footer-item2">
            <img class="xs" src="./assets/images/Union.png" alt=""/>
            <img class="xs" src="./assets/images/Vector.png" alt=""/>
            <img class="xs" src="./assets/images/Subtract.png" alt=""/>                
            <img class="xs" src="./assets/images/Vector(1).png" alt=""/>
        </div>
            <div className="footer-item">
                <img src="./assets/images/Frame 156.png" alt=""/>
            </div>
        </div>
        <div className="footer-item"></div>
        </NavLink>
    </footer>
  )
}

export default Footer
