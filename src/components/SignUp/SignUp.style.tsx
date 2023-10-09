import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StepHeader = styled.div`
  background-color: #f9ca24;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  color: #333;
`;

export const Select = styled.select`
  width: 50%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 50%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const DateInput = styled.div`
  display: flex;
  gap: 10px;
`;

export const InlineGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledInlineButton = styled(Button)`
  margin-left: auto;
`;
