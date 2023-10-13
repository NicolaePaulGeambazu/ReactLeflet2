import React from 'react';

interface ToastProps {
  message: string;
  code: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, code, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '5px',
        border: '1px solid red',
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        <strong>Error Code:</strong> {code}
      </div>
      <div>{message}</div>
      <button onClick={onClose} style={{ marginLeft: '8px', cursor: 'pointer' }}>
        Close
      </button>
    </div>
  );
};

export default Toast;
