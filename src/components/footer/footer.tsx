import React, { FC, useState } from 'react'
import './footer.css'
import CompanyLogoList from '../company-logo-list/company-logo-list'
import { MBDCompanyContext } from '../../contexts/mbd-company-provider'
import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../layout/content-section/content-section'
import SectionTitle from '../section-title/section-title'
import TextSection, { TextSectionAlignment } from '../text-section/text-section'
import TranslationModel from '../../pages/model/translationModel'
import phrases from '../../data/translations.json'
import { isMobile, isSafari } from 'react-device-detect'
import { NavLink } from 'react-router-dom'
import ScrollToTop from '../../hooks/scrollToTop'
import ExternalIcon from '../../assets/icons/other/external-link-outline.svg'
import MailIcon from '../../assets/icons/other/mail-white-material.svg'

import InstagramIconWhite from '../../assets/icons/other/instagram_white.png'
import FacebookIconWhite from '../../assets/icons/other/facebook_white.png'
import LinkedIconWhite from '../../assets/icons/other/linked_in_white.png'
import InstagramIconYellow from '../../assets/icons/other/instagram_icon_yellow.png'
import FacebookIconYellow from '../../assets/icons/other/facebook_icon_yellow.png'
import LinkedinIconYellow from '../../assets/icons/other/linkedin_icon_yellow.png'


