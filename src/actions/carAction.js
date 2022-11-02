import axios from 'axios';

export const GET_LIST_CAR = "GET_LIST_CAR";

export const getListCar = () => {
    console.log('2. Masuk Action');
    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_CAR,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/car',
            timeout: 120000
        })

            .then((response) => {
                console.log("3. Berhasil  dapet Data : ", response.data);
                //berhasil get API
                dispatch({
                    type: GET_LIST_CAR,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                console.log("3. Gagal  dapet Data : ", error);
                //gagal get API
                dispatch({
                    type: GET_LIST_CAR,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }
}