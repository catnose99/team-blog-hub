// eslint-disable-next-line @emotion/no-vanilla
import { css, injectGlobal } from '@emotion/css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }
`;

const basicStyles = css`
  background-color: white;
  transition: all 0.1s linear;
  padding: 1rem 0.25rem;
  font-size: 36px;
  border-radius: 18px;
`;

const someMoreBasicStyles = css`
  background-color: green;
  color: white;
  margin-bottom: 10px;
  padding: 10px;
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
  width: 90px;
  margin-left: -5px;
  text-align: center;
  line-height: 1.5;
  scroll-snap-align: center;
  margin-right: 23px;
`;

export {
  combinedAsArray,
  someCssAsObject,
  someMoreBasicStyles,
  basicStyles,
  scrollableMemberLink,
};
