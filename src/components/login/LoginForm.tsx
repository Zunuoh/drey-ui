import { Button } from "../Button"
import { Input } from "../Input"
import { Text } from "../Text"
import { Box, Stack } from "../Layout"

export const LoginForm = () => {
    return(
        <Box className="px-8 py-12 border border-gray-300 rounded-xl">
            <Stack>
                <Text size="3xl" weight="bold" align="center">Login</Text>
                <Text className="text-sm mb-4">Please enter your credentials</Text>
                <Input type="text" placeholder="Username" id="username" className="mb-4"/>
                <Input type="password" placeholder="Password" id="password" className="mb-4"/>
                <Input type="password" placeholder="Confirm Password" id="confirmPassword" className="mb-4"/>
                <Button variant="solid">Sign Up</Button>
            </Stack>
        </Box>
    )
}