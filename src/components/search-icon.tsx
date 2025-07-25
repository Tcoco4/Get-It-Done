import { JSX, SVGProps } from "react";

export default function SearchIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#474747" fontFamily="sans-serif" fontWeight="400">
        <path
          d="M6.508 1C3.48 1 1.002 3.474 1.002 6.5S3.48 12 6.508 12s5.505-2.474 5.505-5.5S9.536 1 6.508 1zm0 2a3.488 3.488 0 013.505 3.5c0 1.944-1.557 3.5-3.505 3.5a3.488 3.488 0 01-3.506-3.5c0-1.944 1.557-3.5 3.506-3.5z"
          overflow="visible"
        />
        <path
          d="M10 8.99a1 1 0 00-.696 1.717l4.004 4a1 1 0 101.414-1.414l-4.003-4a1 1 0 00-.72-.303z"
          overflow="visible"
        />
      </g>
    </svg>
  );
}
