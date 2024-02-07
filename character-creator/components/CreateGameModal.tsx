import { Input } from "@nextui-org/react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import CreateGame from "@/app/actions/gameActions";


export default function CreateGameForm ({ isOpen, onOpenChange } : { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
    const createGame = () => {
        const gameName = document.getElementById('gameName') as HTMLInputElement;
        CreateGame({gameName: gameName.value});
    }

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="color text-black flex flex-col justify-center">
                <ModalContent className="h-3/6">
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-center flex justify-center">New Game</ModalHeader>
                            <ModalBody className="flex justify-center ">
                                <Input id='gameName' autoFocus label="Game Name" variant="bordered" className="mb-20"/>
                            </ModalBody>
                            <ModalFooter className="justify-center">
                                <Button onPress={() => { onClose(); createGame(); }} className="bg-green-500">Create Game</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}