import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import UserLayout from '../layouts/UserLayout'
import { lazy, Suspense } from 'react'
import useUserStore from '../stores/userStore'

const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))
const Friends = lazy(()=>import('../pages/Friends'))
const Profile = lazy(()=>import('../pages/Profile'))

const guestRouter = createBrowserRouter([
	{ path : '/', element: <Login />},
	{ path : '*', element: <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element: <UserLayout />,
		children : [
		{ index : true, element: <Home />},
		{ path : 'friends', element: <Friends />},
		{ path : 'profile', element: <Profile />},
		{ path : '*', element: <Navigate to='/' />},
		]
	},
])

function AppRouter() {
	const user = useUserStore(state=>state.user)
	const finalRouter = user ? userRouter : guestRouter
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider key={user?.id} router={finalRouter}/>
		</Suspense>
	)
}

export default AppRouter