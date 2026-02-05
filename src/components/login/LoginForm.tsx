import { Input } from "../Input"
import { Box, Stack } from "../Layout"

export const LoginForm = () => {
    return(
        <Box className="px-8 py-12 border border-gray-300 rounded-xl">
            <Stack>
                <div>Login</div>
                <div>Please enter your credentials</div>
                <Input type="text" placeholder="Username" id="username" className="mb-4"/>
            </Stack>
        </Box>
    )
}