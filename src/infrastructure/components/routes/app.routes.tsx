import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../../../features/home/page/home.page'));
const Todo = lazy(() => import('../../../features/todo/page/todo.page'));
const About = lazy(() => import('../../../features/about/page/about.page'));
export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="todo" element={<Todo></Todo>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
