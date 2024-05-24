import React from 'react'
import { MdSchool } from 'react-icons/md'
import './Educations.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Educations = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className='col-12 mt-3 ml-1 text-center text-uppercase'>Education Details</h2><hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'White', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2023"
            iconStyle={{ background: '#aa00ff', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc.Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">BNN,College-Bhiwandi</h4>
            <h4 className="vertical-timeline-element-subtitle">[University of Mumbai]</h4>
            <h5 className="vertical-timeline-element-subtitle1">Percentage/CGPA : 8.9 cgpa</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'White', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - 2020"
            iconStyle={{ background: '#aa00ff', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">12th-HSC</h3>
            <h4 className="vertical-timeline-element-subtitle">BNN,College-Bhiwandi</h4>
            <h4 className="vertical-timeline-element-subtitle">[Maharashtra State Board]</h4>
            <h5 className="vertical-timeline-element-subtitle1">Percentage/CGPA : 54.9%</h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Educations