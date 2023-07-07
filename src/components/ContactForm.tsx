import TextField from '@mui/material/TextField';
import './ContactForm.scss';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Typography } from "@mui/material";
import { AppContext } from '../AppContext';
import { useContext } from 'react';

export const ContactForm = () => {
  const { data } = useContext(AppContext);
  const [state, handleSubmit] = useForm('xrgwgerv');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Typography>{data.contactForm.text}</Typography>
      <TextField id="email" label="Email" name="email" type="email" variant="outlined" />
      <ValidationError 
        
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <TextField
          id="message"
          label={data.contactForm.message}
          name="message"
          multiline
          maxRows={4}
        />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button variant="contained" type="submit" disabled={state.submitting}>
        {data.contactForm.submit}
      </Button>
    </form>
  )
}