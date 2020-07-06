import React from 'react'
import { create } from 'react-test-renderer'
import Header from './header'

describe('Header', () => {
  it('renders correctly', () => {
    const header = create(<Header siteTitle="Default Starter" />).root
    expect(header.findByType('header')).not.toBeNull()
  })
})
