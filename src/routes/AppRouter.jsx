import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import UserLayout from '../layouts/UserLayout'

const guestRouter = createBrowserRouter([
	{ path : '/', element: <p>Login</p>},
	{ path : '*', element: <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element: <UserLayout />,
		children : [
		{ path : '', element: <p>Home page</p>},
		{ path : 'friends', element: <p>Friends page</p>},
		{ path : 'profile', element: <p>Profile page</p>},
		{ path : '*', element: <Navigate to='/' />},
		]
	},


])

function AppRouter() {
	const user = {username : 'andy'}
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider router={finalRouter}/>
	)
}

export default AppRouter