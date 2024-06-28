import React from 'react'
import './Site.css'
import siteimg from '../../assets/suc.svg'
import { Link } from 'react-router-dom'

function Site() {
  return (
    <>
    <section className="site">
        <div className="left-site">
            <h1>THIS SITE IS UNDER CONSTRUCTION</h1>
            <p>we’re working on it so please be wait and click the below button to see the webdesign</p>
            <Link to='https://www.figma.com/proto/xoeqkXxg7wXpi6XTsrp4aw/Untitled?page-id=68%3A59&node-id=68-67&viewport=656%2C84%2C0.1&t=XhVqcbtYe1Wg7F1f-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=68%3A67' style={{textDecoration:'none'}}><button>Click Me!</button></Link>
        </div>
        <div className="right-site">
            <img src={siteimg} />
        </div>
    </section>
    </>
  )
}

export default Site