import { motion, type MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Section({
  id,
  children,
  className = "",
  ...rest
}: PropsWithChildren<{ id: string; className?: string } & MotionProps>) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...rest}
    >
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </motion.section>
  );
}
