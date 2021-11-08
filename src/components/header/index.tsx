import { useHistory } from 'react-router-dom';

import './index.less';

export default function Header(): JSX.Element {
  const history = useHistory();

  return (
    <div className='header flex flex-col pt-10'>
      <div className='header-text cursor-default' data-text='MASHIIROX'>Mashiirox</div>
      <div className='header-content flex justify-evenly'>
        <div className='header-item cursor-pointer' onClick={() => history.push('/')}>
          首页
        </div>
        <div className='header-item cursor-pointer' onClick={() => history.push('/tag')}>
          标签
        </div>
      </div>
    </div>
  );
}
