import React from 'react';

type FormFieldProps = {
  label: string;
  nameInput: string;
  type?: string;
  rows?: number;
  errors?: any;
  touched?: any;
  onFocus?: () => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>; // lub InputHTMLAttributes jeśli potrzebne

export const FormField = React.forwardRef<HTMLTextAreaElement, FormFieldProps>(
  ({ label, nameInput, type = 'text', rows = 3, errors, touched, onFocus, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={nameInput}>{label}</label>
        {type === 'textarea' ? (
          <textarea
            id={nameInput}
            name={nameInput}
            rows={rows}
            ref={ref}
            onFocus={onFocus}
            {...rest}
          />
        ) : (
          <input
            id={nameInput}
            name={nameInput}
            type={type}
            ref={ref}
            onFocus={onFocus}
            {...rest}
          />
        )}
        {errors?.[nameInput] && touched?.[nameInput] && (
          <p className="error">{errors[nameInput].message}</p>
        )}
      </div>
    );
  }
);