import "../about.css"

export default function AboutLayout({
    children,}: {
        children: React.ReactNode;
}) {
    return <html>
        <body>
            <header> This is About header</header>
            {children}
        </body>
    </html>
}