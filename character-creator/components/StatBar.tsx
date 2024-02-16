import Link from 'next/link'

function StatBox(){
    return(
        <h1>
        const { data, error } = await supabase
            .from('countries')
            .select('name')
        </h1>
    );
}

export default function StatScores(){
    return (
        <StatBox />
    );
}