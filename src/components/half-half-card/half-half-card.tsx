import React, { FC, useState, ReactNode } from 'react'
import './half-half-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel from '../../pages/model/translationModel'

import phrases from '../../data/translations.json'
import { Button, ButtonTypes } from '../button/button'

import { isMobile } from 'react-device-detect'

import { NavLink } from 'react-router-dom'

import master from "./assets/masters/machine_learning.jpg"


interface CardProps {
    left_width?: string,
    right_width?: string,
    left_content: ReactNode,
    right_content: ReactNode
}

const HalfHalfCard: FC<CardProps> = (props) => {

    return (
        <div className='half-card'>
            <Card transparent>
                <div className='half-card-container'>
                    <div className='left' style={{width: props.left_width}}>
                        {props.left_content}
                    </div>
                    <div className='right' style={{width:props.right_width}}>
                        {props.right_content}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HalfHalfCard
