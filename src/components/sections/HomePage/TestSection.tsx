import React from 'react';
import tsu_logo from 'images/logo_white_start.png';
import './TestSection.css';

function TestSection(){
    return <div className="testSection">
      <div className="testSection__layout">
          <div>
              <h2 className="testSection__header">Hello world.</h2>
              <p>Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.</p>
          </div>
          <div className="testSection__imsdsg">
              <img className="testSection__img" src={"https://static.coindesk.com/wp-content/uploads/2021/02/EtkW62iVcAEmi7E-828x628.jpeg"}></img>
          </div>
      </div>
    </div>
}


export default TestSection;