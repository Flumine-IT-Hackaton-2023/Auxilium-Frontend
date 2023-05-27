import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animated, config, useSpring, useTransition } from "react-spring";

import pattern from "../assets/pattern.webp";
import jesus from "../assets/jesus.webp";

export default function IndexPage() {
    const [text, setText] = useState("More detailed");
    const [flag, setFlag] = useState(false)

    return <main>
        <div className={"lines"}>
            {Array.from(
                {length: window.innerWidth / 100},
                (_, index) => index + 1)
                .map(() => <div className={"lines--line"} style={{height: window.innerHeight}}/>)
            }
        </div>
        <section className={"hero"}>
            <img className={"pattern"} src={pattern} alt=""/>
            <div className={"hero--container"}>
                <div className={"hero--container--heading"}>
                    <animated.h1 className={"hero--container--heading--title"} style={useSpring({
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
                        { ['A', 'u', 'x', 'i', 'l', 'i', 'u', 'm'].map((value, index) => <animated.span style={useSpring({
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
                    <animated.p className={"hero--container--heading--description"} style={useSpring({
                        from : {
                            y : 100,
                            opacity : 0
                        },
                        to : {
                            y : 0,
                            opacity : 1
                        },
                        delay : 1000,
                        config : config.slow
                    })}>
                        { ("Etiam Christus auxilio fuit ad crucem suam portandam".split("")).map((value, index) => <animated.span style={useSpring({
                            from : {
                                y : 100,
                                opacity : 0
                            },
                            to : {
                                y : 0,
                                opacity : 1
                            },
                            delay : 1000 + (index * 50),
                            config : config.slow
                        })}>{value}</animated.span>)}
                    </animated.p>
                </div>
                <animated.a className={"hero--container--link"} href={'/welcome'}
                            style={useSpring({
                                from : {
                                    y : 100,
                                    opacity : 0
                                },
                                to : {
                                    y : 0,
                                    opacity : 1
                                },
                                delay : 4000,
                                config : config.slow
                            })}
                            onMouseEnter={() => setFlag(true)}
                >
                    {(text.split('')).map((value, index) => <animated.span style={useSpring({
                        from : {
                            y : 100,
                            opacity : 0
                        },
                        to : {
                            y : 0,
                            opacity : 1
                        },
                        delay : 4000 + (index * 80),
                        config : config.slow
                    })}>{value}</animated.span>)}
                </animated.a>
                <animated.img className={"jesus"} src={jesus} alt="" style={useSpring({
                    from : {
                        y : 100,
                        opacity : 0
                    },
                    to : {
                        y : 0,
                        opacity : 1
                    },
                    delay : 600,
                    config : config.slow
                })}/>
                <div className={'image-glitch'} style={{display : flag ? "auto" : "none"}}>
                    <animated.img className={"jesus"} src={jesus} alt="" style={useSpring({
                        from : {
                            y : 100,
                            opacity : 0
                        },
                        to : {
                            y : 0,
                            opacity : 1
                        },
                        delay : 600,
                        config : config.slow
                    })}/>
                    <div className="image-glitch__layers">
                        <div className="image-glitch__layer"/>
                        <div className="image-glitch__layer"/>
                        <div className="image-glitch__layer"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
}