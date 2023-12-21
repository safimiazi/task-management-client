import { Button, Input } from '@material-tailwind/react';
import React from 'react';

const DashDetails = () => {
    return (
        <div className='min-h-screen'>
            <div className='py-10 text-center'>
                <h1 className='text-5xl '>Task Management</h1>
                <div className='flex justify-center py-10'>
                    <div className="rounded-none bg-blue-200">
                        <Input type='text' className='' label="title" />
                    </div>
                    <div className="rounded-none bg-blue-200">
                        <Input type='text' label="description" />
                    </div>
                    <div className="rounded-none bg-blue-200">
                        <Input type='date'  />
                    </div>
                    <div className='rounded-none bg-blue-200'>
                        <select
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                           
                            <option value="low">Low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">High</option>
                        </select>
                        
                    </div>
                    <div>
                        <Button>Create Task</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashDetails;