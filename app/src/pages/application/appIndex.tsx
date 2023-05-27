import { useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";

import Chat from "../../components/chat";
import Sidebar from "../../components/sidebar";

import pattern from "../../assets/pattern.webp";

export default function AppIndex() {
    const [flag, setFlag] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlag(!flag)
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return <main>
        <div style={{display: flag ? "auto" : "none", transition: "300 ease-in"}}><animated.h1 className={"loader"} style={useSpring({
            from : {
                y : 100,
                opacity : 0
            },
            to : {
                y : 0,
                opacity : 1
            },
            delay : 800,
        })}>
            { ("Welcome".split('')).map((value, index) => <animated.span style={useSpring({
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
        </animated.h1></div>
        <div className={"lines"}>
            {Array.from(
                {length: window.innerWidth / 100},
                (_, index) => index + 1)
                .map(() => <div className={"lines--line"} style={{height: window.innerHeight}}/>)
            }
        </div>
        <section className={"app"}>
            <img className={"pattern"} src={pattern} alt=""/>
            <animated.div className={"app--container"} style={useSpring({
                from : {
                    opacity : 0
                },
                to : {
                    opacity : 1
                },
                delay : 3000
            })}>
                <Sidebar/>
                {/*<Chat/>*/}
            </animated.div>
        </section>
    </main>
}