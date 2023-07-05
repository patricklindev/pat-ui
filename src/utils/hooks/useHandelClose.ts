import { useState, useEffect } from 'react';

const useHandelClose = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return isOpen;
}

export default useHandelClose;