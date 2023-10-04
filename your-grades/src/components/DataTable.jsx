import { useEffect, useState } from 'react'
import EntryList from './EntryList'

const DataTable = ({ grades, query, option }) => {
    const [totalQPI, setTotalQPI] = useState(0.0)

    useEffect(() => {
        const sumQPI = grades.reduce(
            (total, grade_entry) => total + parseFloat(grade_entry.grade),
            0.0
        )
        setTotalQPI(grades.length > 0 ? sumQPI / grades.length : 0)
    })

    const filtered_entries = grades.filter(grade =>
        option === 'course_number'
            ? grade.course_number.toLowerCase().includes(query.toLowerCase())
            : grade.course_name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <table style={{border: '0.25rem solid white', borderCollapse: 'collapse',}}>

            <tr>

                <th style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                    Course No.
                </th>

                <th style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                    Course Name
                </th>

                <th style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                    Units
                </th>

                <th style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                    Grade
                </th>

            </tr>

            <EntryList list={filtered_entries} />

            <tr>

                <th colSpan='2'></th>

                <th align='center'>Total QPI:</th>

                <td align='center'>{totalQPI}</td>

            </tr>

        </table>

    )

}

export default DataTable