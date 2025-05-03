import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export type JournalFormData = {
  message: string;
};

export const useJournalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<JournalFormData>();

  const onSubmit = (data: JournalFormData) => {
    console.log(data);
    toast.success('Message submitted!');
  };

  return {
    register,
    handleSubmit,
    errors,
    touchedFields,
    isSubmitting,
    onSubmit,
  };
};