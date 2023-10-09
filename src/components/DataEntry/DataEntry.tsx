// DataEntry.tsx
import React from 'react';
import { StyledInput, StyledTextArea, StyledSelect, ErrorText } from './DataEntry.style';

interface DataEntryProps {
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  name: string;
  value: string;
  onChange?: (value: string) => void;
  options?: string[];
  error?: string;
}

const DataEntry: React.FC<DataEntryProps> = ({ type, placeholder, name, value, onChange, options, error }) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'tel':
      return (
        <>
          <StyledInput
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>} {/* Display error text */}
        </>
      );
    case 'textarea':
      return (
        <>
          <StyledTextArea
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange && onChange(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>} {/* Display error text */}
        </>
      );
    case 'select':
      return (
        <>
          <StyledSelect
            name={name}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(e.target.value)}
          >
            {options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </StyledSelect>
          {error && <ErrorText>{error}</ErrorText>} {/* Display error text */}
        </>
      );
    default:
      return null;
  }
};

export default DataEntry;
