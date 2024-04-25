export default function ProficienyBox({ skills, proficiencies, setProficiencies } : {skills: string[], proficiencies: any, setProficiencies: any}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked){
            setProficiencies([...proficiencies, e.target.name])
        }
    }

    const proficiencyChecks = skills.map((skill: string) => {
        return(
            <label key={skill}>
                <input type = "checkbox" name = {skill} onChange={handleChange}/>
                {skill}
            </label>
        )
    
    })

    return(
        <>
            {proficiencyChecks}
        </>
    )
}