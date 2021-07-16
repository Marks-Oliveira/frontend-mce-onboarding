import React from 'react';

import UserRecords from '../UserRecords';

import * as S from './styles';

const MyProfileAdminScreen = ({ user }) => {
   return (
      <>
         <S.ChosenScreen>
               <span>Meu perfil</span>
         </S.ChosenScreen>
         <S.Register>
               <S.Fields>
                  <p>#</p>
                  <span>Nome</span>
                  <span>Email</span>
                  <span>Data de cadastro</span>
               </S.Fields>
               <UserRecords user={user} index={0}/>              
         </S.Register>
      </>
   );
};

export default MyProfileAdminScreen;
