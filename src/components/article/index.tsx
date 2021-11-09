import dayjs from 'dayjs';

import './index.less';

interface labelProps {
  color: string;
  default: boolean;
  description: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

interface articleProps {
  title: string;
  createTime: string;
  label: labelProps[];
  id: number;
  onClick: () => void;
}

function Article({
  title,
  createTime,
  label,
  onClick,
}: articleProps): JSX.Element {
  const time = dayjs(createTime).format('YYYY-MM-DD HH:mm:ss');

  return (
    <div className='article-item flex flex-col bg-gray-50 cursor-pointer' onClick={onClick}>
      <img
        src='https://cdn.jsdelivr.net/gh/MashiroRb/CDNjsDelivr/LizBlue/b40.jpeg'
        className='article-img w-full h-2/3'
      />
      <div className='article-content'>
        <div>标题: {title}</div>
        <div>创建时间: {time}</div>
        <div>标签: {label[0]?.name}</div>
      </div>
    </div>
  );
}

export default Article;
