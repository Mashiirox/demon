import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import { getIssueByNumber } from '../api';

import './index.less';

function ArticlePage(): JSX.Element {
  const [content, setContent] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery(['GET_ISSUE_BY_NUMBER', id], () => getIssueByNumber(id), {
    refetchOnWindowFocus: false,
  });

  // @ts-ignore
  useEffect(() => setContent(data?.body), [data]);

  if (isLoading) {
    setTimeout(() => setShowLoading(true), 500);
  }

  if (isLoading && showLoading) {
    return (
      <div className='flex justify-center items-center'>
        <img src='https://cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif' />
      </div>
    );
  }

  if (isError) {
    return (
      <div>出错啦~</div>
    );
  }

  return (
    <div className='articlepage bg-white'>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ArticlePage;
