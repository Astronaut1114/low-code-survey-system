import {createBrowserRouter} from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import List from '../pages/manage/List'
import Trash from '../pages/Manage/Trash'
import Star from '../pages/Manage/Star'
import Edit from '../pages/Question/edit/index'
import Stat from '../pages/Question/statistics/index'

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/login',
                element:<Login /> 
            },
            {
                path:'/manage',
                element:<ManageLayout />,
                children:[
                    {
                        path:'list',
                        element:<List />
                    },
                    {
                        path:'trash',
                        element:<Trash />
                    },
                    {
                        path:'star',
                        element:<Star />
                    }
                ]
            },
            {
                path:'*',
                element:<NotFound />
            }
        ]
    },
    {
        path:'question',
        children:[
            {
                path:'edit/:id',
                element:<Edit />
            },
            {
                path:'stat/:id',
                element:<Stat />
            }
        ]
    }
])

export default router



// ---------------------------------
export const MANGER_LIST = '/manage/list'