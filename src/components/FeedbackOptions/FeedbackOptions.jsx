export const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    <div>
        {options.map(option => {return (
            <button key={option} type="button" onClick={() => {onLeaveFeedback(option)}}>{option}</button>
        )})}
    </div>
  );
};