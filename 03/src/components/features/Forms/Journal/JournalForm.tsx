
// import { useJournalForm } from '../../../../hooks/useJournalForm';
// import { FormField } from '../../../ui/FormField/FormField';

// const JournalForm = () => {
//   const {
//     register,
//     handleSubmit,
//     errors,
//     touchedFields,
//     isSubmitting,
//     onSubmit,
//   } = useJournalForm();

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <FormField
//         label="Message"
//         type="textarea"
//         nameInput="message"
//         errors={errors}
//         touched={touchedFields}
//         rows={5}
//         {...register('message', {
//           required: 'Message is required',
//           minLength: { value: 5, message: 'Message must be at least 5 characters' },
//         })}
//       />
//     <button type="submit">Dodaj wpis</button>
     
//     </form>
//   );
// };

// export default JournalForm;

// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { FormField } from '../../../ui/FormField/FormField';

// import { createComment } from '../../../../store/thunks/createComment'; // adjust the path as needed

// const CommentForm = ({ postId, userId }) => {
// 	const dispatch = useDispatch();

// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, touchedFields, isSubmitting },
// 		reset,
// 	} = useForm({
// 		defaultValues: { comment: '' },
// 	});

// 	const onSubmit = async ({ comment }) => {
// 		await dispatch(createComment({ postId, commentData: { comment, userId } }));
// 		reset(); // clear form after submission
// 	};

// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<FormField
// 				label="Comment"
// 				nameInput="comment"
// 				type="textarea"
// 				rows={4}
// 				errors={errors}
// 				touched={touchedFields}
// 				{...register('comment', {
// 					required: 'Comment is required',
// 					minLength: {
// 						value: 3,
// 						message: 'Comment must be at least 3 characters',
// 					},
// 				})}
// 			/>
// 			<Button $small type="submit" $disabled={isSubmitting}>
// 				{isSubmitting ? 'Submitting...' : 'Submit'}
// 			</Button>
// 		</form>
// 	);
// };

// CommentForm.propTypes = {
// 	postId: PropTypes.string.isRequired,
// 	userId: PropTypes.string.isRequired,
// };

// export default CommentForm;

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createJournalEntry } from '../../../../store/thunks/createJournalEntry';
import { FormField } from '../../../ui/FormField/FormField';


const JournalForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    reset,
  } = useForm({ defaultValues: { content: '' } });

  const onSubmit = async () => {
    //await dispatch(createJournalEntry({ content, date: new Date().toISOString() }));
    reset();
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
        {...register('content', {
          required: 'Content is required',
          minLength: { value: 5, message: 'Content must be at least 5 characters' },
        })}
      />
      <button type="submit">Dodaj wpis</button>
    </form>
  );
};

export default JournalForm;