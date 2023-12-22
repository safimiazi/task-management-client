import { Button, Input } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from 'sweetalert2';
import { clear } from 'localforage';
import { useQuery } from '@tanstack/react-query';
import useAllData from '../../Hooks/useAllData/useAllData';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";
import axios from 'axios';

import {
 
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 

const DashDetails = () => {
    const [todoData, refetch, isLoading] = useAllData();
    const [open, setOpen] = useState(false);
    const { user } = useContext(AuthContext)
    const [priority, setPriority] = useState()
    const [id, setId] = useState()
    const handleTaskSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        console.log(title, description, date, priority);
        const data = {
            title: title,
            description: description,
            date: date,
            priority: priority
        }

        fetch(`http://localhost:5000/task?email=${user.email}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res);
                clear(form)
                if (res.ok == true) {
                    refetch()
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully task added",
                        icon: "success",
                        confirmButtonColor: "rgb(129, 129, 208)",
                        iconColor: "rgb(129, 129, 208)"

                    });
                }


            })
            .catch(error => {
                console.log(error.message);
            })



    }


    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/delete-task/${id}`)
            .then(result => {
                console.log(result);
                refetch()
            })
            .catch(error => {
                console.log(error.message);
            })

    }



    const handleUpdate = (id) => {
        setId(id)
        setOpen(!open)
    }

    const handleOpen = () => {
        
    }

    const handleTaskUpdate = (e) => {
        console.log(id);
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        console.log(title, description, date, priority);
        const data = {
            title: title,
            description: description,
            date: date,
            priority: priority
        }

        axios.patch(`http://localhost:5000/update-task/${id}`, data)
        .then(result => {
            console.log(result);
            refetch()
            setOpen(false)
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (

<>

{ open ? <Dialog open={open} handler={handleOpen}>
<form onSubmit={handleTaskUpdate}>
        <DialogHeader>Please Update</DialogHeader>
        <DialogBody>
  
                    <div className=' justify-center py-10'>

                        <div className="rounded-none">
                            <Input name='title' type='text' className='' label="title" />
                        </div>
                        <div className="rounded-none ">
                            <Input name='description' type='text' label="description" />
                        </div>
                        <div className="rounded-none ">
                            <Input name='date' type='date' />
                        </div>
                        <div className='rounded-none bg-blue-200'>
                            <select
                                onChange={(e) => setPriority(e.target.value)}
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

                                <option value="low">Low</option>
                                <option value="moderate">moderate</option>
                                <option value="high">High</option>
                            </select>

                        </div>
                       
                    </div>
               
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={()=> setOpen(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" type='submit'>
            <span>update</span>
          </Button>
        </DialogFooter>
        </form>
      </Dialog>
      :

      <div className='min-h-screen'>
            <div className='py-10 text-center'>
                <h1 className='text-5xl '>Task Management</h1>
                <form onSubmit={handleTaskSubmit}>
                    <div className='md:flex justify-center py-10'>

                        <div className="rounded-none bg-blue-200">
                            <Input name='title' type='text' className='' label="title" />
                        </div>
                        <div className="rounded-none bg-blue-200">
                            <Input name='description' type='text' label="description" />
                        </div>
                        <div className="rounded-none bg-blue-200">
                            <Input name='date' type='date' />
                        </div>
                        <div className='rounded-none bg-blue-200'>
                            <select
                                onChange={(e) => setPriority(e.target.value)}
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

                                <option value="low">Low</option>
                                <option value="moderate">moderate</option>
                                <option value="high">High</option>
                            </select>

                        </div>
                        <div>
                            <Button type='submit'>Create Task</Button>
                        </div>
                    </div>
                </form>
            </div>


            {/* another section */}
            <div className='grid md:grid-cols-3 gap-2'>
                <div>
                    <div className='p-3 bg-blue-200 rounded-full text-center'>
                        <h1 className='text-4xl'>lists of to-do</h1>
                    </div>
                    <div>
                        {
                            todoData?.map(singleData => <Card key={singleData._id} className="mt-6  bg-blue-200">
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {singleData.title}
                                    </Typography>
                                    <Typography>
                                        {singleData.description}
                                    </Typography>
                                    <Typography>
                                        {singleData.data}
                                    </Typography>
                                    <Typography>
                                        priority: {singleData.priority}
                                    </Typography>
                                </CardBody>
                                <div className='flex'>
                                    <CardFooter className="pt-0">
                                        <Button onClick={() => handleDelete(singleData?._id)}>delete</Button>
                                    </CardFooter>
                                    <CardFooter className="pt-0 ">
                                        <Button onClick={() => handleUpdate(singleData?._id, )}>update</Button>
                                    </CardFooter>
                                </div>
                            </Card>)
                        }
                    </div>
                </div>
                <div>
                    <div className='p-3 bg-blue-400 rounded-full text-center'>
                        <h1 className='text-4xl'>lists of to-do</h1>
                    </div>
                </div>
                <div>
                    <div className='p-3 bg-blue-700 rounded-full text-center'>
                        <h1 className='text-4xl'>lists of to-do</h1>
                    </div>
                </div>

            </div>
        </div>
        }
</>


      
    );
};

export default DashDetails;