import React, { FC, useEffect, useState } from 'react'
import './about-us-page.css'

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import { TeamMember, getAllTeamMembers } from '../model/teamModel'
import ProfileCard from '../../components/profile-card/profile-card'
import TextSection from '../../components/text-section/text-section'

import Background from '../../assets/backgrounds/team.jpg'
import IntroScreen from '../../components/intro-screen/intro-screen'
import SectionTitle from '../../components/section-title/section-title'
import BigBG from '../../assets/backgrounds/kth_stone_ground.jpg'

import masterBackground from '../../assets/master_background.png'
import teamImage from '../../assets/backgrounds/team2026.jpg'

const AboutUsPage: FC = () => {
    const [pgMembers, setPgMembers] = useState<TeamMember[]>([])

    useEffect(() => {
        window.scrollTo(0, 0)
        getAllTeamMembers().then(setPgMembers)
    }, [])

    return (
        <div
            className='aboutpage'
            style={{
                backgroundImage: `url(${masterBackground})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='about-title'>Näringslivsgruppen</div>

            <ContentSection>
                <div className='nlg-content'>
                    <img src={teamImage} alt='' className='team-img' />
                    <TextSection>
                        <p>
                            Vi är NLG, näringslivsgrupp på KTH. Medieteknik är en
                            kreativ civilingenjörsutbildning som skolar nästa
                            generations utvecklare, UX-designers, projektledare och
                            spelutvecklare. Vi blandar traditionella ingenjörsämnen
                            med programmering, interaktionsdesign, datorgrafik,
                            visualisering, och maskininlärning bland annat. hittar
                            ni mer information om programmet.
                        </p>
                        <p>
                            Sektionens näringslivsgrupp fungerar som studenternas
                            förlängda arm ut i arbetslivet. Vi ordnar företagsevent,
                            lunchföreläsningar, företagspubar samt erbjuder
                            annonsering på våra plattformar. Ett samarbete med oss
                            är ett kul sätt att exponera ert företag inför
                            framtidens tech-talanger. Låter det intressant? Hör av
                            er så planerar vi något ihop! För information om priser
                            med mera, kontakta oss!
                        </p>
                    </TextSection>
                </div>
            </ContentSection>

            <div className='about-title'>
                {TranslationModel.translate(phrases.the_project_group)}
            </div>
            {/* List of every memeber in PG */}
            <ContentSection>
                <div className='aboutpage-pg-members'>
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
            </ContentSection>
        </div>
    )
}

export default AboutUsPage
