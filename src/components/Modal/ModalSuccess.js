import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSuccess } from '../../store/actions';

export const ModalSuccess = () => {
    const dispatch = useDispatch();

    function handleSuccsess () {
        dispatch(toggleSuccess())
    }

    return (
        <div>Success</div>
    )

}