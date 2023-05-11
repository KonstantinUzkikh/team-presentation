import { FC } from 'react';

import pageLayout from './page.module.css';
import profileLayout from './profile.module.css';

import ButtonHeader from '../components/button-header/button-header';

import phone from '../images/phone.svg';
import email from '../images/email.svg';
import avatar from '../images/Artur.svg';

const PersonProfile: FC = () => {
  return (
    <div className={profileLayout.profile}>
      <img src={avatar} alt="Аватар" className={profileLayout.avatar} />
      <div className={profileLayout.profileInfo}>
        <h1 className={pageLayout.h1Style}>Артур Королёв</h1>
        <h2 className={pageLayout.h2Style}>Партнер</h2>
      </div>
    </div>
  );
}

const ProfilePage: FC = () => {
  return (
    <>
      <header className={`${pageLayout.headerStyle} ${profileLayout.headerStyle}`}>
        <nav className={pageLayout.navStyle}>
          <ButtonHeader content={'back'} />
          <ButtonHeader content={'exit'} />
        </nav>
        <div className={pageLayout.headerContentStyle}>
          <PersonProfile />
        </div>
      </header>
      <div className={`${pageLayout.page} ${profileLayout.mainContentStyle}`}>
        <div></div>
        <div>
          <p className={pageLayout.textStyle}>
            Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов,
            включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты.
            Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших
            технологий и увеличивать продажи, используя самые современные аналитические инструменты.
          </p>
          <br></br>
          <p className={pageLayout.textStyle}>
            В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями.
            Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того,
            что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том,
            что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
          </p>
          <br></br>
          <p className={pageLayout.textStyle}>
            Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую
            деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
            инновационный подход к красоте, а также инвестором других бизнес-проектов.
          </p>
        </div>
        <div></div>
        <div className={profileLayout.contacts}>
          <div className={`${profileLayout.contact} ${pageLayout.textStyle}`}>
            <img src={phone} alt="номер телефона" className={profileLayout.icon} />
            <span>+7 (954) 333-44-55</span>
          </div>
          <div className={`${profileLayout.contact} ${pageLayout.textStyle}`}>
            <img src={email} alt="e-mail" className={profileLayout.icon} />
            <span>sykfafkar@gmail.com</span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ProfilePage;
