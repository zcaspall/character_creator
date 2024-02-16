export default function DndChar({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const createCharacter = async (formData: FormData) => {
    'use server'

    const name = formData.get('') as string
  }
}