import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => (
    <ReactLoading type={"spin"} color={"ash"} height={500} width={500} delay={20}/>
);


const NotFoundError = () => {
    return (
        <h2>Data Not Found, Something wrong happens.</h2>
    );
}
export {Loader, NotFoundError};