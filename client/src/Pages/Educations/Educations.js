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
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Bsc</h3>
            <h4 className="vertical-timeline-element-subtitle">BNN,Bhiwandi</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'White', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle">BNN,Bhiwandi</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Educations