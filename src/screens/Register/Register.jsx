import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { FiArrowLeft, FiLock, FiMail, FiSave, FiSend, FiUser } from 'react-icons/fi';

import styles from './styles.module.scss';
import { CustomInput } from '../../components/Input/Input';

const schema = object({
  name: string().required('Nome obrigatório'),
  email: string().required('E-mail obrigatório!').email('E-mail inválido.'),
  password: string()
    .required('Senha obrigatória.')
    .min(6, 'No mínimo 6 caracteres.'),
}).required();

export function Register() {
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

  function onSubmit(data) {
    console.log(data);
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
        <h2>Cadastrar</h2>

        <CustomInput
          label='Nome'
          Icon={FiUser}
          {...register('name')}
          error={errors.name}
        />

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
        
        <button className={styles.button} type='submit'>Cadastrar <FiSave/> </button>

        <Link className={styles.link} to="/"><FiArrowLeft/> voltar para login</Link>
      </form>
    </div>
  );
}
