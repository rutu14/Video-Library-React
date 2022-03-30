import { useState } from "react";

const useModalOperations = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOperation = () => setIsOpen(!isOpen);

    const openOperation = () => setIsOpen(true);

    const closeOperation = () => setIsOpen(false);

    return { isOpen, toggleOperation, openOperation, closeOperation };

}

export { useModalOperations }