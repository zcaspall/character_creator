export default function CharacterCard({player} : {player: any}){
    return (
        <div className='flex flex-col w-80 h-80 py-10 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-card-background-hover 
                        bg-card-background rounded-xl text-center justify-center items-center text-card-foreground uppercase'>
            <p>{player.Users.email}</p>
            {player.Characters ? (
                <div className="flex justify-center w-full">
                    
                </div>
            ) : (
            <p>No character</p>
            )}
        </div>
    )
}