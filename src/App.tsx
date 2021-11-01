import { useState } from 'react';
import { Button, Modal } from 'antd';

import ElementInput from './components/element-input/element-input';

import './App.less';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className='flex justify-center'>
      <Button onClick={() => setShow(true)}>HELLO!</Button>
      <Modal
        visible={show}
        onOk={() => setShow(false)}
        onCancel={() => setShow(false)}
      >
        <div className='m-12'>
          <ElementInput title='用户名' className='mb-4' />
          <div className='flex'>
            <ElementInput title='密码' className='w-full mr-2' />
            <ElementInput title='确认密码' className='w-full ml-2' />
          </div>
          <ElementInput title='邮箱' className='mt-4' />
        </div>
      </Modal>
    </div>
  );
}

export default App;
