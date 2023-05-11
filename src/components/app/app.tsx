import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
//import React from 'react';

import ProfilePage from '../../pages/profile';
import TeamPage from '../../pages/team';
import SignUpPage from '../../pages/sign-up';
import NotFoundPage from '../../pages/not-found';
import LoginPage from '../../pages/login';

const App: FC = () => {

  return (
    <>
      <Routes >
        <Route index path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:id" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
