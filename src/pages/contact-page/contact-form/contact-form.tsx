import React, { FC, useState } from 'react'
import { InputInfo } from '../../../components/input-info/input-info'
import TranslationModel from '../../model/translationModel'
import phrases from '../../../data/translations.json'
import { Button, ButtonTypes } from '../../../components/button/button'

import './contact-form.css'
import BACKEND_PATH from '../../../backend-environment'
import LoadingText from '../../../components/loading-text'

const ContactForm: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [doneMessage, setDoneMessage] = useState<React.ReactNode>('')
    const [loading, setLoading] = useState(false)

    const sendEmail = () => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('message', message)

        setLoading(true)
        fetch(BACKEND_PATH + 'sendMail.php', {
            method: 'POST',
            body: formData,
        }) 
            .then(async (res) => {
                const text = await res.text();
                if(text.trim() ==='1') {
                    setDoneMessage(
                        TranslationModel.translate({
                            se: 'Ditt meddelande är skickat.',
                            en: 'Your message is sent.',
                        })
                    )
                } else {
                    throw new Error('Mail failed')
                }
            })
            .catch( () => {
                setDoneMessage(
                    TranslationModel.translate({
                        se: 'Något gick fel, testa gärna igen.',
                        en: 'Something went wrong, pls test again.',
                    })
                )
            })
            .finally( () => setLoading(false))
    }

    return (
        <div>
            <form className='contactform' onSubmit={() => sendEmail()}>
                <div className='contact-input-info'>
                    <div>
                        <InputInfo
                            name='företagsnamn'
                            onInput={setName}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.sign_up.company_name
                            )}
                            placeholderHeader = {true}
                            obligatory = {true}
                        />
                    </div>
                    <br />
                    <div>
                        <InputInfo
                            name='kontaktperson'
                            onInput={setName}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.contact_form.contact_person
                            )}
                            placeholderHeader = {true}
                            obligatory = {true}
                        />
                    </div>
                    <br />
                    <div>
                        <InputInfo
                            name='email'
                            onInput={setEmail}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.contact_form.email
                            )}
                            placeholderHeader = {true}
                            obligatory = {true}
                        />
                    </div>
                </div>
                {/* Message text  */}
                <div className='contact-input-message'>
                    <InputInfo
                        name='message'
                        onInput={setMessage}
                        inputType='textarea'
                        placeholder={TranslationModel.translate(
                            phrases.contact_form.message
                        )}
                        placeholderHeader = {true}
                        obligatory = {true}
                    />
                </div>
            </form>
            {doneMessage ? <p>{doneMessage}</p> : ''} 
            <br />
            <Button
                onClick={() => sendEmail()}
                buttonType={ButtonTypes.normalCompact}
            >
                {loading ? (
                    <LoadingText />
                ) : (
                    TranslationModel.translate(phrases.contact_form.send)
                )}
            </Button>

            <a href='mailto:foretag@nlg.medieteknik.com'>
                <h4>foretag@nlg.medieteknik.com</h4>
            </a>
        </div>
    )
}

export default ContactForm
