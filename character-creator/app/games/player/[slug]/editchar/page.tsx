import { getCharacterData } from "@/app/actions/gameActions";
import CharacterInfo from "@/components/CharacterInfo";

export default async function editchar({ params } : { params: { slug: number } }) {

    const { characterData, characterError } = await getCharacterData({ gameId: params.slug });
    if (characterError) {
        console.error(characterError);
    }
    return (
        <CharacterInfo characterData={characterData} />
    )
}