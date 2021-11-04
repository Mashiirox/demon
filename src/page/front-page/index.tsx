import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Article from '../../components/article';
import store from '../store';

import './index.less';

function FrontPage(): JSX.Element {
  const [issue, setIssue] = useState([]);
  const history = useHistory();

  useEffect(getAllIssues, []);

  function getAllIssues(): void {
    fetch('https://api.github.com/repos/Mashiirox/demon/issues', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'token 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',
      }
    }).then(
      (response) => response.json()
    ).then(
      (issue) => setIssue(issue)
    );
  }

  const handleClick = (id: number, content: string): void => {
    store.content = content;
    history.push(`/article/${id}`);
  };

  return (
    <div className='frontpage-content'>
      {issue.map((itm) => {
        return (
          // @ts-ignore
          <Article title={itm.title} createTime={itm.created_at} label={itm.labels} id={itm.id} key={itm.id} onClick={() => handleClick(itm.id, itm.body)} />
        );
      })}
    </div>
  );
}

export default FrontPage;
