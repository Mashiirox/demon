import { useRef } from 'react';

function TestDemo(): JSX.Element {
  const inputRef = useRef(null);

  const handleChange = (): void => {
    // @ts-ignore
    console.log(inputRef.current?.value);
  };

  return (
    <input type='file' onChange={handleChange} ref={inputRef} multiple />
  );
}

export default TestDemo;
