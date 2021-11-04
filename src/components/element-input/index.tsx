import { useRef } from 'react';
import cs from 'classnames';

import './index.less';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  title: string;
  className?: string;
  validate?: boolean;
}

function ElementInput(props: Props): JSX.Element {
  const { title, className, validate = false } = props;
  const labelRef = useRef(null);
  const inputProps = { ...props, className: '' };
  return (
    <div className={cs('form-element w-full', className)}>
      <input
        {...inputProps}
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
