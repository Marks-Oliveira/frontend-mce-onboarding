import React, { useState } from 'react';
import moment from 'moment';

import editRegister from '../../assets/edit-register.png';
import deleteRegister from '../../assets/delete-register.png';
import EditRegister from '../Modal/EditRegister';
import DeleteRegister from '../Modal/DeleteRegister';

import * as S from './styles';

const UserRecords = ({ user, index, getRegisters }) => {
    const [displayEditRegisterModal, setDisplayEditRegisterModal] = useState(false);
    const [displayDeleteRegisterModal, setDisplayDeleteRegisterModal] = useState(false);

    const handleShowEditRegister = () => {
        setDisplayEditRegisterModal(!displayEditRegisterModal);
    };

    const handleShowDeleteRegister = () => {
        setDisplayDeleteRegisterModal(!displayDeleteRegisterModal);
    };

    const formattedDate = moment(user.created_at).format("DD/MM/YYYY");

    return (
        <S.Wrapper>
            <S.Position>
                <p>{index + 1}</p>
            </S.Position>
            <S.Name>
                <span>{user.name}</span>
            </S.Name>
            <S.Email>
                <span>{user.email}</span>
            </S.Email>
            <S.Date>
                <span>{formattedDate}</span>
            </S.Date>
            <S.Buttons>
                <img src={editRegister} alt="Editar cadastro" onClick={handleShowEditRegister} />
                <img src={deleteRegister} alt="Excluir cadastro" onClick={handleShowDeleteRegister} />
            </S.Buttons>

            {displayEditRegisterModal ? 
                <EditRegister 
                    displayEditModal={() => handleShowEditRegister()}
                    getRegisters={() => getRegisters()}
                    user={user}
                />
            : null
            }

            {displayDeleteRegisterModal ? 
                <DeleteRegister 
                    displayDeleteModal={() => handleShowDeleteRegister()} 
                    getRegisters={() => getRegisters()}
                    user={user}
                />
            : null
            }
        </S.Wrapper>
    );
};

export default UserRecords;
