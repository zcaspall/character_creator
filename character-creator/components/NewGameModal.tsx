'use client'
import { Input } from "@nextui-org/react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import CreateGame from "@/app/actions/gameActions";
import { useEffect, useState } from "react";
import JoinGame from "@/app/games/join/page";


export default function NewGameModal ({ isOpen, onOpenChange, gameType } : { isOpen: boolean, onOpenChange: (open: boolean) => void, gameType: String }) {
    const [modalTitle, setModalTitle] = useState<String>();
    const [modalInputLabel, setModalInputLabel] = useState<String>();
    const [modalFunction, setModalFunction] = useState<() => void>();

    const createGame = () => {
        console.log("HELP")
        const gameName = document.getElementById('modalInput') as HTMLInputElement;
        CreateGame({gameName: gameName.value});
    }

    const joinGame = () => {
        const inviteCode = document.getElementById('modalInput') as HTMLInputElement;
        
    }

    useEffect(() => {
        if (gameType === 'join') {
            setModalTitle('Join Game');
            setModalInputLabel('Invite Code');
            setModalFunction(() => joinGame)
        } else if (gameType === 'create') {
            setModalTitle('New Game');
            setModalInputLabel('Game Name');
            setModalFunction(() => createGame);
        } else {
            throw new Error("Invalid Game Type")
        }
    }, [])

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="color text-black flex flex-col justify-center">
                <ModalContent className="h-3/6">
                    {(onClose: () => void) => ( // Fix: Add the return type 'ReactNode' to the arrow function
                        <>
                            <ModalHeader className="text-center flex justify-center">{modalTitle}</ModalHeader>
                            <ModalBody className="flex justify-center ">
                                <Input id='modalInput' autoFocus label={modalInputLabel} variant="bordered" className="mb-20"/>
                            </ModalBody>
                            <ModalFooter className="justify-center">
                                <Button onPress={modalFunction} className="bg-green-500">Create Game</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}