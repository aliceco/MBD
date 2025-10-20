import React, { useEffect, useState } from 'react'
import './company-page.css'
import { MBDDateContext } from '../../contexts/mbd-date-provider'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import Footer from '../../components/footer/footer' // not in use on this page anymore 
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
import MapBackground from '../../assets/backgrounds/map_nymble.jpg'
import SectionTitle, {
    TitleSectionAlignment,
} from '../../components/section-title/section-title'

import Card from '../../components/card/card'
import { ContentPadding } from '../../components/content-padding'
import { ContentPaddingThin } from '../../components/content-padding-thin'
import TextWithContent from '../../components/text-with-content/text-with-content'
import ContactForm from '../contact-page/contact-form/contact-form'
import { Button, ButtonTypes } from '../../components/button/button'


const Companypage = () => {

    const openPDF = () => {
        const lang = TranslationModel.getLanguage();
        const link =
        lang === 'se'
        ? '/assets/docs/NLG_Produktkatalog_2526.pdf'
        : '/assets/docs/NLG_ProductCatalog_2526.pdf';
        
        window.open(
            link
        )
        
    }

    return (
        <div className='companypage'>
            <div id='companypage-fair' className='companypage-fair'>
                <div
                    className='companypage-map-background'
                    style={{ backgroundImage: `url(${MapBackground})` }}
                ></div>
                <div className='companypage-map-background-fade'></div>
                <ContentSection>
                    <TextWithContent
                        text={
                            <TextSection>
                                <h1>
                                    <SectionTitle
                                        align={TitleSectionAlignment.left}
                                    >
                                        {TranslationModel.translate(
                                            phrases.the_fair
                                        )}
                                    </SectionTitle>
                                </h1>
                                <MBDDateContext.Consumer>
                                    {(mbdDate) =>
                                        TranslationModel.translate({
                                            se: (
                                                <span>
                                                    Mässan kommer äga rum{' '}
                                                    <b>
                                                        {/*våren 2026*/}
                                                    
                                                        {17}{' '}
                                                        {TranslationModel.translate(
                                                            phrases.months
                                                                .february
                                                        )}{' '}
                                                        {2026}{' '}
                                                    </b>{' '}
                                                    och innehåller en heldag
                                                    spännande företag. Vi kommer
                                                    att hålla till i THS kårhus,
                                                    Nymble, som ligger på{' '}
                                                    <b>
                                                        Drottning Kristinas väg
                                                        15
                                                    </b>{' '}
                                                    vid Kungliga Tekniska
                                                    Högskolan.
                                                    <br />
                                                    <br />
                                                    Under dagen är mässan öppen
                                                    för alla studenter på KTH,
                                                    men vi riktar oss särskilt
                                                    mot medieteknikstudenter då
                                                    dessa har ett brett intresse
                                                    för design, programmering,
                                                    och entreprenörskap. Ett
                                                    perfekt tillfälle för ditt
                                                    företag att hitta studenter
                                                    för framtiden!
                                                    <br />
                                                    <br />
                                                    Dagen avslutas med en stor
                                                    sittning där era
                                                    företagsrepresentanter har
                                                    möjlighet att komma och äta
                                                    och mingla med våra
                                                    studenter i en mer
                                                    avslappnad miljö.
                                                    <br/>
                                                    <br/>
                                                    <b>Läs om alla våra erbjudande:</b>
                                                    <br/>
                                                    <Button buttonType={ButtonTypes.normalCompact} onClick={openPDF}>
                                                        {TranslationModel.translate(phrases.product_catalog)}
                                                    </Button>
                                                </span>
                                            ),
                                            en: (
                                                <span>
                                                    The job fair starts in{' '}
                                                    <b>
                                                        {/*spring 2026*/}
                                                        {17}{'th '}
                                                        {TranslationModel.translate(
                                                            phrases.months
                                                                .february
                                                        )}{' '}
                                                        {2026}{' '}
                                                    </b>{' '}
                                                    and consists of a whole day
                                                    of exciting companies happy
                                                    to network with students. It
                                                    is held in THS Student Union
                                                    building, Nymble, that is
                                                    located at{' '}
                                                    <b>
                                                        Drottnings Kristinas väg
                                                        15 at KTH
                                                    </b>
                                                    .
                                                    <br />
                                                    <br />
                                                    During the day the fair is
                                                    open to all students at KTH,
                                                    but is specifically targeted
                                                    at Media Technology students
                                                    since these have a great
                                                    interest in design,
                                                    programming and
                                                    entrepreneurship. A perfect
                                                    occasion for your company to
                                                    find your future employees!
                                                    <br />
                                                    <br />
                                                    At the end of the day a big
                                                    dinner party is held where
                                                    your company representatives
                                                    can attend and network with
                                                    our students in a more
                                                    relaxed setting.
                                                    <br/>
                                                    <br/>
                                                    <b>Read about all our offers:</b>
                                                    <br/>
                                                    <Button buttonType={ButtonTypes.normalCompact} onClick={openPDF}>
                                                        {TranslationModel.translate(phrases.product_catalog)}
                                                    </Button>
                                                </span>
                                                
                                            ),
                                        })
                                    }
                                </MBDDateContext.Consumer>
                            </TextSection>
                        }
                        
                        content={
                            // This is used to make the icon on the map background
                            // visibale on small screens
                            <div className='companypage-see-map-box'></div>
                        }
                    />
                    
                </ContentSection>
            </div>
            
            <ContentSection>
                <br />
                {/* Package section */}
                <div id='companypage-package'>
                    <TextSection align={TextSectionAlignment.center}>
                        <SectionTitle align={TitleSectionAlignment.center}>
                            {TranslationModel.translate(
                                phrases.exhibitor_packages
                            )}
                        </SectionTitle>
                    </TextSection>
                    {/*
                    <div className='companypage-offer'>
                    {TranslationModel.translate({
                                        se: (
                                            <>
                                            <p className="text-center">Mer information kommer snart...</p>
                                            </>),
                                        en: (
                                            <>
                                            <p className="text-center">More information coming soon...</p>
                                            </>)
                                            })}
                    </div>*/}
                    {<div className='companypage-offer'>
                        <div className="main-offers">
                        <Card light gold>
                            <ContentPaddingThin>
                                <Card light className="fill">
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <br/>
                                                <h3>Guldpaketet</h3>
                                                <h3>59 500kr</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            Central placering på mässan
                                                        </li>
                                                        <li>
                                                            8m² för monter
                                                        </li>
                                                        <li>
                                                            2 ståbord, 4 stolar*
                                                        </li>
                                                        <li>
                                                            El & Wi-Fi
                                                        </li>
                                                        <li>
                                                            Tillgång till företagslounge
                                                        </li>
                                                        <li>
                                                            Logga på hemsida & sociala medier
                                                        </li>
                                                        <li>
                                                            4 Lunch- & Sittningsbiljetter*
                                                        </li>
                                                        <li>
                                                            2 personliga företagsvärdar
                                                        </li>
                                                        <li>
                                                            Stor logga på goodie-bag
                                                        </li>
                                                        <li>
                                                            Logga på kläder under mässan
                                                        </li>
                                                        <li>
                                                            Sponsor-logga på hemsidan
                                                        </li>
                                                        <li>
                                                            Sponsrat inlägg på sociala medier*
                                                        </li>
                                                        <li>
                                                            Event i koppling till mässan
                                                        </li>
                                                    </ul>
                                                    <p className="add-ons">
                                                    * Extra kan köpas till
                                                </p>
                                                </p>
                                                
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <br/>
                                                <h3>Gold Package</h3>
                                                <h3>SEK 59 500</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            Central placement at fair
                                                        </li>
                                                        <li>
                                                            6m² booth space
                                                        </li>
                                                        <li>
                                                            2 tables, 4 chairs*
                                                        </li>
                                                        <li>
                                                            Electricity & Wi-Fi
                                                        </li>
                                                        <li>
                                                            Access to company lounge
                                                        </li>
                                                        <li>
                                                            Logo on website and social media
                                                        </li>
                                                        <li>
                                                            4 Lunch- & Banquet tickets*
                                                        </li>
                                                        <li>
                                                            2 personal company hosts
                                                        </li>
                                                        <li>
                                                            Big logo on goodie-bag
                                                        </li>
                                                        <li>
                                                            Logo on clothes during the fair
                                                        </li>
                                                        <li>
                                                            Sponsor-logo on the website
                                                        </li>
                                                        <li>
                                                            Sponsored post on social media*
                                                        </li>
                                                        <li>
                                                            Event in connection to the fair
                                                        </li>
                                                    </ul>
                                                </p>
                                                <p className="add-ons">
                                                    * Additional can be purchased
                                                </p>
                                            </>
                                        ),
                                    })}
                                </Card>
                            </ContentPaddingThin>
                        </Card>
                        <Card light silver>
                            <ContentPaddingThin>
                                <Card light className="fill">
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <br/>
                                                <h3>Silverpaketet</h3>
                                                <h3>37 950kr</h3>
                                                <br />
                                                <p>
                                                    
                                                    <ul>
                                                        <li>
                                                            Bra placering på mässan
                                                        </li>
                                                        <li>
                                                            6m² för monter
                                                        </li>
                                                        <li>
                                                            1 ståbord, 2 stolar*
                                                        </li>
                                                        <li>
                                                            El & Wi-Fi
                                                        </li>
                                                        <li>
                                                            Tillgång till företagslounge
                                                        </li>
                                                        <li>
                                                            Logga på hemsida & sociala medier
                                                        </li>
                                                        <li>
                                                            2 Lunch- & Sittningsbiljetter*
                                                        </li>
                                                        <li>
                                                            Personlig företagsvärd
                                                        </li>
                                                        <li>
                                                            Liten logga på goodie-bag
                                                        </li>
                                                    </ul>
                                                </p>
                                                <p className="add-ons">
                                                    * Extra kan köpas till
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <br/>
                                                <h3>Silver Package</h3>
                                                <h3>SEK 37 950</h3>
                                                <br />
                                                <p>
                                                
                                                    <ul>
                                                        <li>
                                                            Good placement on the fair
                                                        </li>
                                                        <li>
                                                            6m² booth space
                                                        </li>
                                                        <li>
                                                            1 table, 2 chairs*
                                                        </li>
                                                        <li>
                                                            Electricity & Wi-Fi
                                                        </li>
                                                        <li>
                                                            Access to company lounge
                                                        </li>
                                                        <li>
                                                            Logo on website and social media
                                                        </li>
                                                        <li>
                                                            2 Lunch- & Banquet tickets*
                                                        </li>
                                                        <li>
                                                            Personal company host
                                                        </li>
                                                        <li>
                                                            Small logo on goodie-bag
                                                        </li>
                                                    </ul>
                                                </p>
                                                <p className="add-ons">
                                                    * Additional can be purchased
                                                </p>
                                            </>
                                        ),
                                    })}
                                </Card>
                            </ContentPaddingThin>
                        </Card>
                        <Card light bronze>
                            <ContentPaddingThin>
                                <Card light className="fill">
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                            
                                                <br/>
                                                <h3>Bronspaketet</h3>
                                                <h3>SEK 26 000</h3>
                                                <br />
                                                <p>
                                                    
                                                    <ul>
                                                        <li>
                                                            Plats på mässan
                                                        </li>
                                                        <li>
                                                            4m² för monter
                                                        </li>
                                                        <li>
                                                            1 ståbord, 2 stolar*
                                                        </li>
                                                        <li>
                                                            El & Wi-Fi
                                                        </li>
                                                        <li>
                                                            Tillgång till företagslounge
                                                        </li>
                                                        <li>
                                                            Logga på hemsida & sociala medier
                                                        </li>
                                                    </ul>
                                                </p>
                                                <p className="add-ons">
                                                    * Extra kan köpas till
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <br/>
                                                <h3>Bronze Package</h3>
                                                <h3>26 500kr</h3>
                                                <br />
                                                <p>
                                                    
                                                    <ul>
                                                        <li>
                                                            Spot at fair
                                                        </li>
                                                        <li>
                                                            4m² booth space
                                                        </li>
                                                        <li>
                                                            1 table, 2 chairs*
                                                        </li>
                                                        <li>
                                                            Electricity & Wi-Fi
                                                        </li>
                                                        <li>
                                                            Access to company lounge
                                                        </li>
                                                        <li>
                                                            Logo on website and social media
                                                        </li>
                                                    </ul>

                                                </p>
                                                <p className="add-ons">
                                                    * Additional can be purchased
                                                </p>
                                            </>
                                        
                                        ),
                                    })}
                                </Card>
                            </ContentPaddingThin>
                        </Card>
                        
                        </div>
                    </div>}
                </div>

            <ContentSection>
                 <br />
                {/* Extras section */}
                <div id='companypage-package'>
                    <TextSection align={TextSectionAlignment.center}>
                        <SectionTitle align={TitleSectionAlignment.center}>
                            {TranslationModel.translate(
                                phrases.company_addons
                            )}
                        </SectionTitle>
                    </TextSection>
                <div className='additional-offers'>
                            <div>
                                <Card light>
                                    <ContentPadding>
                                        <ContentPadding>
                                            {TranslationModel.translate({
                                                se: (
                                                    <>
                                                        <h3>Event</h3>
                                                        <h3>15 000kr</h3>
                                                        <br />
                                                        <p>
                                                            <ul>
                                                                <li>
                                                                    Exempelvis
                                                                    en
                                                                    liveföreläsning,
                                                                    CV-workshop
                                                                    eller Q&A
                                                                    med
                                                                    studenter
                                                                </li>
                                                                <li>
                                                                    På eller
                                                                    före
                                                                    branschdagen
                                                                </li>
                                                                <li>
                                                                    Vid mat
                                                                    tillkommer
                                                                    en kostnad á
                                                                    120kr/biljett.
                                                                    Drinkbiljetter
                                                                    á 30kr.
                                                                </li>
                                                            </ul>
                                                        </p>
                                                    </>
                                                ),
                                                en: (
                                                    <>
                                                        <h3>Event</h3>
                                                        <h3>SEK 15 000</h3>
                                                        <br />
                                                        <p>
                                                            <ul>
                                                                <li>
                                                                    For example
                                                                    a live
                                                                    lecture, CV
                                                                    workshop or
                                                                    a Q&A with
                                                                    students
                                                                </li>
                                                                <li>
                                                                    Before or
                                                                    during the
                                                                    fair day
                                                                </li>
                                                                <br/>
                                                            </ul>
                                                        </p>
                                                    </>
                                                ),
                                            })}
                                        </ContentPadding>
                                    </ContentPadding>
                                </Card>
                            </div>
                            <Card light>
                                <ContentPadding>
                                    <ContentPadding>
                                        {TranslationModel.translate({
                                            se: (
                                                <>
                                                    <h3>Annons</h3>
                                                    <h3>1 000 kr</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                På vår
                                                                Facebook-sida,
                                                                Instagram eller
                                                                hemsida
                                                            </li>
                                                            <li>
                                                                Annons visas i 7
                                                                dagar, pris
                                                                gäller per kanal
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                            en: (
                                                <>
                                                    <h3>Advert</h3>
                                                    <h3>SEK 1 000</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                On our Facebook,
                                                                Instagram or
                                                                website
                                                            </li>
                                                            <li>
                                                                The advert is
                                                                shown for 7
                                                                days, price is
                                                                per channel
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                        })}
                                    </ContentPadding>
                                </ContentPadding>
                            </Card>
                        </div>
                    </div>
            </ContentSection>
            </ContentSection>
            {/* Email us section */}
            <ContentSection background={ContentSectionBackground.dark}>
                <TextSection>
                    <h1>{TranslationModel.translate(phrases.contact_us)}!</h1>
                    <p>foretag@nlg.medieteknik.com</p>
                    {/*<ContactForm />*/}
                </TextSection>
            </ContentSection>
        </div>
    )
}

export default Companypage
