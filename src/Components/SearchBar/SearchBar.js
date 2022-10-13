import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HouseCard from "../Main/HouseCard";
const SearchBar = () => {
    const [rentHouse, setRentHouse] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/house.json")
            .then((res) => res.json())
            .then((data) => setRentHouse(data));
    }, []);

    const onSubmit = (data) => {
        var filter = { ...data };
        const newData = rentHouse.filter(function (item) {

            for (var key in filter) {
                if (item[key] == undefined || item[key] != filter[key]) return false;
            }
            return true;
        });
        setRentHouse(newData);
    };
    // console.log(rentHouse);

    const handleRefresh = () => {
        window.location.reload();
        // console.log("clicked");
    }
    return (
        <div className="mx-20 mt-10">
            <h1 className="text-4xl font-bold text-sky-900">Search Property to rent</h1>
            <div className="py-4 bg-white shadow-sm mt-6 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between mx-10 items-center">
                    <div>
                        <label className="pl-4 w-full font-semibold text-gray-500">
                            Location
                        </label>
                        <select
                            required
                            {...register("location")}
                            name="location"
                            id=""
                            className="pl-3 w-full my-1 border border-white bg-white outline-none text-base font-semibold"
                        >
                            <option selected disabled>
                                Select Location
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div>
                        <label className="w-full font-semibold text-gray-500">
                            When
                        </label><br />
                        <input className="w-full my-1 border border-white bg-white outline-none text-base font-semibold" type="date" name="" id="" />
                    </div>
                    <div>
                        <label className="pl-4 w-full font-semibold text-gray-500">
                            Price
                        </label>
                        <select
                            {...register("price")}
                            required
                            name="price"
                            id=""
                            className="pl-3 w-full my-1 border border-white bg-white outline-none text-base font-semibold"
                        >
                            <option selected disabled>
                                Select Price
                            </option>
                            <option value="200">200</option>
                            <option value="250">250</option>
                            <option value="350">350</option>
                        </select>
                    </div>
                    <div>
                        <label className="pl-4 w-full font-semibold text-gray-500">
                            Property Type
                        </label>
                        <select
                            {...register("property")}
                            name="property"
                            id=""
                            className="pl-3 w-full my-1 border border-white bg-white outline-none text-base font-semibold"
                        >
                            <option value="" selected disabled>
                                Property Type
                            </option>
                            <option value="Apartment">Apartment</option>
                            <option value="Building">Building</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>
                    <div>
                        <button className="border py-3 px-8 rounded-md bg-purple-600 text-white font-semibold" type="submit">Search</button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center mt-2 text-red-500 font-bold">
                <button onClick={handleRefresh}>Filter Clear</button>
            </div>
            {/* {rentHouse?.length} */}
            <div className="grid grid-cols-3 mx-auto gap-8 pt-16">
                {
                    rentHouse.map(rent => <HouseCard
                        rent={rent}
                    ></HouseCard>
                    )
                }
            </div>
        </div>
    );
};

export default SearchBar;
