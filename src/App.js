import { useState } from 'react';
import './App.css';

function App() {

    const [userName, setUserName] = useState('');
    const [inputUserNameClass, setInputUserNameClass] = useState("user-name");
    const [showErrorName, setShowErrorName] = useState(false);

    const [userEmail, setUserEmail] = useState('');
    const [inputEmailClass, setInputEmailClass] = useState("user-email");
    const [showErrorEmail, setShowErrorEmail] = useState(false);


    async function handleclick(event) {
        event.preventDefault();
        if (showErrorName === false && showErrorEmail === false) {
            const body = {
                "userName": userName,
                "userEmail": userEmail
            };

            console.log(body);
            alert(`userName: ${body.userName},   userEmail: ${body.userEmail}`);
        }
        else alert('Помилка заповнення одного з полів');

    };

    function validateUserName() {
        if (userName.length <= 2) {
            setShowErrorName(true);
            setInputUserNameClass("user-name border-red");
        }
        else {
            setInputUserNameClass("user-name border-green");
            setShowErrorName(false)
        };
    };

    function validateEmail() {
        if (/^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/.test(userEmail)) {
            setShowErrorEmail(false);
            setInputEmailClass("user-email border-green")
        }
        else {
            setShowErrorEmail(true);
            setInputEmailClass("user-email border-red")
        }
    }
    return (
        <div className='wrapper'>
            <form
                onSubmit={handleclick}
                className='singin-form'>
                <label htmlFor="userName" className='label-title' >Name</label>
                <div className='container-to-field'>
                    <input
                        id="userName"
                        type="text"
                        className={inputUserNameClass}
                        placeholder='Enter Your Name'
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        onBlur={validateUserName}
                        required />
                    {showErrorName !== false ? <p className='paragraf-buttom'>The name is to short! The minimum number must be 3</p> : null}
                </div>

                <label htmlFor="userEmail" className='label-title'>Email</label>
                <div className='container-to-field'>
                    <input
                        id="userEmail"
                        type='email'
                        className={inputEmailClass}
                        placeholder='Enter your email'
                        onInput={(e) => setUserEmail(e.target.value)}
                        min={6}
                        value={userEmail}
                        onBlur={validateEmail}
                        required
                    />
                    {showErrorEmail !== false ? <p className='paragraf-buttom'>Invalid mail format. example123@gmail.com</p> : null}
                </div>
                <div className='button-singin'>
                    <button type='submit' className='button-singin-push btn-login-page'>Press me</button>
                </div>

            </form>
        </div>
    );
}

export default App;
