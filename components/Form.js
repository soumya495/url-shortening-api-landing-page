import { CtaBtn } from './styled/CtaBtn'
import { StyledForm } from './styled/StyledForm'
import { useRef, useState } from 'react'
import validUrl from 'valid-url'
import { FaSpinner } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

function Form({ setAllLinks }) {
  const inpRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // function to set data in localStorage
  const setToLocalStorage = (data) => {
    if (typeof window !== undefined) {
      console.log(data)
      const { full_short_link, original_link } = data
      const localData = JSON.parse(localStorage.getItem('localLinks'))
      // no data in localStorage
      if (!localData || localData.length === 0) {
        const newLocalData = []
        newLocalData.push({
          full_short_link,
          original_link,
          id: uuidv4(),
        })
        setAllLinks(newLocalData)
        localStorage.setItem('localLinks', JSON.stringify(newLocalData))
      }
      // same data already exists in localStorage
      const dataExists = localData.filter(
        (loc) => loc.original_link === original_link
      )
      if (dataExists && dataExists.length === 1) return
      // appending new data
      localData.unshift({
        full_short_link,
        original_link,
        id: uuidv4(),
      })
      setAllLinks(localData)
      localStorage.setItem('localLinks', JSON.stringify(localData))
    }
  }

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = inpRef.current.value
    // empty form submission
    if (formData === '') {
      setError('Empty')
      return
    }
    // invalid url check
    if (!validUrl.isUri(formData)) {
      setError('Invalid')
      return
    }

    try {
      setLoading(true)
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${formData}`
      )
      const data = await res.json()
      setLoading(false)
      setToLocalStorage(data.result)
    } catch {
      console.log(error)
    }

    inpRef.current.value = ''
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
      <CtaBtn
        radius='0.45rem'
        type='submit'
        loading={loading ? 'true' : 'false'}
        disabled={loading ? true : false}
      >
        {loading ? (
          <>
            <FaSpinner fontSize='1rem' className='spinner' />
            Shortening
          </>
        ) : (
          'Shorten It!'
        )}
      </CtaBtn>
    </StyledForm>
  )
}

export default Form
