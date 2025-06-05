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
    ),
    userAvatar: (props: SvgIconProps) => (
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
            className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
            {...props}
        >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    add: (props: SvgIconProps) => (
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
            className="lucide lucide-circle-plus-icon lucide-circle-plus"
            {...props}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
        </svg>
    ),
    smile: (props: SvgIconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-smile-icon lucide-smile"
            {...props}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
    ),
    instagram: (props: SvgIconProps) => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF0069"
            {...props}
        >
            <path
                d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
        </svg>
    ),
    messenger: (props: SvgIconProps) => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill="#fff"
        >

            <path
                d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"
                fill="#0866FF" />
        </svg>
    ),
    telegram: (props: SvgIconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 240"
            {...props}>
            <circle
                cx="120"
                cy="120"
                r="120"
                fill="#37AEE2" />
            <path
                d="M48 118.7c35.6-15.6 118.5-49.5 129.2-54.2 2.2-0.9 7.2-2.2 10.4 0.1 2.5 1.8 2.4 6 2.2 8.2-2 22.1-10.5 75.5-14.8 100-1.8 10.5-5.5 14-9 14.3-7.6 0.7-13.4-5.1-20.7-10.1-11.5-7.9-18.1-12.9-29.1-20.6-12.9-9-4.6-14 2.8-22.1 1.9-2 35-32.1 35.6-34.8 0.1-0.4 0.1-1.9-0.9-2.7-1-0.9-2.4-0.6-3.5-0.3-1.5 0.4-25.5 16.3-71.6 45.8-6.8 4.2-12.9 6.2-18.3 6-5.8-0.3-17-3.3-25.4-6.1-10.2-3.5-18.3-5.3-17.6-11.6z"
                fill="#fff"
            />
        </svg>
    )
};
