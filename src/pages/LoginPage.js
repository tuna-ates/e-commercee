import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginActionCreator } from "../store/actions/loginActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FetchStates } from "../store/reducers/globalReducer";
import { useEffect } from "react";
import { toast } from "react-toastify";


const LoginPage = () => {
    const history = useHistory();
    const fetchStatus = useSelector(store => store.login.fetchState)
    const { register,
        handleSubmit,
        formState: { errors, isValid } } = useForm({
            defaultValues: {
                email: "",
                password: ""

            },
            mode: "all"
        });
    const PWD_REGEX = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,123}$/
    const dispatch = useDispatch();
    const submitHandle = (formData) => {
        
        dispatch(loginActionCreator(formData));
        console.log("denemee", fetchStatus);

    }
    useEffect(() => {
        if (fetchStatus == FetchStates.fetched) {
            toast.success('Giriş başarıyla yapıldı!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
            history.push("/")
        } else if (fetchStatus == FetchStates.failed) {
            toast.error('Giriş yapılamadı!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
        }
    }, [fetchStatus])

    return <>
        <div className="my-14">
            <form className="max-w-md mx-auto flex flex-col" onSubmit={handleSubmit(submitHandle)}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "

                        {...register("email", { required: "Email alanı boş bırakılamaz!", email: "Email hatalı!" })}
                    />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address </label>

                    <div className=' text-xs text-red-500'>{errors?.email?.message}</div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("password", {
                            required: "password boş bırakılamaz!",
                        })} />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    <div className=' text-xs text-red-500'>{errors?.password?.message}</div>
                </div>

                <button type="submit" className=" bg-blue-800 text-white   hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={!isValid} style={{ background: isValid == true ? "#088BF9" : "#72B6EE" }}
                >Submit</button>
            </form>
        </div>
    </>
}
export default LoginPage;