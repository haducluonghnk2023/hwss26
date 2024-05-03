import React from 'react'
import './B7.css'
export default function B7() {
  return (
    <div>
        <h1>B7</h1>
        <nav>
            <div className="header">Header</div>
        </nav>
        <main style={{display:"flex"}}>
            <div className="menu">
                Menu
            </div>
            <div className="main-menu">
                <div className="main">Main</div>
                <div className="footer">Footer</div>
            </div>
        </main>
    </div>
  )
}
