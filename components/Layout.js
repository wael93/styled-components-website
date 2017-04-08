import styled from 'styled-components'
import rem from 'polished/lib/helpers/rem'

export const Container = styled.div`
  padding-left: ${rem(300)};

  @media (max-width: 1000px) {
    padding-left: 0;
    padding-top: ${rem(70)};
  }
`

export const Content = styled.div`
  width: ${rem(1024)};
  max-width: 100%;
  margin: 0 auto;
  padding: ${rem(30)} ${rem(25)};
  box-sizing: border-box;
`

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(243, 182, 97);
  font-size: ${rem(42)};
  font-weight: bold;
`

export const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: normal;
`

export const SubHeader = styled.h3`
  display: block;
  margin: ${rem(8)} 0;
  font-size: ${rem(18)};
  font-weight: normal;
`