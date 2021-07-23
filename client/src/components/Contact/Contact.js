import React, {useState} from "react";
import './Contact.scss'
import {useTranslation} from "react-i18next";

export default function Contact(props) {
    const { t } = useTranslation()
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
                <h1 className = "title-h1">{t('contact')}</h1>
                    <div className = "contact__item">
                        <h3  className = "title-h3">{t('send_me_email')}</h3>
                        <form className = "contact__form form" onSubmit = {submitHandler} noValidate>
                            <div className = "form__control">
                                <input value = {inputValues.name} onChange = {getNameHandler} type="text" placeholder = {t("name")} ></input>
                                <p className = "form__error">{errors.name}</p>
                            </div>
                            <div className = "form__control">
                                <input value = {inputValues.email} onChange = {getEmailHandler} type= "email" placeholder = {t("email")}></input>
                                <p className = "form__error">{errors.email}</p>
                            </div>
                            <div className = "form__control">
                                <input value = {inputValues.phNumber} onChange = {getPhoneHandler} placeholder = {t("phone_number")}></input>
                                <p className = "form__error">{errors.phNumber}</p>
                            </div>
                            <div className = "form__control">
                                <textarea value = {inputValues.message} onChange = {getMessageHandler} placeholder = {t("your_message")}></textarea>
                                <p className = "form__error">{errors.message}</p>
                            </div>
                            <div className= "form__button">
                                <button className = "btn">{t('send')}</button>
                            </div>
                        </form>
                </div>              
            </div>

        </section>
    )
}
