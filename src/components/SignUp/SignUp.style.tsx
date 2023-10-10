import styled from 'styled-components';

interface StepHeaderProps {
  isActive: boolean;
}

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

export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
`;

export  const StepHeader = styled.div<StepHeaderProps>`
  cursor: pointer;
  padding: 10px;
  background: ${(props: StepHeaderProps) =>
  props.isActive
    ? 'linear-gradient(rgba(255, 255, 0, 0.5), rgba(235, 235, 195, 0.7))'
    : 'linear-gradient(rgba(255, 255, 0, 0.7), rgba(233, 233, 60))'};


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
  width: 30%;
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
