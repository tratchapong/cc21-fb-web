import { useState } from "react"
import { FacebookTitle } from "../icons"
import RegisterForm from "./RegisterForm"

function Login() {
	const [resetForm, setResetForm] = useState(true)

	const hdlClose = () => {
		setResetForm(prv=>!prv) //setResetForm(!resetForm)
		console.log('Register form close')
	}
	return (
		<>
			<div className="h-[700px] bg-base-200 pt-20 pb-28">
				<div className="p-5 mx-auto max-w-5xl min-h-[540px] flex justify-between max-md:flex-col">
					<div className="flex flex-col basis-3/5  gap-4 mt-20 max-md:items-center max-md:text-center">
						<div className="text-4xl text-primary">
							<FacebookTitle />
						</div>
						<h2 className="mt-3 text-[30px] leading-8 w-[514px]">
							Fakebook helps you connect and share with the people in your life.
						</h2>
					</div>
					<div className="flex flex-1">
						<div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
							<form onSubmit={e=>e.preventDefault()}>
								<div className="card-body gap-3 p-4">
									<input type="text" className="input w-full"
										placeholder="E-mail or Phone number" />
									<input type="password" className="input w-full"
										placeholder="password" />
									<button className="btn btn-primary text-xl">Login</button>
									<p className="text-center cursor-pointer opacity-75">Forgotten password?</p>
									<div className="divider"></div>
									<button className="btn btn-secondary"
										onClick={()=>document.getElementById("register-form").showModal()}
									>Create new account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<dialog id="register-form" className="modal" onClose={hdlClose}>
				<div className="modal-box">
					<RegisterForm resetForm={resetForm} />
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
				</div>
			</dialog>
		</>
	)
}

export default Login