'use client'
import Link from "next/link"
import CreateGameModal from "./CreateGameModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, useDisclosure } from "@nextui-org/react";


export default function NewGameButton({ gameType } : { gameType: String }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const cardText = `${gameType} new game`
    let modal;
    if (gameType === 'create') {
        modal = <CreateGameModal isOpen={isOpen} onOpenChange={onOpenChange} />
    } 
    return (
        <>
            <Button 
                onPress={onOpen}
                className="uppercase flex flex-col w-40 h-60 gap-10 my-10 mx-5 bg-opacity-50 hover:bg-opacity-100"
                >
                <FontAwesomeIcon icon={faPlus} className="text-3xl"/>
                {cardText}
            </Button>
            {modal}
        </>
    )
}