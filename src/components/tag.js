import * as React from "react"
import PropTypes from "prop-types"

const Tag = ({ title }) => {
  return (
    <span className="tag">{title}</span>
  )
}

Tag.propTypes = {
  title: PropTypes.string,
}

export default Tag
