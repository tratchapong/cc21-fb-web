import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerSchema } from "../validation/schema"
import axios from "axios"
import { useEffect } from "react"
import { toast } from "react-toastify"

function RegisterForm({resetForm}) {
	const {handleSubmit, register, formState, reset} = useForm({
		resolver : zodResolver(registerSchema),
		mode: 'onBlur'
	})
	const {isSubmitting, errors} = formState
	useEffect( ()=>{ reset()}, [resetForm])

	const onSubmit = async data => {
		try {
		const resp = await axios.post('http://localhost:8899/api/auth/register', data)
		toast.success(resp.data?.message)
		document.getElementById("register-form").close()
		reset()
		}catch(err){
			console.log(err)
			const errMsg = err.response?.data?.message || err.message
			toast.error(errMsg)
		}
	}
	return (
		<>
			<div className="text-3xl text-center opacity-70">Create a new account</div>
			<div className="divider opacity-70"></div>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-4 pt-3'>
				<div className="flex gap-2">
					<div className="w-full">
						<input type="text" className="input w-full" placeholder='First name' {...register('firstName')} />
						<p className="text-sm text-error">{errors.firstName?.message}</p>
					</div>
					<div className="w-full">
						<input type="text" className="input w-full" placeholder='Last name' {...register('lastName')}/>
						<p className="text-sm text-error">{errors.lastName?.message}</p>
					</div>
				</div>
				<div className="w-full">
					<input type="text" className="input w-full" placeholder='Email or Phone number' {...register('identity')}/>
					<p className="text-sm text-error">{errors.identity?.message}</p>
				</div>
				<div className="w-full">
					<input type="password" className="input w-full" placeholder='New Password' {...register('password')} />
					<p className="text-sm text-error">{errors.password?.message}</p>
				</div>
				<div className="w-full">
					<input type="password" className="input w-full" placeholder='Confirm Password' {...register('confirmPassword')}/>
					<p className="text-sm text-error">{errors.confirmPassword?.message}</p>
				</div>
				<button className="btn btn-secondary text-xl text-neutral-50">Sign up</button>
				<button className="btn btn-error text-xl text-neutral-50" type="button" onClick={()=>reset()}>Reset Form</button>
			</form>
		</>

	)
}

export default RegisterForm