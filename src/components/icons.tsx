type SvgIconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
    menu: (props: SvgIconProps) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
    ),
    menuMotion: (props: SvgIconProps) => (
        <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
            <path
                fill="currentColor"
                d="M12 5a1 1 0 100 2h8a1 1 0 100-2h-8zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM3 18a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z"
            />
        </svg>
    ),
    chat: (props: SvgIconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square-text-icon lucide-message-square-text"
            {...props}
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M13 8H7" />
            <path d="M17 12H7" />
        </svg>
    ),
    panelLeft: (props: SvgIconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
            className="lucide lucide-panel-left-icon lucide-panel-left"
        >
            <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path d="M9 3v18" />
        </svg>
    ),
    arrowDown: (props: SvgIconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
            className="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
            <path
                d="m6 9 6 6 6-6"
            />
        </svg>
    ),
    arrowUp: (props: SvgIconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
            className="lucide lucide-chevron-up-icon lucide-chevron-up"
        >
            <path
                d="m18 15-6-6-6 6"
            />
        </svg>
    )

};