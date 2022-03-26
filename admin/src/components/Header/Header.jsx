import React, {useState, useRef, useEffect} from 'react'
import style from './style.module.scss'
import {v4 as uuidv4} from 'uuid'
import {useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'
import { HandDollar, MenuBars,Envelope, Headset } from '../../icons'
import {SideNavbar, NotificationContainer } from '../../components'

const notifyData = [
    {
        id:uuidv4(),
        title:'Lorem ipsum dolor sit amet',
        content:'labore et dolore magna aliquyam erat, sed diam voluptua',
    },
    {
        id:uuidv4(),
        title:'Lorem ipsum dolor sit amet',
        content:'labore et dolore magna aliquyam erat, sed diam voluptua',
    },
    {
        id:uuidv4(),
        title:'Lorem ipsum dolor sit amet',
        content:'labore et dolore magna aliquyam erat, sed diam voluptua',
    },
    {
        id:uuidv4(),
        title:'Lorem ipsum dolor sit amet',
        content:'labore et dolore magna aliquyam erat, sed diam voluptua',
    },
    {
        id:uuidv4(),
        title:'Lorem ipsum dolor sit amet',
        content:'labore et dolore magna aliquyam erat, sed diam voluptua',
    }
]


const Header = () => {
    const [showSideMenu, setSideMenu] = useState(false)
    const [toggleNotification, setToggleNotification] = useState(false)
    const [toggleMessages, setToggleMessages] = useState(false)
    const headerBgRef = useRef(null)
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.login)
    const {count, calls} = useSelector(state => state.latestCalls)
    const {count:contact_count, contacts} = useSelector(state => state.latestContacts)
    const navigate = useHistory().push
    const page = useLocation().pathname
    



    const toggleNotifyData = type => {    
        if(type === 'Calls'){
            setToggleMessages(false)
            setToggleNotification(prev => !prev)
        }else {
            setToggleNotification(false)
            setToggleMessages(prev => !prev)
        }
    }

    const toggleSideMenuHandler = e => {
        e.stopPropagation()
        if(!showSideMenu) {
            document.body.style.height = '100%'
            document.body.style.overflow = 'hidden'
            setSideMenu(true)
        } else {
            document.body.style.height = 'unset'
            document.body.style.overflow = 'unset'
            setSideMenu(false)
        }
    }

    window.addEventListener('click', () => {
        setSideMenu(false)
        document.body.style.height = 'unset'
        document.body.style.overflow = 'unset'
    })

    useEffect(() => {
       if(isAuth) {
         dispatch(actions.calls.latestCalls())
         dispatch(actions.contacts.latestContacts())
       }
    },[isAuth])

    return (
        <>
            <div className={style.header__bg}
            ref={headerBgRef}
            style={{display: showSideMenu ? 'block' : 'none'}}></div>
            
            <div className={style.header}
            style={{
                display: page === '/login'  ?'none' :'block'
                }}>
               
                <div className="container">
                    <div className={style.header__wrapper}>
                        
                        {/* display the main icon */}
                        <div className={style.header__icon}>
                            <span onClick={() => navigate('/')}>
                                <HandDollar/>
                            </span>
                            
                            {isAuth && 
                            <span className={style.header__bars}
                            onClick={toggleSideMenuHandler}>
                                <MenuBars/>
                            </span>}
                        </div>
                        
                        {/* display side menu */}
                        {isAuth && 
                        <SideNavbar 
                        showSideMenu={showSideMenu}
                        setSideMenu={setSideMenu}
                       />}
                        
                        {/* display the actions buttons */}
                        <div className={style.header__actions}>
                            {/* display the messages and notifications   */}
                            <div className={style.header__notify}>

                                <div className={style.header__notify_list}></div>
                                <span onClick={() => toggleNotifyData('Calls')}>
                                   {count && <span className={style.header__notify_num}>
                                        {count}
                                    </span>}
                                    <Headset/>
                                </span>
                                <span onClick={() => toggleNotifyData('messages')}>
                                   {contact_count && <span className={style.header__notify_num}>{contact_count}</span>} 
                                    <Envelope/>
                                </span>
                                <span style={{bottom:'5px'}}>
                                    <img src="/images/avatar.png" alt="personal avatar" />
                                </span>
                                
                                {/* Notification List */}
                                {toggleNotification 
                                && <NotificationContainer 
                                setToggleNotification={setToggleNotification}
                                setToggleMessages={setToggleMessages}
                                title='Calls' 
                                data={calls}/>}
                                
                                {/* Messages List */}
                                {toggleMessages 
                                && <NotificationContainer 
                                setToggleNotification={setToggleNotification}
                                setToggleMessages={setToggleMessages}
                                title='Contacts' 
                                data={contacts}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
