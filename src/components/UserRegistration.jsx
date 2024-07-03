import React from 'react'


const UserRegistration = () => {
  return (
    <div className=' w-full bg-slate-600 flex flex-col gap-8'>

        <h2 className=' text-center font-semibold mt-8 w-5/6 mx-auto'>Form Control Sign Up Page</h2>
        <form className=' full py-4 h-fit flex flex-col w-5/6 mx-auto gap-8 mb-12'>
            <input type='text' name='username' placeholder='Username e.g apexternation' className='py-2 px-4 rounded-md bg-slate-200 text-slate-700 placeholder-slate-700' />
            <input type='email' name='email' placeholder='Email e.g apex@gmail.com' className='py-2 px-4 rounded-md bg-slate-200 text-slate-700 placeholder-slate-700' />
            <input type='password' name='password' placeholder='password e.g apexternation' className='py-2 px-4 rounded-md bg-slate-200 text-slate-700 placeholder-slate-700' />
            <select type='text' name='role' className='py-2 px-4 rounded-md bg-slate-200 text-slate-700 placeholder-slate-700'>
                <option value='Select Role'>Select Role</option>
                <option value='Admin'>Administrator</option>
                <option value='Analyst'>Analyst</option>
            </select>
        </form>

    </div>
  )
}

export default UserRegistration