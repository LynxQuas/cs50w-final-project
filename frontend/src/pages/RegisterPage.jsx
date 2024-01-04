import { Link } from "react-router-dom"
import FormContainer from "../components/containers/FormContainer"

function RegisterPage() {
    return (
        <div className="w-full flex justify-center flex-col gap-14 px-3 md:items-center">

            <h1 className="text-3xl mt-18 text-center mt-14 font-bold ">Register</h1>

            <FormContainer>
                <form className="flex flex-col gap-10">
                    <input type="text" id="username" placeholder="Username" className="bg-stone-200 w-full p-3 text-xl rounded-sm"/>
                    <input type="password" id="password" placeholder="Password" className="bg-stone-200 w-full p-3 text-xl rounded-sm"/>
                    <input type="password" id="confirmation" placeholder="Confirm Password" className="bg-stone-200 w-full p-3 text-xl rounded-sm"/>
                    <button className="bg-green-400 p-3 text-white text-xl rounded-md">Register</button>
                </form>
            </FormContainer>

            <p className="text-center">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>

        </div>
    )
}

export default RegisterPage
