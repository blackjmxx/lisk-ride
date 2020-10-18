import React from 'react'
import PropTypes from 'prop-types'
import {QRCode} from 'react-qr-svg'

const BarCodeLoyalty = ({ token }) => (
  <QRCode
      bgColor='#FFFFFF'
      fgColor='#000000'
      level='L'
      style={{ width: '70%', marginBottom: '10px' }}
      value={token}
    />
)

BarCodeLoyalty.propTypes = {
  token: PropTypes.string.isRequired
}

export default BarCodeLoyalty
