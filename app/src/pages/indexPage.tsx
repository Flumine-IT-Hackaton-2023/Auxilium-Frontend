import pattern from "../assets/pattern.png";
import jesus from "../assets/jesus.png";
import { Link } from "react-router-dom";

export default function IndexPage() {
    return <main>
        <div className={"lines"}>
            {Array.from(
                {length: window.innerWidth / 100},
                (_, index) => index + 1)
                .map((val) =>
                    <div className={"lines--line"}/>)
            }
        </div>
        <section className={"hero"}>
            <img className={"pattern"} src={pattern} alt=""/>
            <div className={"hero--container"}>
                <div className={"hero--container--heading"}>
                    <h1 className={"hero--container--heading--title"}>Auxilium</h1>
                    <p className={"hero--container--heading--description"}>
                        Etiam Christus auxilio fuit ad crucem suam portandam
                    </p>
                </div>
                <Link className={"hero--container--link"} to={''}>
                    Magis detailed
                </Link>
                <img className={"jesus"} src={jesus} alt=""/>
            </div>
        </section>
    </main>
}