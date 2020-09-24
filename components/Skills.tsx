import React, { FC } from 'react';
import { Header, Icon, Item, Segment } from 'semantic-ui-react';

type Props = unknown;

const Skills: FC<Props> = () => (
  <Segment>
    <Header as="h2" dividing>
      Osaaminen
    </Header>
    <Item.Group divided relaxed>
      <Item>
        <Item.Content>
          <Item.Header as="h3">
            <Icon name="laptop" /> Verkkopalvelujen kehittäminen
          </Item.Header>
          <Item.Description as="p">
            Koodaavana toimittajana minulla on vastuu artikkelien ja toteutusten teknisestä
            kehityksestä. Lisäksi osallistun juttujen suunnitteluun ja ideointiin.
          </Item.Description>
          <Item.Description as="p">
            Olen ollut kehittämässä Yle Uutisten suosittuja ja kansainvälisesti palkittuja
            verkkosisältöjä, kuten{' '}
            <a href="https://yle.fi/uutiset/3-10509829" rel="noreferrer" target="_blank">
              Vuoteni köyhyysrajalla
            </a>{' '}
            -peliä ja interaktiivista datavisualisointia{' '}
            <a href="https://yle.fi/uutiset/3-10700289" rel="noreferrer" target="_blank">
              Elämäsi sää
            </a>
            .
          </Item.Description>
          <Item.Description as="p">
            Päivittäisessä käytössä ovat TypeScript, React, styled-components ja Webpack.
          </Item.Description>
          <Item.Description as="p">
            Fullstack-kehittämisistä on tullut harjoiteltua omalla ajalla lähinnä Node.js:llä ja
            Expressillä. Paria pienempää työprojektia luukun ottamatta siitä ei ole vielä paljoa
            kokemusta, mutta kiinnostusta sitäkin enemmän.
          </Item.Description>
          <Item.Description as="p">
            Tänä kesänä ja alkusyksystä olen suorittanut Avoimen yliopiston Full stack Open
            -kurssia, joka on tenttiä vaille valmis. Kursilla on tullut tullut enemmän rutiinia
            backend-kehitykseen ja GraphQL:ään.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header as="h3">
            <Icon name="pie chart" /> Interaktiiviset datavisualisoinnit ja datajournalismi
          </Item.Header>
          <Item.Description as="p">
            Minulla on usean vuoden kokemus interaktiivisten datavisualisointien toteuttamisesta
            D3:lla ja Reactilla.
          </Item.Description>
          <Item.Description as="p">
            Tänää vuonna olen ollut tekemässä muun muassa Yle Uutisten{' '}
            <a href="https://yle.fi/uutiset/3-11300232" rel="noreferrer" target="_blank">
              Koronavirus-seurantasivun
            </a>{' '}
            datavisualisointeja ja{' '}
            <a href="https://yle.fi/uutiset/3-11225585" rel="noreferrer" target="_blank">
              animaatiota
            </a>{' '}
            talven pituuksista.
          </Item.Description>
          <Item.Description as="p">
            Minulla on kokemusta myös skreippauksesta sekä isojen datamassojen käsittelystä
            Pythonilla ja Google Sheetsillä. Myöskään paikkatietoaineisto ei ole vierasta.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header as="h3">
            <Icon name="users" /> Tiimityöskentely
          </Item.Header>
          <Item.Description>
            Työskentelen hyvin tiimissä ja eri ammattilaisten, kuten graafisten suunnittelijoiden ja
            toimittajien, kanssa.
          </Item.Description>
          <Item.Description>
            Plus-deskissä teemme yhteistyötä Yle Uutisten eri toimitusten kanssa. Jutut työstetään
            tiimeissä, joihin kuuluu yleensä graafinen suunnittelija, koodari, toimittaja ja
            tuottaja.
          </Item.Description>
          <Item.Description>
            Olen ongelmanratkaisija ja hyvä palautteenantaja. Kommunikoin sujuvasti teknisistä
            asioista ei-teknisten ihmisten kanssa. Annan kaikkeni, että lopputulos olisi
            timanttinen.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);

export default Skills;
