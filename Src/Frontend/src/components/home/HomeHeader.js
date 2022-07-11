
import React from 'react';
import { connect } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import Menu from "../common/MenuList";
import { ToastContainer, toast } from 'react-toastify';


class HomeHeader extends React.Component {
    render() {
        return (
            <>
                <ToastContainer>
                </ToastContainer>

                <div className='header'>
                    <div className="content mx-auto">
                        <div className='flex align-center'>
                            <img alt='' src='/img/logo.png' className='header-logo-img' />
                        </div>
                        <div className='menu-container flex1 align-center flex justify-center'>
                            <span className='menu' style={{color: '#04B0FA'}}>|</span>
                            <span className='menu'>
                                <a href='/'>HOME</a>
                            </span>
                            {/* <span className='menu'>
                                <a>STORY</a>
                            </span> */}
                            <span className='menu'>
                                <a href='mailto:help@info@peacetokenfinance.in'>CONTACT</a>
                            </span>
                            <span className='menu'>
                                <a href="#section-faq">FAQ</a>
                            </span>
                            <span className='menu flex1'></span>
                        </div>
                        <a id='launch_btn' className='btn action-btn' href='/app'>
                            LAUNCH APP
                        </a>
                        <span className='header-icon' onClick={() => { window.open("https://discord.gg/9Ms9zwfG") }}><i className="fab fa-discord"></i></span>
                        {/* <span className='header-icon' onClick={() => { window.open("https://www.hotbit.io/exchange?symbol=PEACE_USDT") }}><i className="fab fa-facebook-f"></i></span> */}
                        <span className='header-icon' onClick={() => { window.open("https://twitter.com/peace_tokenfin") }}><i className="fab fa-twitter"></i></span>
                        <a id='launch_sm_btn' href="#">
                            <StyledEngineProvider injectFirst>
                                <Menu />
                            </StyledEngineProvider>,
                        </a>
                    </div>
                </div>
                <div className='header_border'></div>
            </>
        );
    }
}
const mapStateToProps = state => {
    return { state };
}
export default connect(mapStateToProps)(HomeHeader);

