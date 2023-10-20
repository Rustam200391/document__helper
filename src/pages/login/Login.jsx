import RegistrationItem from "../../utils/Form/RegistrationItem";
import Button from "../../utils/Button/Button";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  // здесь будет логика передачи данных из полей ввода на бекенд

  return (
    <div className={style.login}>
      <section className={style.login__container}>
        <h1 className={style.login__title}>Вход</h1>
        <form className={style.login__form}>
          <div className={style.login__item}>
            <RegistrationItem>
              <input type="text" placeholder="Логин" />
            </RegistrationItem>
          </div>
          <div className={style.login__item}>
            <RegistrationItem>
              <input id="password" type="password" placeholder="Пароль" />
              <span></span>
            </RegistrationItem>
            <div className={style.links}>
              <div to="">Забыли пароль?</div>
            </div>
          </div>
        </form>
        <div className={style.login__button}>
          <Link to="/qpage">
            <Button text="Войти" type="submit" />
          </Link>
        </div>
      </section>
    </div>
  );
};
