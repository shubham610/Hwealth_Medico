import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    
<div class="flex min-h-full cursor-pointer flex-col justify-center px-6 py-12 lg￼x-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto w-3/4" src="./png/logo-no-background.png"
            alt="HWealth"></img>
        <h2 class="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" >Sign up to your account
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required
                        class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6">
                        </input>
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required
                        class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6">
                            </input>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    {/* <!-- <div class="text-sm">
                        <a href="#" class="font-semibold text-cyan-600 hover:text-cyan-500 color-dark">Forgot password?</a>
                    </div> --> */}
                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required
                        class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6">
                            </input>
                </div>
            </div>

            <div>
                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible￼utline focus-visible￼utline-2 focus-visible￼utline-offset-2 focus-visible￼utline-cyan-600" >Sign
                    in</button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <Link to="/login" class="text-cyan-700 hover:text-cyan-800 cursor-pointer leading-6 color-dark" >Login</Link>
        </p>
    </div>
</div>

    </>
  )
}

export default Signup

