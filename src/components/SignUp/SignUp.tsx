import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import DataEntry from '../DataEntry/DataEntry';
import {
  PageContainer,
  FormContainer,
  StepHeader,
  StepContent,
  FormGroup,
  Label,
  Select,
  Button,
  InlineGroup,
  DateInput,
} from './SignUp.style';

interface FormData {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  comments: string;
}

const SignUp: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      surname: '',
      email: '',
      phoneNumber: '',
      gender: 'Select...',
      day: '',
      month: '',
      year: '',
      comments: '',
    },
  });
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if(data?.comments) {
    console.log(data); // Handle form submission logic here
    }

    // Move to the next step if there are no validation errors
    if (Object.keys(errors).length === 0) {
      setActiveStep((prevStep) => (prevStep !== null && prevStep !== 3 ? prevStep + 1 : prevStep || 1));
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StepHeader onClick={() => setActiveStep(1)}>Step 1: Your Details</StepHeader>
          {activeStep === 1 && (
            <StepContent>
              <InlineGroup>
                <FormGroup>
                  <Label>First Name</Label>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: 'This field is required.',
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Must contain only letters.',
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={onChange}
                        value={value}
                        error={errors.firstName?.message}
                      />
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Surname</Label>
                  <Controller
                    name="surname"
                    control={control}
                    rules={{ required: 'This field is required.' }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="text"
                        placeholder="Surname"
                        name="surname"
                        onChange={onChange}
                        value={value}
                        error={errors.surname?.message}
                      />
                    )}
                  />
                </FormGroup>
              </InlineGroup>
              <FormGroup>
                <Label>Email Address:</Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'This field is required.',
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                      message: 'Please enter a valid email address.',
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <DataEntry
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onChange={onChange}
                      value={value}
                      error={errors.email?.message}
                    />
                  )}
                />
              </FormGroup>
              <Button type="submit">
                Next
              </Button>
            </StepContent>
          )}

          <StepHeader>Step 2: More Comments</StepHeader>
          {activeStep === 2 && (
            <StepContent>
              <InlineGroup>
                <FormGroup>
                  <Label>Telephone Number</Label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      required: 'This field is required.',
                      pattern: {
                        value: /^[0-9]{11}$/,
                        message: 'Please enter a valid phone number.',
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="tel"
                        placeholder="Telephone Number"
                        name="phoneNumber"
                        onChange={onChange}
                        value={value}
                        error={errors.phoneNumber?.message}
                      />
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Gender</Label>
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'This field is required.' }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="select"
                        placeholder="Select Gender"
                        name="gender"
                        options={['Select...', 'Female', 'Male']}
                        onChange={onChange}
                        value={value}
                        error={errors.gender?.message}
                      />
                    )}
                  />
                </FormGroup>
              </InlineGroup>
              <Label>Date of birth</Label>
              <DateInput>
                <FormGroup>
                  <Controller
                    name="day"
                    control={control}
                    rules={{
                      required: 'This field is required.',
                      pattern: {
                        value: /^[0-9]{2}$/,
                        message: 'Please enter a valid day.',
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="text"
                        placeholder="Day"
                        name="day"
                        onChange={onChange}
                        value={value}
                        error={errors.day?.message}
                      />
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Controller
                    name="month"
                    control={control}
                    rules={{
                      required: 'This field is required.',
                      pattern: {
                        value: /^[0-9]{2}$/,
                        message: 'Please enter a valid month.',
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="text"
                        placeholder="Month"
                        name="month"
                        onChange={onChange}
                        value={value}
                        error={errors.month?.message}
                      />
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Controller
                    name="year"
                    control={control}
                    rules={{
                      required: 'This field is required.',
                      pattern: {
                        value: /^[0-9]{4}$/,
                        message: 'Please enter a valid year.',
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <DataEntry
                        type="text"
                        placeholder="Year"
                        name="year"
                        onChange={onChange}
                        value={value}
                        error={errors.year?.message}
                      />
                    )}
                  />
                </FormGroup>
              </DateInput>
              <Button type="submit">
                Next
              </Button>
            </StepContent>
          )}

          <StepHeader>Step 3: Final Comments</StepHeader>
          {activeStep === 3 && (
            <StepContent>
              <FormGroup>
                <Label>Comments</Label>
                <Controller
                  name="comments"
                  control={control}
                  rules={{ required: 'This field is required.' }}
                  render={({ field: { onChange, value } }) => (
                    <DataEntry
                      type="textarea"
                      placeholder="Comments"
                      name="comments"
                      onChange={onChange}
                      value={value}
                      error={errors.comments?.message}
                    />
                  )}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </StepContent>
          )}
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUp;
