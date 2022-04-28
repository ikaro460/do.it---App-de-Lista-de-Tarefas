import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Background, Content, AnimationContainer } from "./styles";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Signup() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              name="name"
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              register={register}
              error={errors.name?.message}
            ></Input>
            <Input
              name="email"
              icon={FiMail}
              label="E-mail"
              placeholder="Seu melhor e-mail"
              register={register}
              error={errors.email?.message}
            ></Input>
            <Input
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              register={register}
              error={errors.password?.message}
            ></Input>
            <Input
              name="passwordConfirm"
              icon={FiLock}
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
              register={register}
              error={errors.passwordConfirm?.message}
            ></Input>
            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/link">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
