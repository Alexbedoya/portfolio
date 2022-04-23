import React from 'react';
import '../style/experience.css'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Experience() {
    return ( 
        <div className='baground-gradiend'>
             <div id='Experience' className="container">
                <div className="row">
                    <div className="col-md-12 pt30">{'<?'}WORK EXPERIENCE</div>
                </div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">EFFITECO S.A.S</h3>
                        <h4 className="vertical-timeline-element-subtitle">Developer</h4>
                        <h4 className="vertical-timeline-element-subtitle">Medellin, COL</h4>
                        <p className='justify'>
                        Development of web applications, implementing some frameworks such as VUEJS and Electron, 
                        MySQL database management for reporting and queries.
                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <h3 className="vertical-timeline-element-title">IBM de Colombia</h3>
                        <h4 className="vertical-timeline-element-subtitle">Software specialist</h4>
                        <h4 className="vertical-timeline-element-subtitle">Medellin, COL</h4>
                        <p className='justify'>
                        Development of micro-services, consumption of SOAP and REST services, development 
                        of validations with the help of the Angular 5 framework and typescript, management 
                        of internal processes for outputs to production of value deliveries. Administration 
                        and development of Interact Campaign consumption from other applications.
                        Adaptation of agile methodologies for product development and deliver it in the shortest possible time.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - Agosto 2016"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}  
                    >
                        <h3 className="vertical-timeline-element-title">VITALBOX</h3>
                        <h4 className="vertical-timeline-element-subtitle">Developer</h4>
                        <h4 className="vertical-timeline-element-subtitle">Medellin, COL</h4>
                        <p className='justify'>
                        Customization and maintenance of corporate sites and subsites, administration of Sharepoint Serve 
                        2010 and 2013, analysis and survey of requirements for new projects, development of new applications 
                        and their maintenance, code reading, correction of application maintenance, user support, administration 
                        of profiles and permissions for corporate users.
                        </p>
                    </VerticalTimelineElement>
                    

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        
                    />
                </VerticalTimeline>
                
            </div>
        </div>
     );
}

export default Experience;