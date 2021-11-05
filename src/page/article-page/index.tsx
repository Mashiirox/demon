import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import { getIssueByNumber } from '../api';

function ArticlePage(): JSX.Element {
  const [content, setContent] = useState('');
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery(['GET_ISSUE_BY_NUMBER', id], () => getIssueByNumber(id), {
    refetchOnWindowFocus: false,
  });

  // @ts-ignore
  useEffect(() => setContent(data?.body), [data]);

  if (isLoading) {
    return (
      <div>加载哦！</div>
    );
  }

  if (isError) {
    return (
      <div>出错啦~</div>
    );
  }

  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  );
}

export default ArticlePage;
