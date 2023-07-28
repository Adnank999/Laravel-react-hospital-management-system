import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

import { useState, useEffect } from "react";
import axios from "axios";
// import UserData from "./UserData";

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Make an Inertia POST request to submit the form data
            await Inertia.post("/submit-form", data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/userData")
            .then((result) => {
                console.log(result.data);
                setUsers(result.data);
            })

            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex gap-5">
            <div className="w-[70%]">
                <div className="bg-red-500 p-5">
                    <h2 className="text-lg font-bold">User details</h2>
                    <form
                        className="grid grid-cols-3"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        

                        {/* Replace with your form fields */}
                        <div className="mb-6 hidden">
                            <label htmlFor="name">id</label>
                            <Controller
                                name="id"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="hidden"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="name">Name:</label>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6 ml-3">
                            <label htmlFor="email">Email:</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        {/* Add more form fields as needed */}
                        <div className="mb-6 ml-3">
                            <label htmlFor="patient_type">Patient Type:</label>
                            <select
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="selectmethod"
                                defaultValue=""
                                name="patient_type"
                                {...register("patient_type", {
                                    required: true,
                                })}
                            >
                                <option value="" disabled>
                                    Select Option
                                </option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="mobile">Mobile:</label>
                            <Controller
                                name="mobile"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="number"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6 ml-3">
                            <label htmlFor="address">Address:</label>
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6 ml-3">
                            <label htmlFor="dob">Date of Birth:</label>
                            <Controller
                                name="dob"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="date"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Gender">Gender:</label>
                            <select
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="selectmethod"
                                defaultValue=""
                                name="gender"
                                {...register("gender", { required: true })}
                            >
                                <option value="" disabled>
                                    Select Option
                                </option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="mb-6 ml-3">
                            <label htmlFor="age">Age:</label>
                            <Controller
                                name="age"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="number"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6 ml-3">
                            <label htmlFor="dr_code">Cons DrCode:</label>
                            <Controller
                                name="dr_code"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="ref_code">Ref DrCode:</label>
                            <Controller
                                name="ref_code"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-6 ml-3">
                            <label htmlFor="hc_code">Hc DrCode:</label>
                            <Controller
                                name="hc_code"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                )}
                            />
                        </div>
                        <div className="mt-3 ml-3">
                            <button
                                type="submit"
                                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Submit
                            </button>
                        </div>
                        <div className=" bg-blue-500 flex gap-4 ml-4">
                            <div className="mb-6">
                                <label htmlFor="department">Department:</label>
                                <select
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="selectmethod"
                                    defaultValue=""
                                    name="department"
                                    {...register("department", {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled>
                                        Choose department
                                    </option>
                                    <option value="Biochemistry">
                                        Biochemistry
                                    </option>
                                    <option value="Haematology">
                                        Haematology
                                    </option>
                                    <option value="Immunology">
                                        Immunology
                                    </option>
                                    <option value="Microbiology">
                                        Microbiology
                                    </option>
                                    <option value="Serology">Serology</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="test_name">Test name:</label>
                                <select
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="selectmethod"
                                    defaultValue=""
                                    name="test_name"
                                    {...register("test_name", {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled>
                                        Choose Test
                                    </option>
                                    <option value="Complete blood count">
                                        Complete blood count
                                    </option>
                                    <option value="White blood cell count">
                                        White blood cell count
                                    </option>
                                    <option value="Red blood cell count">
                                        Red blood cell count
                                    </option>
                                    <option value="Platelet Count">
                                        Platelet Count
                                    </option>
                                    <option value="Hematocrit red blood cell">
                                        Hematocrit red blood cell
                                    </option>
                                    <option value="Hemoglobin concentration">
                                        Hemoglobin concentration
                                    </option>
                                    <option value="Differential white blood count">
                                        Differential white blood coun
                                    </option>
                                    <option value="Red blood cell indice">
                                        Red blood cell indice
                                    </option>
                                </select>
                            </div>
                        </div>
                    </form>

                    {/* Department information */}

                    {/* <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className=" flex gap-4 ml-4">
                            <div className="mb-6">
                                <label htmlFor="department">Department:</label>
                                <select
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="selectmethod"
                                    defaultValue=""
                                    name="department"
                                    {...register("department", { required: true })}
                                >
                                    <option value="" disabled>
                                        Choose department
                                    </option>
                                    <option value="Biochemistry">Biochemistry</option>
                                    <option value="Haematology">Haematology</option>
                                    <option value="Immunology">Immunology</option>
                                    <option value="Microbiology">Microbiology</option>
                                    <option value="Serology">Serology</option>
                                    
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="test_name">Test name:</label>
                                <select
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="selectmethod"
                                    defaultValue=""
                                    name="test_name"
                                    {...register("test_name", { required: true })}
                                >
                                    <option value="" disabled>
                                        Choose Test
                                    </option>
                                    <option value="Complete blood count">Complete blood count</option>
                                    <option value="White blood cell count">White blood cell count</option>
                                    <option value="Red blood cell count">Red blood cell count</option>
                                    <option value="Platelet Count">Platelet Count</option>
                                    <option value="Hematocrit red blood cell">Hematocrit red blood cell</option>
                                    <option value="Hemoglobin concentration">Hemoglobin concentration</option>
                                    <option value="Differential white blood count">Differential white blood coun</option>
                                    <option value="Red blood cell indice">Red blood cell indice</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="Gender">Gender:</label>
                                <select
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="selectmethod"
                                    defaultValue=""
                                    name="gender"
                                    {...register("gender", { required: true })}
                                >
                                    <option value="" disabled>
                                        Select Option
                                    </option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>
                    </form> */}
                </div>
                {/* Search table */}
                {/* <div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Code
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Charge
                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                        Total Price(Tk)
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Urgent
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Delivery
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody> */}
                {/* Table search field */}
                {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th className="px-6 py-4">
                                        <input
                                            type="search"
                                            id="site-search"
                                            name="q"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </th>

                                    <td className="px-6 py-4">
                                        <input
                                            type="search"
                                            id="site-search"
                                            name="q"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="search"
                                            id="site-search"
                                            name="q"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="search"
                                            id="site-search"
                                            name="q"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="search"
                                            id="site-search"
                                            name="q"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            id="urgent"
                                            name="urgent"
                                            className="block p-2 text-gray-900 border border-gray-300 "
                                        />
                                    </td>

                                    <td className="px-6 py-4">
                                        <input
                                            type="search"
                                            id="site-search"
                                            name="q"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </td>

                                    <td className="px-6 py-4">
                                        <button
                                            type="submit"
                                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 mt-2"
                                        >
                                            Add
                                        </button>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">Silver</td>
                                    <td class="px-6 py-4">Laptop</td>
                                    <td class="px-6 py-4">$2999</td>
                                    <td class="px-6 py-4">$2999</td>
                                    <td class="px-6 py-4">$2999</td>
                                    <td class="px-6 py-4">$2999</td>
                                    <td class="px-6 py-4">$2999</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">White</td>
                                    <td class="px-6 py-4">Laptop PC</td>
                                    <td class="px-6 py-4">$1999</td>
                                    <td class="px-6 py-4">$1999</td>
                                    <td class="px-6 py-4">$1999</td>
                                    <td class="px-6 py-4">$1999</td>
                                    <td class="px-6 py-4">$1999</td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">Black</td>
                                    <td class="px-6 py-4">Accessories</td>
                                    <td class="px-6 py-4">$99</td>
                                    <td class="px-6 py-4">$99</td>
                                    <td class="px-6 py-4">$99</td>
                                    <td class="px-6 py-4">$99</td>
                                    <td class="px-6 py-4">$99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>*/}
                '{/* test */}
                <div>
                    <h1>User details</h1>
                    {users.map((result) => {
                        return (
                            <div key={result.id}>
                                <p>{result.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-red-600 w-[30%]">
                <h1>Payment</h1>
            </div>
        </div>
    );
};

export default FormComponent;
