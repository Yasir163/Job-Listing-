import React from 'react';
import data from './data.js';
import headerimage from "../images/bg-header-desktop.svg"
function JobList() {
    return (
        <div>
            <header className="header">
                <img src={headerimage} alt="" />
            </header>
                <main className="job-list">
                <div className="container">
                    <div className="job-list-main">       
                {data.map(item => (     
                        <div className="job-card" key={item.id}>
                            <div className="profile-details">
                                <div className="profile-pic-container" id="profile-pic-container">
                                    <img src={item.logo} className="profile-pic" id="profile-pic" alt={item.name}/>
                                </div>
                                <div className="details">
                                    <div className="job-details">
                                        <div className="company-name">{item.company}</div>
                                        <div className="new-featured">
                                            {item.new && <div className="new">New !</div>}
                                            {item.featured && <div className="featured">Featured</div>}
                                        </div>
                                    </div>
                                    <div className="job-position">
                                        <b>{item.position}</b>
                                    </div>
                                    <div className="location-post">
                                        <div className="post-time">
                                            {item.postedAt}
                                        </div>
                                        <div className="job-duration">
                                            {item.contract}
                                        </div>
                                        <div className="job-location">{item.location}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skills-required" id="skills">
                                {item.role && <div className='skill'>{item.role}</div>}
                                {item.level && <div className='skill'>{item.level}</div>}
                                <div className={item.languages[0] ? "skill" : ""}>
                                    {item.languages[0] ? item.languages[0] : null}
                                </div>
                                <div className={item.languages[1] ? "skill" : ""}>
                                    {item.languages[1] ? item.languages[1] : null}
                                </div>
                                <div className={item.languages[2] ? "skill" : ""}>
                                    {item.languages[2] ? item.languages[2] : null}
                                </div>
                                <div className={item.tools[0] ? "skill" : ""}>
                                    {item.tools[0] ? item.tools[0] : null}
                                </div>
                                <div className={item.tools[1] ? "skill" : ""}>
                                    {item.tools[1] ? item.tools[1] : null}
                                </div>
                            </div>
                        </div>
                ))}      
                    </div>
                </div>
            </main>
            <div className="attribution">
                Challenge by <a className='attribution-link' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a className='attribution-link' href="https://github.com/Yasir163">Mohammad Yasir Zubair</a>.
            </div>
        </div>
    )
}

export default JobList
