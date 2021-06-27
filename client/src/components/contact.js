import React from "react";
export default function about() {
    return (
        <section className = "section">
            <div className = "contact">
                <h1 className = "title-h1">Contact</h1>
                <div className = "contact__item">
                    <h3>Send me an email</h3>
                    <form>
                        <div>
                            <input placeholder = "name"></input>
                        </div>
                        <div>
                            <input placeholder = "email"></input>
                        </div>
                        <div>
                            <input placeholder = "phone number"></input>
                        </div>
                        <div>
                            <textarea placeholder = "your message"></textarea>
                        </div>
                    </form>
                </div>
                <div className = "contact__item">
                    <h3>Or contact me in social media</h3>
                </div>
            </div>

        </section>
    )
}
