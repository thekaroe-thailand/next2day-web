export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>Next Website</nav>
            {children}
        </section>
    );
}