import { memo, useEffect, useRef } from "react";
import "./Intro.css";

function Intro() {

    const slider1 = useRef();
    const slider2 = useRef();
    const textRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            slider2.current.classList.remove("d-none");
            slider2.current.style.animation = "0.8s slideInRight ease-out forwards";
        }, 500);
        setTimeout(() => {
            textRef.current.classList.remove("d-none");
            textRef.current.style.animation = "0.8s fadeIn ease-out forwards";
        }, 1500);
    }, []);

    return (
        <>
            <div id="intro" style={{width: "100vw"}} className="position-relative min-vh-100">
                <div style={{zIndex: 2}} className="bg-overlay position-absolute top-0 bottom-0 start-0 w-100"></div>
                <div style={{zIndex: 1}} ref={slider1}>
                    <img ref={slider1} src="/assets/images/intro/hazy.jpg" className="position-absolute top-0 bottom-0 start-0 w-100" style={{maxHeight: "100vh"}} />
                </div>
                <div style={{zIndex: 1}} ref={slider2} className="d-none">
                    <img ref={slider1} src="/assets/images/intro/clear.jpg" className="position-absolute top-0 bottom-0 start-50 w-100" style={{maxHeight: "100vh"}} />
                </div>
                <div id="intro-text" ref={textRef} style={{transform: "translate(-50%, -50%)", zIndex: 3}} className="position-absolute d-none top-50 start-50 text-center">
                    <img src="/assets/images/Mini-Logo-NoBg.png" width={300} />
                    <h1 className="text-center header text-light">
                        Hazed out? Try 
                        <span className="header text-primary"> Lucidify</span>
                        . 
                    </h1>
                    <h4 className="text-grey my-3">
                        Your images can always be more clear.
                    </h4>
                </div>
            </div>
        </>
    );
}

export default memo(Intro);