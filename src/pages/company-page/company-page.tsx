import React, { useEffect, useState } from 'react'
import './company-page.css'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'

import ContentSection from '../../components/layout/content-section/content-section'
import TextSection, {TextSectionAlignment} from '../../components/text-section/text-section'
import SectionTitle, {TitleSectionAlignment} from '../../components/section-title/section-title'

import Card from '../../components/card/card'
import { ContentPadding } from '../../components/content-padding'
import { ContentPaddingThin } from '../../components/content-padding-thin'
import TextWithContent from '../../components/text-with-content/text-with-content'
import { Button, ButtonTypes } from '../../components/button/button'

import Slider from '../../components/carousel/carousel'
import NavigationCard from '../../components/navigation-card/navigation-card'


import background from "../../assets/master_background.png"
import companyBackgroundImage from '../../assets/backgrounds/laptop.png'
import companyIcon from '../../assets/icons/other/company.svg'
import studentBackgroundImage from '../../assets/backgrounds/kth_stone_ground.jpg'
import studentIcon from '../../assets/icons/other/book.png'
import MapBackground from '../../assets/backgrounds/map_nymble.jpg'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import texts from './texts'


const Companypage = () => {

    /* Used for conditionally rendering carousel with sponsor packages */
    const windowDimensions = useWindowDimensions();
    const [onDesktop, _setOnDesktop] = useState(false);

    useEffect(() => {
            _setOnDesktop(windowDimensions.width >= 850)
        }, [windowDimensions.width]);


    const openPDF = () => {
        const lang = TranslationModel.getLanguage();
        const link =
        lang === 'se'
        ? './assets/docs/NLG_ProduktKatalog_2526.pdf'
        : './assets/docs/NLG_ProductCatalog_2526.pdf';
        
        window.open(
            link
        )
        
    }

    /* Array of main sponsor packages */
    const mainOffers = [
        {id: 1,
        card: (
        <Card light gold>
            <ContentPaddingThin>
                <Card light className="fill">
                    {TranslationModel.translate({
                    se: texts.gold.se,
                    en: texts.gold.en,
                    })}
                </Card>
            </ContentPaddingThin>
        </Card>)
        },

        {id: 2, 
        card: (
        <Card light silver>
            <ContentPaddingThin>
                <Card light className="fill">
                    {TranslationModel.translate({
                    se: texts.silver.se,
                    en: texts.silver.en,
                    })}
                </Card>
            </ContentPaddingThin>
        </Card>)
        },

        {id: 3,
        card: (
        <Card light bronze>
            <ContentPaddingThin>
                <Card light className="fill">
                    {TranslationModel.translate({
                    se: texts.bronze.se,
                    en: texts.bronze.en,
                    })}
                </Card>
            </ContentPaddingThin>
        </Card>)
        }
    ]

    
    return (
        <div className='companypage' style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>

            <h1>{TranslationModel.translate(phrases.for_companies)}</h1>

            <div id='companypage-fair' className='companypage-fair'>
                
                <ContentSection>
                    {/* About the fair + map */}
                    <TextWithContent
                        text={
                            <TextSection>
                                <h2>
                                    <SectionTitle
                                        align={TitleSectionAlignment.left}
                                    >
                                        {TranslationModel.translate(
                                            phrases.about_the_fair
                                        )}
                                    </SectionTitle>
                                </h2>
                                {TranslationModel.translate({
                                    se: (
                                        <span>
                                            {texts.about_the_fair.se}
                                            <Button buttonType={ButtonTypes.normalCompact} onClick={openPDF}>
                                                {TranslationModel.translate(phrases.product_catalog)}
                                            </Button>
                                        </span>
                                    ),
                                    en: (
                                        <span>
                                            {texts.about_the_fair.en}
                                            <Button buttonType={ButtonTypes.normalCompact} onClick={openPDF}>
                                                {TranslationModel.translate(phrases.product_catalog)}
                                            </Button>
                                        </span>
                                        
                                    ),
                                })
                                }
                            </TextSection>
                        }
                        
                        content={
                            /* Map image */
                            <div style={{width: '350px', height: '350px', overflow: 'hidden', borderRadius: '20px'}}>
                                <img src={MapBackground} style={{width: '250%', height: '250%', objectFit: 'cover', transform: 'translate(-35%, -30%)'}}/>
                            </div>
                            
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

                    <div className="companypage-offer">
                        {
                            onDesktop ?
                            <Slider activeSlide={0} data={mainOffers}/>
                            :
                            <div className='companypage-offer'>
                                <div className="main-offers">
                                    {mainOffers.map((offer)=>(
                                        <div key={offer.id}>
                                            {offer.card}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            
            
            <ContentSection>
                 <br />
                {/* Extras section */}
                <div>
                    <TextSection align={TextSectionAlignment.center}>
                        <SectionTitle align={TitleSectionAlignment.center}>
                            {TranslationModel.translate(
                                phrases.company_addons
                            )}
                        </SectionTitle>
                    </TextSection>
                    
                    <div className="companypage-offer">
                        {/* Something odd happens here between screen width 700 and 715, but I can't find it */}
                        <div className="additional-offers">

                            {texts.extras.map((extra, index) => (
                                <Card light className="offer-card" key={index}>
                                    <ContentPadding>
                                            {TranslationModel.translate({
                                                se: extra.se,
                                                en: extra.en,
                                            })}
                                        </ContentPadding>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Navigation cards to other pages */}
            <ContentSection style={{ marginTop: '0px'}}>

                <div className='navigation-cards'>
                    <NavigationCard 
                        backgroundImage={companyBackgroundImage}
                        icon={companyIcon}
                        title="Kontakta oss"
                        description="Är ni intresserade av att medverka och nå ut till KTH studenter? Kontakta oss så diskuterar vi lösningar för just er!"
                        buttonText="Kontakt"
                        nav="/contact"
                    />

                    <NavigationCard 
                        backgroundImage={studentBackgroundImage}
                        icon={studentIcon}
                        title="Vad är medieteknik?"
                        description="Läs mer om vår utbildning!"
                        buttonText="Om Medieteknik"
                        nav="/medieteknik"
                    />
                </div>
            </ContentSection>
            
        </ContentSection>

            

        </div>
    )
}

export default Companypage
