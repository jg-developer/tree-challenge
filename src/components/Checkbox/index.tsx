import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  CSSProperties,
} from 'react';

import { CheckboxContainer } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  customStyle?: CSSProperties;
  isIndeterminate: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  value,
  checked,
  isIndeterminate,
  customStyle,
  ...rest
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (checkboxRef.current as HTMLInputElement).indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  return (
    <CheckboxContainer
      htmlFor={`checkbox-${id}`}
      style={customStyle ? { ...customStyle } : {}}
    >
      <input
        type="checkbox"
        ref={checkboxRef}
        checked={checked && !isIndeterminate}
        value={value}
        id={`checkbox-${id}`}
        name={`checkbox-${id}`}
        {...rest}
      />
      {label}
    </CheckboxContainer>
  );
};

export default Checkbox;
