import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import {RootState, useAppSelector} from "../store";
import {animated, config, useSpring} from "react-spring";
import pattern from "../assets/pattern.webp";
import {useEffect, useState} from "react";
import Chat from "../components/Chat";

export default function AppOutlet() {
    const [flag, setFlag] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlag(!flag)
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return <>
        <div style={{display: flag ? "auto" : "none", transition: "300 ease-in"}}><animated.h1 className={"loader"} style={useSpring({
            from : {
                y : 100,
                opacity : 0
            },
            to : {
                y : 0,
                opacity : window.location.href.substring(window.location.href.length - 3) != ("app") ? 0 : 1
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
        <section className={"app"}>
            <img className={"pattern"} src={pattern} alt=""/>
            <animated.div className={"app--container"} style={useSpring({
                from : {
                    opacity : 0
                },
                to : {
                    opacity : 1
                },
                delay : window.location.href.substring(window.location.href.length - 3) != "app" ? 0 : 3000
            })}>
                <Sidebar/>
                { window.location.href.substring(window.location.href.length - 3) != "app"
                    ? <Chat chatId={Number(window.location.href.substring(window.location.href.length - 1))}/>
                    : <></>
                }
            </animated.div>
        </section>
        <Outlet/>
    </>
}
