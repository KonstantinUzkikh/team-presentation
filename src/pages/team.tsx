import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import pageLayout from './page.module.css';
import teamLayout from './team.module.css'

import avatar from '../images/Artur.svg';
import like from '../images/like-disactive.svg';
import ButtonHeader from '../components/button-header/button-header';

const TeamPresentation: FC = () => {
  return (
    <div className={teamLayout.team}>
      <h1 className={pageLayout.h1Style}>Наша команда</h1>
      <h3 className={pageLayout.h3Style}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся <br /> на их плечи,
        и умеющие находить выход из любых, даже самых сложных ситуаций.
      </h3>
    </div>
  );
}

const ProfileCard: FC = () => {

  const navigate = useNavigate();

  let style: string = '';

  const name = 'Артур Королёв';

  return (
    <button type="button" className={teamLayout.profileCard} onClick={() => navigate('/team/:22')} >
      <img src={avatar} alt="Аватар" className={teamLayout.avatar} />
      <h3 className={pageLayout.h3Style}>
        {name}
      </h3>
      <div className={teamLayout.boxLike} >
        <img src={like} alt="иконка лайка" className={`${teamLayout.like} ${style}`} />
      </div>
    </button>
  );
}

const TeamPage: FC = () => {

  return (
    <>
      <header className={`${pageLayout.headerStyle} ${teamLayout.headerStyle}`}>
        <nav className={pageLayout.navStyle}>
          <ButtonHeader content={'none'} />
          <ButtonHeader content={'exit'} />
        </nav>
        <div className={pageLayout.headerContentStyle}>
          <TeamPresentation />
        </div>
      </header>
      <div className={`${pageLayout.page} ${teamLayout.mainContentStyle}`}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
}

export default TeamPage;
