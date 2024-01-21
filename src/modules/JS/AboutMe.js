import React from 'react'
import Card from '../../components/JS/Card'
import SocialMedia from '../../components/JS/SocialMedia'
import Education from '../../components/JS/Education'
import Certificate from '../../components/JS/Certificate'

export default function AboutMe() {
    return (
        <div className='AboutMe-container'>
            <h2>About Me</h2>
            <div>
                <div className="My-box">
                    <Card />
                    <div className="data-box">
                        <div>
                            <div>
                                <span>Name</span>
                                <p>Paruyr</p>
                            </div>
                            <div>
                                <span>Surname</span>
                                <p>Baghyan</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Year</span>
                                <p>2004</p>
                            </div>
                            <div>
                                <span>Month</span>
                                <p>March</p>
                            </div>
                            <div>
                                <span>Day</span>
                                <p>24</p>
                            </div>
                        </div>
                        <SocialMedia />
                    </div>
                </div>
                <div className="prof-skills-container">
                    <div className="programmer-img"></div>
                    <div>
                        <h3>Junior Frontend Developer (without work experience)</h3>
                        <h4>Programming Skills</h4>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>SASS</li>
                            <li>SCSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Education />
            <Certificate />
        </div>
    )
}
