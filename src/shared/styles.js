import { css, injectGlobal } from '@emotion/css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
    transition: all 0.1s linear;
  }
`;

const avatorEmoji = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 0;
  font-size: 36px;
  background-color: white;
  border-radius: 18px;
`;

const someMoreBasicStyles = css`
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  background-color: green;
`;

const someCssAsObject = css({
  background: 'orange',
  color: 'white',
  padding: '10px',
  marginBottom: '10px',
});

const combinedAsArray = css([someMoreBasicStyles, someCssAsObject]);

const scrollableMemberLink = css`
  display: block;
  flex-shrink: 0;

  scroll-snap-align: center;
  width: 80px;
  margin: 0 1rem;
  line-height: 1.5;
  text-align: center;
`;

export {
  combinedAsArray,
  someCssAsObject,
  someMoreBasicStyles,
  avatorEmoji,
  scrollableMemberLink,
};
