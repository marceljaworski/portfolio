import TextField from '@mui/material/TextField';
import './ContactForm.scss';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Typography } from "@mui/material";
import { AppContext } from '../AppContext';
import { useContext, useState } from 'react';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

export const ContactForm = () => {
  const { data } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
		setShowForm(!showForm)
	}
  const [state, handleSubmit] = useForm('xrgwgerv');
  if (state.succeeded) {
    return <p>{data.contactForm.thanks}</p>;
  }
  return (
    <>
      <EmailTwoToneIcon fontSize='medium' className='icon' color="success" onClick={handleShowForm} />
      {showForm && <form className="form" onSubmit={handleSubmit}>
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
        <Button variant="outlined" color='error' onClick={handleShowForm}>
          {data.contactForm.close}
        </Button>
      </form>}
    </>
  )
}