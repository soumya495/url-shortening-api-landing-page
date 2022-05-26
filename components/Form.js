import { CtaBtn } from './styled/CtaBtn'
import { StyledForm } from './styled/StyledForm'
import { useRef, useState } from 'react'
import validUrl from 'valid-url'

function Form() {
  const inpRef = useRef()
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = inpRef.current.value
    if (formData === '') {
      console.log('Empty!')
      setError('Empty')
      return
    }
    if (!validUrl.isUri(formData)) {
      console.log('Not a valid url')
      setError('Invalid')
      return
    }

    setError('')
  }

  const isError = error ? true : false

  return (
    <StyledForm onSubmit={handleSubmit} isError={isError}>
      <div>
        <input type='text' placeholder='Shorten a link here...' ref={inpRef} />
        {isError &&
          (error === 'Empty' ? (
            <p>Please add a link</p>
          ) : (
            <p>Please enter a valid link</p>
          ))}
      </div>
      <CtaBtn radius='0.45rem' type='submit'>
        Shorten It!
      </CtaBtn>
    </StyledForm>
  )
}

export default Form
