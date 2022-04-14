import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import {
  Container,
  Button,
  Title,
  RegionsContainer,
  Region,
  Description,
  Divider,
} from "./styles";

interface IRegionsType {
  ufs: RegionProps;
  regions: Array<string>;
}

interface RegionProps {
  regiao: string;
  estado: string;
  sigla: string;
}

const Estado: React.FC<IRegionsType> = ({ ufs, regions }) => {
  const router = useRouter();

  return (
    <Container>
      <img src="/logo-tenda.png" alt="Tenda logo" />
      <Title>Obrigado!</Title>
      <Description>
        Aqui estão as regioes do estado de {ufs.estado}:
      </Description>
      <Divider />
      <RegionsContainer>
        {regions.map((region: string) => (
          <div key={region}>
            <Region>{region}</Region>
          </div>
        ))}
      </RegionsContainer>
      <Divider />
      <Button onClick={() => router.push("/")}>
        Voltar para consultar outro estado
      </Button>
    </Container>
  );
};

export default Estado;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;
  const response = await axios.get(
    "https://www.tenda.com/loja-virtual-api/values/ObterRegioes"
  );

  const ufs = response.data.find((uf: any) =>
    uf.sigla === slug ? uf.regiao : ""
  );

  const regions: any = [];
  response.data.map((region: RegionProps) => {
    if (region.sigla === slug) {
      return regions.push(region.regiao);
    }
  });
  regions.sort();

  return {
    props: {
      ufs,
      regions,
    },
  };
};
