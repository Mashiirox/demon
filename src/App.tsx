import { useState } from 'react';
import { Button, Modal } from 'antd';

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
        <div className='form-username m-16'>
          <input type='text' placeholder='用户名' className='form-username-input' />
          <label className='form-username-label text-gray-400'>用户名</label>
        </div>
      </Modal>
    </div>
  );
}

export default App;
