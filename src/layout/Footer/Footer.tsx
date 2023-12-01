import s from './Footer.module.css';
import { format } from 'date-fns';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div>
          По вопросам сотрудничества пишите на{' '}
          <a className={s.linkToMail} href='mailto:info@courses-top.ru'>
            info@courses-top.ru
          </a>
        </div>
        <div>{format(new Date(), 'yyyy')} Все права защищены</div>
      </div>
    </footer>
  );
};
