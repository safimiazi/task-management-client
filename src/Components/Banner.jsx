
import animation from "../assets/Animation - 1703153400363.json"
import Lottie from 'lottie-react';
import { Button } from '@material-tailwind/react';
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center bg-blue-200  h-[calc(100vh-71.6px)]'>
            <div className='space-y-4 md:ml-56 p-5'>
                <h2 className='md:text-5xl text-3xl font-bold'>Task Management Solution</h2>
                <p className=''>Welcome to Tasky, where seamless task management meets unparalleled productivity. Transform the way you work, collaborate, and achieve your goals with our cutting-edge Task Management Solution.</p>
                <Button><Link to="/login">Let’s Explore</Link></Button>
            </div>
            <div className=' flex justify-center items-center '>
                <Lottie className='md:w-[500px] w-[200px]' animationData={animation} />
            </div>
        </div>
    );
};

export default Banner;