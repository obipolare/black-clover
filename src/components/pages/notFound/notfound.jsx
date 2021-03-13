import Notfound from "../../../assets/notFound2.json"
import React,{Component} from "react"
import Lottie from "react-lottie"
import {Link} from "react-router-dom"
import {ContainerNotfound, Animationlottie, Gohouse, Buttongradient} from "./notFound"
import "../../../styles/styles.css"


class notfound extends Component {
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: Notfound,
        } ;

        return (
              <ContainerNotfound>
               <h2>Page NOT FOUND</h2>
                <Animationlottie>
                    <Lottie options={defaultOptions} />
                </Animationlottie>
                <Gohouse>
                    <h3>Volver a Casa</h3>
                    <Link to="/" className="textrouternf">
                        <Buttongradient>
                            Aquí
                        </Buttongradient>
                    </Link>
                </Gohouse>
          </ContainerNotfound>
        )
    }
}
export default notfound