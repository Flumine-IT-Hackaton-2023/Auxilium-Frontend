import {animated, config, useSpring} from "react-spring";
import {Link} from "react-router-dom";
import pattern from "../assets/pattern.webp";

export default function RegistrationPage() {
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
                                    })}/>
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
                                    })}/>
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
                                    })}/>
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
                                    })}/>
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
                                     })}>Submit</animated.button>
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
        </section>
    </main>
}