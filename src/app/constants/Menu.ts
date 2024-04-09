import { MenuTypes } from "../types/types";

// Header, page.tsx에서 사용될 메뉴 데이터
export const menu: MenuTypes = {
    Windows: {
        name: "Windows",
        icon: "/images/svg/windows.svg",
        src: "/images/svg/windows.svg",
        alt: "Windows",
        value: "windows",
        label: "Windows",
        width: 17,
        height: 17,
        priority: true,
    },
    Unix: {
        name: "Unix / Linux",
        icon: "/images/svg/unix.svg",
        src: "/images/svg/unix.svg",
        alt: "Unix / Linux",
        value: "unix",
        label: "Unix / Linux",
        width: 17,
        height: 17,
        priority: true,
    },
}