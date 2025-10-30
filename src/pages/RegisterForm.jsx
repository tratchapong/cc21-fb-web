import React from 'react'

function RegisterForm() {
	return (
		<>
			<div className="text-3xl text-center opacity-70">Create a new account</div>
			<div className="divider opacity-70"></div>
			<form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-5 p-4 pt-3'>
				<div className="flex gap-2">
					<input type="text" className="input w-full" placeholder='First name' />
					<input type="text" className="input w-full" placeholder='Last name' />
				</div>
				<input type="text" className="input w-full" placeholder='Email or Phone number' />
				<input type="password" className="input w-full" placeholder='New Password' />
				<input type="password" className="input w-full" placeholder='Confirm Password' />
				<button className="btn btn-secondary text-xl text-neutral-50">Sign up</button>
			</form>
		</>

	)
}

export default RegisterForm