import { PromiseProvider } from "mongoose";
import React, {useState} from "react";
import './Contact.scss'

export default function Contact(props) {

    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phNumber: '',
        message: ''
    })
    const [errors, setError] = useState({
        name:'',
        email:'',
        phNumber: '',
        message: ''
    })
    const submitHandler = (event) => {       
        event.preventDefault();
        if (formValidationHandler()) {
            let formData = {
                name: inputValues.name,
                email: inputValues.email,
                phone: inputValues.phNumber,
                message: inputValues.message
            }
            let fetchParams = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            }
            fetch('http://localhost:8000/api/mails',fetchParams)
            .then(data => data.json())
            .then(resp => alert(resp))
            
            setInputValues({
                name: '',
                email: '',
                phNumber: '',
                message: ''
            })
        };

    }

    const getNameHandler = (event) => {
        setInputValues(() => {
            return {...inputValues,name: event.target.value}
        })
    }
    const getEmailHandler = (event) => {
        setInputValues(() => {
            return {...inputValues,email: event.target.value}
        })
    }
    const getPhoneHandler = (event) => {
        setInputValues(() => {
            return {...inputValues,phNumber: event.target.value}
        })
    }
    const getMessageHandler = (event) => {
        setInputValues(() => {
            return {...inputValues,message: event.target.value}
        })
    }
    const formValidationHandler = () => {
        let formIsValid = true;
        for (let field in inputValues) {
            if (inputValues[field].trim().length === 0) {
                setError((rest) => {
                    return {...rest, [field]: 'This input is empty'}
                })
                formIsValid = false;
            } else {
                setError((rest) => {
                    return {...rest, [field]: ''}
                })
            }
        }

        if (inputValues.email.trim().length !== 0 && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputValues.email)) {
            setError((rest) => {
                return {...rest, email: 'The email is not valid'}
            })
            formIsValid = false;
        }

        return formIsValid;
    }
    return (
        <section className = "section">
            <div className = "contact">
                <h1 className = "title-h1">Contact</h1>
                    <div className = "contact__item">
                        <h3  className = "title-h3">Send me an email</h3>
                        <form className = "contact__form form" onSubmit = {submitHandler} noValidate>
                            <div className = "form__control">
                                <input value = {inputValues.name} onChange = {getNameHandler} type="text" placeholder = "name" ></input>
                                <p className = "form__error">{errors.name}</p>
                            </div>
                            <div className = "form__control">
                                <input value = {inputValues.email} onChange = {getEmailHandler} type= "email" placeholder = "email"></input>
                                <p className = "form__error">{errors.email}</p>
                            </div>
                            <div className = "form__control">
                                <input value = {inputValues.phNumber} onChange = {getPhoneHandler} placeholder = "phone number"></input>
                                <p className = "form__error">{errors.phNumber}</p>
                            </div>
                            <div className = "form__control">
                                <textarea value = {inputValues.message} onChange = {getMessageHandler} placeholder = "your message"></textarea>
                                <p className = "form__error">{errors.message}</p>
                            </div>
                            <div className= "form__button">
                                <button className = "btn">Send</button>
                            </div>
                        </form>
                </div>              
            </div>

        </section>
    )
}
