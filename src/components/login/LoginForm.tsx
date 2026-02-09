import { Button } from "../Button"
import { Input } from "../Input"
import { Text } from "../Text"
import { Box, Stack } from "../Layout"

export const LoginForm = () => {
    return(
        <Box className="px-8 py-12 border border-gray-300 rounded-xl">
            <Stack>
                <Text as="h2" size="3xl" weight="bold" align="center" className="mb-2">Login</Text>
                <Text as="span" emphasis="low" size="sm" align="center" className="mb-8">Please enter your credentials</Text>
                <Text as="label" htmlFor="username" size="sm" weight="medium" className="mb-1.5">Username</Text>
                <Input type="text" placeholder="Username" id="username" className="mb-4"/>
                <Text as="label" htmlFor="password" size="sm" weight="medium" className="mb-1.5">Password</Text>
                <Input type="password" placeholder="Password" id="password" className="mb-4"/>
                <Button variant="solid">Sign Up</Button>
            </Stack>
        </Box>
    )
}