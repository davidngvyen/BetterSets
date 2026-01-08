import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function AuthErrorPage(props: {
    searchParams: Promise<{ error?: string }>
}) {
    const searchParams = await props.searchParams
    const error = searchParams.error

    const errorMap: { [key: string]: string } = {
        Configuration: "There is a problem with the server configuration.",
        AccessDenied: "You do not have permission to sign in.",
        Verification: "The verification token has expired or has already been used.",
        Default: "An unexpected error occurred. Please try again later.",
    }

    const errorMessage = error && errorMap[error] ? errorMap[error] : errorMap.Default

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-destructive">Authentication Error</CardTitle>
                    <CardDescription>
                        We encountered an issue while trying to sign you in.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{errorMessage}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/login">Return to Login</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
