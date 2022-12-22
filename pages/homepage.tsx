import Homepage from '../components/Homepage/Homepage'

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const homepage = () => {
    return (
        <ProtectedRoute>
            <Homepage />
        </ProtectedRoute>
    )
}

export default homepage
