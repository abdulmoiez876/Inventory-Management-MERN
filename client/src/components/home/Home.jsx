import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from "react-overlays/Modal";

import Products from '../products/Products';
import Loading from '../ui/loading/Loading';
import styles from './home.module.css';

export default function Home() {
    const isLoaded = useSelector(state => state.products.isLoaded)

    const renderBackdrop = (props) => <div className={`${styles.backdrop}`} {...props} />;
    return (
        <>
            {!isLoaded &&
                <Modal
                    // className={`${styles.modal}`}
                    show='true'
                    renderBackdrop={renderBackdrop}
                >
                    <Loading />
                </Modal>
            }
            <h1 className='p-2 font-bold text-5xl w-full text-center'>Products</h1>
            <Products />
        </>
    )
}
