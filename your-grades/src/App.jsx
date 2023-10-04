import { useEffect, useState } from 'react'
import './App.css'
import CourseForm from './components/Form'
import GradesTable from './components/DataTable'
import SearchBar from './components/Filter'

function App() {
    const [gradeEntries, setGradeEntries] = useState([])

    const [searchQuery, setSearchQuery] = useState('')

    const [searchOption, setSearchOption] = useState('course_number')
    
    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target

        let submission_data = new FormData(form)

        setGradeEntries([
            ...gradeEntries,
            {
                course_number: submission_data.get('course_number'),
                course_name: submission_data.get('course_name'),
                units: submission_data.get('course_units'),
                grade: submission_data.get('grades'),
            },
        ])
    }

    const handleSearchQuery = e => {
        const query = e.target.value
        setSearchQuery(query)
    }

    const handleSearchOption = e => {
        const query = e.target.value
        setSearchOption(query)
    }

    return (

        <div id='app' style={{ display: 'flex', gap: '4rem', justifyContent: 'center', alignItems: 'start', height: '100vh', marginTop: '4rem',}}>

            <CourseForm onsubmit={handleSubmit} />

            <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem',}}>

                <SearchBar query={searchQuery} ontype={handleSearchQuery} onchange={handleSearchOption}/>

                <GradesTable grades={gradeEntries} query={searchQuery} option={searchOption}/>

              
            </div>

        </div>

    )

}

export default App