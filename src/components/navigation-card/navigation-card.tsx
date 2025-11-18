import React, { FC, useState } from 'react'
import './navigation-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel from '../../pages/model/translationModel'

import phrases from '../../data/translations.json'
import { Button, ButtonTypes } from '../button/button'

import { isMobile } from 'react-device-detect'



interface NavigationCardProps {
    backgroundImage: string,
    icon: string,
    title: string,
    description: string,
    buttonText: string
}

const NavigationCard: FC<NavigationCardProps> = (props) => {

    return (
            <Card className='nav-card'>
                <div style={{backgroundImage: `url(${props.backgroundImage})`}} className='nav-card-image'>  
                    <ContentPadding>
                        <div className='nav-card-info-container'>       
                            <img src={props.icon} alt='' className='nav-card-icon'/>
                            <h3> {props.title} </h3>
                            <p> 
                                {props.description}
                            </p>
                            <Button buttonType={ButtonTypes.normalCompact}> {props.buttonText}</Button>
                        </div>
                    </ContentPadding>
                </div>
       
            </Card>
    )
}

export default NavigationCard
