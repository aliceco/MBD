import React, { FC, useEffect, useState } from 'react'
import './contact-page.css'

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import { TeamMember, getAllTeamMembers } from '../model/teamModel'
import ProfileCard from '../../components/profile-card/profile-card'
import TextSection, {TextSectionAlignment}from '../../components/text-section/text-section'
import ContactForm from './contact-form/contact-form'

import masterBackground from '../../assets/master_background.png'


import SectionTitle from '../../components/section-title/section-title'
import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'

const Contactpage: FC = () => {
    const [pgMembers, setPgMembers] = useState<TeamMember[]>([])

    useEffect(() => {
        window.scrollTo(0, 0)
        getAllTeamMembers().then(setPgMembers)
    }, [])

    return (
        <div
            className='contactpage'
            style={{
                backgroundImage: `url(${masterBackground})`,
                backgroundSize: 'cover',
            }}
        >
            <IntroScreenTitle noGradient = {true} > {TranslationModel.translate(phrases.contact_us)} </IntroScreenTitle>

            {/* Contact form*/}
            <ContentSection>
                <TextSection align={TextSectionAlignment.center}>
                    <SectionTitle>
                        {TranslationModel.translate(
                            phrases.contact_form.contact_form
                        )}
                    </SectionTitle>
                    <p>
                        {TranslationModel.translate(
                            phrases.contact_form.contact_information
                        )}
                        !
                    </p>
                    <ContactForm />
                </TextSection>
            </ContentSection>
        </div>
    )
}

export default Contactpage