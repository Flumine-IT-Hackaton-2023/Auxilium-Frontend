import { animated, config, useSpring } from "react-spring";

import { Link, useNavigate } from "react-router-dom";
import { set_auth, set_username } from "../slice/userSlice";

import { useState } from "react";
import { useAppDispatch } from "../store";

import pattern from "../assets/pattern.webp";
import adam from "../assets/adam.webp";
import god from "../assets/god.webp";

export default function RegistrationPage() {
    const navigator = useNavigate()
    const dispatch = useAppDispatch()

    const [username, setUsername] = useState<string | null>()
    const [email, setEmail] = useState<string | null>()
    const [password, setPassword] = useState<string | null>()
    const [confirmPassword, setConfirmPassword] = useState<string | null>()

    const confirmPasswordValidation = (confirmPassword : any) => {
        return confirmPassword === password
    }

    const emailValidation = (email : any) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    return <main>
        <div className={"lines"}>
            {Array.from(
                {length: window.innerWidth / 100},
                (_, index) => index + 1)
                .map(() => <div className={"lines--line"} style={{height: window.innerHeight}}/>)
            }
        </div>
        <section className={'sign-up'}>
            <img className={"pattern"} src={pattern} alt=""/>
            <div className={'sign-up--container'}>
                <animated.h1 className={"sign-up--container--title"} style={useSpring({
                    from : {
                        y : 100,
                        opacity : 0
                    },
                    to : {
                        y : 0,
                        opacity : 1
                    },
                    delay : 800,
                    config : config.slow
                })}>
                    {(("Auxilium·SignUp").split("")).map((value, index) => <animated.span style={useSpring({
                        from : {
                            y : 100,
                            opacity : 0
                        },
                        to : {
                            y : 0,
                            opacity : 1
                        },
                        delay : 800 + (index * 70),
                        config : config.slow
                    })}>{value}</animated.span>)}
                </animated.h1>
                <form className={'sign-up--container--form'}>
                    <animated.input type="text" className={'sign-up--container--form--input'} placeholder={'name'}
                                    style={useSpring({
                                        from : {
                                            opacity : 0
                                        },
                                        to : {
                                            opacity : 1
                                        },
                                        delay : 1000,
                                        config : config.slow
                                    })}
                                    onChange={(event) => {setUsername(event.target.value)}}
                    />
                    <animated.input type="email" className={'sign-up--container--form--input'} placeholder={'email'}
                                    style={useSpring({
                                        from : {
                                            opacity : 0
                                        },
                                        to : {
                                            opacity : 1
                                        },
                                        delay : 1100,
                                        config : config.slow
                                    })}
                                    onChange={(event) => {
                                        if (!emailValidation(event.target.value)) {
                                            event.target.style.boxShadow = "0 0 15px rgba(128, 0, 0, .5)"
                                        }
                                        else {
                                            setEmail(event.target.value)
                                            event.target.style.boxShadow = "0 0 15px rgba(0, 100, 0, .5)"
                                        }
                                    }}
                    />
                    <animated.input type="password" className={'sign-up--container--form--input'} placeholder={'password'}
                                    style={useSpring({
                                        from : {
                                            opacity : 0
                                        },
                                        to : {
                                            opacity : 1
                                        },
                                        delay : 1200,
                                        config : config.slow
                                    })}
                                    onChange={(event) => {setPassword(event.target.value)}}
                    />
                    <animated.input type="password" className={'sign-up--container--form--input'} placeholder={'confirm password'}
                                    style={useSpring({
                                        from : {
                                            opacity : 0
                                        },
                                        to : {
                                            opacity : 1
                                        },
                                        delay : 1300,
                                        config : config.slow
                                    })}
                                    onChange={(event) => {
                                        if (!confirmPasswordValidation(event.target.value)) {
                                            event.target.style.boxShadow = "0 0 15px rgba(128, 0, 0, .5)"
                                        }
                                        else {
                                            setConfirmPassword(event.target.value)
                                            event.target.style.boxShadow = "0 0 15px rgba(0, 100, 0, .5)"
                                        }
                                    }}
                    />
                    <animated.button type="button" className={'sign-up--container--form--button'}
                                     style={useSpring({
                                         from : {
                                             opacity : 0
                                         },
                                         to : {
                                             opacity : 1
                                         },
                                         delay : 1400,
                                         config : config.slow
                                     })}
                                     onClick={ async () => {
                                         const result = await fetch("http://localhost:80/api/register", {
                                             headers: {
                                                 "Content-Type": "application/json"
                                             },
                                             body: JSON.stringify({
                                                 "username": username,
                                                 "email": email,
                                                 "password": password
                                             }),
                                             method: "POST",
                                             redirect: "follow"
                                         });
                                         if (result.ok) {
                                             navigator('/app')
                                             dispatch(set_username(String(username)))
                                             dispatch(set_auth(true))
                                         }
                                         else {
                                             console.log(result.statusText)
                                         }
                                     }}
                    >Submit</animated.button>
                    <div className={'sign-in--container--form--text-wrapper'}>
                        <animated.p className={'sign-in--container--form--text-wrapper--sep'}
                                    style={useSpring({
                                        from : {
                                            opacity : 0
                                        },
                                        to : {
                                            opacity : 1
                                        },
                                        delay : 1500,
                                        config : config.slow
                                    })}>Already registered? <Link to={'/welcome'} className={'sign-in--container--form--text-wrapper--text'}>Sign In</Link></animated.p>
                    </div>
                </form>
            </div>
            {/*<div className={"touch"}>
                <img className={"touch--adam"} src={adam} alt=""/>
            </div>*/}
        </section>
    </main>
}