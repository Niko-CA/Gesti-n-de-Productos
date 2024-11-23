import React from 'react';
import { Puff } from "react-loader-spinner";

export const Spinner = () => {
    return (
        <Puff
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
    );
};