import React from 'react'
import ProgramIntro from './programs_components/ProgramIntro'
import ProgramCards from './programs_components/ProgramCards'
import ProgramsTable from './programs_components/ProgramsTable'
import ProgramConclusion from './programs_components/ProgramConclusion'
import ProgramBack from './programs_components/ProgramBack'

const Programs = () => {
  return (
    <>
    <ProgramBack/>
    <ProgramIntro/>
    <ProgramCards/>
    <ProgramsTable/>
    <ProgramConclusion/>
    </>
  )
}

export default Programs