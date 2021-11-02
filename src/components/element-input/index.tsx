import { useRef } from 'react';
import cs from 'classnames';

import './index.less';

interface Props {
  title: string;
  className?: string;
  validate?: boolean;
}

function ElementInput({ title, className, validate = false }: Props): JSX.Element {
  const labelRef = useRef(null);
  return (
    <div className={cs('form-element w-full', className)}>
      <input
        type='text'
        placeholder={title}
        id='element-input'
        className={cs('form-element-input w-full', {
          'form-element-input-validate': validate,
        })}
        ref={labelRef}
      />
      <label
        className={cs('form-element-label cursor-text', {
          'form-element-label-validate': validate,
        })}
        // @ts-ignore
        onClick={() => { labelRef.current?.focus(); }}
      >
        {title}
      </label>
    </div>
  );
}

export default ElementInput;