const Footer: FC<{}> = (props) => {
    /*
    const preparing = (
        <ContentSection>
            <SectionTitle>
                {TranslationModel.translate(phrases.in_preparation)}
            </SectionTitle>
        </ContentSection>
    )

    const companyInfo = (
        <>
            <MBDCompanyContext.Consumer>
                {(companies) => {
                    return companies.isMainSponsor.length > 0 ? (
                        <ContentSection>
                            <SectionTitle>
                                {TranslationModel.translate(
                                    phrases.main_sponsor
                                )}
                            </SectionTitle>
                            <div className='footer-main-sponsor'>
                                {companies.isMainSponsor.map((company) => {
                                    return (
                                        <div
                                            key={company.id}
                                            className='footer-main-sponsor-item'
                                        >
                                            <img
                                                src={
                                                    '/assets/companies/' +
                                                    company.logo_path
                                                }
                                                alt=''
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </ContentSection>
                    ) : null
                }}
            </MBDCompanyContext.Consumer>

            <ContentSection>
                <SectionTitle>
                    {TranslationModel.translate(phrases.exhibitors)}
                </SectionTitle>
                <MBDCompanyContext.Consumer>
                    {(companies) => (
                        <CompanyLogoList companies={companies.isExhibitor} />
                    )}
                </MBDCompanyContext.Consumer>
            </ContentSection>

            <MBDCompanyContext.Consumer>
                {(companies) => {
                    //console.log(companies.isLecturer)
                    return companies.isLecturer.length > 0 ? (
                        <ContentSection>
                            <SectionTitle>
                                {TranslationModel.translate(phrases.lecturers)}
                            </SectionTitle>
                            <MBDCompanyContext.Consumer>
                                {(companies) => (
                                    <CompanyLogoList
                                        companies={companies.isLecturer}
                                    />
                                )}
                            </MBDCompanyContext.Consumer>
                        </ContentSection>
                    ) : null
                }}
            </MBDCompanyContext.Consumer>

            <ContentSection>
                <SectionTitle>
                    {TranslationModel.translate(phrases.thankyou_sponsor)}
                </SectionTitle>
                <MBDCompanyContext.Consumer>
                    {(companies) => (
                        <CompanyLogoList companies={companies.isSponsor} />
                    )}
                </MBDCompanyContext.Consumer>
            </ContentSection>
        </>
    )
    */

    const [instagranIcon, setInstagranIcon] = useState(InstagramIconWhite)
    const [FacebookIcon, setFacebookIcon] = useState(FacebookIconWhite)
    const [LinkedInIcon, setLinkedInIcon] = useState(LinkedIconWhite)

    const openFacebook = () => {
        window.open(
            'https://www.facebook.com/mediasbranschdag',
            'Medias Branschdag Facebook'
        )
    }
    const openInstagram = () => {
        window.open(
            'https://www.instagram.com/mediasbranschdag/',
            'Medias Branschdag Instagram'
        )
    }
    const openLinkedin = () => {
        window.open(
            'https://www.linkedin.com/company/medias-branschdag/',
            'Medias Branschdag LinkedIn'
        )
    }

        return (
            <MBDCompanyContext.Consumer>
                {(companies) => {
                    return (
                        <div >
                            {/*{companies.all.length > 0 ? companyInfo : preparing}*/}

                            <ContentSection
                                background={ContentSectionBackground.dark}
                                size={ContentSectionSize.large}
                                
                            >
                                

                                <div className='footer-container'>
                                    <div className=''>
                                            <ScrollToTop/>
                                            <NavLink exact to='/' 
                                            onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}
                                            className='footer-logo'>

                                            <img
                                            src='https://storage.googleapis.com/medieteknik-static/static/dark_logobig.webp'
                                            className='media-logo'
                                            width={320}
                                            height={128}
                                            loading={'lazy'}
                                            />

                                            </NavLink>
                                        </div>
                            
                                    <ul className='footer-list'>

                                        <li className='footer-item center-sponsor'>
                                            <p className=''>
                                            {TranslationModel.translate(
                                                phrases.sponsored_by)}
                                            </p>
                                            
                                            <img
                                                src='./assets/companies/eyevinn.png'
                                                width={240}
                                                className=''
                                            />
                                        </li>
                                        <li className='footer-item location'>
                                            <h4 className=''>
                                            {TranslationModel.translate(
                                                phrases.location)}
                                            </h4>
                                            <p className=''>
                                                Drotting Kristinas väg 15 <br /> 100 44 Stockholm <br />{' '}
                                                <span className=''>
                                                    c/o THSMEDIES
                                                </span>
                                            </p>
                                        </li>
                                        <li className='footer-item contact'>
                                            <h4 className=''>
                                                <NavLink
                                                    exact to='/contact'
                                                    className='contact-link'
                                                >
                                                    {TranslationModel.translate(
                                                    phrases.contact)}
                                                    <img
                                                        src={ExternalIcon}
                                                        alt=''
                                                        className='external-link icon'
                                                    />
                                                </NavLink>
                                            </h4>
                                            <div className='contact-details'>
                                                
                                                <a
                                                    href='mailto:foretag@nlg.medieteknik.com'
                                                    className=''
                                                >
                                                    <span>foretag@nlg.medieteknik.com</span>
                                                </a>
                                            </div>
                                            <h4>
                                                {TranslationModel.translate(
                                                phrases.follow_social_media)}
                                            </h4>
                                            <div className='social content'>
                                                <img
                                                    className='social-logo'
                                                    src={instagranIcon}
                                                    onMouseEnter={() => setInstagranIcon(InstagramIconYellow)}
                                                    onMouseOut={() => setInstagranIcon(InstagramIconWhite)}
                                                    alt=''
                                                    onClick={openInstagram}
                                                />
                                                <img
                                                    className='social-logo'
                                                    src={FacebookIcon}
                                                    onMouseEnter={() => setFacebookIcon(FacebookIconYellow)}
                                                    onMouseOut={() => setFacebookIcon(FacebookIconWhite)}
                                                    alt=''
                                                    onClick={openFacebook}
                                                />
                                                <img
                                                    className='social-logo'
                                                    src={LinkedInIcon}
                                                    onMouseEnter={() => setLinkedInIcon(LinkedinIconYellow)}
                                                    onMouseOut={() => setLinkedInIcon(LinkedIconWhite)}
                                                    alt=''
                                                    onClick={openLinkedin}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            




                                {/*
                                <TextSection
                                    align={
                                        isMobile
                                            ? TextSectionAlignment.center
                                            : TextSectionAlignment.left
                                    }
                                >
                                    Sektionen för Medieteknik, KTH
                                    <br />
                                    <a href='https://medieteknik.com'>
                                        www.medieteknik.com
                                    </a>
                                    {isMobile && isSafari ? (
                                        <></>
                                    ) : (
                                        <>
                                            <br />
                                            <br />
                                        </>
                                    )}
                                </TextSection>
                                */}
                            </ContentSection>
                        </div>
                    )
                }}
            </MBDCompanyContext.Consumer>
        )
}

export default Footer
