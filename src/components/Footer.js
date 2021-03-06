import styled from 'styled-components';

const FooterBar = styled.div`
  border-top: 1px #e0e2e8 solid;
  padding: 24px 16px;
  color: #626468;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;

    @media (hover: hover) {
      & {
        transition: color 200ms ease-in-out;
      }

      &:hover {
        color: #c800e3;
      }
    }

    @media (hover: none) {
      &:active {
        color: #c800e3;
      }
    }
  }

  .dot {
    height: 4px;
    width: 4px;
    background-color: #626468;
    border-radius: 50%;
    margin: 0 6px;
  }

  @media (max-width: 640px) {
    & {
      font-size: 14px;
    }

    .dot {
      height: 3px;
      width: 3px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBar>
      <p>
        Powered by{' '}
        <a
          href="https://www.coingecko.com/en/api"
          target="_blank"
          rel="noreferrer"
        >
          CoinGecko
        </a>
      </p>
      <div className="dot"></div>
      <p>
        Built by{' '}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Alex
        </a>
      </p>
    </FooterBar>
  );
};

export default Footer;
