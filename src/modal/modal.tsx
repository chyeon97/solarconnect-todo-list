import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { css } from 'styled-components';

interface OpenProps {
    open: boolean,
    handleRevise: (status: boolean) => void,
}

const Sample = css`
    width:100px;
    background-color: aliceblue;
`

function Modals({ open, handleRevise }: OpenProps) {

    const handleCancel = () => {
        handleRevise(false)
    }
    return (
        <>
            <Modal
                visible={open}
                title={'Revise'}
                // onOk={handleCancel}
                onCancel={handleCancel}

            >
                <input></input>

            </Modal>

        </>
    )
}
export default Modals;