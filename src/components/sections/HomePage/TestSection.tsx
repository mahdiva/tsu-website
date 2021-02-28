import React from 'react';
import tsu_logo from 'images/logo_white_start.png';
import './TestSection.css';

function TestSection() {
    return <div className="testSection">
        <div className="testSection__layout">
            <div>
                <h2 className="testSection__header">Hello world.</h2>
                <p>Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.</p>
                <div className="testSection__header turquoise">#23CAB5</div>
                <p className="testSection__header green">green #8FDC63</p>
            </div>
            <div className="testSection__imsdsg">
                <img className="testSection__img" src={"https://1.bp.blogspot.com/-2qME1-9hY2Y/V50IxjIUJcI/AAAAAAABzQI/x0EzDRh2WZEfI3erhRhJsU6aH-SKWETBgCLcB/s1600/Originalni.jpg"}></img>
            </div>
        </div>
        <div className="testSection__part2">
            <div className="testSection__margin">
                <div className="testSection__part2grid">
                    <div>
                        <h2 className="testSection__header turquoise">Hello world.</h2>
                        <p className="white">Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.</p>
                    </div>
                    <div className="testSection__imsdsg">
                        <img className="testSection__img" src={"https://1.bp.blogspot.com/-2qME1-9hY2Y/V50IxjIUJcI/AAAAAAABzQI/x0EzDRh2WZEfI3erhRhJsU6aH-SKWETBgCLcB/s1600/Originalni.jpg"}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="testSection__part3">
            <div className="testSection__margin">
                <div className="testSection__part2grid">
                    <div>
                        <h2 className="testSection__header green">Hello world.</h2>
                        <p className="white">Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.</p>
                    </div>
                    <div className="testSection__imsdsg">
                        <img className="testSection__img" src={"https://1.bp.blogspot.com/-2qME1-9hY2Y/V50IxjIUJcI/AAAAAAABzQI/x0EzDRh2WZEfI3erhRhJsU6aH-SKWETBgCLcB/s1600/Originalni.jpg"}></img>
                    </div>
                </div>
            </div>
        </div>


    </div>
}


export default TestSection;