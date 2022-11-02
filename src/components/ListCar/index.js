import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCar } from '../../actions/carAction';
import { useSelector } from 'react-redux';

function ListCar() {

    const { getListCarResult, getListCarLoading, getListCarError } = useSelector((state) => state.CarReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        // panggil action getlistCar
        console.log('1. useEffect component Did Mount');
        dispatch(getListCar());

    }, [dispatch]);

    return (
        <div>
            <h4>List Car</h4>
            { getListCarResult ? (
                getListCarResult.map((car) => {
                    return (
                        <p key={car.id}>{car.image} - {car.type} - {car.rentPerDay} - {car.capacity}</p>
                    )
                })
            ) : getListCarLoading ? (
                <p>loading . . .</p>
            ) : (
                <p>{getListCarError ? getListCarError : "Data Kosong"}</p>
            )}
        </div>
    );
}

export default ListCar;