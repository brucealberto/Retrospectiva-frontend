import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { FiLock, FiMail, FiSend } from 'react-icons/fi';

import styles from './styles.module.scss';
import { CustomInput } from '../../components/Input/Input';
import api from '../../service/api';
import { toast } from 'react-toastify';

const schema = object({
  email: string().required('E-mail obrigatório!').email('E-mail inválido.'),
  password: string()
    .required('Senha obrigatória.')
    .min(6, 'No mínimo 6 caracteres.'),
}).required();

export function Login() {
  const navigate = useNavigate();
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function showPassword() {
    setIsShowingPassword(!isShowingPassword);
  }

  async function onSubmit(dataForm) {
    try {
      const { data } = await api.post('/login', dataForm);
      if (data.token) {
        navigate('/home');
      }
    } catch (error) {
      toast.warning(error.response.data.error);
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      {/* <img src="" alt="" /> */}
      <h1>Logo Trybe</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete='off'
      >
        <h2>Login</h2>

        <CustomInput
          label='E-mail'
          Icon={FiMail}
          {...register('email')}
          error={errors.email}
        />

        <CustomInput
          type={isShowingPassword ? 'text' : 'password'}
          label='Senha'
          Icon={FiLock}
          {...register('password')}
          error={errors.password}
          isPassword={true}
          showPassword={showPassword}
          isShowingPassword={isShowingPassword}
        />

        <button className={styles.button} type='submit'>
          Enviar <FiSend />
        </button>

        <Link className={styles.link} to='/register'>
          criar uma conta
        </Link>
      </form>
    </div>
  );
}
