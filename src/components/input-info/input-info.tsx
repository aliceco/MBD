import React, { FC, ReactNode, useState } from 'react';
import './input-info.css';
import { InputInfoHeader } from './input-info-header/input-info-header';

interface InputInfoProps {
    inputType: 'text' | 'textarea' | 'number' | 'date' | 'email'
    name: string,
    placeholder: ReactNode;
    onInput: (arg0: string) => void,
    placeholderHeader?: boolean, 
    obligatory?: boolean,
    noCard?: boolean,
    defaultValue?: string | number,
    value?: string | number,
    max?: string,
    min?: string,
    required?: boolean,
    onKeyDown?: (e: KeyboardEvent) => void
}


export const InputInfo: FC<InputInfoProps> = (props) => {
    let input;
    switch(props.inputType){
        case 'textarea':
            input = <textarea
            onInput={(event) => props.onInput(event.currentTarget.value)}
            name=""
            placeholder={""}
            className="input-info-textarea"
            value={props.value}
            required = {props.required}
            >
            </textarea>
            break;
        case 'email':
            input = (
                <input
                    onInput={(event) => props.onInput(event.currentTarget.value)}
                    className="input-info-input"
                    placeholder=""
                    type="email" //validates the email input (needs to include a @)
                    defaultValue={props.defaultValue}
                    value={props.value}
                    max={props.max}
                    min={props.min}
                    required={props.required}
                />
            );
            break;
        default:
            input = <input
            onInput={(event) => props.onInput(event.currentTarget.value)}
            className="input-info-input"
            placeholder={""}
            type={props.inputType}
            defaultValue={props.defaultValue}
            value={props.value}
            max={props.max}
            min={props.min}
            required = {props.required}
            />
            break;
    }

    const cont = (
        <div className="input-info-container">
            {
                input
            }
        </div>
    )

    return (<>
        { props.placeholderHeader ? 
            <InputInfoHeader obligatory={props.obligatory}>
                {props.placeholder}
            </InputInfoHeader>
        : <></> }
        {cont}
    </>);
}

