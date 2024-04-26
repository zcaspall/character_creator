import AuthButton from '../components/AuthButton'
import GameContainer from '@/components/GameContainer'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {supabase && <AuthButton user={user} />}
        </div>
      </nav>
      <div>
        {user ? <GameContainer /> : <p>Login to see your games.</p>}
      </div>
    </div>
  )
}
