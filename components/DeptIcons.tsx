export const deptIconPaths = {
  bone: "M6 18 18 6M8.5 6.5a2 2 0 1 0-3-3 2 2 0 0 0 3 3zM17.5 17.5a2 2 0 1 0 3 3 2 2 0 0 0-3-3zM5.5 8.5a2 2 0 1 0-3 3 2 2 0 0 0 3-3zM18.5 15.5a2 2 0 1 0 3-3 2 2 0 0 0-3 3z",
  pulse: "M3 12h4l2 8 4-16 2 8h6",
  microscope: "M6 18h8M9 18v-4M6 14h6l1.5-6.5a2 2 0 0 0-1-2.2L9 3 6.5 5.3a2 2 0 0 0-1 2.2L6 14zM16 10h3M16 14h4",
  figure: "M12 7v6M8 10l4 3 4-3M9 21l3-8 3 8",
  hands: "M8 13V7a2 2 0 1 1 4 0v5M12 12V5a2 2 0 1 1 4 0v7M16 12V7a2 2 0 1 1 4 0v6c0 4-3 8-7 8h-2c-3 0-5-2-6-4l-2-4a1.6 1.6 0 0 1 2.7-1.6L8 14",
  bolt: "M13 2 4 14h6l-1 8 9-12h-6l1-8z",
  heart: "M20.8 8.6c0 4.8-8.8 10.9-8.8 10.9S3.2 13.4 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8ZM4 12h3l1.5-3L11 15l2-6 1.5 3H20",
  joint: "M7 4v6a5 5 0 0 0 5 5v5M7 4a3 3 0 0 1 3-3M7 10a3 3 0 0 0 3 3M17 20v-6a5 5 0 0 0-5-5",
  laser: "M4 20 15 9M15 9l5-5M15 9l3 3M12 12l3 3",
} as const;

export function DeptIcon({
  name,
  className = "w-5 h-5",
}: {
  name: keyof typeof deptIconPaths;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={deptIconPaths[name]} />
      {name === "laser" && <circle cx="19" cy="4" r="1.5" fill="currentColor" stroke="none" />}
    </svg>
  );
}
