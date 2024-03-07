'use client'
import Link from "next/link"
import NewGameModal from "./NewGameModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, useDisclosure } from "@nextui-org/react";


export default function NewGameButton({ gameType } : { gameType: String }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const cardText = `${gameType} new game`
    let modal;
    
    modal = <NewGameModal isOpen={isOpen} onOpenChange={onOpenChange} gameType={gameType}/>
    return (
        <>
            <Button 
                onPress={onOpen}
                className="uppercase flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-opacity-25 hover:bg-opacity-100"
                >
                <FontAwesomeIcon icon={faPlus} className="text-3xl"/>
                {cardText}
            </Button>
            {modal}
        </>
    )
}