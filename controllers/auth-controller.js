const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        res.status(200).json({
            'msg': 'success',
        });        
    } catch (error) {
        res.status(500).json({
            'msg': 'failed',
        });
    }
}

const signupController = (req, res) => {
    res.status(200).json({
        'msg': 'Hello, World!' + '/signup',
    });
}

const forgotPasswordController = (req, res) => {
    res.status(200).json({
        'msg': 'Hello, World!' + '/forgot-password',
    });
}

module.exports = { loginController, signupController, forgotPasswordController };
