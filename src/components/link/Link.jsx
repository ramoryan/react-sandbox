import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.scss'

const Link = ({ href, children }) => (
  <a className={ styles.link } href={ href } >{ children }</a>
)

Link.propTypes = {
  children : PropTypes.string.isRequired,
  href     : PropTypes.string.isRequired
}

export default Link
