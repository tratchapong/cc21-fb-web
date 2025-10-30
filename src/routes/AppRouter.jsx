import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import UserLayout from '../layouts/UserLayout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Friends from '../pages/Friends'
import Profile from '../pages/Profile'

const guestRouter = createBrowserRouter([
	{ path : '/', element: <Login />},
	{ path : '*', element: <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element: <UserLayout />,
		children : [
		{ path : '', element: <Home />},
		{ path : 'friends', element: <Friends />},
		{ path : 'profile', element: <Profile />},
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