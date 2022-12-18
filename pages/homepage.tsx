import Homepage from '../components/Homepage/Homepage'

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const homepage = () => {
    return (
        <div>
            <ProtectedRoute>
                <Homepage />
            </ProtectedRoute>
        </div>
    )
}

export default homepage
