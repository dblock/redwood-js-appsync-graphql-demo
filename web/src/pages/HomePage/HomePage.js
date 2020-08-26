import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import RestaurantsCell from 'src/components/RestaurantsCell'

const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zipCode)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} style={{fontSize: '2rem'}}>
        <TextField
          name="zipCode"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit>Go</Submit>
      </Form>
      {zip && <RestaurantsCell zip={zip} />}
    </div>
  )
}

export default HomePage