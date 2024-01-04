import { Link } from "react-router-dom"
import FormContainer from "../components/containers/FormContainer"

function LoginPage() {
    return (
        <div className="w-full flex justify-center flex-col gap-14 px-3 md:items-center">

            <h1 className="text-3xl mt-18 text-center mt-14 font-bold ">Login</h1>

            <FormContainer>
                <form className="flex flex-col gap-10">
                    <input type="text" name="username" id="username" className="bg-stone-200 w-full p-3 text-xl rounded-sm" placeholder="username" />
                    <input type="password" name="password" id="password" className="bg-stone-200 w-full p-3 text-xl rounded-sm" placeholder="password" />
                    <button className="bg-green-400 p-3 text-white text-xl rounded-md">Login</button>
                </form>
            </FormContainer>

           <p className="text-center">Dont have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
        </div>
    )
}

export default LoginPage
