/* eslint-disable react/prop-types */
function FormContainer({children}) {
    return (
        <div className="w-[100%] bg-stone-300 py-10 px-6 md:w-1/3 rounded-md"> 
            {children}
        </div>
    )
}

export default FormContainer
