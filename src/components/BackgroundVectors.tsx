import { motion } from "framer-motion";

const BackgroundVectors = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Top Left Blob - Teal */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/5 rounded-full blur-3xl"
            />

            {/* Center Right Blob - Orange */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 20, -20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent/5 rounded-full blur-3xl"
            />

            {/* Bottom Left Blob - Teal/Secondary */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute -bottom-[10%] -left-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-secondary/30 rounded-full blur-3xl mix-blend-multiply"
            />

            {/* Decorative SVG Wave - Top Right */}
            <svg
                className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] opacity-[0.03] text-primary"
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M25.5,-23.8C31.5,-16.4,33.9,-6.2,32.7,3.1C31.5,12.4,26.7,20.8,19,26.5C11.3,32.2,0.8,35.2,-8.4,32.8C-17.6,30.3,-25.5,22.4,-29.3,13.2C-33.1,4,-32.8,-6.5,-28.2,-15.1C-23.6,-23.7,-14.7,-30.3,-5.1,-30.8C4.5,-31.4,19.5,-31.2,25.5,-23.8Z" transform="translate(50 50)" />
            </svg>
        </div>
    );
};

export default BackgroundVectors;
