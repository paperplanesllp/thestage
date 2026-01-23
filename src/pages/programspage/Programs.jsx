import React from 'react'
import ProgramIntro from './programs_components/ProgramIntro'
import ProgramCards from './programs_components/ProgramCards'
import ProgramsTable from './programs_components/ProgramsTable'
import ProgramConclusion from './programs_components/ProgramConclusion'

const Programs = () => {
  return (
    <>
    <ProgramIntro/>
    <ProgramCards/>
    <ProgramsTable/>
    <ProgramConclusion/>
    </>
  )
}

export default Programs