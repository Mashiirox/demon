import ReactMarkdown from 'react-markdown';
import { observer } from 'mobx-react';

import store from '../store';

function ArticlePage(): JSX.Element {
  return (
    <ReactMarkdown>
      {store.content}
    </ReactMarkdown>
  );
}

export default observer(ArticlePage);
