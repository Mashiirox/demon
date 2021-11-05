import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';

import Article from '../../components/article';
import { getAllIssues } from '../api';

import './index.less';

function FrontPage(): JSX.Element {
  const [issue, setIssue] = useState<any>([]);
  const history = useHistory();

  const { data, isLoading, isError } = useQuery('GET_ALL_ISSUES', getAllIssues, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => setIssue(data), [data]);

  const handleClick = (num: number): void => {
    history.push(`/article/${num}`);
  };

  if (isLoading) {
    return (
      <div>正在加载</div>
    );
  }

  if (isError) {
    return (
      <div>出错啦~</div>
    );
  }

  return (
    <div className='frontpage flex justify-center'>
      <div className='frontpage-content flex flex-wrap justify-between'>
        {issue?.map((itm: any) => {
          return (
            // eslint-disable-next-line max-len
            <Article title={itm.title} createTime={itm.created_at} label={itm.labels} id={itm.id} key={itm.id} onClick={() => handleClick(itm.number)} />
          );
        })}
      </div>
    </div>
  );
}

export default FrontPage;
