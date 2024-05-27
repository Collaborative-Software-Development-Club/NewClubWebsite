const TagList = ({tags}: {tags: string[]}) => {
  return (
    <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  )
}

export default TagList