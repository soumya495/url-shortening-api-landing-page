import LinkEl from './LinkEl'

function LinkLists({ links }) {
  return (
    <div className='links-container'>
      {links.map((link) => (
        <LinkEl link={link} key={link.id} />
      ))}
    </div>
  )
}

export default LinkLists
