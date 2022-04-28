import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    return navigate(path);
  };
  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>

          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
