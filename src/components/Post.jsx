import PropTypes from 'prop-types'

export function Post({ title, contents, author, tags }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {author && (
        <em>
          <br />
          Written by <strong>{author}</strong>
        </em>
      )}
      {tags && (
        <div>
          <br />
          Tags:
          <ul>
            {tags.map((tag) => (
              <li key={tag._id}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array,
}
