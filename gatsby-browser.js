/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "react-responsive-carousel/lib/styles/carousel.min.css";

import VeeRa from './src/root-wrapper'
import React from 'react'

const Wrapper = ({ element }) => {
  return <VeeRa element={element} />
}

export const wrapPageElement = Wrapper
