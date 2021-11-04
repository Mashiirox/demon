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
  return (
    <div className='article-item flex' onClick={onClick}>
      <div className=''>
        <div>{title}</div>
        <div>{createTime}</div>
        <div>{label[0].name}</div>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
}

export default Article;
