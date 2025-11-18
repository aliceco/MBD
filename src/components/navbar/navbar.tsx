import React, { useState } from 'react'
import './navbar.css'

import Routes from '../../routes/routes'
import { NavLink } from 'react-router-dom'

import mbdLogo from '../../assets/mbd-logo/mbd-logo-yellow.svg'

import HamburgerButton from '../hamburger-button/hamburger-button'

import TranslationModel from '../../pages/model/translationModel'
import LanguageSelect from './language-select/language-select'
import { Line, LineType } from '../lines/line'
import phrases from '../../data/translations.json'

import NavItem from '../nav-item/nav-item'

const Navbar = () => {
    const [mobileMenuOpen, togleMobileMenuOpen] = useState(false)

    return (
        <div className='navbar'>
            {/* Company hpver fpr the menu 
                 Current issues:
                - Won't work well on mobile so should add a conditional rendering that checks
                  if you're on mobile
                - The menu isn't closing down when you click on a link in mobile
                    - due to no on-click that changes the mobileMenuOpen state

                */}

            {/* First part of navbar */}
            {/*MBD logo */}
            <div className='navbar-leading'>
                <NavLink className='no-select' exact to='/'>
                    <img
                        className='navbar-mbd-logo'
                        src={mbdLogo}
                        alt='MBD Logo'
                    />
                </NavLink>
            </div>

            {/* Navbar texts */}
            <div
                className={`navbar-content navbar-padding ${
                    mobileMenuOpen ? 'active' : ''
                }`}
            >
                <div className='navbar-list'>
                    {/* Home */}
                    <NavItem
                        label={TranslationModel.translate(Routes.homePage.name)}
                        path={Routes.homePage.path}
                        items={[]}
                        // onClick={() =>
                        //     togleMobileMenuOpen(!mobileMenuOpen)
                        // }
                    />

                    {/* For Companies */}
                    <NavItem
                        label={TranslationModel.translate(
                            Routes.companyPage.name
                        )}
                        path={Routes.companyPage.path}
                        items={[
                            {
                                label: TranslationModel.translate(
                                    Routes.whatIsPage.name
                                ),
                                path: Routes.whatIsPage.path,
                            },
                            {
                                label: TranslationModel.translate(
                                    phrases.exhibitor_packages
                                ),
                                path: Routes.companyPage.path,
                            },
                            {
                                label: TranslationModel.translate(
                                    Routes.contactPage.name
                                ),
                                path: Routes.contactPage.path,
                            },
                        ]}
                    />

                    {/* For Students */}
                    <NavItem
                        label={TranslationModel.translate(phrases.for_students)}
                        path={''} // doesn't have a page yet
                        items={[
                            {
                                label: TranslationModel.translate(
                                    Routes.studentPage.name
                                ),
                                path: Routes.studentPage.path,
                            },
                            {
                                label: TranslationModel.translate(
                                    Routes.mapPage.name
                                ),
                                path: Routes.mapPage.path,
                            },
                            {
                                label: TranslationModel.translate(
                                    phrases.for_students
                                ),
                                path: '', // This page doesn't exist yet
                            },
                        ]}
                    />
                </div>
                <div className='navbar-list'>
                    <NavItem
                        label={TranslationModel.translate(
                            Routes.contactPage.name
                        )}
                        path={Routes.contactPage.path}
                        items={[]}
                    />
                    {/* Om oss */}
                    <NavItem
                        label={TranslationModel.translate(phrases.about_us)}
                        path={''} //Does not yet have a page
                        items={[]}
                    />
                </div>
            </div>

            <div className='navbar-trailing'>

                 <div className='navbar-trailing-item'>
                    <Line lineType={LineType.vertical} />
                </div>
                
                {/* Language flag */}
                <div className='navbar-trailing-item'>
                    <LanguageSelect />
                </div>

                {/* Line */}
                
                <div className='navbar-mobile-menu-button navbar-trailing-item '>
                    <HamburgerButton
                        onClick={() => {
                            togleMobileMenuOpen(!mobileMenuOpen)
                        }}
                        isActive={mobileMenuOpen}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar

//Old code when the links to social media was in the navbar

// import kthLogo from '../../assets/KTH_logo.png'
// import medieteknikLogo from '../../assets/medieteknik_logo.png'
// import InstagramIconWhite from '../../assets/icons/other/instagram_white.png'
// import FacebookIconWhite from '../../assets/icons/other/facebook_white.png'
// import LinkedIconWhite from '../../assets/icons/other/linked_in_white.png'
// import InstagramIconYellow from '../../assets/icons/other/instagram_icon_yellow.png'
// import FacebookIconYellow from '../../assets/icons/other/facebook_icon_yellow.png'
// import LinkedinIconYellow from '../../assets/icons/other/linkedin_icon_yellow.png'

// const [instagranIcon, setInstagranIcon] = useState(InstagramIconWhite)
// const [FacebookIcon, setFacebookIcon] = useState(FacebookIconWhite)
// const [LinkedInIcon, setLinkedInIcon] = useState(LinkedIconWhite)

// const openFacebook = () => {
//     window.open(
//         'https://www.facebook.com/mediasbranschdag',
//         'Medias Branschdag Facebook'
//     )
// }
// const openInstagram = () => {
//     window.open(
//         'https://www.instagram.com/mediasbranschdag/',
//         'Medias Branschdag Instagram'
//     )
// }
// const openLinkedin = () => {
//     window.open(
//         'https://www.linkedin.com/company/medias-branschdag/',
//         'Medias Branschdag LinkedIn'
//     )
// }

// <img
//                 className='side-logo navbar-trailing-item '
//                 src={instagranIcon}
//                 onMouseEnter={() => setInstagranIcon(InstagramIconYellow)}
//                 onMouseOut={() => setInstagranIcon(InstagramIconWhite)}
//                 alt=''
//                 onClick={openInstagram}
//             />
//             <img
//                 className='side-logo navbar-trailing-item '
//                 src={FacebookIcon}
//                 onMouseEnter={() => setFacebookIcon(FacebookIconYellow)}
//                 onMouseOut={() => setFacebookIcon(FacebookIconWhite)}
//                 alt=''
//                 onClick={openFacebook}
//             />
//             <img
//                 className='side-logo navbar-trailing-item '
//                 src={LinkedInIcon}
//                 onMouseEnter={() => setLinkedInIcon(LinkedinIconYellow)}
//                 onMouseOut={() => setLinkedInIcon(LinkedIconWhite)}
//                 alt=''
//                 onClick={openLinkedin}
//             />

/* --- Previous code where all pages were shown directly on the navbar --- */
//  {Object.values(Routes)
//                         .filter((route) => route.inMenu)
//                         .map((route) => {
//                                 return (
//                                     <NavLink
//                                         exact
//                                         className='navbar-link'
//                                         activeClassName='navbar-link active'
//                                         onClick={() =>
//                                             toogleMobileMenuOpen(!mobileMenuOpen)
//                                         }
//                                         to={route.path}
//                                         key={route.path}
//                                     >
//                                         {TranslationModel.translate(route.name)}
//                                     </NavLink>
//                                 )
//                         })}
