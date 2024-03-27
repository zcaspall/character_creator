export default function newchar({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const createCharacter = async (formData: FormData) => {
    'use server'

    const name = formData.get('') as string
  }
}