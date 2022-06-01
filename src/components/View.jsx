import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function View() {
	const [userResume, setuserResume] = useState([])
	const getResume = async ()=>{
		const {data} = await axios.get("http://localhost:5000/user")
		setuserResume(data)
	}
	useEffect(() => {
	 getResume()
	}, [])
  return (
	<div className='container'>
		<div className="row mt-4">
			<div className="col-sm-6 offset-sm-3">
						{
							userResume.map(item => <div className='card mt-4'>
								<div className="card-header text-center">Resume Preview</div>
								<div className="card-body">
									<h4 className='my-2'>Personal Information</h4>
									<div className="d-flex justify-content-between">
									<h5>Name : {item.userData.name}</h5>
									<h6>BirthDate : {item.userData.birthDate}</h6>
									</div>
									<div className="d-flex justify-content-between">
									<br />
									<h6>Email : {item.userData.email}</h6>
									<h6>About : {item.userData.about}</h6>
									</div>
									<br />
									<h4 className='my-2'>Experience</h4>
									<br />
									<div className="d-flex justify-content-between">
									<h6>Company Name : {item.experience.company_name}</h6>
									<h6>Post : {item.experience.job_post}</h6>
									</div>
									<div className="d-flex justify-content-between">
									<h6>Job Location : {item.experience.job_location}</h6>
									<h6>Job Description : {item.experience.job_description}</h6>
									</div>
									<br />
									<h4 className='my-4'>Education</h4>
									<div className="d-flex justify-content-between">
									<h5>Education : {item.education.education_name}</h5>
									<h6>Education Location :{item.education.education_location}</h6>
									</div>
									<h6>Education Info :{item.education.education_about}</h6>
									<br />
									<h4 className='my-2'>Project</h4>
									<div className="d-flex justify-content-between">
									<h6>Project Name :{item.project.project_name}</h6>
									<h6>Project Description :{item.project.project_description}</h6>
									</div>
									<h6>Role : {item.project.role}</h6>
									<br />
									<h4 className='my-2'>Skill</h4>
									<div className="d-flex justify-content-between">
									<h6>{item.skill.first_skill}</h6>
									<h6>{item.skill.second_skill}</h6>
									</div>
									<br />
									<h4 className='my-2'>Language</h4>
									<br />
									<div className="d-flex justify-content-between">
									<h6>{item.language.first_language}</h6>
									<h6>{item.language.second_language}</h6>
									</div>
								</div>
							</div>)
						}
			</div>
		</div>
	</div>
  )
}
