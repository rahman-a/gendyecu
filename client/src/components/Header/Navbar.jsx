import React, {useRef, useState} from 'react'
import style from './style.module.scss'
import {Logo, Person, Search, ShoppingCart} from '../icons'

const Nav = () => {
    const searchRef = useRef(null)
    const [isToggle, setIsToggle] = useState(false)
    const items = ['home', 'courses', 'tuning files', 
    'our blog', 'immo off files', 'hardwares tools',
    'gallery', 'airbag clear crash', 'ecu programmers', 'contact us']
    // eslint-disable-next-line no-script-url
    let url ='javascript:void(0)'
    const toggleSearchBar = _ => {
        if(!isToggle){
            searchRef.current.style.opacity = '1'
            setIsToggle(true)
        }else {
            searchRef.current.style.opacity = 0
            setIsToggle(false)
        }
    }
    return (
        <div className={style.header__navbar}>
            <div className='container'>
                <div className={style.header__navBlock}>
                    <Logo className={style.header__logo}/>
                    <div className={style.header__links}>
                        <ul className={style.header__list}>
                            {items.map((item,i) =>{
                             return <li key={i} className={style.header__item}>
                                 <a href={url} className={style.header__link}>{item.toLocaleUpperCase()}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className={style.header__actions}>
                        <div className={style.header__signIn}>
                            <Person/>
                            <span style={{marginLeft:'.5rem'}}>sign in</span>
                        </div>
                        <div className={style.header__search}>
                            <input type="text" placeholder='search...' ref={searchRef}/>
                            <span onClick={toggleSearchBar}>
                                <Search/>
                            </span>
                        </div>
                        <ShoppingCart/>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default Nav
