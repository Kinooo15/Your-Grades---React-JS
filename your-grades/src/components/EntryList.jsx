const EntryList = ({ list }) => {
    const list_entries = list.map(list_entry => (
        <tr style={{ textAlign: 'center' }}>

            <td style={{ paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                {list_entry.course_number}
            </td>

            <td style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                {list_entry.course_name}
            </td>

            <td style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                {list_entry.units}
            </td>

            <td style={{paddingLeft: '4rem', paddingRight: '4rem', border: '0.25rem solid white',}}>
                {list_entry.grade}
            </td>

        </tr>

    ))

    return list_entries
}

export default EntryList