import React , {useEffect} from 'react';
import M from 'materialize-css';
import './Sections.css'

const Sections = () => {

    useEffect(() => {
        let element = document.querySelectorAll(".parallax")
        M.Parallax.init(element);            
    },[])

    return (
        <>
            <div className="row"></div>
        <div className="container">            
            <div className="parallax-container">
                <div className="parallax">
                    <img alt="nature 1" src="../../images/background2.jpg"/>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax header">
                    <img alt="nature 2" src="../../images/background3.jpg"/>
                </div>
            </div>            
        </div>
        </>
    )
}

export default Sections;