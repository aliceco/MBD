import React, { FC, useEffect, useState } from 'react'
import './contact-page.css'

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import { TeamMember, getAllTeamMembers } from '../model/teamModel'
import ProfileCard from '../../components/profile-card/profile-card'
import TextSection from '../../components/text-section/text-section'
import ContactForm from './contact-form/contact-form'

import masterBackground from '../../assets/master_background.png'

import Background from '../../assets/backgrounds/team.jpg'
import IntroScreen from '../../components/intro-screen/intro-screen'
import SectionTitle from '../../components/section-title/section-title'
import BigBG from '../../assets/backgrounds/kth_stone_ground.jpg'
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


            {/*IntroScreen for a group picture (or other pic to appear at the top)*/}
            {/*
            <IntroScreen
                title={TranslationModel.translate(phrases.the_project_group)}
            >
                
                <div
                    style={{ backgroundImage: `url(${Background})` }}
                    className='contactpage-background'
                ></div> 
            </IntroScreen>*/}

            {/* List of every memeber in PG */}
            {/* <ContentSection>
                <div className='contactpage-pg-members'>
                    {pgMembers.map((member) => {
                        return (
                            <ProfileCard
                                key={member.name}
                                imagePath={member.imagePath}
                                email={member.email}
                                linkedinLink={member.linkedInURL}
                                name={member.name}
                                role={TranslationModel.translate(
                                    member.position
                                )}
                            />
                        )
                    })}
                </div>
                
            </ContentSection> */}
            {/* Contact form*/}
            <ContentSection>
                <TextSection>
                    <h1>
                        {TranslationModel.translate(
                            phrases.contact_form.contact_form
                        )}
                    </h1>
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

{
    /*
                <div className='photographer-thanks'>
                    {TranslationModel.translate(phrases.photo_thanks_start)}{' '}
                    <a
                        href='https://www.linkedin.com/in/johan-wang%C3%A4rd-1b0b501b5/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Johan Wangärd
                    </a>{' '}
                    {TranslationModel.translate(phrases.photo_thanks_end)}!
                </div>
                */
}
