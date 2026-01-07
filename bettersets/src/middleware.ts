export { auth as middleware } from '@/lib/auth'

export const config = {
    matcher: ['/dashboard/:path*', '/workouts/:path*', '/profile/:path*'],
}
