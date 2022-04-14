import axios from "axios";
import { useRouter } from "next/router";
import { sitePages } from "../settings/sitePages";
import type { GetServerSideProps, NextPage } from "next";
import { atom, useRecoilState } from "recoil";
import {
  Container,
  Title,
  Select,
  Option,
  Button,
  SelectContainer,
  Divider,
} from "./styles";
import { SEO } from "../settings/seo";

const Home: NextPage = ({ siglas }: any) => {
  const statesState = atom({
    key: "statesState",
    default: siglas,
  });
  const ufState = atom({
    key: "ufState",
    default: undefined,
  });

  const [states] = useRecoilState(statesState);
  const [uf, setUf] = useRecoilState(ufState);
  const router = useRouter();

  const pageSeo = sitePages.index;

  return (
    <Container>
      <SEO title={pageSeo.page_title} description={pageSeo?.page_description} />
      <img src="/logo-tenda.png" alt="Tenda logo" />
      <Title>Escolha a Cidade que deseja ver as regiões</Title>
      <Divider />
      <SelectContainer>
        <Select
          name="estados"
          id="estados"
          onClick={(e: any) => setUf(e.target.value)}
        >
          {states.map((a: any) => (
            <Option key={a.vaue} value={a.value}>
              {a.label}
            </Option>
          ))}
        </Select>
      </SelectContainer>
      {uf === undefined ? (
        <Button disabled>Enviar Regiao</Button>
      ) : (
        <Button onClick={() => router.push(`estado/${uf}`)}>
          Enviar Regiao
        </Button>
      )}
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(
    "https://www.tenda.com/loja-virtual-api/values/ObterRegioes"
  );

  let siglas = response.data.map((uf: any) => {
    return {
      label: uf.sigla,
      value: uf.sigla,
    };
  });
  siglas = siglas.filter(function (sigla: string) {
    return !this[JSON.stringify(sigla)] && (this[JSON.stringify(sigla)] = true);
  }, Object.create(null));

  return {
    props: {
      siglas,
    },
  };
};
