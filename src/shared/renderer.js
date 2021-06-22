import createEmotionServer from '@emotion/server/create-instance';
// eslint-disable-next-line @emotion/no-vanilla
import { cache } from '@emotion/css';

// eslint-disable-next-line import/prefer-default-export
export const renderStatic = async (html) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
