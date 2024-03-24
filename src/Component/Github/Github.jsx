import React from 'react'
import{useState ,useEffect} from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/HemanSharma2002')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className=' flex h-screen bg-slate-900 w-full  justify-center'>
        <div  className='bg-white h-40 w-80 mt-40 rounded-lg flex flex-row'>
            <div className='w-1/3 flex items-center justify-center'>
                <div className=' w-full h-24 object object-top'>
                    <img className='h-full w-full object-top rounded-full' src={data?.avatar_url} alt="" />
                </div>
            </div>
            <div className='w-2/3 text-center mt-10'>
                <p className=' text-xl font-semibold'>{data?.name} </p>
                <Link className='text-sm font-semibold text-gray-700' to={data?.html_url} > <p>{data.login}</p></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Github
export async function loadGitPage(){
    const response= await fetch('https://api.github.com/users/HemanSharma2002')
    return response.json()
}