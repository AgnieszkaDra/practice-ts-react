import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import { createJournalEntry } from '../../../../store/thunks/createJournalEntry';
import { FormField } from '../../../ui/FormField/FormField';
import { incrementTime, startTracking, stopTracking, updateCharCount } from '../../../../store/slices/trackingSlice';
import { useEffect } from 'react';

type FormValues = {
  content: string;
};

const JournalForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isTracking, secondsActive, charCount } = useSelector((state: RootState) => state.tracking);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    reset,
    getValues
  } = useForm<FormValues>({ defaultValues: { content: '' } });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isTracking) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTracking, dispatch]);

  const handleFocus = () => {
    dispatch(startTracking());
  };
  
  const handleBlur = () => {
    dispatch(stopTracking());
  };
  
  const handleChange = () => {
    const content = getValues('content');
    dispatch(updateCharCount(content.length));
  };
  
  const charsPerMinute = secondsActive > 0 ? Math.round((charCount / secondsActive) * 60) : 0;

  const onSubmit = async ({ content }: FormValues) => {
    try {
      await dispatch(
        createJournalEntry({
          content,
          date: new Date().toISOString(),
          getFormattedDate: function (): string {
            throw new Error('Function not implemented.');
          }
        })
      );
      reset();
    } catch (err) {
      console.error('Failed to create entry:', err);
    }
  };
  
    
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Content"
        nameInput="content"
        type="textarea"
        rows={5}
        errors={errors}
        touched={touchedFields}
        onFocus={handleFocus}
        {...register('content', {
          required: 'Content is required',
          minLength: {
            value: 5,
            message: 'Content must be at least 5 characters',
          },
          onBlur: handleBlur,
          onChange: handleChange
        })}
      />
      <p>
        {isTracking ? 'Piszesz...' : 'Textarea nieaktywne.'}
      </p>
      <p>
        Aktywność: {Math.floor(secondsActive )} sec, użyto {charCount} znaków, {charsPerMinute} znaków/min
      </p>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Dodaj wpis'}
      </button>
    </form>
  );
};

export default JournalForm;