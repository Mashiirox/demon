import { useHistory } from 'react-router-dom';

import './index.less';

export default function Header(): JSX.Element {
  const history = useHistory();

  return (
    <div className='header flex justify-evenly bg-gray-50'>
      <div className='header-item cursor-pointer' onClick={() => history.push('/frontpage')}>首页</div>
      <div className='header-item cursor-pointer' onClick={() => history.push('/tag')}>标签</div>
    </div>
  );
}