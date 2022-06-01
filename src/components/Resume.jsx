import axios from 'axios'
import React, { useState } from 'react'
import View from './View'

export default function Resume() {
	const [preview, setpreview] = useState(false)
	const [userData, setuserData] = useState({
		name:"",
		birthDate:"",
		email:"",
		about:""
	})
	const [experience, setexperience] = useState({
		company_name:"",
		job_post:"",
		job_location:"",
		job_description:""
	})
	const [education, seteducation] = useState({
		education_name:"",
		education_location:"",
		education_about:""
	})
	const [project, setproject] = useState({
		project_name:"",
		project_description:"",
		role:""
	})
	const [language, setlanguage] = useState({
		first_language:"",
		second_language:""
	})
	const [skill, setskill] = useState({
		first_skill:"",
		second_skill:""
	})
	const handleResume = async (e)=>{
		e.preventDefault()
		const {data} = await axios.post("http://localhost:5000/user",{userData,project,education,experience,language,skill})
	}
  return (
	<div className='container'>
		<div className="row mt-4">
			<div className="col-sm-6 offset-sm-3">
				<div className="card">
					<div className="card-header text-center">Resume Maker</div>
					<div className="card-body">
					<form onSubmit={handleResume}>
					<input onChange={e=> setuserData({...userData,name:e.target.value})} type="text" placeholder='Enter Your Name' className="form-control" />
					<br />
					<input onChange={e=> setuserData({...userData,birthDate:e.target.value})} type="date" placeholder='Enter Your Birth Date' className="form-control" />
					<br />
					<input onChange={e=> setuserData({...userData,email:e.target.value})} type="email" placeholder='Enter Your Email' className="form-control" />
					<br />
					<textarea onChange={e=> setuserData({...userData,about:e.target.value})} placeholder='Enter About Yourself' className='form-control' cols="30" rows="5"></textarea>
					<br />
					<label htmlFor="experience" className='mb-3'>Experience</label>
					<div className="input-group">
					<input type="text" onChange={e=> setexperience({...experience,company_name:e.target.value})} placeholder='Enter Company Name' className="form-control" />
					<input type="text" onChange={e=> setexperience({...experience,job_post:e.target.value})} placeholder='Enter Your Post' className="form-control" />
					</div>
					<br />
					<div className="input-group">
					<input type="text"  onChange={e=> setexperience({...experience,job_location:e.target.value})} placeholder='Enter company location' className="form-control" />
					<input type="text"  onChange={e=> setexperience({...experience,job_description:e.target.value})} placeholder='Enter Description' className="form-control" />
					</div>
					<br />
					<label htmlFor="education" className='mb-3'>Education</label>
					<br />
					<div className="input-group">
						<input type="text"  onChange={e=> seteducation({...education,education_name:e.target.value})} placeholder='Enter Name' className="form-control" />
						<input type="text" onChange={e=> seteducation({...education,education_location:e.target.value})} placeholder='Enter Location' className='form-control' />
					</div>
					<br />
					<textarea placeholder='enter about' onChange={e=> seteducation({...education,education_about:e.target.value})} name="" id="" cols="30" rows="5" className="form-control"></textarea>
					<br />
					<label htmlFor="skills" className='mb-3'>Skills</label><br />
					<label htmlFor="html">Skill 1</label> <input onChange={e=> setskill({...skill,first_skill:e.target.value})} type="text" className='form-control'/><br />
					<label htmlFor="css">Skill 2</label> <input onChange={e=> setskill({...skill,second_skill:e.target.value})} type="text" className='form-control' /><br />
					<label htmlFor="language" className='my-3'>Language</label><br />
					<label htmlFor="hindi">Hindi</label> <input value="hindi" onChange={e=> setlanguage({...language,first_language:e.target.value})} type="checkbox" /><br />
					<label htmlFor="english">English</label> <input value="english" onChange={e=> setlanguage({...language,second_language:e.target.value})} type="checkbox" /><br /><br />
					<label htmlFor="project" className='mb-3'>Project</label>
					<div className="input-group">
						<input onChange={e=> setproject({...project,project_name:e.target.value})} type="text" className='form-control' placeholder='enter project name' />
						<input onChange={e=> setproject({...project,role:e.target.value})} type="text" className="form-control" placeholder='enter your role in project' />
					</div>
					<br />
					<textarea onChange={e=> setproject({...project,project_description:e.target.value})} name="" id="" cols="30" rows="5" placeholder='Enter description about project' className="form-control"></textarea>
					<br />
					<button className="btn btn-success w-100">Create Resume</button>
				</form>
				<br />
				<button className="btn btn-success" onClick={e=> setpreview(pre => !pre)}><i class="bi bi-eye"></i></button>
				</div>
				</div>
			</div>
		</div>
		{preview && <View/>}
	</div>
  )
}
