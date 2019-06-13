import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../utils'
import { useTheme } from '../../theme'

function AppHeader({ heading, action }) {
  const theme = useTheme()
  return (
    <div
      css={`
        padding-top: ${3 * GU}px;
        padding-bottom: ${3 * GU}px;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${5 * GU}px;
        `}
      >
        <div>
          {typeof heading === 'string' ? (
            <h1
              css={`
                font-size: 26px;
                color: ${theme.content};
              `}
            >
              {heading}
            </h1>
          ) : (
            heading
          )}
        </div>
        <div>{action}</div>
      </div>
    </div>
  )
}

AppHeader.propTypes = {
  heading: PropTypes.node,
  action: PropTypes.node,
}

export default AppHeader
