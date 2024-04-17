'use client'
import { Input } from "@nextui-org/react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { CreateGame, JoinGame } from "@/app/actions/gameActions";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";


export default function NewGameModal ({ isOpen, onOpenChange, gameType } : { isOpen: boolean, onOpenChange: (open: boolean) => void, gameType: String }) {
    const [modalTitle, setModalTitle] = useState<String>();
    const [modalInputLabel, setModalInputLabel] = useState<String>();
    const [modalFunction, setModalFunction] = useState<() => void>();

    const createGame = () => {
        const gameName = document.getElementById('modalInput') as HTMLInputElement;
        CreateGame({gameName: gameName.value});
    }

    const joinGame = () => {
        const inviteCode = document.getElementById('modalInput') as HTMLInputElement;
        JoinGame({inviteCode: inviteCode.value});
    }

    useEffect(() => {
        if (gameType === 'join') {
            setModalTitle('Join Game');
            setModalInputLabel('Invite Code');
            setModalFunction(() => joinGame)
        } else if (gameType === 'create') {
            setModalTitle('Create Game');
            setModalInputLabel('Game Name');
            setModalFunction(() => createGame);
        } else {
            throw new Error("Invalid Game Type")
        }
    }, [])

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="color text-mod-foreground bg-mod-background flex flex-col justify-center">
                <ModalContent className="h-3/6">
                    <>
                        <ModalHeader className="text-center flex justify-center">{modalTitle}</ModalHeader>
                        <ModalBody className="flex justify-center ">
                            <Input id='modalInput' autoFocus label={modalInputLabel} variant="bordered" className="bg-input-background text-input-foreground rounded-xl outline-input-border border-input-border"/>
                        </ModalBody>
                        <ModalFooter className="justify-center">
                            <Button onPress={modalFunction} className="bg-btn-background text-btn-foreground hover:bg-btn-background-hover">{modalTitle}</Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}