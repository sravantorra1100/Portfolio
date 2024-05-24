import React from 'react'
import './WorkExp.css'
import { SiReact } from 'react-icons/si'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const WorkExp = () => {
    return (
        <>
            <div className=" work" id="workexperience">
                <div className="container work-exp">
                    <h2 className='col-12 mt-3 ml-1 text-center text-uppercase'>Work Experience</h2><hr />
                    <VerticalTimeline lineColor='#1e1e2c'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white ' }}
                            date="Sep - 2024"
                            iconStyle={{ background: '#aa00ff', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Full Stack Developer(MERN) - Internship</h3>
                            <h4 className="vertical-timeline-element-subtitle">xyz, pvt ltd</h4>
                            <p>
                                1 month of Internship Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, commodi.
                            </p>
                        </VerticalTimelineElement>
                        {/**/}
                        {/**/}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default WorkExp