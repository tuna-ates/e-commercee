import { Input } from '@material-tailwind/react';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/';
import { toast } from 'react-toastify';



import 'react-toastify/dist/ReactToastify.css';
import { UserActions } from '../store/reducers/userReducer';
import { loginUserActionCreator } from '../store/actions/userActions';
import { globalActionCreator } from '../store/actions/globalActions';
import { StoreActions } from '../store/reducers/storeReducer';
import { FetchStates } from '../store/reducers/globalReducer';

const initialObject = {
    role: ""
}

const SignUp = () => {
    const [selectData, setSelectData] = useState();
    //const selectData1 = useSelector(store => store.global.roles);
    const PWD_REGEX = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,123}$/
    const TAX_ID = /[T]\d{4}[V]\d{4}$/
    const TR_IBAN = /[TR]\d{26}/
    const TR_NUMBER = /^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$/gm
    const baseURL = "https://workintech-fe-ecommerce.onrender.com";
    const [data, setData] = useState("")
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }, watch,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastName: "",
            phone: "",
            storePhone: "",
            storeName: "",
            taxId: "",
            ıbanNo: "",
            role_id: ""

        },
        mode: "all"

    })
    const watchMysel = watch("role_id")
    useEffect(() => {
        const filtraPavimento = () => {
            console.log('mysel value', watchMysel);
        }
        filtraPavimento()
    }, [watchMysel]);


    useEffect(() => {

        axios.get("https://workintech-fe-ecommerce.onrender.com/roles")
            .then((res) => {
                setSelectData(res.data)
                //dispatch({ type: GlobalActions.setGlobalRoles, payload: res.data })
            })
            .catch((err) => {
                console.log(err.message);
            })


    }, [])

    const SubmitHandle = (formData) => {

        const requestData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role_id: formData.role_id
        }
        axios.post("https://workintech-fe-ecommerce.onrender.com/signup", requestData)
               dispatch({type:UserActions.setUserFetchState,payload:FetchStates.fetching})
            .then((res) => {
                console.log("form submit edildi", res.data);
                dispatch({type:UserActions.setUsers,payload:requestData})
                dispatch({ type: UserActions.setUsetFirstname, payload: formData.name });
                dispatch({ type: UserActions.setUserLastname, payload: formData.lastName });
                dispatch({ type: UserActions.setUserEmail, payload: formData.email });
                dispatch({ type: UserActions.setUserPhone, payload: formData.phone });
                dispatch({ type: UserActions.setUserRole, payload: formData.role_id });
                dispatch({ type: StoreActions.setStoreName, payload: formData.storeName });
                dispatch({ type: StoreActions.setStorePhone, payload: formData.storePhone });
                dispatch({ type: StoreActions.setTaxtId, payload: formData.taxId });
                dispatch({ type: StoreActions.setIbanNo, payload: formData.ıbanNo });
                dispatch({type:UserActions.setUserFetchState,paylod:FetchStates.fetched})
                history.push("/")
            }).catch((err) => {
                console.log(err.message);
                console.log("frommmmmmm", requestData);
                dispatch({type:UserActions.setUserFetchState,payload:FetchStates.failed})
            })
        //dispatch(loginUserActionCreator(requestData))

    }


    return <div className=' my-16'>
        <form className="max-w-md mx-auto flex flex-col" onSubmit={handleSubmit(SubmitHandle)}>

            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                    {...register("email", { required: "Email alanı boş bırakılamaz!", email: "Email hatalı!" })} />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address </label>
                <div className=' text-xs text-red-500'>{errors?.email?.message}</div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("password", {
                    required: "password boş bırakılamaz!", pattern: {
                        value: PWD_REGEX,
                        message: "Şifre en az 8 karakteden ve 1 rakam 1 büyük harf 1 küçük harf den oluşmalıdır!   "
                    }
                })} />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                <div className=' text-xs text-red-500'>{errors?.password?.message}</div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "{...register("confirmPassword",
                    {
                        required: "onay şifresi boş bırakılamaz",
                        validate: (value) => {
                            return value === watch('password') || "Şifre eşleşmedi!"
                        }
                    })} />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                <div className=' text-xs text-red-500'>{errors?.confirmPassword?.message}</div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("name", {
                            required: "isim alanı en az 3 karakterden oluşmalıdır!", minLength: {
                                value: 3,
                                message: "Şifre alanı 3 karakterden az olamaz!",
                            },
                        })} />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    <div className=' text-xs text-red-500'>{errors?.firstName?.message}</div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("lastName")} />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="floating_phone" id="floating_phone5" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("phone", {
                        pattern: {
                            value: TR_NUMBER,
                            message: "Lütfen geçerli telefon numarası giriniz!   "
                        }
                    })} />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon numarası(+90)</label>
                </div>
                <div className=' text-xs text-red-500'>{errors?.phone?.message}</div>

                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Role</label>

                    <select id="countries" className="bg-gray-50 border border-gray-300
                     text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                       dark:focus:border-blue-500"  {...register("role_id", { validate: (value) => value !== "0" })}>

                        <option value={selectData && selectData[2].name}>{selectData && selectData[2].name}</option>
                        {selectData && selectData.map((data, index) => {
                            { return index < 2 ? <option value={data.id} key={data.id}>{data.name}</option> : null }
                        })}
                    </select>


                </div>
                {
                    watchMysel == "2" && <div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                {...register("storeName", {
                                    required: "isim alanı en az 3 karakterden oluşmalıdır!", minLength: {
                                        value: 3,
                                        message: "Şifre alanı 3 karakterden az olamaz!",
                                    },
                                })} />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mağaza ismi</label>
                            <div className=' text-xs text-red-500'>{errors?.storeName?.message}</div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="floating_phone" id="floating_phone6" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("storePhone", {
                                pattern: {
                                    value: TR_NUMBER,
                                    message: "Lütfen geçerli telefon numarası giriniz!   "
                                }
                            })} />
                            <label htmlFor="floating_phone1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mağaza Telefon numarası(+90)</label>
                        </div>
                        <div className=' text-xs text-red-500'>{errors?.storePhone?.message}</div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="floating_phone" id="floating_phone7" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("taxId", {
                                pattern: {
                                    value: TAX_ID,
                                    message: "Lütfen geçerli vergi numarası giriniz!   "
                                }
                            })} />
                            <label htmlFor="floating_phone2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mağaza Vergi No(TXXXXVXXXX)</label>
                        </div>
                        <div className=' text-xs text-red-500'>{errors?.taxId?.message}</div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="floating_phone3" id="floating_phone8" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("ıbanNo", {
                                pattern: {
                                    value: TR_IBAN,
                                    message: "Lütfen geçerli ıban numarası giriniz!   "
                                }
                            })} />
                            <label htmlFor="floating_phone4" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mağaza Iban No(TRXXXXX)</label>
                        </div>
                        <div className=' text-xs text-red-500'>{errors?.ıbanNo?.message}</div>
                    </div>
                }
            </div>
            <button type="submit" className="text-white   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: isValid == true ? "#088BF9" : "#72B6EE" }} disabled={!isValid} >Submit</button>
        </form>
    </div>
}
export default SignUp;