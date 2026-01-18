const SimpleBackground = () => {

    return (
        <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
            {/* Top Right Blob */}
            <div
                className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-3xl mix-blend-multiply opacity-70 animate-pulse"
                style={{ animationDuration: '8s' }}
            />

            {/* Bottom Left Blob */}
            <div
                className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-3xl mix-blend-multiply opacity-70 animate-pulse"
                style={{ animationDuration: '10s', animationDelay: '1s' }}
            />

            {/* Center Right Shape */}
            <svg
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[400px] h-[800px] opacity-[0.03] text-primary"
                viewBox="0 0 100 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 0 C 20 50 20 150 100 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>

            {/* Center Left Shape */}
            <svg
                className="absolute top-1/3 left-0 transform -translate-x-1/2 w-[600px] h-[600px] opacity-[0.03] text-accent"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>
    );
};

export default SimpleBackground;
