import React from 'react'
import FullPitchController from '../components/FullPitch/FullPitchController'
import { pageStyles } from './styles/pageStyles'

const VersusPage: React.FC = () => {
    const pageClasses = pageStyles()

    return (
        <div data-testid='VersusPage' style={pageClasses.pageContainer} className='pageContainer'>
            <FullPitchController />
        </div>
    )
}

export default VersusPage