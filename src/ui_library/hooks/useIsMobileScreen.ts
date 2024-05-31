import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const useIsMobileScreen = (): boolean => {
    // to prevent hydration error
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    const isMobile = useMediaQuery({ maxWidth: '600px' })
    return isClient && isMobile
}

export default useIsMobileScreen